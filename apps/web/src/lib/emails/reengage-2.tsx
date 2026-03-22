import { Body, Button, Container, Head, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'
import { styles } from './base'

interface Reengage2Props {
  name?: string
  appUrl?: string
  unsubscribeUrl?: string
}

export function Reengage2({
  name = 'there',
  appUrl = 'https://aitriviaarena.com',
  unsubscribeUrl = 'https://aitriviaarena.com/unsubscribe',
}: Reengage2Props) {
  return (
    <Html>
      <Head />
      <Preview>80s night, true crime, sports — your crowd picks.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Text style={styles.appName}>AI Trivia Arena</Text>
          <Text style={styles.heading}>Themed Nights drive repeat attendance.</Text>
          <Text style={styles.bodyText}>
            Have you tried Themed Nights yet?
          </Text>
          <Text style={styles.bodyText}>
            Themed Nights let you pick a single topic and the AI generates every question around it. Announce the theme
            in advance on social media — 80s Music Night, True Crime Tuesday, Local Sports Deep-Cuts — and regulars
            invite friends who are into that topic.
          </Text>
          <Text style={styles.bodyText}>
            It builds a loyal themed audience. The True Crime crowd will come every time you run true crime. The 80s
            music fans become evangelists who drag their friends in.
          </Text>
          <Text style={styles.bodyText}>
            The best part: you don&apos;t have to plan the questions. Pick the theme, set the difficulty, and the AI
            generates 20–30 fresh questions in under 30 seconds.
          </Text>
          <Section style={{ textAlign: 'center', margin: '32px 0' }}>
            <Button href={`${appUrl}/host/new?theme=true`} style={styles.button}>
              Start a Themed Game
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

export default Reengage2
