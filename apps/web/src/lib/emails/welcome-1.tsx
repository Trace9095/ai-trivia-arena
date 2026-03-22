import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Welcome1Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
}

export function Welcome1({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
}: Welcome1Props) {
  return (
    <Html>
      <Head />
      <Preview>Trivia. Powered by AI. Built for your bar.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>Hi {name}, game night just leveled up.</Text>
          <Text style={styles.bodyText}>
            Welcome to AI Trivia Arena — AI-powered trivia for bars, events, and game nights. Host live trivia games
            with questions generated fresh by AI. No recycled questions from 2018. Every round is different.
          </Text>
          <Text style={styles.bodyText}>
            Players join on their phones. The leaderboard displays on the main screen. Your host dashboard controls
            everything from categories to difficulty to round timing.
          </Text>
          <Text style={styles.bodyText}>
            Quick start: Create your first game, share the QR code with your crowd, and start the round.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button href={`${appUrl}/host/new`} style={styles.button}>
              Create Your First Game
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

export default Welcome1
