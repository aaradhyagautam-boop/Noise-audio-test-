import { ChevronLeft } from './icons.jsx'

/**
 * L1 Inner Page Navigation — DLS Organism (L1). Figma node 932:2984.
 *
 * VARIANT: `Type=No icon` (documented contents: Leading Back Action + Page Title,
 * zero trailing actions). This is the closest documented variant to the mockup,
 * which shows a back action with no trailing icons.
 *
 * [FLAGGED] The DLS has no "back-action-only" variant. On this screen the Page
 * Title slot is left empty and the page title is delivered by the L2 Inner Page
 * Heading directly below, per the DLS hierarchy rule "L2 must appear below L1
 * content hierarchy." This is the one deviation from the variant's exact contents.
 *
 * DLS rules enforced: appears below the status bar; spans page width; navigation
 * actions stay visually secondary. Parent owns composition + layout only.
 */
export default function L1InnerPageNavigation({ onBack }) {
  return (
    <nav className="l1-nav" aria-label="Page navigation">
      <button className="l1-nav__back" onClick={onBack} aria-label="Back">
        <ChevronLeft />
      </button>
    </nav>
  )
}
