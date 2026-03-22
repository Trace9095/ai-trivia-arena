import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Welcome5Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
}

export function Welcome5({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
}: Welcome5Props) {
  return (
    <Html>
      <Head />
      <Preview>The crowd is waiting.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>Two weeks with AI Trivia Arena, {name}.</Text>
          <Text style={styles.bodyText}>
            Two weeks in. How many games have you hosted?
          </Text>
          <Text style={styles.bodyText}>
            The hosts who build the best regular crowds run at least weekly and vary their themes. It creates
            anticipation — regulars start wondering what this week&apos;s category will be and invite friends based on
            the topic.
          </Text>
          <Text style={styles.bodyText}>
            If you haven&apos;t hosted a public game yet, try it this week. The AI handles all the questions — you just
            need to show up with a projector and a crowd.
          </Text>
          <Text style={styles.bodyText}>
            Pro tip: upgrade to unlock custom branding. Your bar&apos;s logo on the leaderboard screen makes it feel
            like your own branded game show — not a generic app.
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

export default Welcome5
