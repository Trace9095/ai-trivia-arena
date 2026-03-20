import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native'
import { COLORS } from '../config'
import type { RootStackParamList, TabParamList } from './types'

import LoginScreen from '../screens/auth/LoginScreen'
import VerifyScreen from '../screens/auth/VerifyScreen'
import PlayTab from '../screens/tabs/PlayTab'
import LeaderboardTab from '../screens/tabs/LeaderboardTab'
import ProfileTab from '../screens/tabs/ProfileTab'
import JoinScreen from '../screens/game/JoinScreen'
import WaitingScreen from '../screens/game/WaitingScreen'
import LiveGameScreen from '../screens/game/LiveGameScreen'
import FinalResultsScreen from '../screens/game/FinalResultsScreen'
import SoloGameScreen from '../screens/game/SoloGameScreen'
import PaywallScreen from '../screens/PaywallScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<TabParamList>()

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  const icons: Record<string, string> = { Play: '🎯', Leaderboard: '🏆', Profile: '👤' }
  return (
    <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>{icons[label] ?? '●'}</Text>
  )
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.card,
          borderTopColor: COLORS.border,
          height: 88,
          paddingBottom: 24,
          paddingTop: 8,
        },
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: COLORS.dim,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
        tabBarIcon: ({ focused }) => (
          <TabIcon label={route.name} focused={focused} />
        ),
      })}
    >
      <Tab.Screen name="Play" component={PlayTab} options={{ title: 'Play' }} />
      <Tab.Screen name="Leaderboard" component={LeaderboardTab} options={{ title: 'Ranks' }} />
      <Tab.Screen name="Profile" component={ProfileTab} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  )
}

const screenOptions = {
  headerStyle: { backgroundColor: COLORS.bg },
  headerTintColor: COLORS.white,
  headerTitleStyle: { fontWeight: '700' as const },
  contentStyle: { backgroundColor: COLORS.bg },
  animation: 'slide_from_right' as const,
}

export default function AppNavigator({
  initialRoute,
}: {
  initialRoute: 'Login' | 'MainTabs'
}) {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false, ...screenOptions }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen
        name="Paywall"
        component={PaywallScreen}
        options={{ headerShown: true, title: 'Go Pro', presentation: 'modal' }}
      />
      <Stack.Screen name="Join" component={JoinScreen} options={{ headerShown: true, title: 'Join Game' }} />
      <Stack.Screen name="Waiting" component={WaitingScreen} options={{ headerShown: true, title: 'Lobby' }} />
      <Stack.Screen name="LiveGame" component={LiveGameScreen} options={{ gestureEnabled: false }} />
      <Stack.Screen name="FinalResults" component={FinalResultsScreen} options={{ gestureEnabled: false }} />
      <Stack.Screen name="SoloGame" component={SoloGameScreen} options={{ gestureEnabled: false }} />
    </Stack.Navigator>
  )
}
