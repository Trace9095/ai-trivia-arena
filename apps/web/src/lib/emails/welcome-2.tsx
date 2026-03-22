import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Welcome2Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
}

export function Welcome2({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
}: Welcome2Props) {
  return (
    <Html>
      <Head />
      <Preview>Fresh questions every game. Always.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>No two games are the same.</Text>
          <Text style={styles.bodyText}>
            The AI generates questions fresh for each game based on the category and difficulty you choose. Want a round
            about 90s pop music? Done. Local sports history? Easy. Current events from the past week? Absolutely.
          </Text>
          <Text style={styles.bodyText}>
            You can also set the tone — from serious and competitive to absurd and hilarious. Your regulars will never
            see the same question twice.
          </Text>
          <Text style={styles.bodyText}>
            Here are a few ideas to get started: 80s Music Night, True Crime Tuesday, Local Sports Deep-Cuts, or This
            Week in the News. Name the theme, set the difficulty, and let the AI handle the rest.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button href={`${appUrl}/host/new`} style={styles.button}>
              Generate a Custom Round
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

export default Welcome2
