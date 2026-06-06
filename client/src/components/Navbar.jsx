import { useEffect, useState } from 'react';
import { FaBriefcase, FaEnvelope, FaFolderOpen, FaGithub, FaGraduationCap, FaHome, FaLinkedinIn, FaTools, FaUser } from 'react-icons/fa';

const accentColor = '#7c8cff';

const navItems = [
  { href: '#home', label: 'Home', icon: FaHome },
  { href: '#about', label: 'About', icon: FaUser },
  { href: '#work-experience', label: 'Work Experience', icon: FaBriefcase },
  { href: '#education-qualifications', label: 'Education & Qualifications', icon: FaGraduationCap },
  { href: '#projects', label: 'Projects', icon: FaFolderOpen },
  { href: '#skills', label: 'Skills', icon: FaTools },
  { href: '#contact', label: 'Contact', icon: FaEnvelope },
];

const socialItems = [
  { href: 'https://github.com/ChenulRandiya10', label: 'GitHub', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/chenul-randiya-marasinghe-382aa8293', label: 'LinkedIn', icon: FaLinkedinIn },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const headerOffset = 110; // should match scroll-padding-top

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));

    const updateActiveSection = () => {
      const activationLine = headerOffset + 24;
      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          return element ? { id, top: element.getBoundingClientRect().top } : null;
        })
        .filter(Boolean);

      const active = sections
        .filter((section) => section.top <= activationLine)
        .sort((a, b) => b.top - a.top)[0] ?? sections[0];

      if (active) {
        setActiveSection(active.id);
      }
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
                        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
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
                <Icon size={20} />
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
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
