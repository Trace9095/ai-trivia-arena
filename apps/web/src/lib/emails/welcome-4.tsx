import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Welcome4Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
}

export function Welcome4({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
}: Welcome4Props) {
  return (
    <Html>
      <Head />
      <Preview>For serious trivia hosts.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>What Pro hosts run differently</Text>
          <Text style={styles.bodyText}>
            Free gets you started. Pro is how you build a loyal crowd.
          </Text>
          <Text style={styles.bodyText}>Here&apos;s what Pro hosts get:</Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 8px' }}>
            <strong style={{ color: '#E6EDF3' }}>Unlimited Games</strong> — Free plan is limited to 5 games per month.
            Pro hosts run trivia every week, all year.
          </Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 8px' }}>
            <strong style={{ color: '#E6EDF3' }}>Custom Branding</strong> — Your bar&apos;s logo and colors on the
            leaderboard and player screens.
          </Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 8px' }}>
            <strong style={{ color: '#E6EDF3' }}>Advanced Analytics</strong> — Per-question stats, engagement by round,
            returning player tracking.
          </Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 8px' }}>
            <strong style={{ color: '#E6EDF3' }}>Priority AI Generation</strong> — Faster, more reliable question
            generation even during peak hours.
          </Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 8px' }}>
            <strong style={{ color: '#E6EDF3' }}>Sponsored Question Rounds</strong> — A paid feature for
            venue-specific promotions (happy hour callouts, specials, events).
          </Text>
          <Text style={{ ...styles.bodyText, margin: '0 0 24px' }}>
            <strong style={{ color: '#E6EDF3' }}>Multi-Venue Management</strong> — Run trivia across multiple
            locations from a single dashboard.
          </Text>
          <Text style={{ ...styles.bodyText, color: '#E6EDF3', fontWeight: '600' }}>
            $29/month or $249/year.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button href={`${appUrl}/upgrade`} style={styles.button}>
              See Pro Features
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

export default Welcome4
