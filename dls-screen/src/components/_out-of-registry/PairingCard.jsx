import HeadingContent from '../HeadingContent.jsx'

/**
 * ⚠️ OUT-OF-REGISTRY COMPONENT — NOT one of the 5 documented DLS components.
 *
 * The "Dual Pairing" card in the mockup is a Master Card pattern with a TOGGLE
 * trailing actionable. Per the DLS:
 *   - "Master Card" is documented but is OUTSIDE the 5-component scope.
 *   - The in-scope Checkbox Card explicitly forbids toggles
 *     ("Do not combine with radio buttons or toggles"), so this is NOT a Checkbox Card.
 *
 * Built best-effort to recreate the screen, reusing the in-scope Heading Content
 * atom and DLS tokens. The card container + Toggle are NOT governed by the
 * compiled DLS and should be treated as provisional until documented.
 */
export default function PairingCard({ heading, support, on = true, onToggle }) {
  return (
    <div className="oor-pairing-card" data-out-of-registry="true">
      <div className="oor-pairing-card__content">
        <HeadingContent heading={heading} support={support} />
      </div>
      {/* Toggle actionable — OUT OF REGISTRY */}
      <button
        type="button"
        className={`toggle ${on ? 'toggle--on' : 'toggle--off'}`}
        role="switch"
        aria-checked={on}
        aria-label="Dual pairing"
        onClick={onToggle}
      >
        <span className="toggle__knob" />
      </button>
    </div>
  )
}
