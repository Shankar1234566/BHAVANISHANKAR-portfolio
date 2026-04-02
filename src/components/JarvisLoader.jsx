import React, { useEffect, useState } from 'react';
import styles from './JarvisLoader.module.css';

const bootLines = [
  'STARK INDUSTRIES SYSTEM BOOT',
  'J.A.R.V.I.S v7.3.1 INITIALIZING...',
  'LOADING NEURAL NETWORK MODULES...',
  'SCANNING BIOMETRIC SIGNATURE...',
  'IDENTITY CONFIRMED: BHAVANI SHANKAR',
  'CLEARANCE LEVEL: AVENGER',
  'LOADING AI & DATA SCIENCE PROTOCOLS...',
  'DEPLOYING HOLOGRAPHIC INTERFACE...',
  'WELCOME, AGENT BHAVANI SHANKAR',
];

const JarvisLoader = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('boot'); // boot | welcome | fadeout
  const [welcomeText, setWelcomeText] = useState('');
  const fullWelcome = 'WELCOME BHAVANI SHANKAR';

  useEffect(() => {
    let lineIdx = 0;
    const lineTimer = setInterval(() => {
      if (lineIdx < bootLines.length) {
        setLines(prev => [...prev, bootLines[lineIdx]]);
        setProgress(Math.round(((lineIdx + 1) / bootLines.length) * 100));
        lineIdx++;
      } else {
        clearInterval(lineTimer);
        setTimeout(() => setPhase('welcome'), 400);
      }
    }, 280);
    return () => clearInterval(lineTimer);
  }, []);

  useEffect(() => {
    if (phase !== 'welcome') return;
    let i = 0;
    const t = setInterval(() => {
      if (i <= fullWelcome.length) {
        setWelcomeText(fullWelcome.slice(0, i));
        i++;
      } else {
        clearInterval(t);
        setTimeout(() => {
          setPhase('fadeout');
          setTimeout(onComplete, 900);
        }, 1200);
      }
    }, 60);
    return () => clearInterval(t);
  }, [phase, onComplete]);

  return (
    <div className={`${styles.loader} ${phase === 'fadeout' ? styles.fadeOut : ''}`}>
      {/* Animated background rings */}
      <div className={styles.rings}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.ring} style={{ '--i': i }} />
        ))}
      </div>

      {/* HUD scan line */}
      <div className={styles.scanLine} />

      {/* Corner decorations */}
      <div className={`${styles.corner} ${styles.tl}`} />
      <div className={`${styles.corner} ${styles.tr}`} />
      <div className={`${styles.corner} ${styles.bl}`} />
      <div className={`${styles.corner} ${styles.br}`} />

      {/* Center arc reactor */}
      <div className={styles.centerPiece}>
        <div className={styles.arcOuter}>
          <div className={styles.arcMid}>
            <div className={styles.arcInner}>
              <div className={styles.arcCore}>
                <span>J</span>
              </div>
            </div>
          </div>
        </div>
        {/* Rotating lines */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.hueLine} style={{ '--r': `${i * 45}deg` }} />
        ))}
      </div>

      {/* Terminal output */}
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <span className={styles.dot} style={{ background: '#E23636' }} />
          <span className={styles.dot} style={{ background: '#F5C518' }} />
          <span className={styles.dot} style={{ background: '#00FF88' }} />
          <span className={styles.termTitle}>JARVIS — SYSTEM BOOT</span>
        </div>
        <div className={styles.terminalBody}>
          {lines.map((line, i) => (
            <div key={i} className={styles.termLine}>
              <span className={styles.prompt}>&gt;&gt;</span>
              <span className={styles.lineText}>{line}</span>
            </div>
          ))}
          {lines.length < bootLines.length && (
            <div className={styles.termLine}>
              <span className={styles.prompt}>&gt;&gt;</span>
              <span className={styles.cursor}>█</span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className={styles.progressWrap}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }}>
            <div className={styles.progressGlow} />
          </div>
          <span className={styles.progressText}>{progress}%</span>
        </div>
      </div>

      {/* Welcome text */}
      {phase === 'welcome' && (
        <div className={styles.welcomeWrap}>
          <div className={styles.welcomeSub}>STARK INDUSTRIES — AI DIVISION</div>
          <h1 className={styles.welcomeText}>
            {welcomeText}
            <span className={styles.welcomeCursor}>|</span>
          </h1>
          <div className={styles.welcomeTagline}>YOUR PERSONAL AI INTELLIGENCE INTERFACE</div>
        </div>
      )}

      {/* Top HUD stats */}
      <div className={styles.hudTop}>
        <div className={styles.hudStat}>
          <span className={styles.hudLabel}>SYS</span>
          <span className={styles.hudVal}>ONLINE</span>
        </div>
        <div className={styles.hudStat}>
          <span className={styles.hudLabel}>CORE</span>
          <span className={styles.hudVal}>ACTIVE</span>
        </div>
        <div className={styles.hudStat}>
          <span className={styles.hudLabel}>SHIELD</span>
          <span className={styles.hudVal}>MAX</span>
        </div>
      </div>
    </div>
  );
};

export default JarvisLoader;
