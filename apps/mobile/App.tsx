import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'

import { RevenueCatProvider } from './src/lib/revenuecat'
import { AuthContext } from './src/context/AuthContext'
import { useAuth } from './src/hooks/useAuth'
import AppNavigator from './src/navigation/AppNavigator'
import { linking } from './src/navigation/linking'

SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 2, staleTime: 60_000 },
  },
})

function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

function RootNavigator() {
  const { loading, isAuthenticated, isGuest } = React.useContext(AuthContext)

  React.useEffect(() => {
    if (!loading) {
      SplashScreen.hideAsync()
    }
  }, [loading])

  if (loading) return null

  const initialRoute: 'Login' | 'MainTabs' =
    isAuthenticated || isGuest ? 'MainTabs' : 'Login'

  return (
    <NavigationContainer linking={linking}>
      <AppNavigator initialRoute={initialRoute} />
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <RevenueCatProvider>
            <AuthProvider>
              <StatusBar style="light" />
              <RootNavigator />
            </AuthProvider>
          </RevenueCatProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1 },
})
