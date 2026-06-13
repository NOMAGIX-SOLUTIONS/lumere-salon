'use client';

import {
  ACCORDION_TYPE,
  styled,
  Accordion as WpdsAccordion,
} from '@washingtonpost/wpds-ui-kit';

// Safely re-type the Accordion layout subcomponents to accept children
const AccordionItem = WpdsAccordion.Item as React.ComponentType<
  React.ComponentProps<typeof WpdsAccordion.Item> & {
    children: React.ReactNode;
    value: string;
  }
>;

const AccordionContent = WpdsAccordion.Content as React.ComponentType<
  React.ComponentProps<typeof WpdsAccordion.Content> & {
    children: React.ReactNode;
  }
>;

const Section = styled('section', {
  py: '$400',
  backgroundColor: '$surface',
  '@sm': { py: '$250' },
});

const Inner = styled('div', {
  maxWidth: '760px',
  margin: '0 auto',
  px: '$150',
});

const SectionLabel = styled('p', {
  fontFamily: '$meta',
  fontSize: '$075',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '$onSurface',
  opacity: 0.45,
  marginBottom: '$075',
  textAlign: 'center',
});

const SectionTitle = styled('h2', {
  fontFamily: '$headline',
  fontWeight: '$bold',
  fontSize: '$275',
  lineHeight: '$headline',
  color: '$onSurface',
  marginBottom: '$250',
  textAlign: 'center',
  '@sm': { fontSize: '$175' },
});

const AnswerText = styled('p', {
  fontFamily: '$body',
  fontSize: '$100',
  lineHeight: '$body',
  color: '$onSurface',
  opacity: 0.75,
  paddingBottom: '$100',
});

const FAQS = [
  {
    q: 'How do I book an appointment?',
    a: 'You can book online through our booking form at the bottom of this page, call us at (202) 555-0190, or send us a message via email. We recommend booking at least one week in advance for weekend appointments.',
  },
  {
    q: 'What should I do to prepare for my visit?',
    a: 'For hair services, arrive with clean, dry hair unless otherwise instructed. For facials, avoid any active retinol or exfoliating products for 48 hours prior. For nail appointments, remove any existing gel or acrylic nails beforehand if possible.',
  },
  {
    q: 'Do you offer consultations before services?',
    a: 'Yes — all new clients receive a complimentary 15-minute consultation before their service. We want to understand your goals, lifestyle, and hair or skin history before we begin.',
  },
  {
    q: 'What is your cancellation policy?',
    a: "We ask for 24 hours' notice for cancellations or rescheduling. Cancellations with less than 24 hours' notice may incur a 50% service fee. No-shows are charged the full service amount.",
  },
  {
    q: 'Do you carry products for purchase?',
    a: 'Absolutely. We carry a curated selection of professional-grade haircare, skincare, and nail products available for purchase in-salon. Our artists are happy to recommend the right regimen for you.',
  },
  {
    q: 'Are your products vegan and cruelty-free?',
    a: 'We prioritize sustainable, ethically sourced products wherever possible. The majority of the lines we carry are vegan and cruelty-free. Just ask your artist if you have specific requirements.',
  },
];

export default function FAQ() {
  return (
    <Section id="faq">
      <Inner>
        <SectionLabel>Got Questions?</SectionLabel>
        <SectionTitle>Frequently Asked</SectionTitle>
        <WpdsAccordion.Root type={ACCORDION_TYPE.single} collapsible>
          {FAQS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <WpdsAccordion.Trigger
                css={{
                  fontFamily: '$meta',
                  fontWeight: '$bold',
                  fontSize: '$100',
                  letterSpacing: '0.02em',
                  color: '$onSurface',
                }}
              >
                {item.q}
              </WpdsAccordion.Trigger>
              <AccordionContent>
                <AnswerText>{item.a}</AnswerText>
              </AccordionContent>
            </AccordionItem>
          ))}
        </WpdsAccordion.Root>
      </Inner>
    </Section>
  );
}
