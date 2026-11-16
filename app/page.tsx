import Script from 'next/script';
import Chrome from '../components/Chrome';
import Wire from '../components/Wire';
import Hero from '../components/Hero';
import About from '../components/About';
import Marquee from '../components/Marquee';
import What from '../components/What';
import Brain from '../components/Brain';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Research from '../components/Research';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Sky from '../components/Sky';
import Overlays from '../components/Overlays';

export default function Home() {
  return (
    <>
      <Chrome />
      <main id="top">
        <Wire />
        <Hero />
        <About />
        <Marquee />
        <What />
        <Brain />
        <Work />
        <Projects />
        <Research />
        <Experience />
        <Contact />
      </main>
      <Sky />
      <Overlays />
      <Script src="/site.js" strategy="afterInteractive" />
      <Script src="/autoplay.js" strategy="afterInteractive" />
    </>
  );
}
