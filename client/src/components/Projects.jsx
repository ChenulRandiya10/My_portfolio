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
    <section id="projects" style={{ padding: '4rem 2rem', background: '#0f172a', color: '#e5e7eb' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Featured Projects</h2>
      <p style={{ maxWidth: '820px', margin: '0.6rem auto 2rem', textAlign: 'center', color: '#cbd5e1', lineHeight: 1.6 }}>
        Explore a selection of my recent work. Each project represents a unique challenge and solution, showcasing my skills in full-stack development and problem-solving.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {projects.map(p => (
          <div key={p.title} style={{ 
            borderRadius: '12px', 
            overflow: 'hidden', 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid rgba(255,255,255,0.12)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(139, 92, 246, 0.1))',
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
                <h3 style={{ margin: 0, fontSize: '1.1rem', flex: 1 }}>{p.title}</h3>
                <span style={{ background: 'rgba(96, 165, 250, 0.2)', color: '#60a5fa', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>
                  {p.year}
                </span>
              </div>
              
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '1rem', flex: 1 }}>
                {p.desc}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {p.tech.map(t => (
                  <span key={t} style={{ 
                    background: 'rgba(139, 92, 246, 0.2)', 
                    color: '#c4b5fd', 
                    padding: '0.35rem 0.75rem', 
                    borderRadius: '20px', 
                    fontSize: '0.75rem',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <TechIcon name={t} size={15} />
                    {t}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a href={p.github} style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                  GitHub →
                </a>
                <a href={p.live} style={{ color: '#60a5fa', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}