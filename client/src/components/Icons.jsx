import React from 'react';

// Simple Icons (official brand logos)
import {
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiKotlin,
  SiCplusplus,
  SiSharp,
  SiPhp,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiAndroidstudio,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiEclipseide,
  SiPostman,
  SiDiagramsdotnet,
  SiFigma,
  SiOpenapiinitiative,
  SiGmail,
} from 'react-icons/si';
import { FaAws, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';

const pngImages = import.meta.glob('../images/*.png', { eager: true, import: 'default' });

function getPngSrc(fileName) {
  return pngImages[`../images/${fileName}`];
}

export function normalizeSkillName(name) {
  return name.toLowerCase().replace(/[\s.&\-_]/g, '');
}

function Css3Icon({ size, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2l1.8 20L12 24l7.2-2L21 2H3z" fill="#264DE4"/>
      <path d="M12 3.5v17.3l5.8-1.6L19.3 3.5H12z" fill="#2965F1"/>
      <path d="M12 9.5H8.5L8.8 13l3.2.9V16.4l-3.9-1.1-.3-3.6H6.3l.5 6.1L12 19.1V16.4l-3-.85-.2-2.05H12V9.5zM15.4 13.1L15.1 16 12 16.9v3l4.9-1.4.7-7.4H12v2.05h3.15l.25-1.05z" fill="white"/>
      <path d="M12 9.5v4H8.8L8.5 9.5H12zm0 6.9l-.05.02-3-.85v.02L12 16.4v-.01zm3.4-6.9H12v2.05h3.15l-.25 2.55-3 .85v3l4.9-1.4.7-7.4-.55.35z" fill="#EBEBEB"/>
    </svg>
  );
}

function IconBox({ size, children, style }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/* =========================
   TECH ICONS (REAL LOGOS)
========================= */

export function TechIcon({ name, size = 26, style = {} }) {
  const norm = normalizeSkillName(name);
  const wrap = (node) => <IconBox size={size}>{node}</IconBox>;
  const wrapPng = (fileName) => {
    const src = getPngSrc(fileName);
    if (!src) return null;

    return wrap(
      <img
        src={src}
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
          ...style,
        }}
      />
    );
  };

  switch (norm) {
    case 'javascript':
    case 'js':
      return wrap(<SiJavascript size={size} color="#F7DF1E" style={style} />);

    case 'python':
      return wrap(<SiPython size={size} color="#3776AB" style={style} />);

    case 'java':
      return wrap(<SiOpenjdk size={size} color="#ED8B00" style={style} />);

    case 'kotlin':
      return wrap(<SiKotlin size={size} color="#7F52FF" style={style} />);

    case 'c++':
    case 'cplusplus':
      return wrap(<SiCplusplus size={size} color="#00599C" style={style} />);

    case 'c#':
    case 'csharp':
      return wrap(<SiSharp size={size} color="#512BD4" style={style} />);

    case 'php':
      return wrap(<SiPhp size={size} color="#777BB4" style={style} />);

    case 'react':
    case 'reactjs':
      return wrap(<SiReact size={size} color="#61DAFB" style={style} />);

    case 'html5':
    case 'html':
      return wrap(<SiHtml5 size={size} color="#E34F26" style={style} />);

    case 'css3':
    case 'css':
      return wrapPng('CSS3.png') ?? wrap(<Css3Icon size={size} style={style} />);

    case 'tailwindcss':
    case 'tailwind':
      return wrap(<SiTailwindcss size={size} color="#38BDF8" style={style} />);

    case 'nodejs':
    case 'node':
      return wrap(<SiNodedotjs size={size} color="#339933" style={style} />);

    case 'express':
    case 'expressjs':
      return wrap(<SiExpress size={size} color="#ffffff" style={style} />);

    case 'springboot':
    case 'spring':
      return wrap(<SiSpringboot size={size} color="#6DB33F" style={style} />);

    case 'mongodb':
      return wrap(<SiMongodb size={size} color="#47A248" style={style} />);

    case 'mysql':
      return wrap(<SiMysql size={size} color="#4479A1" style={style} />);

    case 'postgresql':
    case 'postgres':
      return wrap(<SiPostgresql size={size} color="#4169E1" style={style} />);

    case 'git':
      return wrap(<SiGit size={size} color="#F05032" style={style} />);

    case 'github':
      return wrap(<SiGithub size={size} color="#ffffff" style={style} />);

    case 'vscode':
      return wrap(<VscVscode size={size} color="#007ACC" style={style} />);

    case 'eclipse':
      return wrap(<SiEclipseide size={size} color="#2C2255" style={style} />);

    case 'postman':
      return wrap(<SiPostman size={size} color="#FF6C37" style={style} />);

    case 'drawio':
      return wrap(<SiDiagramsdotnet size={size} color="#F08705" style={style} />);

    case 'figma':
      return wrap(<SiFigma size={size} color="#F24E1E" style={style} />);

    case 'aws':
      return wrap(<FaAws size={size} color="#FF9900" style={style} />);

    case 'androidstudio':
    case 'android':
      return wrapPng('Android Studio.png') ?? wrap(<SiAndroidstudio size={size} color="#3DDC84" style={style} />);

    case 'firebase':
      return wrap(<SiFirebase size={size} color="#FFCA28" style={style} />);

    case 'restapi':
    case 'restapis':
      return wrap(<SiOpenapiinitiative size={size} color="#6BA539" style={style} />);

    case 'databasedesign':
      return wrap(
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="6" rx="7" ry="3" fill="#10B981" />
          <path d="M5 6v6c0 1.6 3.1 3 7 3s7-1.4 7-3V6" fill="#059669" />
          <ellipse cx="12" cy="12" rx="7" ry="3" fill="#34D399" />
          <path d="M5 12v6c0 1.6 3.1 3 7 3s7-1.4 7-3v-6" fill="#047857" />
          <ellipse cx="12" cy="18" rx="7" ry="3" fill="#6EE7B7" />
        </svg>
      );

    case 'fullstackdevelopment':
      return wrap(
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="14" height="10" rx="1.5" fill="#3B82F6" />
          <rect x="8" y="10" width="14" height="10" rx="1.5" fill="#10B981" />
          <path d="M5 9h3M11 15h3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'engineeringtechnology':
      return wrap(
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="6" stroke="#F59E0B" strokeWidth="2.5" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2L19 19M5 19l2.8-2.8M16.2 7.8L19 5" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.5" fill="#F59E0B" />
        </svg>
      );

    case 'sciencetechnology':
      return wrap(
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3v5l-4 6v5c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3v-5l-4-6V3H9z" fill="#EC4899" />
          <path d="M7.5 15h9a3 3 0 0 1-9 0z" fill="#F472B6" />
          <line x1="8" y1="3" x2="16" y2="3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'informationcommunicationtechnology':
    case 'ict':
      return wrap(
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
          {/* Globe/Network representation for ICT */}
          <circle cx="12" cy="12" r="9" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#60A5FA" strokeWidth="1.2" fill="none" />
          <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#60A5FA" strokeWidth="1.2" fill="none" />
          <circle cx="12" cy="12" r="2.5" fill="#3B82F6" />
          <circle cx="12" cy="4" r="1.2" fill="#60A5FA" />
          <circle cx="12" cy="20" r="1.2" fill="#60A5FA" />
          <circle cx="4" cy="12" r="1.2" fill="#60A5FA" />
          <circle cx="20" cy="12" r="1.2" fill="#60A5FA" />
        </svg>
      );

    case 'msword':
      return (
        wrapPng('MS Word.png') ??
        wrap(
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#2B579A"/>
            <path d="M14 2v6h6" fill="#1A3F6F"/>
            <text x="12" y="18" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="9" textAnchor="middle">W</text>
          </svg>
        )
      );

    case 'msexcel':
      return (
        wrapPng('MS Excel.png') ??
        wrap(
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#217346"/>
            <path d="M14 2v6h6" fill="#145C30"/>
            <path d="M9 13l1.5 2.5L12 13m0 0l1.5 2.5L15 13" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      );

    case 'mspowerpoint':
      return (
        wrapPng('MS PowerPoint.png') ??
        wrap(
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#C43E1C"/>
            <path d="M14 2v6h6" fill="#8F2D12"/>
            <circle cx="11" cy="15" r="3" fill="none" stroke="white" strokeWidth="1.2"/>
            <path d="M11 12v6M8 15h6" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        )
      );

    case 'officesuite':
    case 'microsoftoffice':
      return (
        wrapPng('Microsoft Office.png') ??
        wrapPng('Office Suite.png') ??
        wrap(
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="8" height="8" rx="1" fill="#F25022"/>
            <rect x="13" y="3" width="8" height="8" rx="1" fill="#7FBA00"/>
            <rect x="3" y="13" width="8" height="8" rx="1" fill="#00A4EF"/>
            <rect x="13" y="13" width="8" height="8" rx="1" fill="#FFB900"/>
          </svg>
        )
      );

    case 'documentmanagementsystem':
    case 'dms':
      return wrap(
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="16" height="20" rx="2" fill="#6366F1" />
          <path d="M8 8h8M8 12h8M8 16h5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="17" cy="17" r="3" fill="#10B981" />
          <path d="M15.5 17l1 1 2-2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'customerservice':
    case 'customersupport':
      return wrap(
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="10" r="4" fill="#8B5CF6" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 8c2 0 4-1.5 4-4 0 0-1 3-4 3" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'socialmedia':
    case 'socialmediamanagement':
      return (
        wrapPng('Social Media.png') ??
        wrap(
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="3.5" fill="#EC4899" />
            <circle cx="16" cy="8" r="3.5" fill="#8B5CF6" />
            <circle cx="12" cy="16" r="3.5" fill="#3B82F6" />
            <path d="M10.5 9.5L13.5 14M10.5 14L13.5 9.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        )
      );

    case 'legaldocumentation':
    case 'legal':
      return wrap(
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="16" height="20" rx="2" fill="#6B7280" />
          <path d="M8 8h8M8 12h8M8 16h6" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="18" cy="18" r="4" fill="#F59E0B" />
          <path d="M16.5 18l1.5 1.5 3-3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    default:
      return wrap(
        <span style={{ color: '#7c8cff', fontSize: Math.round(size * 0.55), fontWeight: 700, ...style }}>●</span>
      );
  }
}

export function SendMessageIcon({ size = 20, style = {} }) {
  return <IoSend size={size} color="#ffffff" style={{ flexShrink: 0, ...style }} aria-hidden="true" />;
}

export function ProjectLogo({ title, size = 64, style = {} }) {
  const normTitle = title.toLowerCase();

  if (normTitle.includes('advertising') || normTitle.includes('d and s')) {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="56" height="36" rx="4" fill="url(#ad_agency_bg)" />
        <path d="M4 36h56v8H4z" fill="#1E293B" opacity="0.8" />
        <path d="M22 28l6-4v10l-6-4h-4v-2h4z" fill="#FFFFFF" />
        <path d="M28 24s3-1 4 2s-1 4-4 4" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="24" r="3" fill="#F43F5E" />
        <circle cx="42" cy="28" r="2" fill="#10B981" />
        <path d="M10 24h3v8h-3zm6-4h3v12h-3zm6-8h3v20h-3z" fill="#60A5FA" opacity="0.3" />
        <defs>
          <linearGradient id="ad_agency_bg" x1="4" y1="8" x2="60" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normTitle.includes('event') || normTitle.includes('planner')) {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="52" height="46" rx="6" fill="#0F172A" stroke="url(#event_border)" strokeWidth="2" />
        <path d="M6 10h52v12H6z" fill="url(#event_header)" />
        <rect x="16" y="5" width="6" height="10" rx="3" fill="#EF4444" />
        <rect x="42" y="5" width="6" height="10" rx="3" fill="#EF4444" />
        <circle cx="20" cy="36" r="3" fill="#F59E0B" />
        <circle cx="46" cy="42" r="4" fill="#10B981" />
        <path d="M32 30l2 4h4l-3 2.5l1.5 4.5l-4.5-2.5l-4.5 2.5l1.5-4.5l-3-2.5h4z" fill="#FCD34D" />
        <defs>
          <linearGradient id="event_border" x1="6" y1="10" x2="58" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#EC4899" />
            <stop offset="1" stopColor="#F43F5E" />
          </linearGradient>
          <linearGradient id="event_header" x1="6" y1="10" x2="58" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F43F5E" />
            <stop offset="1" stopColor="#EF4444" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normTitle.includes('wander') || normTitle.includes('booking') || normTitle.includes('gear')) {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" fill="url(#wander_bg)" />
        <path d="M14 44l12-18l10 14l8-10l10 14H14z" fill="#0F172A" />
        <path d="M26 26l4 6l6-10l6 9" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 14l3 7l7 3l-7 3l-3 7l-3-7l-7-3l7-3z" fill="#F59E0B" />
        <defs>
          <linearGradient id="wander_bg" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#10B981" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normTitle.includes('money') || normTitle.includes('finance') || normTitle.includes('budget')) {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="48" height="36" rx="8" fill="url(#finance_bg)" />
        <path d="M8 20h48v4H8z" fill="#1E293B" />
        <circle cx="32" cy="34" r="8" fill="#F59E0B" stroke="#FFF" strokeWidth="2" />
        <path d="M32 30v8M29 32h5.5a1.5 1.5 0 0 1 0 3H29.5a1.5 1.5 0 0 0 0 3H35" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="32" r="5" fill="#FCD34D" opacity="0.9" />
        <circle cx="16" cy="36" r="6" fill="#FCD34D" opacity="0.9" />
        <defs>
          <linearGradient id="finance_bg" x1="8" y1="14" x2="56" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F59E0B" />
            <stop offset="1" stopColor="#D97706" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normTitle.includes('habit') || normTitle.includes('health')) {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" fill="url(#habit_bg)" />
        <path d="M32 44.5c-6.5-6-12-11.5-12-17c0-3.5 2.5-6 6-6c2.5 0 4.5 1.5 6 3.5c1.5-2 3.5-3.5 6-3.5c3.5 0 6 2.5 6 6c0 5.5-5.5 11-12 17z" fill="#EF4444" />
        <circle cx="42" cy="42" r="9" fill="#10B981" stroke="#FFF" strokeWidth="2.5" />
        <path d="M38.5 42l2.5 2.5l5-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="habit_bg" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#EC4899" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="52" height="52" rx="12" fill="url(#default_proj_bg)" />
      <path d="M22 26l8 8l16-16" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 44h32" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      <defs>
        <linearGradient id="default_proj_bg" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#60A5FA" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ContactBadge({ size, bg, children, style }) {
  const glyph = Math.round(size * 0.5);
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: bg,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        ...style,
      }}
    >
      {typeof children === 'function' ? children(glyph) : children}
    </span>
  );
}

export function ContactIcon({ type, size = 36, style = {} }) {
  const normType = type.toLowerCase().trim();
  const glyph = Math.round(size * 0.5);

  switch (normType) {
    case 'phone':
    case 'tel':
      return (
        <ContactBadge size={size} bg="#25D366" style={style}>
          <FaPhone size={glyph} color="#ffffff" />
        </ContactBadge>
      );
    case 'location':
    case 'address':
      return (
        <ContactBadge size={size} bg="#EF4444" style={style}>
          <FaMapMarkerAlt size={glyph} color="#ffffff" />
        </ContactBadge>
      );
    case 'linkedin':
      return (
        <ContactBadge size={size} bg="#0077B5" style={style}>
          <FaLinkedin size={glyph} color="#ffffff" />
        </ContactBadge>
      );
    case 'github':
      return (
        <ContactBadge size={size} bg="#181717" style={style}>
          <FaGithub size={glyph} color="#ffffff" />
        </ContactBadge>
      );
    case 'email':
    case 'mail':
      return (
        <ContactBadge size={size} bg="#EA4335" style={style}>
          <SiGmail size={glyph} color="#ffffff" />
        </ContactBadge>
      );
    default:
      return (
        <ContactBadge size={size} bg="#7c8cff" style={style}>
          <SiGmail size={glyph} color="#ffffff" />
        </ContactBadge>
      );
  }
}
