import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CameraView, Camera } from 'expo-camera'
import * as Haptics from 'expo-haptics'
import { COLORS } from '../../config'
import { api } from '../../lib/api'
import { getStoredDisplayName, setStoredDisplayName } from '../../lib/auth'
import type { JoinScreenProps } from '../../navigation/types'

export default function JoinScreen({ navigation }: JoinScreenProps) {
  const [code, setCode] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [loading, setLoading] = useState(false)
  const [scanMode, setScanMode] = useState(false)
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null)

  useEffect(() => {
    getStoredDisplayName().then((name) => {
      if (name) setDisplayName(name)
    })
  }, [])

  const handleJoin = async () => {
    const trimCode = code.trim().toUpperCase()
    const trimName = displayName.trim()
    if (trimCode.length < 4) {
      Alert.alert('Invalid code', 'Enter a 4-character game code.')
      return
    }
    if (!trimName) {
      Alert.alert('Name required', 'Enter your display name.')
      return
    }
    setLoading(true)
    try {
      const result = await api.live.join(trimCode, trimName)
      await setStoredDisplayName(trimName)
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      navigation.replace('Waiting', {
        code: result.gameCode,
        playerId: result.playerId,
        displayName: result.displayName,
      })
    } catch {
      Alert.alert('Cannot join', 'Game not found or already finished.')
      setLoading(false)
    }
  }

  const handleScanPress = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    setCameraPermission(status === 'granted')
    setScanMode(status === 'granted')
    if (status !== 'granted') {
      Alert.alert('Camera access required', 'Allow camera access to scan QR codes.')
    }
  }

  const handleBarcodeScan = ({ data }: { data: string }) => {
    // Extract code from URL like https://aitriviaarena.com/join/A7KR
    const match = data.match(/\/join\/([A-Z0-9]{4})$/i)
    const extracted = match?.[1] ?? data.trim().toUpperCase()
    if (extracted.length === 4) {
      setCode(extracted)
      setScanMode(false)
    }
  }

  if (scanMode) {
    return (
      <SafeAreaView style={styles.container}>
        <CameraView
          style={StyleSheet.absoluteFillObject}
          onBarcodeScanned={handleBarcodeScan}
          barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
        />
        <View style={styles.scanOverlay}>
          <View style={styles.scanFrame} />
          <Text style={styles.scanHint}>Point at the game QR code</Text>
          <TouchableOpacity
            style={styles.cancelScanBtn}
            onPress={() => setScanMode(false)}
            activeOpacity={0.85}
          >
            <Text style={styles.cancelScanText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.heading}>Join a Game</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Game Code</Text>
          <View style={styles.codeRow}>
            <TextInput
              style={[styles.input, styles.codeInput]}
              value={code}
              onChangeText={(t) => setCode(t.toUpperCase().slice(0, 4))}
              placeholder="A7KR"
              placeholderTextColor={COLORS.dim}
              autoCapitalize="characters"
              autoCorrect={false}
              maxLength={4}
              returnKeyType="done"
              keyboardType="default"
            />
            <TouchableOpacity
              style={styles.scanBtn}
              onPress={handleScanPress}
              activeOpacity={0.8}
            >
              <Text style={styles.scanIcon}>📷</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Your Name</Text>
          <TextInput
            style={styles.input}
            value={displayName}
            onChangeText={(t) => setDisplayName(t.slice(0, 20))}
            placeholder="Enter display name"
            placeholderTextColor={COLORS.dim}
            maxLength={20}
            returnKeyType="join"
            onSubmitEditing={handleJoin}
          />
        </View>

        <TouchableOpacity
          style={[styles.joinBtn, loading && styles.btnDisabled]}
          onPress={handleJoin}
          disabled={loading}
          activeOpacity={0.85}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.white} />
          ) : (
            <Text style={styles.joinBtnText}>Join Game</Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  inner: { flex: 1, padding: 24, gap: 20, justifyContent: 'center' },
  heading: { fontSize: 28, fontWeight: '800', color: COLORS.white, marginBottom: 8 },
  field: { gap: 8 },
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
  codeRow: { flexDirection: 'row', gap: 10 },
  codeInput: { flex: 1, fontSize: 24, fontWeight: '800', letterSpacing: 8, textAlign: 'center' },
  scanBtn: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    minWidth: 56,
  },
  scanIcon: { fontSize: 24 },
  joinBtn: {
    backgroundColor: COLORS.blue,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    minHeight: 56,
    marginTop: 8,
  },
  btnDisabled: { opacity: 0.6 },
  joinBtnText: { fontSize: 17, fontWeight: '700', color: COLORS.white },
  scanOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  scanFrame: {
    width: 220,
    height: 220,
    borderWidth: 3,
    borderColor: COLORS.blue,
    borderRadius: 16,
  },
  scanHint: { fontSize: 16, color: COLORS.white, fontWeight: '600' },
  cancelScanBtn: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 14,
    minHeight: 44,
  },
  cancelScanText: { fontSize: 16, color: COLORS.white, fontWeight: '600' },
})
