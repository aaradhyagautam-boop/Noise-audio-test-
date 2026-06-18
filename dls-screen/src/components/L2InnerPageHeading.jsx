/**
 * L2 Inner Page Heading — DLS Molecule (L2). Figma node 927:10978.
 *
 * DLS rules enforced:
 *  - Hierarchy: represents L2; appears below L1 content hierarchy (inner pages only).
 *  - Content: communicates the page destination; max 2 line content supported.
 *  - Layout: content-driven height; minimum 56px; expands when content wraps.
 *  - Token: 👄 Headings/Medium (Saira SemiBold 34 / 110%), text/primary.
 */
export default function L2InnerPageHeading({ title }) {
  return (
    <header className="l2-heading">
      <h1 className="l2-heading__title">{title}</h1>
    </header>
  )
}
