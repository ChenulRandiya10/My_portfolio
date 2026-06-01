const accentColor = '#7c8cff';

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: LanguageIcon,
    items: [
      { name: 'JavaScript', percent: 85 },
      { name: 'Python', percent: 75 },
      { name: 'Java', percent: 70 },
      { name: 'PHP', percent: 65 },
    ],
  },
  {
    title: 'Frontend',
    icon: FrontendIcon,
    items: [
      { name: 'React.js', percent: 85 },
      { name: 'HTML5', percent: 90 },
      { name: 'CSS3', percent: 85 },
      { name: 'Tailwind CSS', percent: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: BackendIcon,
    items: [
      { name: 'Node.js', percent: 85 },
      { name: 'Express.js', percent: 85 },
      { name: 'REST APIs', percent: 80 },
      { name: 'PHP', percent: 65 },
    ],
  },
  {
    title: 'Databases',
    icon: DatabaseIcon,
    items: [
      { name: 'MongoDB', percent: 80 },
      { name: 'MySQL', percent: 80 },
      { name: 'PostgreSQL', percent: 75 },
    ],
  },
  {
    title: 'Mobile Development',
    icon: MobileIcon,
    items: [
      { name: 'Android Studio', percent: 70 },
      { name: 'Kotlin', percent: 70 },
    ],
  },
  {
  title: 'Cloud & DevOps',
  icon: BriefcaseIcon,
  items: [
    { name: 'AWS', percent: 75 },
    { name: 'Git', percent: 85 },
    { name: 'GitHub', percent: 90 },
  ],
  },
  {
    title: 'Tools & Platforms',
    icon: ToolsIcon,
    items: [
      { name: 'VS Code', percent: 90 },
      { name: 'Postman', percent: 85 },
      { name: 'Figma', percent: 75 },
      { name: 'GitHub', percent: 90 },
    ],
  },
];

function IconShell({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function LanguageIcon() {
  return (
    <IconShell>
      <path d="M8 9 4 12l4 3" />
      <path d="M16 9l4 3-4 3" />
      <path d="M14 7 10 17" />
    </IconShell>
  );
}

function FrontendIcon() {
  return (
    <IconShell>
      <path d="M4 8h16" />
      <path d="M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="M9 12h6" />
    </IconShell>
  );
}

function BackendIcon() {
  return (
    <IconShell>
      <path d="M4 7h16" />
      <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </IconShell>
  );
}

function DatabaseIcon() {
  return (
    <IconShell>
      <ellipse cx="12" cy="6.5" rx="7" ry="2.5" />
      <path d="M5 6.5v11c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-11" />
      <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
    </IconShell>
  );
}

function ToolsIcon() {
  return (
    <IconShell>
      <path d="M14.7 6.3a4.2 4.2 0 0 0-5.7 5.7l-5.2 5.2 1.4 1.4 5.2-5.2a4.2 4.2 0 0 0 5.7-5.7L18.5 10l1.5-1.5-3.3-3.3-1.5 1.5Z" />
      <path d="m17.8 14.2 2.4 2.4" />
    </IconShell>
  );
}

function MobileIcon() {
  return (
    <IconShell>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M10 17h4" />
      <path d="M9 7h6" />
    </IconShell>
  );
}

function DeviceIcon() {
  return (
    <IconShell>
      <rect x="2" y="3" width="8" height="14" rx="1.5" />
      <rect x="14" y="3" width="8" height="14" rx="1.5" />
      <path d="M5 18h14" />
    </IconShell>
  );
}

function CloudIcon() {
  return (
    <IconShell>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10Z" />
    </IconShell>
  );
}

function BriefcaseIcon() {
  return (
    <IconShell>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="14" x2="12" y2="20" />
    </IconShell>
  );
}

function ProgressRow({ name, percent }) {
  return (
    <div style={{ display: 'grid', gap: '0.45rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <span style={{ color: '#f3f4f6', fontSize: '1rem', fontWeight: 500 }}>{name}</span>
        <span style={{ color: '#f3f4f6', fontSize: '0.95rem', fontWeight: 600 }}>{percent}%</span>
      </div>
      <div style={{ height: '10px', borderRadius: '999px', background: '#1f2937', overflow: 'hidden' }}>
        <div
          style={{
            width: `${percent}%`,
            height: '100%',
            borderRadius: '999px',
            background: accentColor,
            boxShadow: `0 0 0 1px ${accentColor}33`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '4rem 2rem', background: '#0f172a', color: '#e5e7eb' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Skills</h2>
      <p style={{ maxWidth: '820px', margin: '0 auto 2.25rem', textAlign: 'center', color: '#cbd5e1', lineHeight: 1.7 }}>
        Here are the technologies and tools I&apos;ve been working with. I&apos;m always eager to learn new technologies and improve my skills.
      </p>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              key={group.title}
              style={{
                background: '#5a6272',
                borderRadius: '1.5rem',
                padding: '1.5rem',
                boxShadow: '0 18px 40px rgba(0, 0, 0, 0.25)',
                minHeight: '240px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.4rem' }}>
                <span style={{ color: accentColor, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon />
                </span>
                <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#f8fafc' }}>{group.title}</h3>
              </div>

              <div style={{ display: 'grid', gap: '1.15rem' }}>
                {group.items.map((item) => (
                  <ProgressRow key={item.name} name={item.name} percent={item.percent} />
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}