import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Reengage3Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
  offerCode?: string
}

export function Reengage3({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
  offerCode = 'COMEBACK',
}: Reengage3Props) {
  return (
    <Html>
      <Head />
      <Preview>We want you hosting again.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>We want you back, {name}.</Text>
          <Text style={styles.bodyText}>
            It&apos;s been a while. We&apos;d like you back — so we&apos;re giving you 2 months of Pro free.
          </Text>
          <Text style={styles.bodyText}>
            Use code <strong style={{ color: '#D4A853' }}>{offerCode}</strong> to claim 2 months of Pro: unlimited
            games, custom branding, analytics, and multi-venue management. No card required.
          </Text>
          <Text style={styles.bodyText}>
            Your crowd is still out there. We&apos;ll handle the questions.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button href={`${appUrl}/host/new?code=${offerCode}`} style={styles.button}>
              Claim 2 Free Months
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

export default Reengage3
