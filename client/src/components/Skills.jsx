import { TechIcon } from './Icons';

const accentColor = '#7c8cff';

const skillGroups = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'JavaScript', percent: 85 },
      { name: 'Python', percent: 75 },
      { name: 'Java', percent: 70 },
      { name: 'Kotlin', percent: 70 },
      { name: 'C++', percent: 70 },
      { name: 'C#', percent: 65 },
      { name: 'PHP', percent: 65 },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', percent: 85 },
      { name: 'HTML5', percent: 90 },
      { name: 'CSS3', percent: 85 },
      { name: 'Tailwind CSS', percent: 80 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', percent: 85 },
      { name: 'Express.js', percent: 85 },
      { name: 'Spring Boot', percent: 75 },
      { name: 'REST APIs', percent: 80 },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MongoDB', percent: 80 },
      { name: 'MySQL', percent: 80 },
      { name: 'PostgreSQL', percent: 60 },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', percent: 85 },
      { name: 'GitHub', percent: 90 },
      { name: 'VS Code', percent: 90 },
      { name: 'Eclipse', percent: 70 },
      { name: 'Postman', percent: 80 },
      { name: 'AWS', percent: 70 },
      { name: 'Android Studio', percent: 75 },
      { name: 'Firebase', percent: 75 },
      { name: 'draw.io', percent: 75 },
      { name: 'Figma', percent: 75 },
    ],
  },
];

function ProgressRow({ name, percent }) {
  return (
    <div style={{ display: 'grid', gap: '0.4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <TechIcon name={name} size={28} />
          <span style={{ color: '#fff' }}>{name}</span>
        </div>
        <span style={{ color: '#fff' }}>{percent}%</span>
      </div>

      <div style={{ height: 8, background: '#1f2937', borderRadius: 999 }}>
        <div
          style={{
            width: `${percent}%`,
            height: '100%',
            background: accentColor,
            borderRadius: 999,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '4.5rem 1.5rem 4rem', background: '#0f172a', color: '#fff', scrollMarginTop: '110px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', color: '#4f86ff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
          Technical Expertise
        </div>
        <h2 style={{ textAlign: 'center', margin: 0, color: '#f8fafc', fontSize: 'clamp(2.1rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>Skills</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              style={{
                background: 'rgba(17, 24, 39, 0.92)',
                border: '1px solid rgba(148, 163, 184, 0.14)',
                padding: '1.5rem',
                borderRadius: 16,
                boxShadow: '0 18px 50px rgba(0, 0, 0, 0.30)',
              }}
            >
              <h3 style={{ marginBottom: '1rem', color: '#f8fafc' }}>{group.title}</h3>

              <div style={{ display: 'grid', gap: '1rem' }}>
                {group.items.map((item) => (
                  <ProgressRow key={item.name} name={item.name} percent={item.percent} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
