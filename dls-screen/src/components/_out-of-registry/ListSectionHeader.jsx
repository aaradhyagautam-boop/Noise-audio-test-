/**
 * ⚠️ OUT-OF-REGISTRY COMPONENT — NOT one of the 5 documented DLS components.
 *
 * The "MY DEVICES   1/2" row is a list section header with a count. There is no
 * documented DLS component for it (the "Selection Count" element is documented
 * only inside the L1 "Selected Items Navigation" variant, which is a different
 * context). Built best-effort with DLS tokens (Content/Small, text/secondary).
 */
export default function ListSectionHeader({ label, count }) {
  return (
    <div className="oor-section-header" data-out-of-registry="true">
      <span className="oor-section-header__label">{label}</span>
      {count ? <span className="oor-section-header__count">{count}</span> : null}
    </div>
  )
}
