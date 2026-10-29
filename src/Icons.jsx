const S = (d, extra) => (props) => (
  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d={d} />{extra}
  </svg>
)
export const I = {
  phone: S('M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z'),
  pin: S('M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z', <circle cx="12" cy="10" r="2.5" />),
  mail: S('m3 7 9 6 9-6', <rect x="3" y="5" width="18" height="14" rx="2" />),
  wa: S('M3 21l1.65-4.9A9 9 0 1 1 8 19.4L3 21z', <path d="M9 9.5c.5 2 2.5 4 5 5l1.5-1.5-2-1-1 .8c-.8-.4-1.6-1.2-2-2l.8-1-1-2L9 9.5z" />),
  check: S('M5 12.5l4.5 4.5L19 7.5'),
  close: S('M6 6l12 12M18 6L6 18'),
  chev: S('M9 6l6 6-6 6'),
  arrow: S('M5 12h14M13 6l6 6-6 6'),
  shield: S('M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z', <path d="M8.5 12l2.5 2.5 4.5-5" />),
  chart: S('M4 21V11M10 21V4M16 21v-8M22 21H2'),
  mountain: S('M3 19l6-10 4 6 2-3 6 7H3z', <circle cx="17" cy="6" r="1.5" />),
  road: S('M8 3L5 21M16 3l3 18M12 4v3M12 10v4M12 17v3'),
  doc: S('M7 3h8l4 4v14H7zM15 3v4h4M10 13h6M10 17h6'),
  megaphone: S('M3 11v3l12 5V6L3 11zM15 9a3 3 0 0 1 0 6M6 14l1 5h3l-1-4'),
  fb: S('M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5z'),
  home: S('M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6'),
  grid: S('M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'),
  info: S('M12 11v6M12 7.5h.01', <circle cx="12" cy="12" r="9" />),
  key: S('M10.5 12.5 20 3M16 7l3 3M18 5l2 2', <circle cx="8" cy="16" r="4" />),
  image: S('M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 5', <circle cx="16" cy="9" r="1.5" />),
  users: S('M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14a6.5 6.5 0 0 1 3.5 6'),
  up: S('M7 17 17 7M8 7h9v9'),
  top: S('M12 19V5M5 12l7-7 7 7'),
}
