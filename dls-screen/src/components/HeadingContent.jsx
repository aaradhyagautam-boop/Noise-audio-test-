/**
 * Heading Content — DLS Atom. Figma node 893:4741.
 *
 * Elements: Heading (required) + Supporting Content / Description (optional).
 *
 * This atom OWNS its own rules (they do NOT belong to any parent that uses it):
 *  - Heading: primary message, concise, prefer 1–3 words, maximum 2 lines.
 *  - Supporting Content: explains the heading, sentence form, max 2–3 lines.
 *  - Tokens: Sub Headings/card headings (heading), Content/Small (support),
 *            text/primary, text/secondary; disabled state uses text/tertiary.
 */
export default function HeadingContent({ heading, support, disabled = false }) {
  return (
    <div className={`heading-content${disabled ? ' heading-content--disabled' : ''}`}>
      <span className="heading-content__heading">{heading}</span>
      {support ? <span className="heading-content__support">{support}</span> : null}
    </div>
  )
}
