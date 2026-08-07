import { TechIcon, ProjectLogo } from './Icons';

const projectCovers = import.meta.glob('../images/project_cover_image/*.png', { eager: true, import: 'default' });

function getProjectCover(fileName) {
  const key = Object.keys(projectCovers).find((path) => path.endsWith(`/${fileName}`));
  return key ? projectCovers[key] : null;
}

const projects = [
  {
    title: "Cake n' Smile - Custom Cake Ordering Platform",
    year: '2026',
    cover: "Cake n' Smile - Custom Cake Ordering Platform.png",
    desc: 'A modern full-stack website for a custom cake shop, designed to showcase cake categories, help customers explore product details, and place orders quickly through WhatsApp or email.',
    tech: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'React Router', 'Nodemailer', 'Vercel', 'Render', 'Google Search Console'],
    highlights: [
      'Built a responsive full-stack cake shop platform for browsing custom cakes by category and search.',
      'Added detailed product pages with cake images, flavours, sizes, and other item information.',
      'Enabled direct ordering through WhatsApp and email for a simple, cart-free customer journey.',
      'Deployed the frontend on Vercel, the backend on Render, and configured Google Search Console for indexing and visibility.',
      'Optimized the site for mobile use, fast performance, and search engine visibility.',
    ],
    github: 'https://github.com/ChenulMarasinghe',
  },
  {
    title: 'UniConnect - Guest Lecturer & Lost and Found Platform',
    year: 'SLIIT 2026',
    cover: 'UniConnect.png',
    desc: 'University platform to manage guest lecturer sessions and provide lost & found services with secure access and payments.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    highlights: [
      'Developed a university platform for managing guest lecturer sessions and lost & found services.',
      'Implemented secure user authentication and authorization using JWT.',
      'Integrated a payment gateway with shopping cart and checkout flow.',
    ],
    github: 'https://github.com/HeshaniWickramasinghe/Uni-Connect.git',
  },
  {
    title: 'Smart Campus Operations Hub',
    year: 'SLIIT 2026',
    cover: 'Smart Campus Operations Hub.png',
    desc: 'Facilities and assets catalogue management system for university operations with advanced search and inventory insights.',
    tech: ['React.js', 'Java', 'Spring Boot', 'MongoDB', 'HTML', 'CSS'],
    highlights: [
      'Built full CRUD for facilities (lecture halls, labs, meeting rooms) and equipment resources.',
      'Implemented search and filtering by type, building, capacity, and status.',
      'Developed admin UI for availability/status management with statistics endpoints.',
    ],
    github: 'https://github.com/MatheeshaKuruppu/SmartCampus.git',
  },
  {
    title: 'My Portfolio',
    year: '2026',
    cover: 'My Portfolio.png',
    desc: 'Personal portfolio website showcasing profile, skills, education, work experience, and featured projects with a clean professional UI.',
    tech: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS'],
    highlights: [
      'Designed and developed a modern portfolio to present skills and projects in a structured layout.',
      'Implemented responsive UI with smooth navigation and section-based scrolling.',
      'Integrated a contact form with backend API handling for secure messaging.',
    ],
    github: 'https://github.com/ChenulMarasinghe/My_portfolio.git',
  },
  {
    title: 'D and S Creations Advertising Agency',
    year: 'SLIIT 2025',
    cover: 'D and S Creations Advertising Agency.png',
    desc: 'Web application for a digital media marketing agency to manage clients, ad campaigns, and media assets.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS'],
    highlights: [
      'Developed a full-stack platform for managing clients, ad campaigns, and media assets.',
      'Implemented secure role-based registration for clients, media owners, and designers.',
      'Built an admin dashboard to approve users, analyze campaign performance, and generate reports.',
    ],
    github: 'https://github.com/Harshavidath12/D-and-S-Creations.git',
  },
  {
    title: 'Playwright Test Automation Suite',
    year: 'SLIIT 2026',
    cover: 'ITPM Playwright Test Automation Suite.png',
    desc: 'Automated testing framework for a web-based Singlish-to-Sinhala transliteration platform using Playwright and Python.',
    tech: ['Playwright', 'Python', 'OpenPyXL', 'Excel Automation'],
    highlights: [
      'Built automated test scripts using Playwright for web application testing.',
      'Created and executed 50+ negative test cases covering mixed-language inputs, emojis, spelling variations, and edge cases.',
      'Integrated Excel-based test data management and automated result validation using OpenPyXL.',
      'Generated automated PASS/FAIL reports by comparing expected and actual outputs.',
    ],
    github: 'https://github.com/ChenulMarasinghe/test_automation.git',
  },
  {
    title: 'Habit. - Personal Health & Habit Tracker App',
    year: 'SLIIT 2025',
    cover: 'Habit. - Personal Health & Habit Tracker App.png',
    desc: 'Health and habit tracking app with daily routines, reminders, and visualizations.',
    tech: ['Kotlin', 'Android Studio', 'Firebase'],
    highlights: [
      'Implemented daily habit tracking and reminders.',
      'Added mood journal and hydration tracking features.',
      'Built dashboards and visual summaries for progress insights.',
    ],
    github: 'https://github.com/ChenulMarasinghe/Habit..git',
  },
  {
    title: 'Planner - Online Event Planning System',
    year: 'SLIIT 2025',
    cover: 'Planner - Online Event Planning System.png',
    desc: 'Event planning web system with event creation, bookings, and user registration.',
    tech: ['HTML', 'JavaScript', 'CSS', 'PHP', 'MySQL'],
    highlights: [
      'Implemented event creation and booking workflows.',
      'Built user registration and data management features.',
      'Focused on a smooth and responsive user experience.',
    ],
    github: 'https://github.com/ChenulMarasinghe/Planner.git',
  },
  {
    title: 'MoneyMate - Personal Finance Tracker App',
    year: 'SLIIT 2025',
    cover: 'MoneyMate - Personal Finance Tracker App.png',
    desc: 'Personal budgeting Android app with offline storage, expense tracking, and visual summaries.',
    tech: ['Kotlin', 'Android Studio', 'Firebase'],
    highlights: [
      'Implemented expense tracking with categorized entries and summaries.',
      'Designed mobile UI with clean navigation and quick actions.',
      'Added backup/sync support with Firebase services.',
    ],
    github: 'https://github.com/ChenulMarasinghe/MoneyMate.git',
  },
  {
    title: 'Wander Gear - Online Resource Booking System',
    year: 'SLIIT 2024',
    cover: 'Wander Gear - Online Resource Booking System.png',
    desc: 'Resource booking and rental platform with reservations and purchase options.',
    tech: ['HTML', 'JavaScript', 'CSS', 'MySQL'],
    highlights: [
      'Built booking and reservation workflows for travel equipment.',
      'Designed responsive pages for browsing, booking, and checkout.',
      'Implemented secure data handling with a relational database.',
    ],
    github: 'https://github.com/ChenulMarasinghe/Wander-Gear.git',
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
          {projects.map((p) => (
            (() => {
              const coverSrc = p.cover ? getProjectCover(p.cover) : null;
              return (
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
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(79, 134, 255, 0.14), rgba(139, 92, 246, 0.10))',
              }}>
                {coverSrc ? (
                  <>
                    <img src={coverSrc} alt={`${p.title} cover`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.16) saturate(1.04)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(2, 6, 23, 0.04) 0%, rgba(2, 6, 23, 0.24) 100%)' }} />
                  </>
                ) : (
                  <ProjectLogo title={p.title} size={90} />
                )}
              </div>
            
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', flex: 1, color: '#f8fafc' }}>{p.title}</h3>
                  <span style={{ background: 'rgba(79, 134, 255, 0.16)', color: '#9fb0ff', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', whiteSpace: 'nowrap', marginLeft: '0.5rem', border: '1px solid rgba(79, 134, 255, 0.22)' }}>
                    {p.year}
                  </span>
                </div>
              
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '0.85rem' }}>
                  {p.desc}
                </p>

                {p.highlights?.length ? (
                  <ul style={{ margin: '0 0 1rem', paddingLeft: '1.15rem', color: '#e2e8f0', lineHeight: 1.7, fontSize: '0.9rem' }}>
                    {p.highlights.map((item) => (
                      <li key={item} style={{ marginBottom: '0.45rem' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              
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
                  <a href={p.github} target="_blank" rel="noreferrer" style={{ color: '#9fb0ff', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 700 }}>
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}
