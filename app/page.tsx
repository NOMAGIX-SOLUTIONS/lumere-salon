import About from '@/sections/About';
import Contact from '@/sections/Contact';
import FAQ from '@/sections/FAQ';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Nav from '@/sections/Nav';
import Services from '@/sections/Services';
import Testimonials from '@/sections/Testimonials';
import { darkTheme, styled } from '@washingtonpost/wpds-ui-kit';

const Page = styled('div', {
  backgroundColor: '$background',
  color: '$onBackground',
  overflowX: 'hidden',
});

function App() {
  return (
    <Page>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <div className={darkTheme.className}>
        <Footer />
      </div>
    </Page>
  );
}

export default App;
