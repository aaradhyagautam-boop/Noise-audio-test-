# Design System Rules

> Noise Audio DLS — Constraints, ownership rules, and token references.
> Compiled strictly from documented metadata and bound Figma variables. No tokens or rules are invented. Rule ownership follows the DLS principle: **child components own their own rules; parent components own only composition and layout rules.**

---

## 1. Rule Ownership Model

| Component | Role | Owns (documented rules) |
|-----------|------|-------------------------|
| Status Bar | Child (Atom, L0) | Its own hierarchy, placement, and content-ownership rules. |
| L1 Inner Page Navigation | Parent (Organism, L1) | Composition (variant selection) + layout rules. |
| L2 Inner Page Heading | Child (Molecule, L2) | Its own hierarchy, content, and layout rules. |
| Heading Content | Child (Atom) | Its own heading and supporting-content rules. |
| Checkbox Card | Parent (Organism) | Composition (list structure) + layout (parent frame) rules only. Child behaviors remain owned by the children (Checkbox/Actionables, Heading Content, Cross). |

> **Checkbox Card** does **not** own the rules of its children. The behavior of the checkbox itself, the Heading Content content limits, and the Cross atom remain owned by those respective child components.

---

## 2. Component Rules (preserved verbatim)

### Status Bar (child component — owns these rules)
- **Hierarchy:** Represents L0 hierarchy. Must always appear above L1 navigation. Must always appear above page content.
- **Placement:** Must remain fixed at the top of the screen. Must be the first visible component in the page structure.
- **Content Ownership:** System information is owned by the operating system. Application content must not occupy this region.

### L1 Inner Page Navigation (parent component — composition & layout only)
- **Hierarchy:** Must represent L1 page hierarchy. Must always appear below the status bar. Must always appear above page content.
- **Variant Selection (composition):** Choose the simplest variant capable of supporting required actions. Do not add trailing actions unless a clear user need exists. Selected Items Navigation should only appear during active selection states.
- **Layout:** Must span the page width. Title remains the primary focal element. Navigation actions should remain visually secondary to the page title.

### L2 Inner Page Heading (child component — owns these rules)
- **Hierarchy:** Must always represent L2 page hierarchy. Must only appear on inner pages. Must appear below L1 content hierarchy.
- **Content:** Should communicate the page destination or purpose. Prefer concise and scannable wording. Max 2 line content is supported.
- **Layout:** Height is content driven. Minimum height is 56px. When content occupies a single line, component height remains 56px. When content wraps, height expands based on content.

### Heading Content (child component — owns these rules)
- **Heading:** Should communicate the primary message. Keep concise. Prefer 1–3 words. Maximum 2 lines.
- **Supporting Content:** Explains the heading. Adds context or benefit. Written in sentence form. Maximum 2–3 lines.

### Checkbox Card (parent component — composition & layout only)
- **List Structure (composition):** Must always exist within a list. Must never be used as an isolated card. Multiple items must be grouped inside a parent frame.
- **Parent Frame Rules (layout):**
  - Follow Master Card construction principles.
  - Apply surface color token on the parent frame.
  - Apply 18px corner radius on the parent frame.
  - Parent frame must always have 12px top padding.
  - Parent frame must always have 12px bottom padding.
  - Parent frame should not have any internal spacing between the elements.

---

## 3. Anti-patterns (preserved verbatim)

**Status Bar**
- Do not place application content inside the status bar.
- Do not use for navigation.
- Do not use for page titles.
- Do not use for actions or controls.
- Do not remove from standard application screens.

**L1 Inner Page Navigation**
- Do not use on surface-level pages.
- Do not use inside cards or content containers.
- Do not use more than once on a page.
- Do not use as a section header.
- Do not use for content grouping.
- Do not replace L2 page headings.

**L2 Inner Page Heading**
- Do not use on surface-level pages.
- Do not use as a section heading.
- Do not use inside cards, sheets, or modals.
- Do not use for L1 page hierarchy.
- Do not use for content grouping.

**Heading Content**
- Do not use for actionable content without a parent interaction component.
- Do not use when more than one level of supporting content is needed.
- Do not use for long-form paragraphs.
- Do not use for status communication.

**Checkbox Card**
- Do not use as a standalone card.
- Do not use outside a list structure.
- Do not combine with radio buttons or toggles.
- Do not use for navigation patterns.

---

## 4. Token References

Tokens below are taken from the bound Figma variables on the documented components. Values are recorded as resolved by Figma. No token names or values were invented.

### 4.1 Typography Tokens

| Token | Font Family | Style | Size | Weight | Line Height (as reported) |
|-------|-------------|-------|------|--------|---------------------------|
| `👄 Headings/Medium` | Saira | SemiBold | 34 | 600 | 1.1 (110%) |
| `👄 Headings/Small` | Saira | SemiBold | 24 | 600 | 1.1 (110%) |
| `Sub Headings/card headings` | Saira | Medium | 16 | 500 | 1.1 (110%) |
| `Content/Medium` | Geist | Regular | 14 | 400 | 100 |
| `Content/Small` | Geist | Regular | 12 | 400 | 1.3 (130%) |
| `Bold content/Small` | Geist | SemiBold | 12 | 600 | 100 |

> Line-height values `100` are recorded exactly as returned by Figma; their unit/interpretation is `Undefined` in the supplied metadata. `letterSpacing: 0` for all typography tokens.

### 4.2 Semantic Colors

| Token | Value | Observed Usage |
|-------|-------|----------------|
| `text/primary` | `#454545` | Heading Content, L1, L2, Checkbox Card |
| `text/secondary` | `#919191` | Heading Content, Checkbox Card |
| `text/tertiary` | `#b5b5b5` | L1, Checkbox Card |
| `icon/primary` | `#454545` | L1 Inner Page Navigation |
| `icon/green` | `#2ea864` | L1 Inner Page Navigation |
| `border/disable` | `#ededed` | L1 Inner Page Navigation |
| `button/checkbox/checked` | `#171717` | Checkbox Card |
| `button/checkbox/unchecked` | `#b5b5b5` | Checkbox Card |
| `button/actionable/enabled` | `#919191` | L1, Checkbox Card |
| `background/surface` | `#f7f7f7` | Checkbox Card (parent frame surface) |
| `default/status bar` | `#000000` | Status Bar |

### 4.3 Primitive Colors

Named primitive color tokens are **Undefined** in the supplied metadata — the file exposes semantic tokens that resolve directly to raw hex values. The underlying primitive values referenced by the semantic tokens above are:

`#000000`, `#171717`, `#454545`, `#919191`, `#b5b5b5`, `#ededed`, `#f7f7f7`, `#2ea864`

> No primitive-tier token names (e.g. a numbered neutral ramp) were documented; therefore the primitive→semantic alias mapping is recorded as `Undefined`.

### 4.4 Spacing & Radius Tokens (documented, outside the three supplied categories)

These bound variables are referenced by the components but fall outside the three supplied token categories (Primitive Colors, Semantic Colors, Typography Tokens). Recorded for completeness; not invented.

| Token | Value | Observed Usage |
|-------|-------|----------------|
| `S` | 8 | Checkbox Card |
| `Gaps/smaller gap` | 8 | L1 Inner Page Navigation |
| `Gaps/L2-Card Gap` | 16 | Checkbox Card |
| `Padding/top, bottom padding small` | 12 | Checkbox Card (12px top/bottom padding) |
| `Radius/Card` | 18 | Checkbox Card (18px corner radius) |

---

## 5. Compilation Constraints Honored

- No components were invented — only the five supplied components are defined.
- No variants were invented — only documented `Type` (L1) and `position` (Checkbox Card) variants are recorded.
- No tokens were invented — all tokens are bound Figma variables read from the documented components.
- No undocumented behavior was inferred.
- All documented constraints are preserved verbatim.
- Child component rules remain owned by child components; parent components own only composition and layout rules.
- Missing information is explicitly marked `Undefined`.
