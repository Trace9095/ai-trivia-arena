import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../config'
import { api } from '../../lib/api'
import type { LoginScreenProps } from '../../navigation/types'

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSend = async () => {
    const trimmed = email.trim().toLowerCase()
    if (!trimmed || !trimmed.includes('@')) {
      Alert.alert('Invalid email', 'Please enter a valid email address.')
      return
    }
    setLoading(true)
    try {
      await api.auth.sendMagicLink(trimmed)
      setSent(true)
    } catch {
      Alert.alert('Error', 'Could not send login link. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleGuest = () => {
    navigation.replace('MainTabs', { screen: 'Play' })
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.logo}>⚡</Text>
          <Text style={styles.title}>AI Trivia Arena</Text>
          <Text style={styles.subtitle}>Compete. Learn. Win.</Text>
        </View>

        {sent ? (
          <View style={styles.sentBox}>
            <Text style={styles.sentIcon}>📬</Text>
            <Text style={styles.sentTitle}>Check your email</Text>
            <Text style={styles.sentBody}>
              We sent a login link to{'\n'}
              <Text style={styles.sentEmail}>{email}</Text>
            </Text>
            <TouchableOpacity
              style={styles.resendBtn}
              onPress={() => setSent(false)}
              activeOpacity={0.7}
            >
              <Text style={styles.resendText}>Use a different email</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              placeholderTextColor={COLORS.dim}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              returnKeyType="send"
              onSubmitEditing={handleSend}
            />

            <TouchableOpacity
              style={[styles.primaryBtn, loading && styles.btnDisabled]}
              onPress={handleSend}
              disabled={loading}
              activeOpacity={0.85}
            >
              {loading ? (
                <ActivityIndicator color={COLORS.white} />
              ) : (
                <Text style={styles.primaryBtnText}>Send Magic Link</Text>
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* Guest option */}
        <TouchableOpacity style={styles.guestBtn} onPress={handleGuest} activeOpacity={0.7}>
          <Text style={styles.guestText}>Continue as Guest</Text>
        </TouchableOpacity>

        <Text style={styles.disclaimer}>
          No password. No spam. Just trivia.
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  inner: { flex: 1, paddingHorizontal: 24, justifyContent: 'center', gap: 24 },
  hero: { alignItems: 'center', marginBottom: 8 },
  logo: { fontSize: 64, marginBottom: 8 },
  title: { fontSize: 32, fontWeight: '800', color: COLORS.white, letterSpacing: -0.5 },
  subtitle: { fontSize: 16, color: COLORS.muted, marginTop: 4 },
  form: { gap: 12 },
  label: { fontSize: 14, fontWeight: '600', color: COLORS.muted },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: COLORS.white,
    minHeight: 56,
  },
  primaryBtn: {
    backgroundColor: COLORS.blue,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    minHeight: 56,
    justifyContent: 'center',
  },
  btnDisabled: { opacity: 0.6 },
  primaryBtnText: { fontSize: 17, fontWeight: '700', color: COLORS.white },
  guestBtn: { alignItems: 'center', paddingVertical: 14, minHeight: 44 },
  guestText: { fontSize: 15, color: COLORS.muted },
  disclaimer: { textAlign: 'center', fontSize: 12, color: COLORS.dim, marginTop: -8 },
  sentBox: { alignItems: 'center', gap: 12 },
  sentIcon: { fontSize: 56 },
  sentTitle: { fontSize: 24, fontWeight: '700', color: COLORS.white },
  sentBody: { fontSize: 15, color: COLORS.muted, textAlign: 'center', lineHeight: 22 },
  sentEmail: { color: COLORS.blue, fontWeight: '600' },
  resendBtn: { paddingVertical: 12, minHeight: 44 },
  resendText: { fontSize: 14, color: COLORS.blue },
})
