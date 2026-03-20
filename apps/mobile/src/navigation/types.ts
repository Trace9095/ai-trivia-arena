import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'

export type TabParamList = {
  Play: undefined
  Leaderboard: undefined
  Profile: undefined
}

export type RootStackParamList = {
  Login: undefined
  Verify: { token?: string }
  MainTabs: NavigatorScreenParams<TabParamList>
  Paywall: undefined
  Join: undefined
  Waiting: { code: string; playerId: string; displayName: string }
  LiveGame: { code: string; playerId: string }
  FinalResults: { code: string; playerId: string }
  SoloGame: { category: string; difficulty: string }
}

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>
export type VerifyScreenProps = NativeStackScreenProps<RootStackParamList, 'Verify'>
export type JoinScreenProps = NativeStackScreenProps<RootStackParamList, 'Join'>
export type WaitingScreenProps = NativeStackScreenProps<RootStackParamList, 'Waiting'>
export type LiveGameScreenProps = NativeStackScreenProps<RootStackParamList, 'LiveGame'>
export type FinalResultsScreenProps = NativeStackScreenProps<RootStackParamList, 'FinalResults'>
export type SoloGameScreenProps = NativeStackScreenProps<RootStackParamList, 'SoloGame'>
export type PaywallScreenProps = NativeStackScreenProps<RootStackParamList, 'Paywall'>

export type PlayTabProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Play'>,
  NativeStackScreenProps<RootStackParamList>
>
export type LeaderboardTabProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Leaderboard'>,
  NativeStackScreenProps<RootStackParamList>
>
export type ProfileTabProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Profile'>,
  NativeStackScreenProps<RootStackParamList>
>
