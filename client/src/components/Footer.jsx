import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];
  const socialLinks = [
    { href: 'mailto:chenulrandiya10@gmail.com', label: 'Email', icon: FaEnvelope },
    { href: 'https://github.com/ChenulRandiya10', label: 'GitHub', icon: FaGithub },
    { href: 'https://www.linkedin.com/in/chenul-randiya-marasinghe-382aa8293', label: 'LinkedIn', icon: FaLinkedinIn },
  ];

  return (
    <footer style={{ background: '#0b1220', color: '#e5e7eb', borderTop: '1px solid rgba(148, 163, 184, 0.14)' }}>
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '2.5rem 1.5rem 1.4rem',
          display: 'grid',
          gap: '1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h2 style={{ margin: 0, color: '#f8fafc', fontSize: '1.35rem', lineHeight: 1.2 }}>
              Chenul Randiya Marasinghe
            </h2>
            <p style={{ margin: '0.5rem 0 0', color: '#94a3b8', lineHeight: 1.6 }}>
              Information Technology undergraduate focused on full-stack development, automation, and clean digital experiences.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.10)',
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(148, 163, 184, 0.12)',
            paddingTop: '1.1rem',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            color: '#94a3b8',
            fontSize: '0.92rem',
          }}
        >
          <p style={{ margin: 0 }}>Copyright {year} Chenul Randiya Marasinghe. All rights reserved.</p>
          <nav aria-label="Footer navigation" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 600 }}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
