import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Welcome3Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
}

export function Welcome3({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
}: Welcome3Props) {
  return (
    <Html>
      <Head />
      <Preview>Real bar. Real results.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>The bar that doubled its midweek traffic</Text>
          <Text style={styles.bodyText}>
            The Rusty Anchor ran trivia every Wednesday. Attendance had plateaued at 35–40 people per night. They were
            running the same question pack they bought two years ago. Regulars started skipping.
          </Text>
          <Text style={styles.bodyText}>
            After switching to AI Trivia Arena, they started theming each week&apos;s questions — 80s night, true crime,
            pop culture — and promoting the theme on Instagram a few days in advance. Regulars started inviting friends
            who were into that week&apos;s topic.
          </Text>
          <Text style={styles.bodyText}>
            Attendance hit 80+ within a month. Wednesday became their second-highest revenue night of the week.
          </Text>
          <Text style={{ ...styles.bodyText, borderLeft: '3px solid #D4A853', paddingLeft: '16px', fontStyle: 'italic' }}>
            &ldquo;The AI generates stuff our regulars have never heard before. They keep coming back because they can&apos;t
            predict the questions.&rdquo; — Mike T., bar manager
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button href={`${appUrl}/host/new`} style={styles.button}>
              Host Your First Game
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

export default Welcome3
