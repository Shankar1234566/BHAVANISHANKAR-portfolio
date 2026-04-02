import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      {/* Logo */}
      <div className={styles.logo} data-hover>
        <div className={styles.logoShield}>
          <span>BS</span>
        </div>
        <div className={styles.logoText}>
          <span className={styles.logoName}>BHAVANI SHANKAR</span>
          <span className={styles.logoSub}>AI · ENGINEER · FOUNDER</span>
        </div>
      </div>

      {/* Desktop links */}
      <div className={styles.links}>
        {links.map(link => (
          <button
            key={link}
            className={`${styles.link} ${active === link ? styles.activeLink : ''}`}
            onClick={() => scrollTo(link)}
            data-hover
          >
            <span>{link}</span>
            {active === link && (
              <motion.div className={styles.linkUnderline} layoutId="underline" />
            )}
          </button>
        ))}
      </div>

      {/* Status chip */}
      <div className={styles.statusChip}>
        <div className={styles.statusDot} />
        <span>AVAILABLE FOR HIRE</span>
      </div>

      {/* Mobile hamburger */}
      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} data-hover>
        <span className={menuOpen ? styles.barOpen1 : styles.bar} />
        <span className={menuOpen ? styles.barOpen2 : styles.bar} />
        <span className={menuOpen ? styles.barOpen3 : styles.bar} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map(link => (
              <button key={link} className={styles.mobileLink} onClick={() => scrollTo(link)} data-hover>
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
