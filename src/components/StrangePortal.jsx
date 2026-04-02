import React, { useEffect, useRef } from 'react';
import styles from './StrangePortal.module.css';

const StrangePortal = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200;
    };

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rings = [
        { r: 60, speed: 1, color: '#9D00FF', dash: [8, 4] },
        { r: 75, speed: -0.8, color: '#FF6600', dash: [4, 8] },
        { r: 90, speed: 1.2, color: '#FFD700', dash: [12, 4] },
        { r: 105, speed: -0.6, color: '#9D00FF', dash: [3, 12] },
      ];

      rings.forEach(ring => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * ring.speed * 0.02);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.7;
        ctx.setLineDash(ring.dash);
        ctx.shadowColor = ring.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      // Spark particles along rings
      for (let i = 0; i < 8; i++) {
        const angle = (t * 0.03 + i * (Math.PI * 2 / 8));
        const r = 82 + Math.sin(t * 0.05 + i) * 15;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = i % 2 === 0 ? '#FF6600' : '#FFD700';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Center glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
      grad.addColorStop(0, 'rgba(157,0,255,0.3)');
      grad.addColorStop(0.5, 'rgba(255,102,0,0.15)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, 50, 0, Math.PI * 2);
      ctx.fill();

      t++;
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={styles.portalWrap}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.label}>DR. STRANGE DIMENSIONAL RIFT</div>
    </div>
  );
};

export default StrangePortal;
