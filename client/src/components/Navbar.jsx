import { useEffect, useState } from 'react';

const accentColor = '#7c8cff';

const navItems = [
  { href: '#home', label: 'Home', icon: HomeIcon },
  { href: '#about', label: 'About', icon: UserIcon },
  { href: '#work-experience', label: 'Work Experience', icon: BriefcaseIcon },
  { href: '#education-qualifications', label: 'Education & Qualifications', icon: GraduationIcon },
  { href: '#skills', label: 'Skills', icon: SkillsIcon },
  { href: '#projects', label: 'Projects', icon: FolderIcon },
  { href: '#contact', label: 'Contact', icon: MailIcon },
];

const socialItems = [
  { href: 'https://github.com/ChenulRandiya10', label: 'GitHub', icon: GitHubIcon },
  { href: 'https://linkedin.com/in/chenul-randiya-382aa8293', label: 'LinkedIn', icon: LinkedInIcon },
];

function IconShell({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function HomeIcon() {
  return (
    <IconShell>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6.5 10.5V20h11V10.5" />
      <path d="M10 20v-5h4v5" />
    </IconShell>
  );
}

function UserIcon() {
  return (
    <IconShell>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20c1.6-3.5 4.1-5.2 6.5-5.2S16.9 16.5 18.5 20" />
    </IconShell>
  );
}

function BriefcaseIcon() {
  return (
    <IconShell>
      <rect x="4.5" y="7.5" width="15" height="12" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M4.5 12h15" />
    </IconShell>
  );
}

function GraduationIcon() {
  return (
    <IconShell>
      <path d="m12 4 8 4.5-8 4.5-8-4.5L12 4Z" />
      <path d="M6 10v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" />
      <path d="M20 9.5V15" />
    </IconShell>
  );
}

function SkillsIcon() {
  return (
    <IconShell>
      <path d="m8.5 4 7 16" />
      <path d="m15.5 4-7 16" />
      <path d="M6 9h12" />
      <path d="M5 15h14" />
    </IconShell>
  );
}

function FolderIcon() {
  return (
    <IconShell>
      <path d="M4.5 7.5A2.5 2.5 0 0 1 7 5h3l2 2h6a1.5 1.5 0 0 1 1.5 1.5v8A2.5 2.5 0 0 1 17 19H7A2.5 2.5 0 0 1 4.5 16.5v-9Z" />
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

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const headerOffset = 80; // should match scroll-padding-top

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const activationOffset = headerOffset;

    const updateActiveSection = () => {
      let currentSection = sectionIds[0] || 'home';
      const scrollPosition = window.scrollY + activationOffset;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) {
          continue;
        }

        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= elementTop) {
          currentSection = id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    // When the URL hash changes (e.g., user clicks an anchor or navigates), ensure active section updates
    const onHashChange = () => {
      const id = window.location.hash.replace('#', '');
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        background: 'rgba(15, 23, 42, 0.92)',
        color: '#fff',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: 'min(100%, 980px)',
          borderRadius: '999px',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          background: 'rgba(15, 23, 42, 0.92)',
          boxShadow: '0 18px 50px rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(14px)',
          padding: '0.75rem 0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.9rem',
          pointerEvents: 'auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          {navItems.map(({ href, label, icon: Icon }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            const isHovered = hoveredItem === label;
            const isInteractive = isActive || isHovered;
            const hoverLift = isHovered ? 'translateY(-5px) scale(1.05)' : isActive ? 'translateY(-3px) scale(1.03)' : 'none';

            return (
                <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    onMouseEnter={() => setHoveredItem(label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={(e) => {
                      // Smooth-scroll with header offset and mark active immediately
                      const id = href.slice(1);
                      const target = document.getElementById(id);
                      if (target) {
                        e.preventDefault();
                        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset + 8;
                        window.scrollTo({ top, behavior: 'smooth' });
                        setActiveSection(id);
                        // update the URL without jumping
                        if (window.history && window.history.pushState) {
                          window.history.pushState(null, '', '#' + id);
                        } else {
                          window.location.hash = id;
                        }
                      }
                    }}
                style={{
                  color: isInteractive ? accentColor : '#d7dde8',
                  textDecoration: 'none',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: isHovered
                    ? `1px solid ${accentColor}77`
                    : isActive
                    ? `1px solid ${accentColor}55`
                    : '1px solid rgba(255, 255, 255, 0.10)',
                  background: isHovered
                    ? `${accentColor}24`
                    : isActive
                    ? `${accentColor}1f`
                    : 'rgba(255, 255, 255, 0.04)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 160ms ease, background 160ms ease, border-color 160ms ease, color 160ms ease, box-shadow 160ms ease',
                  boxShadow: isHovered
                    ? `0 12px 30px ${accentColor}26`
                    : isActive
                    ? `0 0 0 1px ${accentColor}26`
                    : 'none',
                  transform: hoverLift,
                  cursor: 'pointer',
                }}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <div
          style={{
            width: '1px',
            alignSelf: 'stretch',
            background: 'rgba(255, 255, 255, 0.12)',
            marginLeft: '0.2rem',
            marginRight: '0.2rem',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginLeft: 'auto' }}>
          {socialItems.map(({ href, label, icon: Icon }) => {
            const isHovered = hoveredSocial === label;

            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHoveredSocial(label)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  color: isHovered ? accentColor : '#f4f7fb',
                  textDecoration: 'none',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: isHovered ? `1px solid ${accentColor}66` : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isHovered ? `${accentColor}1a` : 'rgba(255, 255, 255, 0.05)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 160ms ease, background 160ms ease, border-color 160ms ease, color 160ms ease, box-shadow 160ms ease',
                  boxShadow: isHovered ? `0 12px 30px ${accentColor}20` : 'none',
                  transform: isHovered ? 'translateY(-4px) scale(1.04)' : 'none',
                  cursor: 'pointer',
                }}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}