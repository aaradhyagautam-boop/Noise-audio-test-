import { SignalWifiBattery } from './icons.jsx'

/**
 * Status Bar — DLS Atom (L0). Figma node 949:1224 / symbol 374:7867.
 *
 * DLS rules enforced here:
 *  - Hierarchy: represents L0; first visible component, fixed at top.
 *  - Content Ownership: system information only — NO application content.
 *  - Token: default/status bar (#000000) drives the content colour.
 */
export default function StatusBar({ time = '9:41' }) {
  return (
    <div className="statusbar" role="presentation">
      <span className="statusbar__time">{time}</span>
      <span className="statusbar__glyphs">
        <SignalWifiBattery />
      </span>
    </div>
  )
}
