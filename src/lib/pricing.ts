export const SAVE_PERCENTAGE = 30

export const WEB_PRICES = {
  proMonthly: 4.99,
  proYearly: 29.99,
  lifetime: 49.99,
} as const

export const IOS_PRICES = {
  proMonthly: 6.99,
  proYearly: 38.99,
  lifetime: 64.99,
} as const

export const WEB_CHECKOUT_URLS = {
  proMonthly: '/pricing?plan=proMonthly',
  proYearly: '/pricing?plan=proYearly',
  lifetime: '/pricing?plan=lifetime',
} as const

/** Returns true when running on an iOS device browser */
export function isIOSDevice(): boolean {
  if (typeof navigator === 'undefined') return false
  return /iPhone|iPad|iPod/.test(navigator.userAgent)
}
