import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const [typed, setTyped] = useState('');
  const full = 'AI ENGINEER · FOUNDER · INNOVATOR';
  const canvasRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= full.length) { setTyped(full.slice(0, i)); i++; }
      else { clearInterval(t); }
    }, 60);
    return () => clearInterval(t);
  }, []);

  // HUD canvas rings
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let angle = 0;

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw rotating HUD rings
      const rings = [
        { r: 200, color: 'rgba(0,191,255,0.3)', dash: [20, 10], speed: 0.3 },
        { r: 260, color: 'rgba(226,54,54,0.2)', dash: [5, 15], speed: -0.2 },
        { r: 320, color: 'rgba(245,197,24,0.15)', dash: [30, 8], speed: 0.15 },
        { r: 380, color: 'rgba(0,191,255,0.1)', dash: [10, 20], speed: -0.1 },
      ];

      rings.forEach((ring, i) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle * ring.speed);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1;
        ctx.setLineDash(ring.dash);
        ctx.shadowColor = ring.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.stroke();

        // Tick marks
        for (let t = 0; t < 360; t += 30) {
          const rad = (t * Math.PI) / 180;
          const inner = ring.r - 8;
          const outer = ring.r + 2;
          ctx.beginPath();
          ctx.moveTo(Math.cos(rad) * inner, Math.sin(rad) * inner);
          ctx.lineTo(Math.cos(rad) * outer, Math.sin(rad) * outer);
          ctx.stroke();
        }
        ctx.restore();
      });

      // Cross hairs
      ctx.save();
      ctx.strokeStyle = 'rgba(0,191,255,0.15)';
      ctx.lineWidth = 0.5;
      ctx.setLineDash([4, 8]);
      ctx.beginPath(); ctx.moveTo(cx - 400, cy); ctx.lineTo(cx + 400, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - 400); ctx.lineTo(cx, cy + 400); ctx.stroke();
      ctx.restore();

      angle += 0.005;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.hudCanvas} />

      {/* Corner decorations */}
      {['tl','tr','bl','br'].map(c => (
        <div key={c} className={`${styles.corner} ${styles[c]}`} />
      ))}

      {/* HUD side panels */}
      <div className={styles.hudLeft}>
        {['NEURAL NET','AI CORE','DATA OPS','STARTUP'].map((label, i) => (
          <div key={i} className={styles.hudItem}>
            <span className={styles.hudItemLabel}>{label}</span>
            <div className={styles.hudItemBar}>
              <motion.div
                className={styles.hudItemFill}
                initial={{ width: 0 }}
                animate={{ width: `${[90, 85, 80, 75][i]}%` }}
                transition={{ delay: 1 + i * 0.2, duration: 1.2 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.hudRight}>
        <div className={styles.hudDataBox}>
          <div className={styles.hudDataRow}><span>ID</span><span>BHAVANI SHANKAR</span></div>
          <div className={styles.hudDataRow}><span>ROLE</span><span>AI ENGINEER</span></div>
          <div className={styles.hudDataRow}><span>STATUS</span><span className={styles.active}>ACTIVE</span></div>
          <div className={styles.hudDataRow}><span>LEVEL</span><span>AVENGER</span></div>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <motion.div
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className={styles.tagDot} />
          STARK INDUSTRIES — AI DIVISION
        </motion.div>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className={styles.nameFirst}>DASARI</span>
          <span className={styles.nameLast}>BHAVANI SHANKAR</span>
        </motion.h1>

        <motion.div
          className={styles.role}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span className={styles.roleText}>{typed}</span>
          <span className={styles.roleCursor}>|</span>
        </motion.div>

        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          Building intelligent systems that bridge AI research and real-world impact.
          Founder of Shankar's LumenEdge. B.Tech AI & Data Science.
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <button className={styles.btnPrimary} onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} data-hover>
            <span className={styles.btnGlow} />
            <i className="fas fa-folder-open" /> VIEW MISSIONS
          </button>
          <button className={styles.btnSecondary} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} data-hover>
            <i className="fas fa-satellite-dish" /> OPEN CHANNEL
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[['1+','STARTUP'],['2+','PROJECTS'],['AI','DOMAIN'],['∞','IDEAS']].map(([val, label], i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statVal}>{val}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Arc reactor decoration */}
      <div className={styles.arcWrap}>
        <div className={styles.arcRing1} />
        <div className={styles.arcRing2} />
        <div className={styles.arcRing3} />
        <div className={styles.arcCenter}>
          <div className={styles.arcCore} />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className={styles.scrollLine} />
        <span>SCROLL</span>
      </motion.div>
    </section>
  );
};

export default Hero;
