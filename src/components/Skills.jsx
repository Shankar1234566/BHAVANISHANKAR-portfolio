import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

const skills = [
  { name: 'Python', pct: 85, color: '#00FF88', icon: 'fab fa-python' },
  { name: 'JavaScript', pct: 75, color: '#F5C518', icon: 'fab fa-js' },
  { name: 'React', pct: 70, color: '#00BFFF', icon: 'fab fa-react' },
  { name: 'HTML & CSS', pct: 82, color: '#E23636', icon: 'fab fa-html5' },
  { name: 'Machine Learning', pct: 80, color: '#00FF88', icon: 'fas fa-brain' },
  { name: 'Data Science', pct: 78, color: '#9D00FF', icon: 'fas fa-chart-bar' },
  { name: 'Artificial Intelligence', pct: 75, color: '#00BFFF', icon: 'fas fa-robot' },
  { name: 'Java', pct: 70, color: '#F5C518', icon: 'fab fa-java' },
];

const tools = ['Git', 'VS Code', 'Jupyter', 'NumPy', 'Pandas', 'Scikit-Learn', 'TensorFlow', 'Figma'];
const soft = ['Leadership', 'Problem Solving', 'Communication', 'Innovation', 'Critical Thinking', 'Teamwork'];

const SkillBar = ({ skill, inView, index }) => {
  const [shaking, setShaking] = useState(false);

  return (
    <div
      className={`${styles.skillRow} ${shaking ? styles.shake : ''}`}
      onMouseEnter={() => setShaking(true)}
      onMouseLeave={() => setShaking(false)}
    >
      <div className={styles.skillMeta}>
        <span className={styles.skillIcon}><i className={skill.icon} style={{ color: skill.color }} /></span>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPct} style={{ color: skill.color }}>{skill.pct}%</span>
      </div>
      <div className={styles.barTrack}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.pct}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
        >
          <div className={styles.barShine} />
          <div className={styles.barGlow} style={{ boxShadow: `0 0 12px ${skill.color}` }} />
        </motion.div>
        <motion.div
          className={styles.barPulse}
          initial={{ left: 0 }}
          animate={inView ? { left: `${skill.pct}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ boxShadow: `0 0 16px ${skill.color}, 0 0 32px ${skill.color}88` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.bgLines} />

      <div className={styles.header}>
        <div className={styles.headerLabel}>
          <span className={styles.labelLine} />
          02 — STRENGTH ANALYSIS
        </div>
        <h2 className={styles.headerTitle}>
          POWER <span className={styles.accent}>LEVELS</span>
        </h2>
        <p className={styles.headerSub}>HULK-CLASS SKILL ASSESSMENT · HOVER TO ACTIVATE</p>
      </div>

      <motion.div
        ref={ref}
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Main skill bars */}
        <div className={styles.barsPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelDot} style={{ background: '#00FF88' }} />
            <span>TECHNICAL STRENGTH BARS</span>
          </div>
          <div className={styles.bars}>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} inView={inView} index={i} />
            ))}
          </div>
        </div>

        {/* Tools + Soft Skills */}
        <div className={styles.sidePanel}>
          <div className={styles.tagPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelDot} style={{ background: '#00BFFF' }} />
              <span>TOOLS & ARSENAL</span>
            </div>
            <div className={styles.tagCloud}>
              {tools.map((t, i) => (
                <motion.span
                  key={t}
                  className={styles.tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  data-hover
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          <div className={styles.tagPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelDot} style={{ background: '#9D00FF' }} />
              <span>SOFT ABILITIES</span>
            </div>
            <div className={styles.tagCloud}>
              {soft.map((s, i) => (
                <motion.span
                  key={s}
                  className={`${styles.tag} ${styles.tagPurple}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.07 }}
                  data-hover
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Hulk power meter */}
          <div className={styles.hulkMeter}>
            <div className={styles.hulkTop}>
              <div className={styles.hulkIcon}>
                <i className="fas fa-fist-raised" />
              </div>
              <div>
                <div className={styles.hulkLabel}>POWER LEVEL</div>
                <div className={styles.hulkVal}>OVER 9000</div>
              </div>
            </div>
            <div className={styles.hulkBars}>
              {['STRENGTH','INTELLIGENCE','SPEED','DURABILITY'].map((stat, i) => (
                <div key={stat} className={styles.hulkStatRow}>
                  <span>{stat}</span>
                  <div className={styles.hulkBar}>
                    <motion.div
                      className={styles.hulkFill}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${[95, 85, 70, 90][i]}%` } : {}}
                      transition={{ delay: 1 + i * 0.15, duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
