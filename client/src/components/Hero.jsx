import profilePic from '../images/my profile pic.png';

export default function Hero() {
  const headerOffset = 80;
  return (
    <section id="home" style={{ padding: '4.5rem 1.5rem 4rem', background: '#0f172a', color: '#e5e7eb', scrollMarginTop: '110px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'center', gap: '2.5rem' }}>
        <div>
          <p style={{ margin: 0, color: '#4f86ff', fontWeight: 700, letterSpacing: '0.08em' }}>Hello, I&apos;m</p>
          <h1 style={{ margin: '0.4rem 0 0', fontSize: 'clamp(2.4rem, 4.2vw, 3.25rem)', lineHeight: 1.06, color: '#f8fafc' }}>Chenul Randiya Marasinghe</h1>
          <h3 style={{ marginTop: '0.75rem', color: '#cbd5e1', fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.4 }}>Information Technology Undergraduate</h3>
          <p style={{ maxWidth: '680px', color: '#cbd5e1', marginTop: '1rem', lineHeight: 1.75 }}>
            I&apos;m an aspiring full-stack developer with a passion for creating modern web applications and learning emerging technologies. My interests include frontend and backend development, database management, and software engineering best practices. I enjoy transforming ideas into practical solutions while continuously improving my technical and problem-solving skills.
          </p>

          <div style={{ marginTop: '1.4rem', display: 'flex', flexWrap: 'wrap', gap: '0.9rem', alignItems: 'center' }}>
            <a
              href="#contact"
              style={{ textDecoration: 'none', color: '#4f86ff', fontWeight: 700 }}
              onClick={(e) => {
                const id = 'contact';
                const target = document.getElementById(id);
                if (target) {
                  e.preventDefault();
                  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset + 8;
                  window.scrollTo({ top, behavior: 'smooth' });
                  if (window.history && window.history.pushState) {
                    window.history.pushState(null, '', '#' + id);
                  } else {
                    window.location.hash = id;
                  }
                }
              }}
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                const id = 'projects';
                const target = document.getElementById(id);
                if (target) {
                  e.preventDefault();
                  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset + 8;
                  window.scrollTo({ top, behavior: 'smooth' });
                  if (window.history && window.history.pushState) {
                    window.history.pushState(null, '', '#' + id);
                  } else {
                    window.location.hash = id;
                  }
                }
              }}
              style={{ textDecoration: 'none' }}
            >
              <button style={{ padding: '0.8rem 1.2rem', background: 'transparent', border: '1px solid rgba(148, 163, 184, 0.24)', color: '#fff', borderRadius: '10px', cursor: 'pointer' }}>
                View My Work
              </button>
            </a>
          </div>
        </div>

        <div style={{ justifySelf: 'center' }}>
          <div style={{ width: '280px', height: '280px', borderRadius: '999px', overflow: 'hidden', border: '5px solid rgba(79,134,255,0.18)', background: 'rgba(17, 24, 39, 0.65)', boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
            <img src={profilePic} alt="Profile" style={{ width: '100%', height: '118%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
