import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Convert2Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
  offerCode?: string
}

export function Convert2({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
  offerCode = 'HOST30',
}: Convert2Props) {
  return (
    <Html>
      <Head />
      <Preview>30% off. This week only.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>30% off — 48 hours only</Text>
          <Text style={styles.bodyText}>
            For the next 48 hours, use code <strong style={{ color: '#D4A853' }}>{offerCode}</strong> to get 30% off
            AI Trivia Arena Pro.
          </Text>
          <Text style={styles.bodyText}>
            That&apos;s unlimited games, custom branding, analytics, and multi-venue management — for less than the
            cost of a round of drinks per month.
          </Text>
          <Text style={styles.bodyText}>
            Covers the whole year of fresh, AI-generated questions. Your regulars will never run out of new challenges.
          </Text>
          <Text style={{ ...styles.bodyText, color: '#E6EDF3', fontWeight: '600' }}>
            Code: {offerCode} — expires in 48 hours.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button href={`${appUrl}/upgrade?code=${offerCode}`} style={styles.button}>
              Claim 30% Off
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

export default Convert2
