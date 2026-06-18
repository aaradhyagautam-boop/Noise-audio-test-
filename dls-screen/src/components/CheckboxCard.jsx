import HeadingContent from './HeadingContent.jsx'
import { Check, Cross } from './icons.jsx'

/**
 * Checkbox Card — DLS Organism. Figma node 894:6129.
 *
 * VARIANT: `position=checkbox Left`
 *   documented contents → Checkbox Actionable Molecule + Heading Content Atom + Cross Atom.
 *
 * Parent OWNS composition + layout only. Child rules stay with children:
 *  - The Heading Content limits live in HeadingContent (not here).
 *  - The checkbox + cross behaviours are their own actionables.
 *
 * DLS list rules (enforced by the grouped-list parent frame in the screen):
 *  - Must always exist within a list; never an isolated card.
 *  - Multiple items grouped inside a parent frame.
 *
 * Tokens: button/checkbox/checked, button/checkbox/unchecked,
 *         button/actionable/enabled (cross), Gaps/L2-Card Gap, Padding 12.
 */
export default function CheckboxCard({
  heading,
  support,
  checked = false,
  disabled = false,
  onToggle,
  onRemove,
}) {
  return (
    <div className="checkbox-card">
      {/* Checkbox actionable molecule (left) */}
      <span className="checkbox-card__check">
        <button
          type="button"
          className={`checkbox ${checked ? 'checkbox--checked' : 'checkbox--unchecked'}`}
          aria-pressed={checked}
          aria-label={checked ? 'Selected' : 'Not selected'}
          disabled={disabled}
          onClick={onToggle}
        >
          {checked ? <Check /> : null}
        </button>
      </span>

      {/* Heading Content atom (centre) */}
      <div className="checkbox-card__content">
        <HeadingContent heading={heading} support={support} disabled={disabled} />
      </div>

      {/* Cross atom (right) */}
      <button
        type="button"
        className="checkbox-card__cross"
        aria-label="Remove device"
        disabled={disabled}
        onClick={onRemove}
      >
        <Cross />
      </button>
    </div>
  )
}
