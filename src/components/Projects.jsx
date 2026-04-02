import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css';

const projects = [
  {
    id: '01',
    title: 'Fingerprint Voting System',
    subtitle: 'BIOMETRIC SECURITY MISSION',
    desc: 'A biometric-based secure voting system leveraging fingerprint authentication to eliminate electoral fraud. Real-time verification with encrypted vote ledger and tamper-proof audit trail.',
    tags: ['Python', 'Biometrics', 'Security', 'AI', 'Database'],
    icon: 'fas fa-fingerprint',
    color: '#E23636',
    glow: 'rgba(226,54,54,0.4)',
    status: 'COMPLETED',
    link: '#',
  },
  {
    id: '02',
    title: 'AI Smart Assist Device',
    subtitle: 'NEURAL INTERFACE PROJECT',
    desc: 'An intelligent assistant device powered by AI that processes natural language commands, provides context-aware responses, and integrates with IoT sensors for smart environment control.',
    tags: ['Python', 'NLP', 'IoT', 'TensorFlow', 'API'],
    icon: 'fas fa-robot',
    color: '#00BFFF',
    glow: 'rgba(0,191,255,0.4)',
    status: 'IN PROGRESS',
    link: '#',
  },
  {
    id: '03',
    title: 'Portfolio Website',
    subtitle: 'DIGITAL IDENTITY SYSTEM',
    desc: 'A cinematic Marvel-themed personal portfolio with JARVIS boot loader, custom Mjolnir cursor, animated skill bars, 3D project cards, and Doctor Strange portal transitions.',
    tags: ['React', 'Framer Motion', 'CSS', 'Vite', 'Canvas API'],
    icon: 'fas fa-globe',
    color: '#9D00FF',
    glow: 'rgba(157,0,255,0.4)',
    status: 'LIVE',
    link: '#',
  },
  {
    id: '04',
    title: 'LumenEdge Platform',
    subtitle: 'STARTUP VENTURE',
    desc: "Shankar's LumenEdge — an AI-first startup building intelligent automation tools for businesses. End-to-end product from ideation to deployment, spanning AI consulting and SaaS.",
    tags: ['AI', 'Business', 'Strategy', 'ML', 'SaaS'],
    icon: 'fas fa-lightbulb',
    color: '#F5C518',
    glow: 'rgba(245,197,24,0.4)',
    status: 'ACTIVE',
    link: '#',
  },
];

const statusColors = {
  'COMPLETED': '#00FF88',
  'IN PROGRESS': '#F5C518',
  'LIVE': '#00BFFF',
  'ACTIVE': '#E23636',
};

const ProjectCard = ({ project, index, inView }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 + 0.2, duration: 0.7, ease: [0.4,0,0.2,1] }}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        className={styles.card}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          '--glow': project.glow,
          '--color': project.color,
          boxShadow: hovered
            ? `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${project.glow}, inset 0 0 30px rgba(0,0,0,0.3)`
            : '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        {/* Card glow edge */}
        <div className={styles.cardEdge} style={{ background: `linear-gradient(180deg, ${project.color}, transparent)` }} />

        {/* Header */}
        <div className={styles.cardHead}>
          <div className={styles.cardIcon} style={{ color: project.color, boxShadow: `0 0 20px ${project.glow}` }}>
            <i className={project.icon} />
          </div>
          <div className={styles.cardNumWrap}>
            <span className={styles.cardNum}>{project.id}</span>
          </div>
          <div className={styles.cardStatus} style={{ color: statusColors[project.status], borderColor: `${statusColors[project.status]}33` }}>
            <span className={styles.statusDot} style={{ background: statusColors[project.status], boxShadow: `0 0 8px ${statusColors[project.status]}` }} />
            {project.status}
          </div>
        </div>

        {/* Body */}
        <div className={styles.cardBody}>
          <div className={styles.cardSubtitle}>{project.subtitle}</div>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardDesc}>{project.desc}</p>
        </div>

        {/* Tags */}
        <div className={styles.cardTags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag} style={{ borderColor: `${project.color}33`, color: project.color }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.cardFoot}>
          <a href={project.link} className={styles.viewBtn} data-hover style={{ '--color': project.color, '--glow': project.glow }}>
            <span className={styles.viewBtnGlow} />
            <i className="fas fa-external-link-alt" />
            VIEW PROJECT
          </a>
          <div className={styles.cardLines}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className={styles.cardLine} style={{ opacity: hovered ? 1 : 0, animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>

        {/* Holographic shimmer overlay */}
        <div className={`${styles.shimmer} ${hovered ? styles.shimmerActive : ''}`} />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLabel}>
          <span className={styles.labelLine} />
          03 — AVENGERS MISSION LOG
        </div>
        <h2 className={styles.headerTitle}>
          MY <span className={styles.accent}>PROJECTS</span>
        </h2>
        <p className={styles.headerSub}>HOVER CARDS TO ACTIVATE 3D HOLOGRAPHIC DISPLAY</p>
      </div>

      <div ref={ref} className={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
