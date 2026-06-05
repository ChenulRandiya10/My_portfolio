import { TechIcon, ProjectLogo } from './Icons';

const projects = [
  { 
    title: 'D and S Creations Advertising Agency', 
    desc: 'Full-stack web platform for managing clients, ad campaigns, and media assets. Features secure role-based registration, intuitive admin dashboard for user approval, campaign performance monitoring, and detailed performance reports.', 
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    year: '2025',
    github: '#', 
    live: '#' 
  },
  { 
    title: 'Planner - Online Event Planning System', 
    desc: 'Online platform for planning and managing events with features for event creation, booking, and user registration. Handles event registration and data management with seamless user experience.', 
    tech: ['HTML', 'JavaScript', 'CSS', 'PHP', 'MySQL'],
    year: '2025',
    github: '#', 
    live: '#' 
  },
  { 
    title: 'Wander Gear - Online Resource Booking System', 
    desc: 'Online platform for renting travel equipment with reservation and purchase options. Integrated a secure payment gateway to process online payments for seamless transactions.', 
    tech: ['HTML', 'JavaScript', 'CSS', 'MySQL'],
    year: '2024',
    github: '#', 
    live: '#' 
  },
  { 
    title: 'MoneyMate - Personal Finance Tracker App', 
    desc: 'Personal budgeting app with offline storage, expense tracking, visual summaries, and backup features for managing finances efficiently.', 
    tech: ['Kotlin', 'Android Studio', 'Firebase'],
    year: '2025',
    github: '#', 
    live: '#' 
  },
  { 
    title: 'Habit. - Personal Health & Habit Tracker App', 
    desc: 'Mobile app for managing daily health routines and personal wellness. Features daily habit tracking, mood journal with emojis, hydration reminders, and advanced visualizations.', 
    tech: ['Kotlin', 'Android Studio', 'Firebase'],
    year: '2025',
    github: '#', 
    live: '#' 
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '4.5rem 1.5rem 4rem', background: '#0f172a', color: '#e5e7eb', scrollMarginTop: '110px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', color: '#4f86ff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
          Project Showcase
        </div>
        <h2 style={{ textAlign: 'center', margin: 0, color: '#f8fafc', fontSize: 'clamp(2.1rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>Featured Projects</h2>
        <p style={{ maxWidth: '820px', margin: '0.6rem auto 2rem', textAlign: 'center', color: '#cbd5e1', lineHeight: 1.6 }}>
          Explore a selection of my recent work. Each project represents a unique challenge and solution, showcasing my skills in full-stack development and problem-solving.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.6rem' }}>
          {projects.map(p => (
            <div key={p.title} style={{ 
              borderRadius: '16px', 
              overflow: 'hidden', 
              background: 'rgba(17, 24, 39, 0.92)', 
              border: '1px solid rgba(148, 163, 184, 0.14)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 18px 55px rgba(0,0,0,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(79, 134, 255, 0.14), rgba(139, 92, 246, 0.10))',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
              }}>
                <ProjectLogo title={p.title} size={90} />
              </div>
            
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', flex: 1, color: '#f8fafc' }}>{p.title}</h3>
                  <span style={{ background: 'rgba(79, 134, 255, 0.16)', color: '#9fb0ff', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', whiteSpace: 'nowrap', marginLeft: '0.5rem', border: '1px solid rgba(79, 134, 255, 0.22)' }}>
                    {p.year}
                  </span>
                </div>
              
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>
                  {p.desc}
                </p>
              
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginBottom: '1rem' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ 
                      background: 'rgba(51, 65, 85, 0.74)', 
                      color: '#e2e8f0', 
                      padding: '0.45rem 0.75rem', 
                      borderRadius: '999px', 
                      fontSize: '0.78rem',
                      border: '1px solid rgba(148, 163, 184, 0.14)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}>
                      <TechIcon name={t} size={16} />
                      {t}
                    </span>
                  ))}
                </div>
              
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a href={p.github} style={{ color: '#9fb0ff', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 700 }}>
                    GitHub →
                  </a>
                  <a href={p.live} style={{ color: '#9fb0ff', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 700 }}>
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
