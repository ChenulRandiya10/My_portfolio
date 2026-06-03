import React from 'react';

// Shell for general icons if needed, but we will mostly write custom colored SVGs
export function TechIcon({ name, size = 20, style = {} }) {
  const normName = name.toLowerCase().trim().replace('.js', '').replace(' ', '');

  switch (normName) {
    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <text x="12" y="17" fill="#000000" fontFamily="sans-serif" fontWeight="900" fontSize="11" textAnchor="middle">JS</text>
        </svg>
      );
    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1 2c-2.95 0-2.76 1.28-2.76 1.28L9.36 4.8c0 1.29 1.05 2.35 2.34 2.35h2.75c.7 0 1.28.58 1.28 1.28v2.44c0 .66-.44 1.23-1.07 1.23H10.4c-1.28 0-2.35-1.05-2.35-2.34V8.5c0-.7-.57-1.28-1.28-1.28H4.02C2.74 7.22 2.92 8.5 2.92 8.5L2.9 10c0 1.28 1.05 2.35 2.34 2.35h1c.7 0 1.28.57 1.28 1.28v2.44c0 2.94 2.76 2.76 2.76 2.76h1.76c2.95 0 2.76-1.28 2.76-1.28l.02-1.52c0-1.29-1.05-2.35-2.34-2.35h-2.75c-.7 0-1.28-.58-1.28-1.28V9.97c0-.66.44-1.23 1.07-1.23h4.28c1.28 0 2.35 1.05 2.35 2.34V12.3c0 .7.57 1.28 1.28 1.28h2.75c1.28 0 1.1-1.28 1.1-1.28l.02-1.48c0-1.29-1.05-2.35-2.34-2.35h-1c-.7 0-1.28-.58-1.28-1.28V4.76c0-2.94-2.76-2.76-2.76-2.76H12.1zm-1.34 1.22c.38 0 .68.3.68.68 0 .37-.3.68-.68.68-.37 0-.68-.31-.68-.68 0-.38.3-.68.68-.68zm3.62 14.9c.38 0 .68.3.68.68 0 .38-.3.68-.68.68a.68.68 0 0 1-.68-.68c0-.38.3-.68.68-.68z" fill="#3776AB" />
          <path d="M12.1 22c2.95 0 2.76-1.28 2.76-1.28l.02-1.52c0-1.29-1.05-2.35-2.34-2.35h-2.75c-.7 0-1.28-.58-1.28-1.28v-2.44c0-.66.44-1.23 1.07-1.23H13.8c1.28 0 2.35 1.05 2.35 2.34V15.7c0 .7.57 1.28 1.28 1.28h2.75c1.28 0 1.1 1.28 1.1 1.28l.02 1.48c0 1.29-1.05 2.35-2.34 2.35h-1c-.7 0-1.28.58-1.28 1.28v2.44c0 2.94-2.76 2.76-2.76 2.76H12.1z" fill="#FFD343" />
        </svg>
      );
    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M10.25 1c0 0-.25 2.35-2.15 3.35 0 0 1.76-.08 2.45-1.4 0 0 1.84.4 2.5 1.5.1-.9.84-2.45-1.05-3.45H10.25zm5.12 1.86c0 0-.58.98-1.63 1.5 0 0 1.34.02 1.88-.77 0 0 1.4.38 1.9 1.13.06-.67.63-1.85-.8-2.6v.74zM4.1 19.34s-1.8.84-1.8 1.96c0 .7.85 1.3 2.1 1.7 0 0-1-.38-1-1.02 0-.96 1.75-1.62 3.8-2.1l-.8-.6c-1-.28-1.74-.56-2.3-.94zm1.96-1.5c-1.34-.34-2.3-.7-2.3-1.12 0-.5.98-.98 2.5-1.34 0 0-1.12.38-1.12.8 0 .8 2.65 1.1 4.54 1.46l-1.35.4c-1.18-.08-1.92-.12-2.27-.2zm14.28 2.56c-1.62.9-4.8 1.5-8.54 1.5-4.4 0-8.24-.86-8.24-2.02v-.38c2.1 1.26 6.54 1.76 9.8 1.62 2.8-.1 5.7-.72 6.98-1.68v.96zm1.16-2.52c0 .9-3.8 1.8-8.5 1.8-4.46 0-8.2-1-8.2-1.92 0-.8.64-1.28 2-1.6 0 0-.84.28-.84.72 0 .84 2.5 1.34 6.7 1.34 4.5 0 8.84-.84 8.84-1.7v1.36zm-3.32-6.5s.44 2.6-3.3 3.86c-3.1 1.04-5.64.6-6.84-.25 0 0 .8.6 2.34.6 1.4 0 3.3-.4 4.88-.86 2.5-.73 3.32-2.18 3.12-3.35h-.2zm.54-3.56s.2 1.46-.86 2.82c-.88 1.14-2.6 2-5 2.54 0 0 2.2-.42 3.16-1.5 1.46-1.64.92-3.86.7-3.86z" fill="#E76F51" />
          <path d="M12.9 6.2c0 0-1 2.3-5.2 3.7-2.4.8-3.4 1.8-3.4 2.7 0 1.2 1.94 1.85 3.34 2.15 0 0-1.26-.2-1.26-.92 0-1 .92-1.62 3.82-2.35 4.1-1.04 4.84-3.4 4.18-5.3-.08-.18-.46-.3-.88-.28z" fill="#5382A1" />
        </svg>
      );
    case 'php':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
          <path d="M7.7 14.5h1.2l.6-2.5h1.3c1 0 1.7-.5 1.7-1.5s-.6-1.5-1.7-1.5H8.7l-1.4 5.5zm1.9-4.3h.8c.4 0 .7.1.7.6s-.3.6-.7.6h-.8l.3-1.2zM13.6 14.5h1.2l.6-2.5h1.3c1 0 1.7-.5 1.7-1.5s-.6-1.5-1.7-1.5h-2.1l-1.4 5.5zm1.9-4.3h.8c.4 0 .7.1.7.6s-.3.6-.7.6h-.8l.3-1.2zM4.6 14.5h1.2l1.3-5.2H5.8L4.6 14.5z" fill="#FFFFFF" />
          <ellipse cx="12" cy="12" rx="10" ry="6" stroke="#4F5D95" strokeWidth="0.8" />
        </svg>
      );
    case 'react':
    case 'reactjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="4.5" ry="11" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="4.5" ry="11" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="4.5" ry="11" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
        </svg>
      );
    case 'html5':
    case 'html':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 2L4.5 20.5L12 22.5L19.5 20.5L21.5 2H2.5Z" fill="#E34F26" />
          <path d="M12 3.7v17.2l5.9-1.6L19.3 3.7H12Z" fill="#EF652A" />
          <path d="M12 9.5H15.5L15.1 13.5L12 14.3V16.8L16.5 15.6L17.2 7H12V9.5ZM12 4.7H6.8L7.4 11.2H12V8.7H9.7L9.5 6.2H12V4.7Z" fill="#FFFFFF" />
          <path d="M12 11.2H7.4L7.8 15.5L12 16.7V14.2L9.8 13.5L9.6 11.2H12V11.2Z" fill="#EBEBEB" />
          <path d="M12 4.7V8.7H14.8L15.1 6.2H12V4.7Z" fill="#FFFFFF" />
        </svg>
      );
    case 'css3':
    case 'css':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 2L4.5 20.5L12 22.5L19.5 20.5L21.5 2H2.5Z" fill="#1572B6" />
          <path d="M12 3.7v17.2l5.9-1.6L19.3 3.7H12Z" fill="#33A9DC" />
          <path d="M12 9.5H15.4L15.1 13.1L12 14V16.5L16.5 15.3L17.1 7.2H12V9.5ZM12 4.8H7L7.6 11H12V8.6H9.7L9.5 6.2H12V4.8Z" fill="#FFFFFF" />
          <path d="M12 11H7.6L7.9 14.8L12 15.9V13.5L9.8 12.9L9.6 11H12V11Z" fill="#EBEBEB" />
        </svg>
      );
    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 4.8c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2-.9 3 0 .7.6 1.4 1.3 2.5 1.3 2.4 0 3.9-1.2 4.5-3.6-1 .9-2 .9-3 0-.7-.6-1.4-1.3-2.5-1.3zm-4.5 7.2c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2-.9 3 0 .7.6 1.4 1.3 2.5 1.3 2.4 0 3.9-1.2 4.5-3.6-1 .9-2 .9-3 0-.7-.6-1.4-1.3-2.5-1.3z" fill="#06B6D4" />
        </svg>
      );
    case 'node':
    case 'nodejs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2z" fill="#339933" />
          <path d="M12 3.8v14.4l6.5-3.6v-7.2L12 3.8z" fill="#66CC33" />
          <text x="12" y="13.5" fill="#FFF" fontFamily="sans-serif" fontWeight="900" fontSize="8" textAnchor="middle">node</text>
        </svg>
      );
    case 'express':
    case 'expressjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#353535" />
          <text x="12" y="15" fill="#FFF" fontFamily="monospace" fontWeight="900" fontSize="10" textAnchor="middle">EX</text>
        </svg>
      );
    case 'restapi':
    case 'restapis':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="7" r="4" fill="#00A3E0" />
          <circle cx="17" cy="17" r="4" fill="#00A3E0" />
          <path d="M7 11v4h10v-4" stroke="#00A3E0" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M13 13h5M11 13H6" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="12" y="10" fill="#61DAFB" fontFamily="sans-serif" fontWeight="900" fontSize="6" textAnchor="middle">REST</text>
        </svg>
      );
    case 'mongodb':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 9 6.5 9 11.5C9 16.5 12 22 12 22C12 22 15 16.5 15 11.5C15 6.5 12 2 12 2Z" fill="#47A248" />
          <path d="M12 2C12 2 10.5 6.5 10.5 11.5C10.5 16.5 12 22 12 22V2Z" fill="#589636" />
          <path d="M12 5.5v13" stroke="#3F3F3F" strokeWidth="1" />
          <path d="M12 2C12 2 11 4 11 6.5s1 4.5 1 4.5" stroke="#FFFFFF" strokeWidth="0.8" />
        </svg>
      );
    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M6 14.5c2-2 5.5-2 7.5-1s3 3 2.5 5c-.5 2-2 3.5-4 4c-.5.1-.9.1-1.4 0c.5-.5 1-1.3 1-2.1c0-1.8-1.5-3.3-3.3-3.3c-.9 0-1.7.3-2.3.9l.2.2c.4-.3.9-.4 1.4-.4c1.2 0 2.2 1 2.2 2.2c0 .5-.2 1-.5 1.3l2.8 1.1c1.5-1.5 2.2-3.8 1.7-5.9c-.5-2.1-2.2-3.8-4.3-4.3c-2.1-.5-4.4.2-5.9 1.7l1.7.2z" fill="#E28C38" />
          <path d="M19 10.5c0-4.1-3.6-7.5-8-7.5c-3.1 0-5.8 1.7-7.1 4.2c2.5-1.6 5.8-1.8 8.5-.5c2.7 1.3 4.4 4.1 4.4 7.1c0 1.2-.3 2.4-.8 3.4c1.8-1.5 3-4.1 3-6.7z" fill="#00758F" />
        </svg>
      );
    case 'postgresql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8 2 4.5 5 4.5 9.5c0 3 2 5.5 4.5 6.5c-.3.8-.5 1.7-.5 2.5c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-.8-.2-1.7-.5-2.5c2.5-1 4.5-3.5 4.5-6.5C19.5 5 16 2 12 2zm1 16.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5zm2.5-4c-.7.7-1.7 1.2-2.8 1.4c.5-.8.8-1.8.8-2.9c0-1.8-1.5-3.3-3.3-3.3c-1.1 0-2 .6-2.6 1.4c-.4-.7-.6-1.5-.6-2.4c0-2.8 2.2-5 5-5s5 2.2 5 5c0 2.2-1 4.1-2.5 5.2v.6z" fill="#336791" />
        </svg>
      );
    case 'androidstudio':
    case 'android':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#3DDC84" />
          <path d="M7 9.5a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm8 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm-6.5 5.5c1 1.2 2.5 2 4.5 2s3.5-.8 4.5-2H8.5z" fill="#FFFFFF" />
          <path d="M6 5.5l1.5 2.2M18 5.5l-1.5 2.2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'kotlin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M22 2H2v20h20L12 12 22 2z" fill="url(#kotlin_grad)" />
          <defs>
            <linearGradient id="kotlin_grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#E17200" />
              <stop offset="0.5" stopColor="#7F52FF" />
              <stop offset="1" stopColor="#00AFFF" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'aws':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6c-2.3 0-4 1.1-4 2.8c0 2.2 2.5 2.5 4.5 2.9c1.6.3 2.5.6 2.5 1.3c0 .8-.8 1.2-1.9 1.2c-1.6 0-2.8-.7-3.1-1.6L8 13.2C8.7 15 10.3 16 12.8 16c2.5 0 4.2-1.1 4.2-3c0-2.4-2.7-2.6-4.6-3c-1.4-.3-2.2-.6-2.2-1.2c0-.7.7-1.1 1.7-1.1c1.4 0 2.3.5 2.7 1.3l1.8-.7C15.8 7 14.3 6 12 6z" fill="#232F3E" />
          <path d="M5.5 17.5c3.2 2.2 9.8 2.2 13 0c.5-.3.2-.8-.3-.6c-3.1 1-9.3 1-12.4 0c-.5-.2-.8.3-.3.6z" fill="#FF9900" />
          <path d="M18.8 16.5l.7 1.2l.6-.9c.2-.3 0-.6-.3-.6l-1 .3z" fill="#FF9900" />
        </svg>
      );
    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5 11.5L12.5 2.5c-.6-.6-1.5-.6-2 0l-9 9c-.6.6-.6 1.5 0 2l9 9c.6.6 1.5.6 2 0l9-9c.6-.5.6-1.5 0-2.1z" fill="#F05032" />
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
          <circle cx="12" cy="7.5" r="1.5" fill="#FFFFFF" />
          <circle cx="12" cy="16.5" r="1.5" fill="#FFFFFF" />
          <path d="M12 9v6" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#24292E" />
        </svg>
      );
    case 'vscode':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M18.2 2.5l-6.7 6.1L4.8 3.2L2.5 4.7v14.6l2.3 1.5l6.7-5.4l6.7 6.1l3.3-2.3V4.8L18.2 2.5z" fill="#007ACC" />
          <path d="M18.2 2.5V21.5l3.3-2.3V4.8L18.2 2.5z" fill="#1F9CF0" />
          <path d="M2.5 19.3V4.7l9 6.8l-9 7.8z" fill="#E61C24" />
          <path d="M11.5 11.5l6.7-5.4V2.5l-6.7 6.1v2.9z" fill="#0066B3" />
        </svg>
      );
    case 'postman':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <path d="M12 5l-4 6h3v6h2v-6h3l-4-6z" fill="#FFFFFF" />
          <path d="M7 17s2-2 5-2s5 2 5 2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'figma':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 12a3.5 3.5 0 1 1 0-7h3.5v7H8.5z" fill="#F24E1E" />
          <path d="M8.5 19a3.5 3.5 0 0 1-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5h3.5v3.5a3.5 3.5 0 0 1-3.5 3.5z" fill="#0ACF83" />
          <path d="M12 12a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0z" fill="#1ABC9C" />
          <path d="M12 5h3.5a3.5 3.5 0 1 1 0 7H12V5z" fill="#FF7262" />
          <path d="M8.5 12H12v3.5H8.5a3.5 3.5 0 0 1 0-3.5z" fill="#A259FF" />
        </svg>
      );
    case 'firebase':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M3.9 18.2L11 4.3a.9.9 0 0 1 1.7 0l2 3.8L3.9 18.2z" fill="#FFC244" />
          <path d="M18.8 15.6l-3.8-7.3-10.4 9.9 6.4 3.7c.6.3 1.3.3 1.9 0l5.9-6.3z" fill="#F48120" />
          <path d="M12 22.2l6.8-6.6a1 1 0 0 0-.2-1.5l-6.6-6.6v14.7z" fill="#DE5826" />
        </svg>
      );
    case 'msword':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="18" rx="2" fill="#2B579A" />
          <path d="M6 7h8M6 11h12M6 15h10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="12" y="15" fill="#FFF" fontFamily="sans-serif" fontWeight="900" fontSize="11" textAnchor="middle">W</text>
        </svg>
      );
    case 'msexcel':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="18" rx="2" fill="#217346" />
          <path d="M6 7h12M6 12h12M6 17h12M12 7v10" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );
    case 'mspowerpoint':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="18" rx="2" fill="#D24726" />
          <circle cx="12" cy="11" r="4" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M12 11l3 2.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="7" y="9" fill="#FFF" fontFamily="sans-serif" fontWeight="900" fontSize="9">P</text>
        </svg>
      );
    case 'officesuite':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#EB3C00" />
          <path d="M7 7h10v10H7z" fill="#FFFFFF" />
          <path d="M10 10h4v4h-4z" fill="#EB3C00" />
        </svg>
      );
    case 'full-stackdevelopment':
    case 'fullstackdevelopment':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="14" height="10" rx="1.5" fill="#3B82F6" />
          <rect x="8" y="10" width="14" height="10" rx="1.5" fill="#10B981" />
          <path d="M5 9h3M11 15h3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case 'databasedesign':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="6" rx="7" ry="3" fill="#10B981" />
          <path d="M5 6v6c0 1.6 3.1 3 7 3s7-1.4 7-3V6" fill="#059669" />
          <ellipse cx="12" cy="12" rx="7" ry="3" fill="#34D399" />
          <path d="M5 12v6c0 1.6 3.1 3 7 3s7-1.4 7-3v-6" fill="#047857" />
          <ellipse cx="12" cy="18" rx="7" ry="3" fill="#6EE7B7" />
        </svg>
      );
    case 'engineeringtechnology':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="6" stroke="#F59E0B" strokeWidth="2.5" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2L19 19M5 19l2.8-2.8M16.2 7.8L19 5" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.5" fill="#F59E0B" />
        </svg>
      );
    case 'science&technology':
    case 'sciencetechnology':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3v5l-4 6v5c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3v-5l-4-6V3H9z" fill="#EC4899" />
          <path d="M7.5 15h9a3 3 0 0 1-9 0z" fill="#F472B6" />
          <line x1="8" y1="3" x2="16" y2="3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'informationcommunicationtechnology':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="#3B82F6" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="#60A5FA" strokeWidth="1.5" />
          <path d="M12 2v20M2 12h20" stroke="#3B82F6" strokeWidth="1.2" />
        </svg>
      );
    default:
      // Fallback developer bracket icon with colored outline
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#7C8CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
        </svg>
      );
  }
}

// Special Project Category SVGs
export function ProjectLogo({ title, size = 64, style = {} }) {
  const normTitle = title.toLowerCase();

  if (normTitle.includes('advertising') || normTitle.includes('d and s')) {
    // Ad Agency
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
    // Event planning system
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
    // Travel booking
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
    // Personal Finance
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
    // Habit & Health Tracker
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

  // Fallback beautiful project tech grid logo
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

// Colored Contact Icons
export function ContactIcon({ type, size = 24, style = {} }) {
  const normType = type.toLowerCase().trim();

  switch (normType) {
    case 'phone':
    case 'tel':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="#25D366" />
          <path d="M16.5 13.5c-.3-.2-.8-.4-1.2-.6c-.3-.1-.5-.1-.7.2l-.7.9c-.2.2-.4.2-.7 0c-.3-.2-1-1-1.8-1.7C10.7 11.7 10.2 11 10 10.7c-.2-.3-.1-.5.1-.7l.5-.6c.2-.2.2-.4.1-.6c-.1-.2-.6-1.5-.8-1.9c-.2-.5-.4-.4-.6-.4h-.6c-.3 0-.7.1-1 .4c-.3.3-.9.9-.9 2.2s.9 2.5 1.1 2.8c.2.3 2.1 3.2 5.1 4.5c.7.3 1.3.5 1.7.6c.7.2 1.4.2 1.9.1c.6-.1 1.8-.7 2-1.4c.2-.7.2-1.3.1-1.4c-.1-.1-.3-.2-.6-.3z" fill="#FFFFFF" />
        </svg>
      );
    case 'location':
    case 'address':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" fill="#EF4444" />
          <circle cx="12" cy="9" r="3.5" fill="#FFFFFF" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0077B5" />
          <path d="M8.2 19V9h-3v10h3zm-1.5-11.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8s.8 1.8 1.8 1.8zM19 19v-5.6c0-3-3.2-2.8-3.2-2.8V9h-3v10h3v-6.2c0 0 .3-1.8 2-1.8c1.7 0 1.2 1.8 1.2 1.8V19h3z" fill="#FFFFFF" />
        </svg>
      );
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="#181717" />
          <path d="M12 4.5c-4.1 0-7.5 3.4-7.5 7.5c0 3.3 2.1 6.1 5.1 7.1c.4.1.5-.2.5-.4v-1.3c-2.1.5-2.5-1-2.5-1c-.3-.9-.8-1.1-.8-1.1c-.7-.5.1-.5.1-.5c.8.1 1.2.8 1.2.8c.7 1.1 1.7.8 2.1.6c.1-.5.3-.8.5-1c-1.7-.2-3.4-.8-3.4-3.7c0-.8.3-1.5.8-2c-.1-.2-.3-1 .1-2c0 0 .6-.2 2 .8c.6-.2 1.3-.3 1.9-.3c.7 0 1.3.1 1.9.3c1.4-1 2-.8 2-.8c.4 1 .2 1.8.1 2c.5.5.8 1.2.8 2c0 2.9-1.7 3.5-3.4 3.7c.3.3.5.8.5 1.5V18c0 .2.1.5.5.4c3-1 5.1-3.8 5.1-7.1c0-4.1-3.4-7.5-7.5-7.5z" fill="#FFFFFF" />
        </svg>
      );
    case 'email':
    case 'mail':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="20" height="16" rx="3" fill="#EA4335" />
          <path d="M22 6l-10 7L2 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 13L2 6h20L12 13z" fill="#C5221F" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#7C8CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }} xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
  }
}
