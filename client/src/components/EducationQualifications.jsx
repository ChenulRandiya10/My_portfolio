import { TechIcon } from './Icons';

const bscHighlights = ['Specialized in Information Technology', 'Pursuing full-stack development expertise', 'Hands-on projects in web and mobile development'];

const bscSkills = ['Full-stack Development', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Java', 'Python', 'Database Design'];

const aLevelHighlights = ['Engineering Technology (E.T): C', 'Science For Technology (S.F.T): C', 'Information And Communication Technology (I.C.T): C'];

const aLevelSkills = ['Engineering Technology', 'Science & Technology', 'Information Communication Technology'];

const certHighlights = ['Proficiency in Microsoft Office Suite', 'Professional certification credential', 'Practical skills in productivity tools'];

const certSkills = ['MS Word', 'MS Excel', 'MS PowerPoint', 'Office Suite'];

function IconShell({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <IconShell>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="M6 10v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" />
      <path d="M20 9.5V15" />
    </IconShell>
  );
}

function EducationCard({ period, title, institution, subtitle, highlightsList, skillsList }) {
  return (
    <article
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
            {period}
          </div>
          <h3 style={{ margin: 0, fontSize: 'clamp(1.7rem, 3vw, 2.35rem)', lineHeight: 1.15, color: '#f8fafc' }}>
            {title}
          </h3>
          <p style={{ margin: '0.75rem 0 0', color: '#4f86ff', fontSize: '1.02rem', fontWeight: 700 }}>
            {institution}
          </p>
        </div>

        <div style={{ width: '66px', height: '66px', borderRadius: '14px', border: '1px solid rgba(59, 130, 246, 0.14)', background: 'rgba(17, 24, 39, 0.88)', color: '#4f86ff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <GraduationCapIcon />
        </div>
      </div>

      <p style={{ margin: '2rem 0 1.5rem', color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.75 }}>
        {subtitle}
      </p>

      <div style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.8rem', color: '#f8fafc', fontSize: '1.05rem' }}>
            <span style={{ color: '#facc15' }}>🏅</span> Key Highlights
          </h4>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#e2e8f0', lineHeight: 1.9 }}>
            {highlightsList.map((item) => (
              <li key={item} style={{ marginBottom: '0.45rem' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.9rem', color: '#f8fafc', fontSize: '1.05rem' }}>
            <span style={{ color: '#4f86ff' }}>{'</>'}</span> Skills Gained
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {skillsList.map((skill) => (
              <span
                key={skill}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 0.9rem',
                  borderRadius: '999px',
                  background: 'rgba(51, 65, 85, 0.96)',
                  border: '1px solid rgba(148, 163, 184, 0.14)',
                  color: '#e5e7eb',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                }}
              >
                <TechIcon name={skill} size={18} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EducationQualifications() {
  return (
    <section id="education-qualifications" style={{ padding: '4.5rem 1.5rem 4rem', background: '#0f172a', color: '#e5e7eb', scrollMarginTop: '110px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', color: '#4f86ff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
          Academic Background
        </div>
        <h2 style={{ textAlign: 'center', margin: 0, fontSize: 'clamp(2.1rem, 4vw, 3.5rem)', lineHeight: 1.05, color: '#f8fafc' }}>
          Education &amp; Qualifications
        </h2>

        <EducationCard
          period="2023 - Present"
          title="Bachelor of Science Honors in Information Technology"
          institution="Sri Lanka Institute of Information Technology, Malabe"
          subtitle="Specialized in Information Technology with focus on full-stack development and modern technologies"
          highlightsList={bscHighlights}
          skillsList={bscSkills}
        />

        <EducationCard
          period="Aug 2020 - Feb 2023"
          title="G.C.E. Advanced Level (A/L)"
          institution="Karunarathna Buddhist National College, Maththumagala - Ragama"
          subtitle="Stream: Engineering Technology, Science For Technology, Information and Communication Technology"
          highlightsList={aLevelHighlights}
          skillsList={aLevelSkills}
        />

        <EducationCard
          period="Dec 2020"
          title="Certificate Level Course In Microsoft Office"
          institution="JMC College"
          subtitle="Professional certification in Microsoft Office productivity tools and applications"
          highlightsList={certHighlights}
          skillsList={certSkills}
        />
      </div>
    </section>
  );
}