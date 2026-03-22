import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Convert3Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
  offerCode?: string
}

export function Convert3({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
  offerCode = 'HOST30',
}: Convert3Props) {
  return (
    <Html>
      <Head />
      <Preview>Tonight&apos;s your last chance.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>Expires tonight</Text>
          <Text style={styles.bodyText}>
            Your 30% off code — <strong style={{ color: '#D4A853' }}>{offerCode}</strong> — expires at midnight
            tonight.
          </Text>
          <Text style={{ ...styles.bodyText, borderLeft: '3px solid #D4A853', paddingLeft: '16px', fontStyle: 'italic' }}>
            &ldquo;I was hosting trivia from a printed sheet I&apos;d been reusing for two years. AI Trivia Arena
            generates fresh content every single game. My regulars started bringing new people just to experience the
            questions.&rdquo; — Sarah K., pub manager
          </Text>
          <Text style={styles.bodyText}>
            Use code <strong style={{ color: '#D4A853' }}>{offerCode}</strong> at checkout for 30% off Pro. This is
            the last time this offer goes out.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button href={`${appUrl}/upgrade?code=${offerCode}`} style={styles.button}>
              Upgrade Before Midnight
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

export default Convert3
