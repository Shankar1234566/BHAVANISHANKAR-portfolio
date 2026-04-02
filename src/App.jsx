import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Cursor from './components/Cursor';
import JarvisLoader from './components/JarvisLoader';
import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StrangePortal from './components/StrangePortal';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Cursor />

      <AnimatePresence>
        {!loaded && (
          <JarvisLoader onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ParticleField />
          <Navbar />
          <Hero />
          <StrangePortal />
          <About />
          <StrangePortal />
          <Skills />
          <StrangePortal />
          <Projects />
          <StrangePortal />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;
