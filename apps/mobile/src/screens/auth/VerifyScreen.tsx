import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../config'
import { api } from '../../lib/api'
import { AuthContext } from '../../context/AuthContext'
import type { VerifyScreenProps } from '../../navigation/types'

export default function VerifyScreen({ route, navigation }: VerifyScreenProps) {
  const { signIn } = useContext(AuthContext)
  const [verifying, setVerifying] = useState(false)
  const [manualToken, setManualToken] = useState('')
  const [error, setError] = useState<string | null>(null)

  // Auto-verify if token was passed via deep link
  useEffect(() => {
    if (route.params?.token) {
      verifyMagicToken(route.params.token)
    }
  }, [route.params?.token])

  const verifyMagicToken = async (token: string) => {
    setVerifying(true)
    setError(null)
    try {
      const { sessionToken } = await api.auth.verifyToken(token)
      await signIn(sessionToken)
      navigation.replace('MainTabs', { screen: 'Play' })
    } catch {
      setError('This link has expired or is invalid. Please request a new one.')
      setVerifying(false)
    }
  }

  const handleManualVerify = () => {
    const t = manualToken.trim()
    if (!t) {
      Alert.alert('Enter token', 'Paste the token from your magic link URL.')
      return
    }
    verifyMagicToken(t)
  }

  if (verifying) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <ActivityIndicator size="large" color={COLORS.blue} />
          <Text style={styles.verifyingText}>Signing you in…</Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Verify Login</Text>

        {error && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        <Text style={styles.body}>
          If the link didn't open the app automatically, paste your token below.
        </Text>

        <TextInput
          style={styles.input}
          value={manualToken}
          onChangeText={setManualToken}
          placeholder="Paste token from email link…"
          placeholderTextColor={COLORS.dim}
          autoCapitalize="none"
          autoCorrect={false}
          multiline
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={handleManualVerify}
          activeOpacity={0.85}
        >
          <Text style={styles.btnText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.replace('Login')}
          activeOpacity={0.7}
        >
          <Text style={styles.backText}>← Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 },
  inner: { flex: 1, padding: 24, gap: 16 },
  title: { fontSize: 28, fontWeight: '800', color: COLORS.white, marginBottom: 8 },
  body: { fontSize: 15, color: COLORS.muted, lineHeight: 22 },
  errorBox: {
    backgroundColor: '#3B0A0A',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.red,
  },
  errorText: { color: COLORS.red, fontSize: 14, lineHeight: 20 },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    color: COLORS.white,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  btn: {
    backgroundColor: COLORS.blue,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    minHeight: 56,
  },
  btnText: { fontSize: 17, fontWeight: '700', color: COLORS.white },
  verifyingText: { fontSize: 16, color: COLORS.muted, marginTop: 12 },
  backBtn: { alignItems: 'center', paddingVertical: 12, minHeight: 44 },
  backText: { fontSize: 14, color: COLORS.muted },
})
