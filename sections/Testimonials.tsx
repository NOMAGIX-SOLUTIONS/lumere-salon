'use client';

import { Card, styled } from '@washingtonpost/wpds-ui-kit';

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
  marginBottom: '$250',
  '@sm': { fontSize: '$175' },
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$125',
  '@sm': { gridTemplateColumns: '1fr' },
  '@md': { gridTemplateColumns: 'repeat(2, 1fr)' },
});

const ReviewCard = styled(Card, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$100',
  padding: '$175',
});

const Stars = styled('div', {
  display: 'flex',
  gap: '$025',
  color: '$gold100',
});

const Star = styled('span', {
  fontSize: '$112',
  color: '#e5a038',
});

const Quote = styled('blockquote', {
  fontFamily: '$body',
  fontSize: '$100',
  lineHeight: '$body',
  color: '$onBackground',
  opacity: 0.85,
  fontStyle: 'italic',
  margin: 0,
  flexGrow: 1,
});

const Attribution = styled('div', {
  marginTop: '$050',
  display: 'flex',
  flexDirection: 'column',
  gap: '$025',
});

const ClientName = styled('p', {
  fontFamily: '$meta',
  fontSize: '$087',
  fontWeight: '$bold',
  color: '$onBackground',
  letterSpacing: '0.05em',
});

const ClientDetail = styled('p', {
  fontFamily: '$meta',
  fontSize: '$075',
  color: '$onBackground',
  opacity: 0.45,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
});

const REVIEWS = [
  {
    name: 'Adrienne K.',
    service: 'Color & Highlights',
    text: "I've been going to Lumere for two years and I won't go anywhere else. The balayage they gave me is exactly what I showed them — natural, sun-kissed, and completely effortless to maintain.",
  },
  {
    name: 'Marcus T.',
    service: 'Signature Cut',
    text: 'Every cut here is a conversation. They listen, they understand your lifestyle, and the result always exceeds expectations. I leave feeling sharp every single time.',
  },
  {
    name: 'Priya S.',
    service: 'Lumere Facial',
    text: 'The signature facial is genuinely the most relaxing hour of my month. My skin is visibly brighter and smoother after every appointment. Pure luxury.',
  },
  {
    name: 'Julia M.',
    service: 'Luxury Manicure',
    text: 'The attention to detail in every service here is unparalleled. The nail art I got for my wedding was the most complimented detail of my entire look.',
  },
  {
    name: 'David L.',
    service: 'Deep Conditioning',
    text: 'My hair had serious heat damage and I was skeptical anything could help. After one conditioning treatment, the difference was night and day. Genuinely impressed.',
  },
  {
    name: 'Camille R.',
    service: 'Spa Pedicure',
    text: 'The spa pedicure is a ritual I look forward to every month. The products smell divine, the massage is thorough, and the finish is always flawless.',
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Inner>
        <SectionLabel>Client Reviews</SectionLabel>
        <SectionTitle>Words From Our Guests</SectionTitle>
        <Grid>
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name}>
              <Stars>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} aria-hidden="true">
                    ★
                  </Star>
                ))}
              </Stars>
              <Quote>&quot;{r.text}&quot;</Quote>
              <Attribution>
                <ClientName>{r.name}</ClientName>
                <ClientDetail>{r.service}</ClientDetail>
              </Attribution>
            </ReviewCard>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
