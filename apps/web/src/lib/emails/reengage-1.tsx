import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Reengage1Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
}

export function Reengage1({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
}: Reengage1Props) {
  return (
    <Html>
      <Head />
      <Preview>Time to host another game.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>Hey {name} — your crowd is ready.</Text>
          <Text style={styles.bodyText}>
            It&apos;s been a week since your last game. Crowds that get trivia on a regular schedule build habits —
            they start showing up automatically because they know it&apos;s game night.
          </Text>
          <Text style={styles.bodyText}>
            New categories added this week: True Crime, Viral Internet Moments, Celebrity Chef Deep-Cuts,
            90s Video Game Soundtracks. The AI has fresh material ready.
          </Text>
          <Text style={styles.bodyText}>
            Come back and host something this week. It takes less than 5 minutes to set up a round.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button href={`${appUrl}/host/new`} style={styles.button}>
              Host a Game
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

export default Reengage1
