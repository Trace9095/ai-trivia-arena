import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../config'
import { useGameState } from '../../hooks/useGameState'
import type { WaitingScreenProps } from '../../navigation/types'

export default function WaitingScreen({ route, navigation }: WaitingScreenProps) {
  const { code, playerId } = route.params
  const { state, loading } = useGameState(code)

  // Move to game when host starts
  useEffect(() => {
    if (!state) return
    const { status } = state
    if (status === 'active' || status === 'picking' || status === 'showing_answer') {
      navigation.replace('LiveGame', { code, playerId })
    } else if (status === 'finished') {
      navigation.replace('FinalResults', { code, playerId })
    }
  }, [state?.status, code, playerId, navigation])

  const players = state?.players ?? []

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* Code display */}
        <View style={styles.codeBox}>
          <Text style={styles.codeLabel}>Game Code</Text>
          <Text style={styles.code}>{code}</Text>
          <Text style={styles.codeHint}>Share this code to invite players</Text>
        </View>

        {/* Waiting indicator */}
        <View style={styles.waitingRow}>
          <ActivityIndicator color={COLORS.blue} />
          <Text style={styles.waitingText}>Waiting for host to start...</Text>
        </View>

        {/* Player list */}
        <View style={styles.playerSection}>
          <Text style={styles.playerCount}>{players.length} player{players.length !== 1 ? 's' : ''} in lobby</Text>
          <FlatList
            data={players}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={[styles.playerRow, item.id === playerId && styles.playerRowMe]}>
                <Text style={styles.playerEmoji}>👤</Text>
                <Text style={[styles.playerName, item.id === playerId && styles.playerNameMe]}>
                  {item.displayName}
                  {item.id === playerId ? ' (You)' : ''}
                </Text>
              </View>
            )}
          />
        </View>

        <TouchableOpacity
          style={styles.leaveBtn}
          onPress={() => navigation.navigate('MainTabs', { screen: 'Play' })}
          activeOpacity={0.7}
        >
          <Text style={styles.leaveText}>Leave Lobby</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  inner: { flex: 1, padding: 24, gap: 24, alignItems: 'center' },
  codeBox: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: COLORS.blue,
    width: '100%',
  },
  codeLabel: { fontSize: 12, fontWeight: '700', color: COLORS.muted, letterSpacing: 1.5, textTransform: 'uppercase' },
  code: { fontSize: 56, fontWeight: '900', color: COLORS.blue, letterSpacing: 12 },
  codeHint: { fontSize: 13, color: COLORS.dim },
  waitingRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  waitingText: { fontSize: 15, color: COLORS.muted },
  playerSection: { width: '100%', gap: 10 },
  playerCount: { fontSize: 14, fontWeight: '700', color: COLORS.muted },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    minHeight: 48,
  },
  playerRowMe: { borderColor: COLORS.blue },
  playerEmoji: { fontSize: 18 },
  playerName: { fontSize: 15, color: COLORS.white, flex: 1 },
  playerNameMe: { color: COLORS.blue, fontWeight: '700' },
  leaveBtn: { paddingVertical: 14, minHeight: 44 },
  leaveText: { fontSize: 14, color: COLORS.dim },
})
