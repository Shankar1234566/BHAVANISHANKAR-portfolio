import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Contact.module.css';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 6000);
  };

  const contacts = [
    { icon: 'fas fa-envelope', label: 'EMAIL', val: 'bhavani525762@gmail.com', color: '#E23636' },
    { icon: 'fab fa-linkedin', label: 'LINKEDIN', val: 'linkedin.com/in/bhavani-shankar', color: '#00BFFF' },
    { icon: 'fab fa-github', label: 'GITHUB', val: 'github.com/bhavani-shankar', color: '#9D00FF' },
    { icon: 'fas fa-phone', label: 'PHONE', val: '+91 8186871124', color: '#00FF88' },
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bgGlow} />

      <div className={styles.header}>
        <div className={styles.headerLabel}>
          <span className={styles.labelLine} />
          04 — OPEN CHANNEL
        </div>
        <h2 className={styles.headerTitle}>
          CONTACT <span className={styles.accent}>ME</span>
        </h2>
        <p className={styles.headerSub}>ESTABLISH SECURE TRANSMISSION · AVENGERS NETWORK</p>
      </div>

      <motion.div
        ref={ref}
        className={styles.grid}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Contact info */}
        <div className={styles.infoPanel}>
          <div className={styles.infoTitle}>SECURE CHANNELS</div>
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              className={styles.contactItem}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
              style={{ '--c': c.color }}
              data-hover
            >
              <div className={styles.contactIcon} style={{ color: c.color, borderColor: `${c.color}44`, boxShadow: `0 0 15px ${c.color}33` }}>
                <i className={c.icon} />
              </div>
              <div>
                <div className={styles.contactLabel}>{c.label}</div>
                <div className={styles.contactVal}>{c.val}</div>
              </div>
              <div className={styles.contactArrow}>
                <i className="fas fa-chevron-right" style={{ color: c.color }} />
              </div>
            </motion.div>
          ))}

          {/* Status board */}
          <div className={styles.statusBoard}>
            <div className={styles.statusTitle}>MISSION AVAILABILITY</div>
            {[
              { label: 'Internships', val: 'OPEN', color: '#00FF88' },
              { label: 'Collaborations', val: 'OPEN', color: '#00FF88' },
              { label: 'Freelance', val: 'OPEN', color: '#F5C518' },
              { label: 'Full-time', val: 'EXPLORING', color: '#00BFFF' },
            ].map(s => (
              <div key={s.label} className={styles.statusRow}>
                <span className={styles.statusRowLabel}>{s.label}</span>
                <span className={styles.statusRowVal} style={{ color: s.color }}>
                  <span className={styles.statusDot} style={{ background: s.color }} />
                  {s.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className={styles.formPanel}>
          <div className={styles.formHeader}>
            <div className={styles.formDot} />
            <span>SECURE TRANSMISSION FORM</span>
          </div>

          {sent ? (
            <motion.div
              className={styles.successMsg}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <i className="fas fa-check-circle" style={{ fontSize: 32, color: '#00FF88', marginBottom: 12 }} />
              <div className={styles.successTitle}>TRANSMISSION SENT</div>
              <div className={styles.successSub}>Message received. I'll respond within 24 hours, Agent.</div>
            </motion.div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.formRow}>
                <div className={`${styles.formGroup} ${focused === 'name' ? styles.focused : ''}`}>
                  <label className={styles.formLabel}>YOUR NAME</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    placeholder="Agent Name..."
                    className={styles.formInput}
                  />
                  <div className={styles.inputBorder} />
                </div>
                <div className={`${styles.formGroup} ${focused === 'email' ? styles.focused : ''}`}>
                  <label className={styles.formLabel}>YOUR EMAIL</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    placeholder="agent@shield.com"
                    className={styles.formInput}
                  />
                  <div className={styles.inputBorder} />
                </div>
              </div>

              <div className={`${styles.formGroup} ${focused === 'subject' ? styles.focused : ''}`}>
                <label className={styles.formLabel}>SUBJECT</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                  placeholder="Mission briefing..."
                  className={styles.formInput}
                />
                <div className={styles.inputBorder} />
              </div>

              <div className={`${styles.formGroup} ${focused === 'message' ? styles.focused : ''}`}>
                <label className={styles.formLabel}>MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  placeholder="Your secure message to Agent Bhavani Shankar..."
                  rows={5}
                  className={styles.formInput}
                  style={{ resize: 'none' }}
                />
                <div className={styles.inputBorder} />
              </div>

              <button type="submit" className={styles.submitBtn} data-hover>
                <span className={styles.submitGlow} />
                <i className="fas fa-paper-plane" />
                SEND TRANSMISSION
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
