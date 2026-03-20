import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useQuery } from '@tanstack/react-query'
import { COLORS } from '../../config'
import { api } from '../../lib/api'
import { AuthContext } from '../../context/AuthContext'
import type { LeaderboardTabProps } from '../../navigation/types'
import type { LeaderboardEntry } from '../../types/api'

type Period = 'today' | 'week' | 'alltime'

const PERIOD_LABELS: Record<Period, string> = {
  today: 'Today',
  week: 'This Week',
  alltime: 'All Time',
}

export default function LeaderboardTab(_props: LeaderboardTabProps) {
  const { user } = useContext(AuthContext)
  const [period, setPeriod] = useState<Period>('alltime')

  const { data, isLoading, error } = useQuery({
    queryKey: ['leaderboard', period],
    queryFn: () => api.leaderboard.get(period),
    staleTime: 30_000,
  })

  const entries = data?.leaderboard ?? []
  const myRank = user ? entries.findIndex((e) => e.id === user.id) + 1 : 0

  const renderItem = ({ item, index }: { item: LeaderboardEntry; index: number }) => {
    const isMe = item.id === user?.id
    const medals = ['🥇', '🥈', '🥉']
    return (
      <View style={[styles.row, isMe && styles.rowMe]}>
        <Text style={styles.rank}>{medals[index] ?? `#${item.rank}`}</Text>
        <View style={styles.info}>
          <Text style={[styles.name, isMe && styles.nameMe]} numberOfLines={1}>
            {item.name ?? item.email.split('@')[0]}
            {isMe ? ' (You)' : ''}
          </Text>
          <Text style={styles.meta}>
            {item.gamesPlayed} games · {item.streak}🔥 streak
          </Text>
        </View>
        <Text style={styles.score}>{item.totalScore.toLocaleString()}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        {myRank > 0 && (
          <Text style={styles.myRank}>You: #{myRank}</Text>
        )}
      </View>

      {/* Period Tabs */}
      <View style={styles.tabs}>
        {(Object.keys(PERIOD_LABELS) as Period[]).map((p) => (
          <TouchableOpacity
            key={p}
            style={[styles.tab, period === p && styles.tabActive]}
            onPress={() => setPeriod(p)}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabText, period === p && styles.tabTextActive]}>
              {PERIOD_LABELS[p]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={COLORS.blue} />
        </View>
      ) : error ? (
        <View style={styles.center}>
          <Text style={styles.errorText}>Failed to load leaderboard</Text>
        </View>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.center}>
              <Text style={styles.muted}>No entries yet. Be the first!</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: { fontSize: 28, fontWeight: '800', color: COLORS.white },
  myRank: { fontSize: 15, fontWeight: '700', color: COLORS.gold },
  tabs: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 4,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 8, minHeight: 44 },
  tabActive: { backgroundColor: COLORS.blue },
  tabText: { fontSize: 13, fontWeight: '600', color: COLORS.muted },
  tabTextActive: { color: COLORS.white },
  list: { paddingHorizontal: 20, paddingBottom: 40, gap: 8 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    minHeight: 56,
  },
  rowMe: { borderColor: COLORS.gold, backgroundColor: '#1A1400' },
  rank: { fontSize: 20, width: 36, textAlign: 'center' },
  info: { flex: 1, gap: 2 },
  name: { fontSize: 15, fontWeight: '700', color: COLORS.white },
  nameMe: { color: COLORS.gold },
  meta: { fontSize: 12, color: COLORS.dim },
  score: { fontSize: 16, fontWeight: '800', color: COLORS.blue },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  errorText: { fontSize: 15, color: COLORS.red },
  muted: { fontSize: 15, color: COLORS.muted },
})
