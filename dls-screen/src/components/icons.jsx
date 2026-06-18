// Inline SVG glyphs. Status-bar glyphs are OS chrome; the chevron, cross and
// check are the icon atoms referenced by the DLS components.

export const ChevronLeft = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Cross = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" />
  </svg>
)

export const Check = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12.5L10 17.5L19 7" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const SignalWifiBattery = () => (
  <svg width="68" height="12" viewBox="0 0 68 12" fill="currentColor" aria-hidden="true">
    {/* signal */}
    <rect x="0" y="6" width="3" height="6" rx="1" />
    <rect x="5" y="4" width="3" height="8" rx="1" />
    <rect x="10" y="2" width="3" height="10" rx="1" />
    <rect x="15" y="0" width="3" height="12" rx="1" />
    {/* wifi */}
    <path d="M24 4c3-3 8-3 11 0l-1.4 1.4c-2.2-2.2-6-2.2-8.2 0L24 4zm2.6 2.6c1.6-1.6 4.2-1.6 5.8 0L31 8c-.8-.8-2.2-.8-3 0l-1.4-1.4zM28 9l1.5 1.5L31 9c-.8-.8-2.2-.8-3 0z" />
    {/* battery */}
    <rect x="46" y="1" width="20" height="10" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <rect x="47.5" y="2.5" width="16" height="7" rx="1.5" />
    <rect x="67" y="4" width="1.5" height="4" rx="0.75" opacity="0.6" />
  </svg>
)
