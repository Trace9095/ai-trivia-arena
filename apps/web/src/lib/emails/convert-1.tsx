import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Convert1Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
}

export function Convert1({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
}: Convert1Props) {
  return (
    <Html>
      <Head />
      <Preview>Unlimited games, custom branding, analytics.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>Here&apos;s what Pro gets you</Text>
          <Text style={styles.bodyText}>
            You&apos;ve seen what AI Trivia Arena can do on the free plan. Here&apos;s what unlocks with Pro:
          </Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 8px' }}>
            <strong style={{ color: '#E6EDF3' }}>Unlimited Games</strong> — Host trivia every week, 52 weeks a year.
            No monthly cap.
          </Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 8px' }}>
            <strong style={{ color: '#E6EDF3' }}>Custom Branding</strong> — Your bar&apos;s logo and colors on every
            screen your crowd sees.
          </Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 8px' }}>
            <strong style={{ color: '#E6EDF3' }}>Advanced Analytics</strong> — Per-question engagement stats,
            returning player tracking, round-by-round performance.
          </Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 8px' }}>
            <strong style={{ color: '#E6EDF3' }}>Priority AI Generation</strong> — Faster question generation,
            even at peak hours on game night.
          </Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 24px' }}>
            <strong style={{ color: '#E6EDF3' }}>Multi-Venue Management</strong> — One dashboard, multiple
            locations.
          </Text>
          <Text style={{ ...styles.bodyText, color: '#E6EDF3', fontWeight: '600' }}>
            $29/month or $249/year. At $29/month, one extra table of four covers the cost.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button href={`${appUrl}/upgrade`} style={styles.button}>
              Upgrade to Pro
            </Button>
          </Section>
          <Hr style={styles.hr} />
          <Text style={styles.footerText}>
            AI Trivia Arena — aitriviaarena.com.{' '}
            <Link href={unsubscribeUrl} style={styles.footerLink}>Unsubscribe</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default Convert1
