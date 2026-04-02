import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

const SectionHeader = ({ label, title, accent }) => (
  <div className={styles.header}>
    <div className={styles.headerLabel}>
      <span className={styles.labelLine} />
      {label}
    </div>
    <h2 className={styles.headerTitle}>
      {title} <span className={styles.accent}>{accent}</span>
    </h2>
  </div>
);

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const attrs = [
    { icon: 'fas fa-brain', label: 'AI Focus', val: 'Machine Learning & Data Science' },
    { icon: 'fas fa-rocket', label: 'Startup', val: "Shankar's LumenEdge — Founder" },
    { icon: 'fas fa-map-marker-alt', label: 'Location', val: 'Andhra Pradesh, India' },
    { icon: 'fas fa-graduation-cap', label: 'Education', val: 'B.Tech AI & DS — VRVIT' },
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.bgGrid} />

      <SectionHeader label="01 — IDENTITY FILE" title="ABOUT" accent="ME" />

      <motion.div
        ref={ref}
        className={styles.grid}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Avatar panel */}
        <div className={styles.avatarPanel}>
          <div className={styles.avatarRing}>
            <div className={styles.avatarRingInner}>
              {[...Array(4)].map((_,i) => (
                <div key={i} className={styles.avatarOrbit} style={{ '--oi': i }} />
              ))}
              <div className={styles.avatarInner}>
                <div className={styles.avatarInitials}>DBS</div>
                <div className={styles.avatarSub}>BHAVANI SHANKAR</div>
              </div>
            </div>
          </div>

          {/* Attribute cards */}
          <div className={styles.attrs}>
            {attrs.map((a, i) => (
              <motion.div
                key={i}
                className={styles.attrCard}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12 }}
              >
                <i className={`${a.icon} ${styles.attrIcon}`} />
                <div>
                  <div className={styles.attrLabel}>{a.label}</div>
                  <div className={styles.attrVal}>{a.val}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text panel */}
        <div className={styles.textPanel}>
          <div className={styles.textCard}>
            <div className={styles.cardCorner} />
            <p className={styles.highlight}>
              I'm <span>Dasari Bhavani Shankar</span>, an AI & Data Science student and startup founder with a singular mission: use intelligent systems to solve real-world problems.
            </p>
            <p className={styles.body}>
              As the founder of <span>Shankar's LumenEdge</span>, I operate at the intersection of AI engineering and entrepreneurship. My work spans machine learning models, data pipelines, biometric systems, and business strategy.
            </p>
            <p className={styles.body}>
              I approach every challenge with <span>first-principles thinking</span> and a bias for execution. Whether it's designing an ML pipeline, building a product from scratch, or leading a team — I bring full commitment to everything I do.
            </p>

            <div className={styles.clearance}>
              <div className={styles.clearanceRow}>
                <span>CLEARANCE</span><span className={styles.clearanceVal}>AVENGER CLASS</span>
              </div>
              <div className={styles.clearanceRow}>
                <span>MISSION STATUS</span><span className={styles.clearanceActive}>ACTIVE</span>
              </div>
              <div className={styles.clearanceRow}>
                <span>PRIMARY WEAPON</span><span className={styles.clearanceVal}>ARTIFICIAL INTELLIGENCE</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
