import { useState } from 'react';
import axios from 'axios';

const accentColor = '#7c8cff';

const contactItems = [
  { label: 'Phone', value: '0753334782 / 0777456146', href: 'tel:0753334782', icon: PhoneIcon },
  { label: 'Location', value: 'No.223/1\'s/Suprime Terrace, Kurukulawa, Ragama, 11010 Ragama', href: 'https://maps.google.com/', icon: LocationIcon },
  { label: 'GitHub', value: 'ChenulRandiya10', href: 'https://github.com/ChenulRandiya10', icon: GitHubIcon },
  { label: 'LinkedIn', value: 'chenul-randiya-382aa8293', href: 'https://linkedin.com/in/chenul-randiya-382aa8293', icon: LinkedInIcon },
  { label: 'Email', value: 'chenulrandiya10@gmail.com', href: 'mailto:chenulrandiya10@gmail.com', icon: MailIcon },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ChenulRandiya10', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/chenul-randiya-382aa8293', icon: LinkedInIcon },
];

function IconShell({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function PhoneIcon() {
  return (
    <IconShell>
      <path d="M7.5 4.5h2.2c.5 0 .9.3 1.1.8l.9 2.7c.2.5 0 1.1-.4 1.4l-1.4 1.2c1 2 2.7 3.7 4.7 4.7l1.2-1.4c.4-.4.9-.6 1.4-.4l2.7.9c.5.2.8.6.8 1.1v2.2c0 .6-.4 1.1-1 1.2-9.3 1.3-16.7-6.1-15.4-15.4.1-.6.6-1 1.2-1Z" />
    </IconShell>
  );
}

function LocationIcon() {
  return (
    <IconShell>
      <path d="M12 20s5-4.2 5-10a5 5 0 1 0-10 0c0 5.8 5 10 5 10Z" />
      <circle cx="12" cy="10" r="2" />
    </IconShell>
  );
}

function GitHubIcon() {
  return (
    <IconShell>
      <path d="M9 19c-4.2 1.5-4.2-1.9-5.9-2.4" />
      <path d="M15 22v-3.2c0-.9.3-1.6.8-2.1-2.7.3-5.5-1.2-5.5-4.3 0-1 .4-2 1.1-2.8-.1-.3-.5-1.3.1-2.6 0 0 .9-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.3.2 2.3.1 2.6.7.8 1.1 1.8 1.1 2.8 0 3.1-2.8 4.6-5.5 4.3.5.5.8 1.3.8 2.4V22" />
      <path d="M9 19c0 1-.6 1.8-2.1 1.8" />
    </IconShell>
  );
}

function LinkedInIcon() {
  return (
    <IconShell>
      <rect x="4.5" y="9" width="3" height="10" rx="1" />
      <circle cx="6" cy="6.2" r="1.4" />
      <path d="M11 19V9h3v1.7c.6-1.1 1.7-1.9 3.3-1.9 2.5 0 4.2 1.6 4.2 5V19h-3v-4.6c0-1.8-.7-2.7-2-2.7-1.4 0-2.5 1-2.5 3V19h-3Z" />
    </IconShell>
  );
}

function MailIcon() {
  return (
    <IconShell>
      <rect x="4.5" y="6.5" width="15" height="11" rx="2" />
      <path d="m5.5 8.5 6.5 5 6.5-5" />
    </IconShell>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      await axios.post('/api/contact', form);
      setStatus('Message sent successfully.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    section: {
      padding: '5rem 1.5rem 4rem',
      background: 'linear-gradient(180deg, #0b1224 0%, #0f172a 100%)',
      color: '#e5e7eb',
      scrollMarginTop: '80px',
    },
    container: {
      width: 'min(1120px, 100%)',
      margin: '0 auto',
    },
    eyebrow: {
      textAlign: 'center',
      color: accentColor,
      fontSize: '0.85rem',
      fontWeight: 700,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      marginBottom: '0.9rem',
    },
    heading: {
      margin: 0,
      textAlign: 'center',
      fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
      lineHeight: 1.05,
      color: '#f8fafc',
    },
    intro: {
      maxWidth: '760px',
      margin: '1rem auto 0',
      textAlign: 'center',
      color: '#cbd5e1',
      fontSize: '1.02rem',
      lineHeight: 1.7,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.95fr)',
      gap: '1.5rem',
      marginTop: '3.5rem',
      alignItems: 'start',
    },
    left: { paddingTop: '0.4rem' },
    sectionTitle: {
      margin: '0 0 1rem',
      fontSize: '1.4rem',
      color: '#f8fafc',
    },
    bodyText: {
      margin: 0,
      maxWidth: '560px',
      color: '#cbd5e1',
      lineHeight: 1.75,
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '0.9rem',
      marginTop: '1.8rem',
    },
    infoCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      minHeight: '96px',
      padding: '1rem 1.1rem',
      borderRadius: '14px',
      border: '1px solid rgba(148, 163, 184, 0.18)',
      background: 'rgba(15, 23, 42, 0.65)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.18)',
      textDecoration: 'none',
      color: '#f8fafc',
      transition: 'transform 160ms ease, border-color 160ms ease, background 160ms ease',
    },
    infoIcon: {
      width: '3rem',
      height: '3rem',
      borderRadius: '999px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: accentColor,
      background: 'rgba(124, 140, 255, 0.15)',
    },
    infoLabel: {
      display: 'block',
      fontSize: '0.82rem',
      fontWeight: 700,
      color: '#cbd5e1',
      marginBottom: '0.25rem',
    },
    infoValue: {
      display: 'block',
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.35,
      color: '#f8fafc',
    },
    fullInfoCard: { gridColumn: '1 / -1' },
    followTitle: {
      margin: '2rem 0 0.9rem',
      fontSize: '1.15rem',
      color: '#f8fafc',
    },
    followRow: {
      display: 'flex',
      gap: '0.85rem',
      alignItems: 'center',
    },
    socialLink: {
      width: '44px',
      height: '44px',
      borderRadius: '999px',
      border: '1px solid rgba(148, 163, 184, 0.16)',
      background: 'rgba(15, 23, 42, 0.65)',
      color: '#e2e8f0',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      transition: 'transform 160ms ease, border-color 160ms ease, background 160ms ease, color 160ms ease',
    },
    formCard: {
      borderRadius: '18px',
      border: '1px solid rgba(148, 163, 184, 0.18)',
      background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.18) 0%, rgba(15, 23, 42, 0.94) 14%, rgba(15, 23, 42, 0.96) 100%)',
      boxShadow: '0 24px 70px rgba(0, 0, 0, 0.34)',
      padding: '1.45rem',
    },
    formTop: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '0.8rem',
      alignItems: 'center',
      marginBottom: '1.5rem',
    },
    formHeading: {
      margin: 0,
      fontSize: '1.5rem',
      color: '#f8fafc',
    },
    badge: {
      padding: '0.7rem 1rem',
      borderRadius: '999px',
      background: 'rgba(255, 255, 255, 0.08)',
      color: '#e2e8f0',
      fontSize: '0.85rem',
      fontWeight: 700,
    },
    formNote: {
      margin: '0 0 1.3rem',
      color: '#cbd5e1',
      fontSize: '0.95rem',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '1rem',
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.55rem',
    },
    label: {
      fontSize: '0.92rem',
      color: '#e2e8f0',
      fontWeight: 600,
    },
    input: {
      width: '100%',
      borderRadius: '12px',
      border: '1px solid rgba(148, 163, 184, 0.16)',
      background: 'rgba(51, 65, 85, 0.85)',
      color: '#f8fafc',
      padding: '0.95rem 1rem',
      outline: 'none',
      fontSize: '0.98rem',
      boxSizing: 'border-box',
    },
    textarea: { minHeight: '165px', resize: 'vertical' },
    fullWidth: { gridColumn: '1 / -1' },
    actions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      marginTop: '1.25rem',
      flexWrap: 'wrap',
    },
    button: {
      border: 'none',
      borderRadius: '12px',
      background: accentColor,
      color: '#fff',
      padding: '0.95rem 1.4rem',
      fontSize: '0.95rem',
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: '0 12px 30px rgba(124, 140, 255, 0.24)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.55rem',
      transition: 'transform 160ms ease, box-shadow 160ms ease, filter 160ms ease, background 160ms ease',
    },
    helper: {
      color: '#cbd5e1',
      fontSize: '0.92rem',
      textAlign: 'right',
      flex: '1 1 220px',
    },
    status: {
      marginTop: '1rem',
      minHeight: '1.5rem',
      color: accentColor,
      fontWeight: 600,
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.eyebrow}>GET IN TOUCH</div>
        <h2 style={styles.heading}>Let&apos;s Work Together</h2>
        <p style={styles.intro}>
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me through the form below or connect with me on social media.
        </p>

        <div style={styles.grid}>
          <div style={styles.left}>
            <h3 style={styles.sectionTitle}>Contact Information</h3>
            <p style={styles.bodyText}>
              I&apos;m open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels:
            </p>

            <div style={styles.infoGrid}>
              {contactItems.map(({ label, value, href, icon: Icon }, index) => {
                const cardStyle = index === contactItems.length - 1 ? { ...styles.infoCard, ...styles.fullInfoCard } : styles.infoCard;

                return (
                  <a
                    key={label}
                    href={href}
                    style={cardStyle}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <span style={styles.infoIcon}>
                      <Icon />
                    </span>
                    <span>
                      <span style={styles.infoLabel}>{label}</span>
                      <span style={styles.infoValue}>{value}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <h3 style={styles.followTitle}>Follow Me</h3>
            <div style={styles.followRow}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} style={styles.socialLink}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} style={styles.formCard}>
            <div style={styles.formTop}>
              <div>
                <h3 style={styles.formHeading}>Send Me a Message</h3>
                <p style={styles.formNote}>Fields marked with * are required.</p>
              </div>
              <div style={styles.badge}>Reply within 24-48 hours</div>
            </div>

            <div style={styles.formGrid}>
              <label style={styles.field}>
                <span style={styles.label}>Name *</span>
                <input style={styles.input} placeholder="Your name" value={form.name} onChange={handleChange('name')} required />
              </label>

              <label style={styles.field}>
                <span style={styles.label}>Email *</span>
                <input style={styles.input} type="email" placeholder="your.email@example.com" value={form.email} onChange={handleChange('email')} required />
              </label>

              <label style={{ ...styles.field, ...styles.fullWidth }}>
                <span style={styles.label}>Subject (Optional)</span>
                <input style={styles.input} placeholder="What&apos;s this about?" value={form.subject} onChange={handleChange('subject')} />
              </label>

              <label style={{ ...styles.field, ...styles.fullWidth }}>
                <span style={styles.label}>Message *</span>
                <textarea
                  style={{ ...styles.input, ...styles.textarea }}
                  placeholder="How can I help you?"
                  value={form.message}
                  onChange={handleChange('message')}
                  required
                />
              </label>
            </div>

            <div style={styles.actions}>
              <button
                type="submit"
                style={styles.button}
                disabled={isSubmitting}
                onMouseEnter={(event) => {
                  if (!isSubmitting) {
                    event.currentTarget.style.transform = 'translateY(-2px)';
                    event.currentTarget.style.boxShadow = '0 16px 34px rgba(124, 140, 255, 0.34)';
                    event.currentTarget.style.filter = 'brightness(1.05)';
                  }
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = 'none';
                  event.currentTarget.style.boxShadow = '0 12px 30px rgba(124, 140, 255, 0.24)';
                  event.currentTarget.style.filter = 'none';
                }}
              >
                <MailIcon />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              <div style={styles.helper}>I&apos;ll get back to you within 24-48 hours</div>
            </div>

            <div role="status" aria-live="polite" style={styles.status}>
              {status}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}