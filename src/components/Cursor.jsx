import React, { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const [sparks, setSparks] = useState([]);
  const posRef = useRef({ x: 0, y: 0 });
  const sparkId = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      posRef.current = { x, y };

      if (cursorRef.current) {
        cursorRef.current.style.left = x + 'px';
        cursorRef.current.style.top = y + 'px';
      }
      setTimeout(() => {
        if (trailRef.current) {
          trailRef.current.style.left = x + 'px';
          trailRef.current.style.top = y + 'px';
        }
      }, 80);
    };

    const onClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const id = sparkId.current++;
      const count = 12;
      const newSparks = Array.from({ length: count }, (_, i) => ({
        id: `${id}-${i}`,
        x,
        y,
        angle: (360 / count) * i,
        len: 30 + Math.random() * 60,
      }));
      setSparks(prev => [...prev, ...newSparks]);
      setTimeout(() => {
        setSparks(prev => prev.filter(s => !newSparks.find(ns => ns.id === s.id)));
      }, 700);
    };

    const onHover = (e) => {
      const isHoverable = e.target.closest('a, button, [data-hover]');
      if (cursorRef.current) {
        cursorRef.current.style.transform = isHoverable
          ? 'translate(-50%, -50%) scale(1.5) rotate(15deg)'
          : 'translate(-50%, -50%) scale(1) rotate(0deg)';
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);
    window.addEventListener('mouseover', onHover);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('mouseover', onHover);
    };
  }, []);

  return (
    <>
      {/* Mjolnir cursor */}
      <div ref={cursorRef} className={styles.cursor}>
        <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="60">
          {/* Handle */}
          <rect x="17" y="32" width="6" height="24" rx="2" fill="#8B7355" stroke="#C4A962" strokeWidth="0.5"/>
          {/* Leather wrap */}
          <rect x="17.5" y="38" width="5" height="2" rx="0.5" fill="#6B5535" opacity="0.8"/>
          <rect x="17.5" y="43" width="5" height="2" rx="0.5" fill="#6B5535" opacity="0.8"/>
          <rect x="17.5" y="48" width="5" height="2" rx="0.5" fill="#6B5535" opacity="0.8"/>
          {/* Strap loop */}
          <ellipse cx="20" cy="56" rx="3" ry="2" fill="#6B5535" stroke="#C4A962" strokeWidth="0.5"/>
          {/* Hammer head */}
          <rect x="5" y="10" width="30" height="24" rx="3" fill="url(#hammerGrad)" stroke="#8ABFFF" strokeWidth="1"/>
          {/* Top detail */}
          <rect x="9" y="10" width="22" height="3" rx="1.5" fill="#7090D0" opacity="0.6"/>
          {/* Side details */}
          <rect x="5" y="16" width="4" height="12" rx="1" fill="#5070B0" opacity="0.6"/>
          <rect x="31" y="16" width="4" height="12" rx="1" fill="#5070B0" opacity="0.6"/>
          {/* Rune engraving */}
          <text x="20" y="25" textAnchor="middle" fontSize="8" fill="#00BFFF" opacity="0.8" fontFamily="serif">ᚦ</text>
          {/* Glow overlay */}
          <rect x="5" y="10" width="30" height="24" rx="3" fill="url(#glowGrad)" opacity="0.3"/>
          <defs>
            <linearGradient id="hammerGrad" x1="5" y1="10" x2="35" y2="34" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9BB5E8"/>
              <stop offset="50%" stopColor="#6090C8"/>
              <stop offset="100%" stopColor="#3060A0"/>
            </linearGradient>
            <radialGradient id="glowGrad" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#00BFFF" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
        <div className={styles.cursorGlow}/>
      </div>

      {/* Trail ring */}
      <div ref={trailRef} className={styles.trail}/>

      {/* Lightning sparks on click */}
      {sparks.map(spark => (
        <div
          key={spark.id}
          className={styles.spark}
          style={{
            left: spark.x,
            top: spark.y,
            '--angle': `${spark.angle}deg`,
            '--len': `${spark.len}px`,
          }}
        />
      ))}
    </>
  );
};

export default Cursor;
