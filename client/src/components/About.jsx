import React from 'react'

export default function About() {
  function StatIconFolder() {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="13" rx="1.2" fill="#0f172a" stroke="#4f86ff" strokeWidth="1.4" />
        <rect x="7" y="17" width="10" height="2" rx="0.6" fill="#1b2330" />
        <path d="M12 16v2" stroke="#4f86ff" strokeWidth="1.4" strokeLinecap="round" />
        <g transform="translate(0,0)" fill="#4f86ff">
          <path d="M9.3 8.2l-0.9 0.9 0.9 0.9 0.6-0.6-0.6-0.6z" />
          <path d="M14.7 8.2l0.9 0.9-0.9 0.9-0.6-0.6 0.6-0.6z" />
          <path d="M10.8 9.6l0.4 0.6 1.6-1.6-0.4-0.6-1.6 1.6z" />
        </g>
      </svg>
    );
  }

  function StatIconCalendar() {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f86ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M3 11h18" />
      </svg>
    );
  }

  function StatIconChip() {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <g fill="#2f6fdd">
          <path d="M21.7 7.3c-.4-.4-1-.4-1.4 0l-1 1-2.1-2.1 1-1c.4-.4.4-1 0-1.4L17 1.7c-.4-.4-1-.4-1.4 0l-2.6 2.6c-.2.2-.3.5-.3.8 0 .2.1.5.3.6l1.1 1.1-6.3 6.3c-.6-.1-1.3.1-1.8.6-.6.6-.9 1.4-.8 2.2l3.6 3.6c.8.1 1.6-.2 2.2-.8.5-.5.7-1.2.6-1.8l6.3-6.3 1.1 1.1c.2.2.5.3.7.3.3 0 .6-.1.8-.3l2.6-2.6c.4-.4.4-1 0-1.4l-1.1-1.1 1-1c.4-.4.4-1 0-1.4z" />
          <path d="M6.5 18.5c-.5.5-1.2.7-1.8.6l3.6 3.6c.1-.6-.1-1.3-.6-1.8l-1.2-1.2z" />
        </g>
      </svg>
    );
  }

  function StatIconGit() {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#0f172a" stroke="#4f86ff" strokeWidth="1" />
        <path d="M12 2C6.48 2 2 6.48 2 12c0 3.87 2.45 7.16 5.84 8.32.42.08.57-.18.57-.4 0-.2-.01-.74-.01-1.45-2.37.52-2.87-1.14-2.87-1.14-.39-1-.96-1.27-.96-1.27-.78-.53.06-.52.06-.52.86.06 1.31.88 1.31.88.77 1.32 2.03.94 2.53.72.08-.56.3-.94.55-1.16-1.89-.22-3.87-.94-3.87-4.18 0-.92.33-1.68.87-2.27-.09-.22-.38-1.11.08-2.31 0 0 .71-.23 2.33.87.68-.19 1.4-.28 2.12-.28.72 0 1.44.09 2.12.28 1.62-1.1 2.33-.87 2.33-.87.46 1.2.17 2.09.08 2.31.54.59.87 1.35.87 2.27 0 3.25-1.99 3.96-3.88 4.17.31.27.58.78.58 1.58 0 1.14-.01 2.06-.01 2.34 0 .22.15.49.58.41C19.55 19.16 22 15.87 22 12 22 6.48 17.52 2 12 2z" fill="#4f86ff" />
      </svg>
    );
  }

  const stats = [
    { label: 'Projects Completed', value: '25+', icon: StatIconFolder },
    { label: 'Years Experience', value: '2+', icon: StatIconCalendar },
    { label: 'Technologies', value: '15+', icon: StatIconChip },
    { label: 'Open Source', value: '10+', icon: StatIconGit },
  ];

  return (
    <section id="about" style={{ padding: '4rem 1.5rem', background: '#0f172a', color: '#e5e7eb', scrollMarginTop: '80px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', color: '#4f86ff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
          About Me
        </div>
        <h2 style={{ textAlign: 'center', margin: '0 0 2.8rem', fontSize: 'clamp(2.1rem, 4vw, 3.5rem)', lineHeight: 1.05, color: '#f8fafc' }}>
          Professional Overview
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2rem', alignItems: 'start' }}>
          <div>
            <article style={{ borderRadius: '14px', padding: '1.5rem', background: 'rgba(17,24,39,0.85)', border: '1px solid rgba(255,255,255,0.04)', boxShadow: '0 12px 40px rgba(0,0,0,0.35)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '0 0 0.6rem', color: '#f8fafc' }}><span style={{ color: '#4f86ff' }}>{'</>'}</span> Who Am I?</h3>
              <div style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <p>I&apos;m a passionate Software Engineering student at SLIIT with a strong foundation in backend development and system architecture. My journey in technology is driven by a deep curiosity for solving complex problems and creating efficient, scalable solutions.</p>
                <p>With experience in full-stack development, I specialize in building robust web applications using modern technologies. I&apos;m particularly interested in system design, database optimization, and creating seamless user experiences.</p>
                <p>When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.</p>
              </div>
            </article>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.25rem' }}>
              {stats.map(s => {
                const Icon = s.icon;
                return (
                  <div key={s.label} style={{ background: 'rgba(17,24,39,0.85)', borderRadius: '12px', padding: '1.25rem 1.3rem', border: '1px solid rgba(255,255,255,0.03)', minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {['Technologies', 'Projects Completed', 'Years Experience', 'Open Source'].includes(s.label) ? (
                        (() => {
                          const map = {
                            'Technologies': 'Technologies.png',
                            'Projects Completed': 'Projects Completed.png',
                            'Years Experience': 'Years Experience.png',
                            'Open Source': 'Open Source.png'
                          };
                          const src = `/src/images/${map[s.label]}`;
                          return <img src={src} alt={s.label} style={{ width: 88, height: 88, objectFit: 'contain' }} />;
                        })()
                      ) : (
                        <span style={{ width: '44px', height: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(79,134,255,0.08)', borderRadius: '10px' }}><Icon /></span>
                      )}
                    </div>
                    <div style={{ textAlign: 'center', color: '#9fb0ff', fontWeight: 800, fontSize: '1.6rem' }}>{s.value}</div>
                    <div style={{ textAlign: 'center', color: '#cbd5e1', fontSize: '0.95rem' }}>{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem' }}>
              <div style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: 'rgba(17,24,39,0.85)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <h4 style={{ margin: 0, color: '#f8fafc' }}>Performance First</h4>
                <p style={{ marginTop: '0.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>I optimize for speed and efficiency, ensuring smooth user experiences even under heavy loads.</p>
              </div>
              <div style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: 'rgba(17,24,39,0.85)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <h4 style={{ margin: 0, color: '#f8fafc' }}>Best Practices</h4>
                <p style={{ marginTop: '0.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>I follow industry best practices and stay updated with the latest trends and technologies.</p>
              </div>
            </div>

            <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(17,24,39,0.85)', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h4 style={{ margin: '0 0 0.6rem', color: '#f8fafc' }}>Education</h4>
              <div style={{ color: '#9fb0ff', fontWeight: 700 }}>BSc (Hons) in Software Engineering</div>
              <div style={{ color: '#4f86ff', marginTop: '0.35rem' }}>Sri Lanka Institute of Information Technology (SLIIT)</div>
              <div style={{ color: '#cbd5e1', marginTop: '0.5rem', fontSize: '0.95rem' }}>2023 - 2027</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}