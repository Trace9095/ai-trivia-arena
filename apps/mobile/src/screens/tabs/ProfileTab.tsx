import React, { useContext } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// RevenueCatUI not available in Expo Go — replaced with Alert stub
const RevenueCatUI = { presentCustomerCenter: () => Alert.alert('Manage Subscription', 'Visit App Store Settings to manage your subscription.') }
import { COLORS } from '../../config'
import { AuthContext } from '../../context/AuthContext'
import { useRevenueCat } from '../../lib/revenuecat'
import type { ProfileTabProps } from '../../navigation/types'

export default function ProfileTab({ navigation }: ProfileTabProps) {
  const { user, isGuest, signOut } = useContext(AuthContext)
  const { isPro, restorePurchases } = useRevenueCat()

  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: async () => {
          await signOut()
          navigation.replace('Login')
        },
      },
    ])
  }

  const handleRestore = async () => {
    try {
      await restorePurchases()
      Alert.alert('Restored', 'Your purchases have been restored.')
    } catch {
      Alert.alert('Error', 'Could not restore purchases. Please try again.')
    }
  }

  if (isGuest || !user) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.guestCenter}>
          <Text style={styles.guestEmoji}>👤</Text>
          <Text style={styles.guestTitle}>Playing as Guest</Text>
          <Text style={styles.guestSub}>
            Create a free account to track your scores and climb the leaderboard.
          </Text>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.85}
          >
            <Text style={styles.signInBtnText}>Sign In / Create Account</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  const displayName = user.name ?? user.email.split('@')[0]
  const initial = displayName[0]?.toUpperCase() ?? '?'

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initial}</Text>
          </View>
          <Text style={styles.displayName}>{displayName}</Text>
          <Text style={styles.email}>{user.email}</Text>
          {isPro && (
            <View style={styles.proBadge}>
              <Text style={styles.proBadgeText}>⚡ PRO</Text>
            </View>
          )}
        </View>

        {/* Stats */}
        <View style={styles.statsGrid}>
          <StatCard label="Total Score" value={user.totalScore.toLocaleString()} icon="🏆" />
          <StatCard label="Games Played" value={user.gamesPlayed.toString()} icon="🎮" />
          <StatCard label="Current Streak" value={`${user.streak}🔥`} icon="🔥" />
          <StatCard label="Best Streak" value={user.longestStreak.toString()} icon="⭐" />
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Account</Text>

          {!isPro && (
            <SettingRow
              icon="⚡"
              label="Go Pro"
              sublabel="Unlock all categories"
              onPress={() => navigation.navigate('Paywall')}
              highlight
            />
          )}

          {isPro && (
            <SettingRow
              icon="💳"
              label="Manage Subscription"
              sublabel="Cancel, change, or review"
              onPress={() => RevenueCatUI.presentCustomerCenter()}
            />
          )}

          <SettingRow
            icon="🔄"
            label="Restore Purchases"
            sublabel="Already subscribed?"
            onPress={handleRestore}
          />

          <SettingRow
            icon="🚪"
            label="Sign Out"
            sublabel={user.email}
            onPress={handleSignOut}
            danger
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <View style={statStyles.card}>
      <Text style={statStyles.icon}>{icon}</Text>
      <Text style={statStyles.value}>{value}</Text>
      <Text style={statStyles.label}>{label}</Text>
    </View>
  )
}

function SettingRow({
  icon,
  label,
  sublabel,
  onPress,
  danger,
  highlight,
}: {
  icon: string
  label: string
  sublabel?: string
  onPress: () => void
  danger?: boolean
  highlight?: boolean
}) {
  return (
    <TouchableOpacity
      style={[
        rowStyles.row,
        highlight && rowStyles.rowHighlight,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={rowStyles.icon}>{icon}</Text>
      <View style={rowStyles.text}>
        <Text style={[rowStyles.label, danger && rowStyles.labelDanger, highlight && rowStyles.labelHighlight]}>
          {label}
        </Text>
        {sublabel && <Text style={rowStyles.sub}>{sublabel}</Text>}
      </View>
      <Text style={rowStyles.arrow}>›</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { padding: 20, gap: 24, paddingBottom: 40 },
  profileHeader: { alignItems: 'center', gap: 8 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontSize: 32, fontWeight: '800', color: COLORS.white },
  displayName: { fontSize: 24, fontWeight: '800', color: COLORS.white },
  email: { fontSize: 14, color: COLORS.muted },
  proBadge: {
    backgroundColor: COLORS.purple,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  proBadgeText: { fontSize: 12, fontWeight: '800', color: COLORS.white, letterSpacing: 0.5 },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  section: { gap: 8 },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.muted,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  guestCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 16,
  },
  guestEmoji: { fontSize: 64 },
  guestTitle: { fontSize: 24, fontWeight: '800', color: COLORS.white },
  guestSub: { fontSize: 15, color: COLORS.muted, textAlign: 'center', lineHeight: 22 },
  signInBtn: {
    backgroundColor: COLORS.blue,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 32,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInBtnText: { fontSize: 16, fontWeight: '700', color: COLORS.white },
})

const statStyles = StyleSheet.create({
  card: {
    width: '47%',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  icon: { fontSize: 24 },
  value: { fontSize: 22, fontWeight: '800', color: COLORS.white },
  label: { fontSize: 12, color: COLORS.muted, textAlign: 'center' },
})

const rowStyles = StyleSheet.create({
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
  rowHighlight: { borderColor: COLORS.purple, backgroundColor: '#1A0E35' },
  icon: { fontSize: 20, width: 28, textAlign: 'center' },
  text: { flex: 1, gap: 2 },
  label: { fontSize: 15, fontWeight: '600', color: COLORS.white },
  labelDanger: { color: COLORS.red },
  labelHighlight: { color: COLORS.white },
  sub: { fontSize: 12, color: COLORS.dim },
  arrow: { fontSize: 20, color: COLORS.dim },
})
