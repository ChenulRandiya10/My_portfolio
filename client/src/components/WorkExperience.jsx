import { TechIcon } from './Icons';

const workExperiences = [
  {
    title: 'Intern',
    company: 'LOLC Holdings PLC',
    location: 'Wellawatte, Sri Lanka',
    period: 'May 2023 – Jan 2024',
    achievements: [
      'Creating CP certificates and managing document processes',
      'Handling customer inquiries and providing professional support',
      'Attending to courier work and managing deliveries',
      'Assisting with Document Management System operations',
      'Maintaining organized file handling and record keeping',
    ],
    technologies: ['Document Management System', 'MS Office', 'Customer Service'],
    skills: ['Document Processing', 'Customer Service', 'File Management', 'Administrative Support'],
  },
  {
    title: 'General Clerk',
    company: 'Mesco Homes',
    location: 'Ragama, Sri Lanka',
    period: 'Feb 2023 – May 2023',
    achievements: [
      'Participated in legal activities and documentation processes',
      'Handled marketing promotion and social media management',
      'Worked with Microsoft Office package for daily operations',
      'Supported administrative and clerical tasks',
    ],
    technologies: ['Microsoft Office', 'Social Media', 'Legal Documentation'],
    skills: ['Marketing Promotion', 'Social Media Management', 'Legal Documentation', 'Microsoft Office'],
  },
];

function IconShell({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <IconShell>
      <rect x="4.5" y="7.5" width="15" height="11" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M4.5 12h15" />
    </IconShell>
  );
}

function ToolIcon() {
  return (
    <IconShell>
      <path d="M10.5 5.5a3.8 3.8 0 0 0 4.1 5.9l4.4 4.4-1.8 1.8-4.4-4.4a3.8 3.8 0 0 0-5.9-4.1l-2.1-2.1 1.8-1.8 2.1 2.1Z" />
      <path d="m16.6 16.6 2.1 2.1" />
    </IconShell>
  );
}

function ExternalLinkIcon() {
  return (
    <IconShell>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </IconShell>
  );
}

export default function WorkExperience() {
  return (
    <section id="work-experience" style={{ padding: '4.5rem 1.5rem 4rem', background: '#0f172a', color: '#e5e7eb', scrollMarginTop: '110px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', color: '#4f86ff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
          Professional Journey
        </div>
        <h2 style={{ textAlign: 'center', margin: 0, fontSize: 'clamp(2.1rem, 4vw, 3.5rem)', lineHeight: 1.05, color: '#f8fafc', marginBottom: '2rem' }}>
          Work Experience
        </h2>

        {workExperiences.map((exp, index) => (
          <article
            key={index}
            style={{
              marginTop: '2rem',
              borderRadius: '18px',
              border: '1px solid rgba(59, 130, 246, 0.12)',
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(17, 24, 39, 0.98) 100%)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.28)',
              padding: '1.7rem 1.6rem 1.6rem',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: '1rem', alignItems: 'start' }}>
              <div>
                <div style={{ color: '#4f86ff', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: '0.35rem', height: '0.35rem', borderRadius: '999px', background: '#4f86ff', display: 'inline-block' }} />
                  {exp.period}
                </div>
                <h3 style={{ margin: 0, fontSize: 'clamp(1.65rem, 3vw, 2.3rem)', lineHeight: 1.15, color: '#f8fafc' }}>
                  {exp.title}
                </h3>
                <p style={{ margin: '0.75rem 0 0', color: '#4f86ff', fontSize: '1.02rem', fontWeight: 700 }}>
                  {exp.company}
                </p>
                <p style={{ margin: '1rem 0 0', color: '#cbd5e1', fontSize: '0.98rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span>📍</span> {exp.location}
                </p>
              </div>

              <div style={{ width: '66px', height: '66px', borderRadius: '14px', border: '1px solid rgba(59, 130, 246, 0.14)', background: 'rgba(17, 24, 39, 0.88)', color: '#4f86ff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <BriefcaseIcon />
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h4 style={{ margin: '0 0 1rem', color: '#f8fafc', fontSize: '1.05rem', fontWeight: 700 }}>Key Responsibilities</h4>
              <ul style={{ margin: '1rem 0', paddingLeft: '1.1rem', color: '#e2e8f0', lineHeight: 1.9 }}>
                {exp.achievements.map((item) => (
                  <li key={item} style={{ marginBottom: '0.7rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '1.9rem' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.9rem', color: '#f8fafc', fontSize: '1.05rem' }}>
                <span style={{ color: '#4f86ff' }}>{'</>'}</span> Technologies &amp; Tools
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {exp.technologies.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.7rem 1rem',
                      borderRadius: '999px',
                      background: 'rgba(51, 65, 85, 0.96)',
                      border: '1px solid rgba(148, 163, 184, 0.14)',
                      color: '#e5e7eb',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                    }}
                  >
                    <TechIcon name={tool} size={20} />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '1.9rem' }}>
              <h4 style={{ margin: '0 0 0.95rem', color: '#f8fafc', fontSize: '1.05rem' }}>Skills Applied</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 1.35rem' }}>
                {exp.skills.map((skill) => (
                  <span key={skill} style={{ color: '#4f86ff', fontSize: '0.92rem', fontWeight: 600 }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}