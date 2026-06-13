'use client';

import { Button, styled } from '@washingtonpost/wpds-ui-kit';

const HeroSection = styled('section', {
  position: 'relative',
  minHeight: '92vh',
  display: 'flex',
  alignItems: 'flex-end',
  overflow: 'hidden',
});

const HeroImage = styled('div', {
  position: 'absolute',
  inset: 0,
  backgroundImage: "url('/salon-hero.webp')",
  backgroundSize: 'cover',
  backgroundPosition: 'center 30%',
});

const Overlay = styled('div', {
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)',
});

const HeroContent = styled('div', {
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '$400 $150 $300',
  '@sm': { padding: '$200 $100 $200' },
});

const Eyebrow = styled('p', {
  fontFamily: '$meta',
  fontSize: '$075',
  fontWeight: '$regular',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.65)',
  marginBottom: '$100',
});

const HeroTitle = styled('h1', {
  fontFamily: '$headline',
  fontWeight: '$bold',
  fontSize: '$400',
  lineHeight: '$headline',
  color: '#fff',
  maxWidth: '680px',
  marginBottom: '$125',
  '@sm': { fontSize: '$250' },
  '@md': { fontSize: '$300' },
});

const HeroSubtitle = styled('p', {
  fontFamily: '$body',
  fontSize: '$112',
  lineHeight: '$body',
  color: 'rgba(255,255,255,0.78)',
  maxWidth: '480px',
  marginBottom: '$200',
  '@sm': { fontSize: '$100' },
});

const ButtonRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$100',
  flexWrap: 'wrap',
});

export default function Hero() {
  return (
    <HeroSection id="home">
      <HeroImage />
      <Overlay />
      <HeroContent>
        <Eyebrow>Est. 2014 · Washington, D.C.</Eyebrow>
        <HeroTitle>Where Beauty Meets&nbsp;Artistry</HeroTitle>
        <HeroSubtitle>
          Bespoke hair, skin, and nail services crafted for the way you live.
          Reserve your moment of transformation.
        </HeroSubtitle>
        <ButtonRow>
          <Button
            variant="cta"
            as="a"
            href="#contact"
            css={{
              fontFamily: '$meta',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '$087',
              textDecoration: 'none',
            }}
          >
            Book an Appointment
          </Button>
          <Button
            variant="primary"
            isOutline
            as="a"
            href="#services"
            css={{
              fontFamily: '$meta',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '$087',
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              '&:hover': {
                borderColor: '#fff',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Explore Services
          </Button>
        </ButtonRow>
      </HeroContent>
    </HeroSection>
  );
}
