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
 *
 * supportTone: 'default' (text/secondary) | 'connected' (icon/green) — lets a
 * parent surface an On/connected state without overriding the atom's rules.
 */
export default function HeadingContent({
  heading,
  support,
  disabled = false,
  supportTone = 'default',
}) {
  const supportClass =
    'heading-content__support' +
    (supportTone === 'connected' ? ' heading-content__support--connected' : '')
  return (
    <div className={`heading-content${disabled ? ' heading-content--disabled' : ''}`}>
      <span className="heading-content__heading">{heading}</span>
      {support ? <span className={supportClass}>{support}</span> : null}
    </div>
  )
}
