'use client';

import { Card, styled, Tabs } from '@washingtonpost/wpds-ui-kit';

const Section = styled('section', {
  py: '$400',
  backgroundColor: '$background',
  '@sm': { py: '$250' },
});

const Inner = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  px: '$150',
});

const SectionLabel = styled('p', {
  fontFamily: '$meta',
  fontSize: '$075',
  fontWeight: '$regular',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '$onBackground',
  opacity: 0.45,
  marginBottom: '$075',
});

const SectionTitle = styled('h2', {
  fontFamily: '$headline',
  fontWeight: '$bold',
  fontSize: '$275',
  lineHeight: '$headline',
  color: '$onBackground',
  marginBottom: '$200',
  '@sm': { fontSize: '$175' },
});

const ServiceGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$125',
  '@sm': { gridTemplateColumns: '1fr' },
  '@md': { gridTemplateColumns: 'repeat(2, 1fr)' },
});

const ServiceCard = styled(Card, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$075',
  padding: '$150',
  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
  cursor: 'default',
  '@hover': {
    '&:hover': {
      boxShadow: '$300',
      transform: 'translateY(-2px)',
    },
  },
});

const ServiceName = styled('h3', {
  fontFamily: '$headline',
  fontSize: '$125',
  fontWeight: '$bold',
  color: '$onBackground',
  lineHeight: '$headline',
});

const ServiceDesc = styled('p', {
  fontFamily: '$body',
  fontSize: '$087',
  lineHeight: '$body',
  color: '$onBackground',
  opacity: 0.7,
  flexGrow: 1,
});

const ServicePrice = styled('p', {
  fontFamily: '$meta',
  fontSize: '$075',
  fontWeight: '$bold',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '$onBackground',
  opacity: 0.5,
  marginTop: '$050',
});

const ServiceImage = styled('div', {
  width: '100%',
  height: '180px',
  borderRadius: '$025',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginBottom: '$075',
  overflow: 'hidden',
});

type Service = {
  name: string;
  desc: string;
  price: string;
  image?: string;
};

const TABS: { label: string; services: Service[] }[] = [
  {
    label: 'Hair',
    services: [
      {
        name: 'Signature Cut & Style',
        desc: 'A personalized consultation followed by a precision cut and blowout tailored to your features and lifestyle.',
        price: 'From $85',
        image: '/salon-hair.webp',
      },
      {
        name: 'Color & Highlights',
        desc: 'Full-color, balayage, and highlight services using premium, low-damage formulas that deliver luminous results.',
        price: 'From $120',
      },
      {
        name: 'Deep Conditioning Treatment',
        desc: 'Intense repair and hydration for damaged or color-treated hair, leaving strands silky and revived.',
        price: 'From $55',
      },
    ],
  },
  {
    label: 'Skin',
    services: [
      {
        name: 'Lumere Signature Facial',
        desc: 'Our flagship 60-minute facial combining deep cleansing, gentle exfoliation, and targeted serums for a radiant glow.',
        price: 'From $110',
        image: '/salon-facial.webp',
      },
      {
        name: 'Hydrating Glow Facial',
        desc: 'A soothing treatment loaded with hyaluronic acid and botanical extracts to restore plump, dewy skin.',
        price: 'From $90',
      },
      {
        name: 'Anti-Age Lift Treatment',
        desc: 'Advanced firming and lifting treatment using microcurrent technology and peptide-rich masks.',
        price: 'From $145',
      },
    ],
  },
  {
    label: 'Nails',
    services: [
      {
        name: 'Luxury Manicure',
        desc: 'Thoughtful nail shaping, cuticle care, a hydrating hand treatment, and your choice of polish or gel finish.',
        price: 'From $45',
        image: '/salon-nails.webp',
      },
      {
        name: 'Spa Pedicure',
        desc: 'A restorative foot soak, exfoliation, callus treatment, and relaxing massage followed by a flawless polish.',
        price: 'From $65',
      },
      {
        name: 'Nail Art',
        desc: 'Custom nail art from minimalist linework to elaborate designs — bring a reference or let our artists inspire you.',
        price: 'From $25',
      },
    ],
  },
];

export default function Services() {
  return (
    <Section id="services">
      <Inner>
        <SectionLabel>What We Offer</SectionLabel>
        <SectionTitle>Our Services</SectionTitle>

        <Tabs.Root defaultValue="Hair">
          <Tabs.List
            aria-label="Service categories"
            css={{ marginBottom: '$200' }}
          >
            {TABS.map((t) => (
              <Tabs.Trigger key={t.label} value={t.label}>
                {t.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {TABS.map((t) => (
            <Tabs.Content key={t.label} value={t.label}>
              <ServiceGrid>
                {t.services.map((s) => (
                  <ServiceCard key={s.name}>
                    {s.image && (
                      <ServiceImage
                        style={{ backgroundImage: `url('${s.image}')` }}
                        role="img"
                        aria-label={s.name}
                      />
                    )}
                    <ServiceName>{s.name}</ServiceName>
                    <ServiceDesc>{s.desc}</ServiceDesc>
                    <ServicePrice>{s.price}</ServicePrice>
                  </ServiceCard>
                ))}
              </ServiceGrid>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </Inner>
    </Section>
  );
}
