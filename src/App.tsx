import { useState, useEffect, useCallback } from 'react';
import './App.css';

import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Software from './sections/Software';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Testimonial from './sections/Testimonial';
import Values from './sections/Values';
import Goals from './sections/Goals';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  // Ensure loading screen shows for at least 1.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      // Ready to dismiss, but LoadingScreen handles its own timing
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen onComplete={handleLoadComplete} />
      <Navigation />
      <ScrollProgress />
      <CursorGlow />

      <main>
        <Hero loaded={loaded} />
        <About />
        <Skills />
        <Software />
        <Services />
        <Projects />
        <Experience />
        <Testimonial />
        <Values />
        <Goals />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
