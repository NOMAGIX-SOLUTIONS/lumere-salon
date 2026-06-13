'use client';

import { styled } from '@washingtonpost/wpds-ui-kit';

const Section = styled('section', {
  py: '$400',
  backgroundColor: '$surface',
  '@sm': { py: '$250' },
});

const Inner = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  px: '$150',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$300',
  alignItems: 'center',
  '@sm': { gridTemplateColumns: '1fr' },
  '@md': { gridTemplateColumns: '1fr' },
});

const ImageWrap = styled('div', {
  borderRadius: '$050',
  overflow: 'hidden',
  height: '520px',
  '@sm': { height: '300px' },
});

const TeamImage = styled('div', {
  width: '100%',
  height: '100%',
  backgroundImage: "url('/salon-team.webp')",
  backgroundSize: 'cover',
  backgroundPosition: 'center 20%',
  transition: 'transform 0.6s ease',
  '&:hover': { transform: 'scale(1.03)' },
});

const TextBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$150',
});

const SectionLabel = styled('p', {
  fontFamily: '$meta',
  fontSize: '$075',
  fontWeight: '$regular',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '$onSurface',
  opacity: 0.45,
});

const SectionTitle = styled('h2', {
  fontFamily: '$headline',
  fontWeight: '$bold',
  fontSize: '$275',
  lineHeight: '$headline',
  color: '$onSurface',
  '@sm': { fontSize: '$175' },
});

const Body = styled('p', {
  fontFamily: '$body',
  fontSize: '$100',
  lineHeight: '$body',
  color: '$onSurface',
  opacity: 0.8,
});

const StatRow = styled('div', {
  display: 'flex',
  gap: '$200',
  marginTop: '$050',
  '@sm': { gap: '$150' },
});

const Stat = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$025',
});

const StatNumber = styled('span', {
  fontFamily: '$headline',
  fontWeight: '$bold',
  fontSize: '$250',
  lineHeight: '$headline',
  color: '$onSurface',
});

const StatLabel = styled('span', {
  fontFamily: '$meta',
  fontSize: '$075',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '$onSurface',
  opacity: 0.5,
});

export default function About() {
  return (
    <Section id="about">
      <Inner>
        <ImageWrap>
          <TeamImage role="img" aria-label="The Lumere team" />
        </ImageWrap>
        <TextBlock>
          <div>
            <SectionLabel>Our Story</SectionLabel>
          </div>
          <SectionTitle>
            Crafted With Intention. Delivered With Care.
          </SectionTitle>
          <Body>
            Founded in Washington, D.C. in 2014, Lumere was born from a simple
            conviction: every client deserves a singular experience rooted in
            genuine expertise and unhurried attention.
          </Body>
          <Body>
            Our team of artists brings decades of collective experience from
            editorial, bridal, and salon environments. We invest in continuous
            education so our techniques stay ahead of the trends — but our
            philosophy remains timeless.
          </Body>
          <StatRow>
            <Stat>
              <StatNumber>10+</StatNumber>
              <StatLabel>Years Open</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>4K+</StatNumber>
              <StatLabel>Happy Clients</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>12</StatNumber>
              <StatLabel>Expert Artists</StatLabel>
            </Stat>
          </StatRow>
        </TextBlock>
      </Inner>
    </Section>
  );
}
