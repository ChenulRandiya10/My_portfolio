import React from 'react'
import { FaBolt, FaCheckCircle, FaGraduationCap } from 'react-icons/fa';

// Import images
import projectsCompletedImg from '../images/Projects Completed.png';
import yearsExperienceImg from '../images/Years Experience.png';
import technologiesImg from '../images/Technologies.png';
import openSourceImg from '../images/Open Source.png';

const leadershipActivities = [
  { role: 'Volunteer Member', period: '2023 - Present', organization: 'SLIIT Faculty of Computing Students Community, Malabe' },
  { role: 'Deputy Head Prefect', period: '2022', organization: 'Karunarathna Buddhist National College' },
  { role: 'Class Prefect', period: '2018 - 2019', organization: 'Carey College' },
  { role: 'Member', period: '2017 - 2018', organization: 'Library Society, Carey College' },
  { role: 'Member', period: '2014 - 2017', organization: 'Buddhist Society, Carey College' },
];

const sportsActivities = [
  { role: 'Rugby Player & Manager', period: '2023 - Present', organization: 'SLIIT Rugby Team, Malabe' },
  { role: 'Member (Under 19)', period: '2018 - 2020', organization: 'Carey College Rugby Team' },
  { role: 'Member (Under 13 - 19)', period: '2014 - 2019', organization: 'Carey College Badminton Team' },
  { role: 'Member (Under 15)', period: '2017', organization: 'Carey College Athletics Team' },
];

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
    { label: 'Projects Completed', value: '10+', icon: StatIconFolder },
    { label: 'Years Experience', value: '1+', icon: StatIconCalendar },
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
                <p>I&apos;m a passionate Information Technology student with a strong interest in software development, web technologies, and problem-solving. I enjoy turning ideas into practical digital solutions and continuously expanding my knowledge of modern technologies.</p>
                <p>My experience includes developing web applications using the MERN stack, working with databases, and building responsive user interfaces. I am passionate about creating efficient, user-friendly applications while improving my skills in both frontend and backend development.</p>
                <p>As a technology enthusiast, I am always eager to learn new tools, frameworks, and industry best practices. I enjoy taking on challenging projects that help me grow as a developer and prepare me for a successful career in the IT industry.</p>
              </div>
            </article>
          </div>

          <div>
            <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem' }}>
              <div style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: 'rgba(17,24,39,0.85)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <h4 style={{ margin: 0, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <span style={{ color: '#4f86ff', display: 'inline-flex' }}><FaBolt size={16} /></span>
                  Performance First
                </h4>
                <p style={{ marginTop: '0.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>I focus on building fast, responsive, and efficient web applications that provide smooth user experiences across different devices and platforms.</p>
              </div>
              <div style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: 'rgba(17,24,39,0.85)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <h4 style={{ margin: 0, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <span style={{ color: '#4f86ff', display: 'inline-flex' }}><FaCheckCircle size={16} /></span>
                  Best Practices
                </h4>
                <p style={{ marginTop: '0.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>I follow industry-standard development practices, write clean and maintainable code, and stay updated with the latest technologies and trends in software development.</p>
              </div>
            </div>

            <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(17,24,39,0.85)', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h4 style={{ margin: '0 0 0.6rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <span style={{ color: '#4f86ff', display: 'inline-flex' }}><FaGraduationCap size={16} /></span>
                Education
              </h4>
              <div style={{ color: '#9fb0ff', fontWeight: 700 }}>BSc (Hons) in Information Technology</div>
              <div style={{ color: '#4f86ff', marginTop: '0.35rem', fontWeight: 700 }}>Sri Lanka Institute of Information Technology (SLIIT)</div>
              <div style={{ color: '#cbd5e1', marginTop: '0.55rem', fontSize: '0.95rem', fontWeight: 600 }}>2023 - Present</div>
            </div>
          </div>
        </div>

        {/* Leadership & Sports Activities */}
        <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Leadership & Community Card */}
          <article
            style={{
              borderRadius: '14px',
              padding: '1.5rem',
              background: 'rgba(17,24,39,0.85)',
              border: '1px solid rgba(255,255,255,0.04)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
            }}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '0 0 1.25rem', color: '#f8fafc', fontSize: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
              <span style={{ color: '#4f86ff' }}>🛡️</span> Leadership &amp; Community
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {leadershipActivities.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'start' }}>
                  <span style={{ marginTop: '0.45rem', width: '0.4rem', height: '0.4rem', borderRadius: '50%', background: '#4f86ff', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.98rem', fontWeight: 600, color: '#f8fafc' }}>{item.role}</span>
                      <span style={{ fontSize: '0.75rem', color: '#9fb0ff', background: 'rgba(79,134,255,0.08)', padding: '0.15rem 0.5rem', borderRadius: '8px', fontWeight: 500 }}>{item.period}</span>
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#cbd5e1', marginTop: '0.2rem' }}>{item.organization}</div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Sports & Athletics Card */}
          <article
            style={{
              borderRadius: '14px',
              padding: '1.5rem',
              background: 'rgba(17,24,39,0.85)',
              border: '1px solid rgba(255,255,255,0.04)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
            }}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '0 0 1.25rem', color: '#f8fafc', fontSize: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
              <span style={{ color: '#4f86ff' }}>🏆</span> Sports &amp; Athletics
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {sportsActivities.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'start' }}>
                  <span style={{ marginTop: '0.45rem', width: '0.4rem', height: '0.4rem', borderRadius: '50%', background: '#4f86ff', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.98rem', fontWeight: 600, color: '#f8fafc' }}>{item.role}</span>
                      <span style={{ fontSize: '0.75rem', color: '#9fb0ff', background: 'rgba(79,134,255,0.08)', padding: '0.15rem 0.5rem', borderRadius: '8px', fontWeight: 500 }}>{item.period}</span>
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#cbd5e1', marginTop: '0.2rem' }}>{item.organization}</div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2.5rem' }}>
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
            const imgMap = {
              'Technologies': technologiesImg,
              'Projects Completed': projectsCompletedImg,
              'Years Experience': yearsExperienceImg,
              'Open Source': openSourceImg
            };
            return <img src={imgMap[s.label]} alt={s.label} style={{ width: 88, height: 88, objectFit: 'contain' }} />;
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
    </section>
  );
}
