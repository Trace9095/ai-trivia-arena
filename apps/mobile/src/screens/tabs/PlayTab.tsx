import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Modal,
  FlatList,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, CATEGORIES, FREE_CATEGORIES } from '../../config'
import { api } from '../../lib/api'
import { AuthContext } from '../../context/AuthContext'
import { useRevenueCat } from '../../lib/revenuecat'
import type { PlayTabProps } from '../../navigation/types'
import type { DailyChallenge } from '../../types/api'

type Difficulty = 'easy' | 'medium' | 'hard'

export default function PlayTab({ navigation }: PlayTabProps) {
  const { user, isGuest } = useContext(AuthContext)
  const { isPro } = useRevenueCat()
  const [daily, setDaily] = useState<DailyChallenge | null>(null)
  const [loadingDaily, setLoadingDaily] = useState(true)
  const [soloModal, setSoloModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [difficulty, setDifficulty] = useState<Difficulty>('medium')

  useEffect(() => {
    api.games
      .getDaily()
      .then(setDaily)
      .catch(console.error)
      .finally(() => setLoadingDaily(false))
  }, [])

  const startSolo = () => {
    if (!selectedCategory) return
    setSoloModal(false)
    if (isGuest) {
      navigation.navigate('Login')
      return
    }
    navigation.navigate('SoloGame', { category: selectedCategory, difficulty })
  }

  const handleCategoryPress = (catId: string) => {
    const isFree = FREE_CATEGORIES.includes(catId)
    if (!isPro && !isFree) {
      navigation.navigate('Paywall')
      return
    }
    setSelectedCategory(catId)
  }

  const greeting = user?.name ? `Hey, ${user.name.split(' ')[0]}!` : 'Ready to play?'

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>{greeting}</Text>
          <Text style={styles.subGreeting}>Pick a challenge</Text>
        </View>

        {/* Daily Challenge Card */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Daily Challenge</Text>
          {loadingDaily ? (
            <View style={styles.dailyCard}>
              <ActivityIndicator color={COLORS.blue} />
            </View>
          ) : daily ? (
            <TouchableOpacity
              style={[styles.dailyCard, styles.dailyCardActive]}
              onPress={() => {
                if (isGuest) {
                  navigation.navigate('Login')
                  return
                }
                navigation.navigate('SoloGame', { category: daily.category, difficulty: 'medium' })
              }}
              activeOpacity={0.85}
            >
              <View style={styles.dailyBadge}>
                <Text style={styles.dailyBadgeText}>TODAY</Text>
              </View>
              <Text style={styles.dailyEmoji}>📅</Text>
              <Text style={styles.dailyTitle}>Daily Trivia</Text>
              <Text style={styles.dailyMeta}>
                {daily.questions?.length ?? 10} questions · Mixed
              </Text>
              <View style={styles.playBtn}>
                <Text style={styles.playBtnText}>Play Now →</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.dailyCard}>
              <Text style={styles.muted}>No daily challenge today</Text>
            </View>
          )}
        </View>

        {/* Multiplayer */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Multiplayer</Text>
          <TouchableOpacity
            style={styles.joinCard}
            onPress={() => navigation.navigate('Join')}
            activeOpacity={0.85}
          >
            <Text style={styles.joinIcon}>🎮</Text>
            <View style={styles.joinText}>
              <Text style={styles.joinTitle}>Join a Game</Text>
              <Text style={styles.joinSub}>Enter code or scan QR</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Solo Play */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Solo Play</Text>
          <View style={styles.categoryGrid}>
            {CATEGORIES.map((cat) => {
              const isFree = FREE_CATEGORIES.includes(cat.id)
              const locked = !isPro && !isFree
              return (
                <TouchableOpacity
                  key={cat.id}
                  style={[
                    styles.categoryCard,
                    selectedCategory === cat.id && styles.categoryCardSelected,
                    locked && styles.categoryCardLocked,
                  ]}
                  onPress={() => handleCategoryPress(cat.id)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.categoryIcon}>{cat.icon}</Text>
                  <Text style={styles.categoryName} numberOfLines={2}>
                    {cat.name}
                  </Text>
                  {locked && <Text style={styles.lockIcon}>🔒</Text>}
                </TouchableOpacity>
              )
            })}
          </View>

          {selectedCategory && (
            <View style={styles.difficultyRow}>
              {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
                <TouchableOpacity
                  key={d}
                  style={[styles.diffBtn, difficulty === d && styles.diffBtnActive]}
                  onPress={() => setDifficulty(d)}
                >
                  <Text style={[styles.diffText, difficulty === d && styles.diffTextActive]}>
                    {d.charAt(0).toUpperCase() + d.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {selectedCategory && (
            <TouchableOpacity style={styles.startBtn} onPress={startSolo} activeOpacity={0.85}>
              <Text style={styles.startBtnText}>
                Start · {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {!isPro && (
          <TouchableOpacity
            style={styles.proBanner}
            onPress={() => navigation.navigate('Paywall')}
            activeOpacity={0.85}
          >
            <Text style={styles.proIcon}>⚡</Text>
            <View>
              <Text style={styles.proTitle}>Unlock All Categories</Text>
              <Text style={styles.proSub}>Go Pro for unlimited access</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { padding: 20, gap: 24, paddingBottom: 40 },
  header: { gap: 4 },
  greeting: { fontSize: 28, fontWeight: '800', color: COLORS.white },
  subGreeting: { fontSize: 15, color: COLORS.muted },
  section: { gap: 12 },
  sectionLabel: { fontSize: 13, fontWeight: '700', color: COLORS.muted, letterSpacing: 0.8, textTransform: 'uppercase' },
  dailyCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    minHeight: 140,
    justifyContent: 'center',
  },
  dailyCardActive: { borderColor: COLORS.blue },
  dailyBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: COLORS.blue,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  dailyBadgeText: { fontSize: 10, fontWeight: '800', color: COLORS.white, letterSpacing: 0.5 },
  dailyEmoji: { fontSize: 36 },
  dailyTitle: { fontSize: 18, fontWeight: '700', color: COLORS.white },
  dailyMeta: { fontSize: 13, color: COLORS.muted },
  playBtn: {
    marginTop: 4,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: 44,
    justifyContent: 'center',
  },
  playBtnText: { fontSize: 15, fontWeight: '700', color: COLORS.white },
  joinCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    gap: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    minHeight: 72,
  },
  joinIcon: { fontSize: 28 },
  joinText: { flex: 1, gap: 2 },
  joinTitle: { fontSize: 16, fontWeight: '700', color: COLORS.white },
  joinSub: { fontSize: 13, color: COLORS.muted },
  arrow: { fontSize: 22, color: COLORS.dim },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryCard: {
    width: '30%',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    minHeight: 80,
    justifyContent: 'center',
    position: 'relative',
  },
  categoryCardSelected: { borderColor: COLORS.blue, backgroundColor: COLORS.cardHover },
  categoryCardLocked: { opacity: 0.6 },
  categoryIcon: { fontSize: 24 },
  categoryName: { fontSize: 11, color: COLORS.muted, textAlign: 'center', lineHeight: 14 },
  lockIcon: { position: 'absolute', top: 6, right: 6, fontSize: 10 },
  difficultyRow: { flexDirection: 'row', gap: 8 },
  diffBtn: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    minHeight: 44,
  },
  diffBtnActive: { borderColor: COLORS.blue, backgroundColor: COLORS.cardHover },
  diffText: { fontSize: 14, fontWeight: '600', color: COLORS.muted },
  diffTextActive: { color: COLORS.blue },
  startBtn: {
    backgroundColor: COLORS.blue,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    minHeight: 56,
  },
  startBtnText: { fontSize: 16, fontWeight: '700', color: COLORS.white },
  proBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A0E35',
    borderRadius: 14,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: COLORS.purple,
    minHeight: 72,
  },
  proIcon: { fontSize: 28 },
  proTitle: { fontSize: 15, fontWeight: '700', color: COLORS.white },
  proSub: { fontSize: 12, color: COLORS.muted },
  muted: { color: COLORS.muted, fontSize: 14 },
})
