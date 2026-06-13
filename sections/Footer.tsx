'use client';

import { Divider, styled } from '@washingtonpost/wpds-ui-kit';

const FooterEl = styled('footer', {
  backgroundColor: '$background',
  color: '$onBackground',
  py: '$250',
  px: '$150',
});

const Inner = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$200',
});

const Top = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 1fr',
  gap: '$200',
  '@sm': { gridTemplateColumns: '1fr' },
  '@md': { gridTemplateColumns: '1fr 1fr' },
});

const Brand = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$100',
});

const Logo = styled('p', {
  fontFamily: '$headline',
  fontWeight: '$bold',
  fontSize: '$150',
  color: '$onBackground',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
});

const Tagline = styled('p', {
  fontFamily: '$body',
  fontSize: '$087',
  lineHeight: '$body',
  color: '$onBackground',
  opacity: 0.55,
  maxWidth: '260px',
});

const ColTitle = styled('p', {
  fontFamily: '$meta',
  fontSize: '$075',
  fontWeight: '$bold',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '$onBackground',
  opacity: 0.5,
  marginBottom: '$075',
});

const ColLinks = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$075',
});

const ColLink = styled('a', {
  fontFamily: '$meta',
  fontSize: '$087',
  color: '$onBackground',
  opacity: 0.65,
  textDecoration: 'none',
  transition: 'opacity 0.2s',
  '&:hover': { opacity: 1 },
});

const Bottom = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@sm': { flexDirection: 'column', gap: '$075', textAlign: 'center' },
});

const Copyright = styled('p', {
  fontFamily: '$meta',
  fontSize: '$075',
  color: '$onBackground',
  opacity: 0.4,
  letterSpacing: '0.05em',
});

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <Top>
          <Brand>
            <Logo>Lumere</Logo>
            <Tagline>
              Washington D.C.&apos;s premier destination for bespoke beauty
              services since 2014.
            </Tagline>
          </Brand>
          <div>
            <ColTitle>Services</ColTitle>
            <ColLinks>
              <li>
                <ColLink href="#services">Hair</ColLink>
              </li>
              <li>
                <ColLink href="#services">Skin</ColLink>
              </li>
              <li>
                <ColLink href="#services">Nails</ColLink>
              </li>
            </ColLinks>
          </div>
          <div>
            <ColTitle>Salon</ColTitle>
            <ColLinks>
              <li>
                <ColLink href="#about">Our Story</ColLink>
              </li>
              <li>
                <ColLink href="#testimonials">Reviews</ColLink>
              </li>
              <li>
                <ColLink href="#faq">FAQ</ColLink>
              </li>
            </ColLinks>
          </div>
          <div>
            <ColTitle>Follow</ColTitle>
            <ColLinks>
              <li>
                <ColLink href="#">Instagram</ColLink>
              </li>
              <li>
                <ColLink href="#">Facebook</ColLink>
              </li>
              <li>
                <ColLink href="#">Pinterest</ColLink>
              </li>
            </ColLinks>
          </div>
        </Top>

        <Divider decorative css={{ opacity: 0.2 }} />

        <Bottom>
          <Copyright>
            © {new Date().getFullYear()} Lumere Beauty Salon. All rights
            reserved.
          </Copyright>
          <Copyright>
            1428 U Street NW, Washington, D.C. 20009 · (202) 555-0190
          </Copyright>
        </Bottom>
      </Inner>
    </FooterEl>
  );
}
