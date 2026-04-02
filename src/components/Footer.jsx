import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.topLine} />
    <div className={styles.inner}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <div className={styles.shield}><span>BS</span></div>
          <span className={styles.logoText}>BHAVANI SHANKAR</span>
        </div>
        <p className={styles.powered}>Powered by React + Vite | Bhavani Shankar</p>
        <p className={styles.copy}>© 2025 Dasari Bhavani Shankar. All rights reserved.</p>
      </div>

      <div className={styles.center}>
        <div className={styles.arc}>
          {[...Array(3)].map((_,i) => <div key={i} className={styles.arcRing} style={{'--ri':i}} />)}
          <div className={styles.arcCore} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.socialRow}>
          { icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com/Shankar1234566' },
{ icon: 'fab fa-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dasari-bhavani-shankar/' },
{ icon: 'fas fa-envelope', label: 'Email', href: 'mailto:bhavani525762@gmail.com' },
{ icon: 'fas fa-code', label: 'CodeChef', href: 'https://www.codechef.com/dashboard?college-user=true' },
          ].map(s => (
            <a key={s.label} href={s.href} className={styles.social} title={s.label} data-hover>
              <i className={s.icon} />
            </a>
          ))}
        </div>
        <div className={styles.status}>
          <span className={styles.statusDot} />
          ALL SYSTEMS OPERATIONAL
        </div>
      </div>
    </div>
    <div className={styles.scanLine} />
  </footer>
);

export default Footer;
