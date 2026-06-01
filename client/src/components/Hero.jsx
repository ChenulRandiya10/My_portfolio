export default function Hero() {
  const headerOffset = 80;
  return (
    <section id="home" style={{ textAlign: 'left', padding: '5rem 2rem', background: '#0f172a', color: '#e5e7eb', display: 'grid', gridTemplateColumns: '1fr 360px', alignItems: 'center', gap: '2rem' }}>
      <div>
        <p style={{ margin: 0, color: '#4f86ff', fontWeight: 700, letterSpacing: '0.08em' }}>Hello, I'm</p>
        <h1 style={{ margin: '0.4rem 0 0', fontSize: '3rem', lineHeight: 1 }}>{'Shalitha'} <br />{'Lakshan'}</h1>
        <h3 style={{ marginTop: '0.6rem', color: '#cbd5e1', fontWeight: 600 }}>Software Engineering<br />Student @ SLIIT</h3>
        <p style={{ maxWidth: '560px', color: '#cbd5e1', marginTop: '1rem', lineHeight: 1.7 }}>
          I'm a full-stack developer with strong interest in backend development and system architecture. I enjoy building scalable systems, optimizing performance, and continuously improving code quality.
        </p>

        <div style={{ marginTop: '1.4rem', display: 'flex', gap: '0.9rem', alignItems: 'center' }}>
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
          >
            <button style={{ padding: '0.8rem 1.2rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', borderRadius: '8px', cursor: 'pointer' }}>
              View My Work
            </button>
          </a>
        </div>
      </div>

      <div style={{ justifySelf: 'end' }}>
        <div style={{ width: '260px', height: '260px', borderRadius: '999px', overflow: 'hidden', border: '4px solid rgba(255,255,255,0.06)' }}>
          <img src="/src/assets/profile.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}