'use client';

import { Button, InputText, styled } from '@washingtonpost/wpds-ui-kit';

const Section = styled('section', {
  py: '$400',
  backgroundColor: '$background',
  '@sm': { py: '$250' },
});

const Inner = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  px: '$150',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$300',
  alignItems: 'start',
  '@sm': { gridTemplateColumns: '1fr' },
  '@md': { gridTemplateColumns: '1fr' },
});

const InfoBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$150',
});

const SectionLabel = styled('p', {
  fontFamily: '$meta',
  fontSize: '$075',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '$onBackground',
  opacity: 0.45,
});

const SectionTitle = styled('h2', {
  fontFamily: '$headline',
  fontWeight: '$bold',
  fontSize: '$275',
  lineHeight: '$headline',
  color: '$onBackground',
  '@sm': { fontSize: '$175' },
});

const InfoText = styled('p', {
  fontFamily: '$body',
  fontSize: '$100',
  lineHeight: '$body',
  color: '$onBackground',
  opacity: 0.75,
});

const InfoList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$075',
});

const InfoItem = styled('li', {
  fontFamily: '$meta',
  fontSize: '$087',
  color: '$onBackground',
  opacity: 0.65,
  display: 'flex',
  gap: '$075',
  alignItems: 'center',
  '&::before': {
    content: '•',
    color: '$cta',
    fontWeight: '$bold',
  },
});

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$125',
  backgroundColor: '$surface',
  padding: '$200',
  borderRadius: '$050',
  border: '1px solid $outline',
});

const FormTitle = styled('h3', {
  fontFamily: '$headline',
  fontSize: '$150',
  fontWeight: '$bold',
  color: '$onSurface',
  marginBottom: '$050',
});

const FormRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$100',
  '@sm': { gridTemplateColumns: '1fr' },
});

export default function Contact() {
  return (
    <Section id="contact">
      <Inner>
        <InfoBlock>
          <SectionLabel>Get In Touch</SectionLabel>
          <SectionTitle>Reserve Your&nbsp;Visit</SectionTitle>
          <InfoText>
            We&apos;d love to welcome you. Fill out the form and one of our team
            members will reach out within 24 hours to confirm your appointment.
          </InfoText>
          <InfoList>
            <InfoItem>1428 U Street NW, Washington, D.C. 20009</InfoItem>
            <InfoItem>(202) 555-0190</InfoItem>
            <InfoItem>hello@lumieresalon.com</InfoItem>
          </InfoList>
          <InfoList>
            <InfoItem>Mon – Fri: 9am – 8pm</InfoItem>
            <InfoItem>Saturday: 9am – 7pm</InfoItem>
            <InfoItem>Sunday: 11am – 5pm</InfoItem>
          </InfoList>
        </InfoBlock>

        <Form
          onSubmit={(e: React.SubmitEvent) => {
            e.preventDefault();
            alert("Thank you! We'll be in touch within 24 hours.");
          }}
        >
          <FormTitle>Book an Appointment</FormTitle>
          <FormRow>
            <InputText
              label="First Name"
              name="firstName"
              id="firstName"
              css={{ fontFamily: '$meta' }}
            />
            <InputText
              label="Last Name"
              name="lastName"
              id="lastName"
              css={{ fontFamily: '$meta' }}
            />
          </FormRow>
          <InputText
            label="Email Address"
            name="email"
            id="email"
            type="email"
            css={{ fontFamily: '$meta' }}
          />
          <InputText
            label="Phone Number"
            name="phone"
            id="phone"
            type="tel"
            css={{ fontFamily: '$meta' }}
          />
          <InputText
            label="Service (e.g. Signature Cut, Facial)"
            name="service"
            id="service"
            css={{ fontFamily: '$meta' }}
          />
          <InputText
            label="Preferred Date & Time"
            name="datetime"
            id="datetime"
            css={{ fontFamily: '$meta' }}
          />
          <Button
            variant="cta"
            type="submit"
            css={{
              fontFamily: '$meta',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontSize: '$087',
              marginTop: '$050',
            }}
          >
            Request Appointment
          </Button>
        </Form>
      </Inner>
    </Section>
  );
}
