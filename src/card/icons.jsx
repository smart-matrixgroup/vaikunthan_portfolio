const P = ({ children, ...p }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>{children}</svg>
)
export const User = () => <P><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></P>
export const Briefcase = () => <P><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" /></P>
export const Globe = () => <P><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></P>
export const Chat = () => <P><path d="M21 12a8 8 0 01-11.8 7L3 21l2-5.6A8 8 0 1121 12z" /><path d="M9 9c0 3 3 6 6 6l1-2-2-1-1 .8c-.8-.4-1.5-1.1-1.9-1.9L12 10l-1-2z" /></P>
export const Insta = () => <P><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></P>
export const Linkedin = () => <P><path d="M7 10v7M7 7v.01M11 17v-7M11 13c0-2 1.5-3 3-3s3 1 3 3v4" /></P>
export const Pin = () => <P><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></P>
export const Star = () => <P><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" /></P>
export const Chevron = () => <P width="20" height="20"><path d="M9 6l6 6-6 6" /></P>
