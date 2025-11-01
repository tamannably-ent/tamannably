import { Html, Head, Preview, Body, Container, Section, Text, Hr } from '@react-email/components';
import type { ContactFormInputs } from '@/lib/schema';

export default function ContactEmail({ name, email, message }: ContactFormInputs) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New message from your contact form</Preview>
      <Body style={{ fontFamily: 'sans-serif' }}>
        <Container style={{ padding: '20px', border: '1px solid #ddd' }}>
          <Section>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Hr />
            <Text><strong>Message:</strong></Text>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}