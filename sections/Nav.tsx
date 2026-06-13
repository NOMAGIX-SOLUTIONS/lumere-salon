'use client';

import { AppBar, Button, styled } from '@washingtonpost/wpds-ui-kit';

const Inner = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  px: '$150',
  height: '72px',
});

const Logo = styled('a', {
  fontFamily: '$headline',
  fontWeight: '$bold',
  fontSize: '$125',
  color: '$onBackground',
  textDecoration: 'none',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
});

const NavLinks = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$200',
  '@sm': { display: 'none' },
});

const NavLink = styled('a', {
  fontFamily: '$meta',
  fontSize: '$087',
  fontWeight: '$regular',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '$onBackground',
  textDecoration: 'none',
  opacity: 0.7,
  transition: 'opacity 0.2s ease',
  '&:hover': { opacity: 1 },
});

export default function Nav() {
  return (
    <AppBar
      position="sticky"
      shadow
      css={{
        top: 0,
        zIndex: '$shell',
        backgroundColor: '$background',
        borderBottom: '1px solid $outline',
      }}
    >
      <Inner>
        <Logo href="#home">Lumere</Logo>
        <NavLinks>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#testimonials">Reviews</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </NavLinks>
        <Button
          variant="primary"
          density="compact"
          as="a"
          css={{
            fontFamily: '$meta',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontSize: '$075',
            textDecoration: 'none',
          }}
        >
          Book Now
        </Button>
      </Inner>
    </AppBar>
  );
}
