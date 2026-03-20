import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Share,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Haptics from 'expo-haptics'
import { COLORS } from '../../config'
import { useGameState } from '../../hooks/useGameState'
import type { FinalResultsScreenProps } from '../../navigation/types'

export default function FinalResultsScreen({ route, navigation }: FinalResultsScreenProps) {
  const { code, playerId } = route.params
  const { state } = useGameState(code)

  const leaderboard = state?.leaderboard ?? []
  const myEntry = leaderboard.find((p) => p.id === playerId)
  const top3 = leaderboard.slice(0, 3)

  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }, [])

  const handleShare = async () => {
    const rank = myEntry?.rank ?? '?'
    const score = myEntry?.score.toLocaleString() ?? '0'
    await Share.share({
      message: `I ranked #${rank} in AI Trivia Arena with ${score} pts! 🏆 Play at aitriviaarena.com`,
    })
  }

  const medals = ['🥇', '🥈', '🥉']
  const podiumOrder = [top3[1], top3[0], top3[2]].filter(Boolean) // 2nd, 1st, 3rd
  const podiumHeights = [100, 130, 80]
  const podiumMedals = [medals[1], medals[0], medals[2]]

  return (
    <SafeAreaView style={s.container}>
      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        <Text style={s.title}>Game Over!</Text>

        {/* Podium */}
        {top3.length >= 1 && (
          <View style={s.podium}>
            {podiumOrder.map((player, i) =>
              player ? (
                <View key={player.id} style={[s.podiumCol, player.id === playerId && s.podiumColMe]}>
                  <Text style={s.podiumMedal}>{podiumMedals[i]}</Text>
                  <Text style={s.podiumName} numberOfLines={1}>{player.displayName}</Text>
                  <Text style={s.podiumScore}>{player.score.toLocaleString()}</Text>
                  <View style={[s.podiumBar, { height: podiumHeights[i] }]} />
                </View>
              ) : null
            )}
          </View>
        )}

        {/* My result if not in top 3 */}
        {myEntry && (myEntry.rank ?? 0) > 3 && (
          <View style={s.myResult}>
            <Text style={s.myResultLabel}>Your Result</Text>
            <Text style={s.myRank}>#{myEntry.rank}</Text>
            <Text style={s.myScore}>{myEntry.score.toLocaleString()} pts</Text>
            <Text style={s.myStats}>
              {myEntry.correctCount} correct · {myEntry.streak}🔥 streak
            </Text>
          </View>
        )}

        {/* Full leaderboard */}
        <View style={s.section}>
          <Text style={s.sectionLabel}>Final Standings</Text>
          {leaderboard.map((p, i) => (
            <View key={p.id} style={[s.lbRow, p.id === playerId && s.lbRowMe]}>
              <Text style={s.lbRank}>{medals[i] ?? `#${p.rank}`}</Text>
              <Text style={[s.lbName, p.id === playerId && s.lbNameMe]} numberOfLines={1}>
                {p.displayName}{p.id === playerId ? ' (You)' : ''}
              </Text>
              <Text style={s.lbScore}>{p.score.toLocaleString()}</Text>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View style={s.actions}>
          <TouchableOpacity style={s.shareBtn} onPress={handleShare} activeOpacity={0.85}>
            <Text style={s.shareBtnText}>Share Result 🎉</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.joinAgainBtn} onPress={() => navigation.navigate('Join')} activeOpacity={0.85}>
            <Text style={s.joinAgainText}>Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.homeBtn} onPress={() => navigation.navigate('MainTabs', { screen: 'Play' })} activeOpacity={0.7}>
            <Text style={s.homeText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { padding: 20, gap: 24, paddingBottom: 40 },
  title: { fontSize: 36, fontWeight: '900', color: COLORS.white, textAlign: 'center', marginTop: 8 },

  // Podium
  podium: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', gap: 8, height: 200 },
  podiumCol: { alignItems: 'center', flex: 1, gap: 4 },
  podiumColMe: {},
  podiumMedal: { fontSize: 28 },
  podiumName: { fontSize: 12, color: COLORS.white, fontWeight: '700', textAlign: 'center' },
  podiumScore: { fontSize: 11, color: COLORS.muted, marginBottom: 4 },
  podiumBar: { width: '100%', backgroundColor: COLORS.blue, borderTopLeftRadius: 6, borderTopRightRadius: 6 },

  // My result card
  myResult: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  myResultLabel: { fontSize: 12, color: COLORS.muted, fontWeight: '700', letterSpacing: 0.5 },
  myRank: { fontSize: 48, fontWeight: '900', color: COLORS.gold },
  myScore: { fontSize: 22, fontWeight: '800', color: COLORS.white },
  myStats: { fontSize: 13, color: COLORS.muted },

  // Leaderboard
  section: { gap: 8 },
  sectionLabel: { fontSize: 13, fontWeight: '700', color: COLORS.muted, letterSpacing: 0.8, textTransform: 'uppercase' },
  lbRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 12,
    gap: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    minHeight: 48,
  },
  lbRowMe: { borderColor: COLORS.gold },
  lbRank: { fontSize: 18, width: 36, textAlign: 'center' },
  lbName: { flex: 1, fontSize: 14, color: COLORS.white, fontWeight: '600' },
  lbNameMe: { color: COLORS.gold },
  lbScore: { fontSize: 15, fontWeight: '800', color: COLORS.blue },

  // Actions
  actions: { gap: 10 },
  shareBtn: {
    backgroundColor: COLORS.gold,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    minHeight: 56,
  },
  shareBtnText: { fontSize: 17, fontWeight: '700', color: '#000' },
  joinAgainBtn: {
    backgroundColor: COLORS.blue,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    minHeight: 56,
  },
  joinAgainText: { fontSize: 16, fontWeight: '700', color: COLORS.white },
  homeBtn: { alignItems: 'center', paddingVertical: 14, minHeight: 44 },
  homeText: { fontSize: 14, color: COLORS.muted },
})
