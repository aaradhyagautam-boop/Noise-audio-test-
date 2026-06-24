import HeadingContent from './HeadingContent.jsx'
import { Check, Cross } from './icons.jsx'

/**
 * Checkbox Card — DLS Organism. Figma node 894:6129.
 *
 * Documented variants (property `position`):
 *   - `checkbox Left`  → Checkbox Actionable + Heading Content + Cross Atom.
 *                        Use when items can be selected and independently removed.
 *   - `checkbox Right` → Heading Content + Checkbox Actionable (no Cross).
 *                        Use when item selection is the only required action.
 *
 * Parent OWNS composition + layout only. Child rules stay with children
 * (the Heading Content content limits live in HeadingContent, not here).
 *
 * DLS list rules (enforced by the grouped-list parent frame in the screen):
 *   - Must always exist within a list; never an isolated card.
 *   - Multiple items grouped inside a parent frame.
 *
 * Tokens: button/checkbox/checked, button/checkbox/unchecked,
 *         button/actionable/enabled (cross), Gaps/L2-Card Gap, Padding 12.
 */
export default function CheckboxCard({
  heading,
  support,
  supportTone = 'default',
  checked = false,
  disabled = false,
  position = 'left', // 'left' (with Cross) | 'right' (selection only)
  onToggle,
  onRemove,
}) {
  const rootClass =
    'checkbox-card' +
    ` checkbox-card--${position}` +
    (checked ? ' is-checked' : '') +
    (disabled ? ' is-disabled' : '')

  const checkbox = (
    <button
      type="button"
      className={`checkbox ${checked ? 'checkbox--checked' : 'checkbox--unchecked'}`}
      role="switch"
      aria-checked={checked}
      aria-label={checked ? 'On' : 'Off'}
      disabled={disabled}
      onClick={onToggle}
    >
      {checked ? <Check /> : null}
    </button>
  )

  const content = (
    <div className="checkbox-card__content">
      <HeadingContent
        heading={heading}
        support={support}
        supportTone={supportTone}
        disabled={disabled}
      />
    </div>
  )

  return (
    <div className={rootClass}>
      {position === 'left' ? (
        <>
          <span className="checkbox-card__check">{checkbox}</span>
          {content}
          <button
            type="button"
            className="checkbox-card__cross"
            aria-label="Remove device"
            disabled={disabled}
            onClick={onRemove}
          >
            <Cross />
          </button>
        </>
      ) : (
        <>
          {content}
          {checkbox}
        </>
      )}
    </div>
  )
}
