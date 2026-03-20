import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../config'
import { useRevenueCat } from '../lib/revenuecat'
import type { PaywallScreenProps } from '../navigation/types'

type PurchasesPackage = { identifier: string; packageType: string; product: { priceString: string } }
const PACKAGE_TYPE = { MONTHLY: 'MONTHLY', ANNUAL: 'ANNUAL', LIFETIME: 'LIFETIME' }

const FEATURES = [
  { icon: '🎯', text: 'All 11 trivia categories' },
  { icon: '♾️', text: 'Unlimited games per day' },
  { icon: '🎨', text: 'Exclusive themes' },
  { icon: '🏆', text: 'Priority matchmaking' },
  { icon: '📊', text: 'Detailed stats & history' },
]

export default function PaywallScreen({ navigation }: PaywallScreenProps) {
  const { isPro, purchasePackage, restorePurchases } = useRevenueCat()
  const [packages, setPackages] = useState<PurchasesPackage[]>([])
  const [selected, setSelected] = useState<PurchasesPackage | null>(null)
  const [purchasing, setPurchasing] = useState(false)
  const [restoring, setRestoring] = useState(false)
  const [loadingPackages, setLoadingPackages] = useState(true)

  useEffect(() => {
    if (isPro) {
      navigation.goBack()
      return
    }
    // Expo Go mock: show static packages since native IAP unavailable
    const staticPkgs: PurchasesPackage[] = [
      { identifier: 'monthly', packageType: PACKAGE_TYPE.MONTHLY, product: { priceString: '$4.99/mo' } },
      { identifier: 'annual', packageType: PACKAGE_TYPE.ANNUAL, product: { priceString: '$29.99/yr' } },
      { identifier: 'lifetime', packageType: PACKAGE_TYPE.LIFETIME, product: { priceString: '$79.99' } },
    ]
    setPackages(staticPkgs)
    setSelected(staticPkgs[1] ?? null) // default annual
    setLoadingPackages(false)
  }, [isPro])

  const handlePurchase = async () => {
    if (!selected || purchasing) return
    setPurchasing(true)
    try {
      const success = await purchasePackage(selected)
      if (success) {
        Alert.alert('Welcome to Pro! ⚡', 'All features are now unlocked.', [
          { text: "Let's Go!", onPress: () => navigation.goBack() },
        ])
      }
    } catch (err: unknown) {
      const msg = (err as { message?: string }).message ?? 'Purchase failed'
      Alert.alert('Purchase Failed', msg)
    } finally {
      setPurchasing(false)
    }
  }

  const handleRestore = async () => {
    setRestoring(true)
    try {
      await restorePurchases()
      if (isPro) {
        Alert.alert('Restored!', 'Your Pro subscription has been restored.', [
          { text: 'OK', onPress: () => navigation.goBack() },
        ])
      } else {
        Alert.alert('No subscription found', 'No active Pro subscription was found.')
      }
    } catch {
      Alert.alert('Error', 'Could not restore purchases.')
    } finally {
      setRestoring(false)
    }
  }

  const getPackageLabel = (pkg: PurchasesPackage) => {
    switch (pkg.packageType) {
      case PACKAGE_TYPE.MONTHLY:
        return { title: 'Monthly', badge: null }
      case PACKAGE_TYPE.ANNUAL:
        return { title: 'Yearly', badge: 'MOST POPULAR' }
      case PACKAGE_TYPE.LIFETIME:
        return { title: 'Lifetime', badge: 'BEST VALUE' }
      default:
        return { title: pkg.identifier, badge: null }
    }
  }

  return (
    <SafeAreaView style={s.container}>
      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={s.hero}>
          <Text style={s.heroIcon}>⚡</Text>
          <Text style={s.heroTitle}>AI Trivia Arena Pro</Text>
          <Text style={s.heroSub}>Unlock the full experience</Text>
        </View>

        {/* Features */}
        <View style={s.features}>
          {FEATURES.map((f) => (
            <View key={f.text} style={s.featureRow}>
              <Text style={s.featureIcon}>{f.icon}</Text>
              <Text style={s.featureText}>{f.text}</Text>
              <Text style={s.checkmark}>✓</Text>
            </View>
          ))}
        </View>

        {/* Packages */}
        {loadingPackages ? (
          <ActivityIndicator color={COLORS.blue} size="large" />
        ) : (
          <View style={s.packages}>
            {packages.map((pkg) => {
              const { title, badge } = getPackageLabel(pkg)
              const isSelected = selected?.identifier === pkg.identifier
              return (
                <TouchableOpacity
                  key={pkg.identifier}
                  style={[s.pkgCard, isSelected && s.pkgCardSelected]}
                  onPress={() => setSelected(pkg)}
                  activeOpacity={0.8}
                >
                  {badge && (
                    <View style={s.pkgBadge}>
                      <Text style={s.pkgBadgeText}>{badge}</Text>
                    </View>
                  )}
                  <View style={s.pkgLeft}>
                    <Text style={[s.pkgTitle, isSelected && s.pkgTitleSelected]}>{title}</Text>
                    <Text style={s.pkgPrice}>{pkg.product.priceString}</Text>
                  </View>
                  <View style={[s.pkgRadio, isSelected && s.pkgRadioSelected]} />
                </TouchableOpacity>
              )
            })}
          </View>
        )}

        {/* CTA */}
        <TouchableOpacity
          style={[s.ctaBtn, (purchasing || !selected) && s.ctaBtnDisabled]}
          onPress={handlePurchase}
          disabled={purchasing || !selected}
          activeOpacity={0.85}
        >
          {purchasing ? (
            <ActivityIndicator color={COLORS.white} />
          ) : (
            <Text style={s.ctaBtnText}>
              {selected ? `Subscribe · ${selected.product.priceString}` : 'Select a Plan'}
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={s.restoreBtn}
          onPress={handleRestore}
          disabled={restoring}
          activeOpacity={0.7}
        >
          <Text style={s.restoreText}>
            {restoring ? 'Restoring…' : 'Restore Purchases'}
          </Text>
        </TouchableOpacity>

        <Text style={s.legal}>
          Subscriptions auto-renew unless cancelled 24h before renewal. Manage in App Store settings.
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { padding: 24, gap: 24, paddingBottom: 40 },
  hero: { alignItems: 'center', gap: 8 },
  heroIcon: { fontSize: 56 },
  heroTitle: { fontSize: 28, fontWeight: '900', color: COLORS.white },
  heroSub: { fontSize: 15, color: COLORS.muted },
  features: { gap: 12 },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 4,
    minHeight: 44,
  },
  featureIcon: { fontSize: 22, width: 32, textAlign: 'center' },
  featureText: { flex: 1, fontSize: 15, color: COLORS.white, fontWeight: '500' },
  checkmark: { fontSize: 18, color: COLORS.green },
  packages: { gap: 10 },
  pkgCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    gap: 12,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    minHeight: 64,
    position: 'relative',
    overflow: 'hidden',
  },
  pkgCardSelected: { borderColor: COLORS.purple },
  pkgBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: COLORS.purple,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  pkgBadgeText: { fontSize: 9, fontWeight: '800', color: COLORS.white, letterSpacing: 0.5 },
  pkgLeft: { flex: 1, gap: 2 },
  pkgTitle: { fontSize: 16, fontWeight: '700', color: COLORS.white },
  pkgTitleSelected: { color: COLORS.purple },
  pkgPrice: { fontSize: 14, color: COLORS.muted },
  pkgRadio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: COLORS.dim,
  },
  pkgRadioSelected: { borderColor: COLORS.purple, backgroundColor: COLORS.purple },
  ctaBtn: {
    backgroundColor: COLORS.purple,
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    minHeight: 60,
  },
  ctaBtnDisabled: { opacity: 0.5 },
  ctaBtnText: { fontSize: 17, fontWeight: '800', color: COLORS.white },
  restoreBtn: { alignItems: 'center', paddingVertical: 12, minHeight: 44 },
  restoreText: { fontSize: 14, color: COLORS.muted },
  legal: {
    fontSize: 11,
    color: COLORS.dim,
    textAlign: 'center',
    lineHeight: 16,
  },
})
