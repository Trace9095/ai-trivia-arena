import * as Linking from 'expo-linking'
import type { LinkingOptions } from '@react-navigation/native'
import type { RootStackParamList } from './types'

const prefix = Linking.createURL('/')

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix, 'aitriviaarena://'],
  config: {
    screens: {
      Verify: {
        path: 'auth',
        parse: {
          token: (token: string) => token,
        },
      },
    },
  },
}
