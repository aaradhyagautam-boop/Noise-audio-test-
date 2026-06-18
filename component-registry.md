# Component Registry

> Noise Audio Design Language System (DLS) — Component Definitions
> Source: 🧩 Noise Audio DLS — Figma file `576KbB9Pj43PRDBFUlB5ru`, section `test run metadata` (`950:1250`).
> Compiled strictly from documented component metadata. No components, variants, tokens, or behaviors have been invented or inferred. Missing information is marked `Undefined`.

## Registry Overview

| # | Component | Figma Node | Component Type | Hierarchy Level | Variants | Variant Property |
|---|-----------|-----------|----------------|-----------------|----------|------------------|
| 1 | Status Bar | `949:1224` (symbol `374:7867`) | Atom | L0 | None documented | Undefined |
| 2 | L1 Inner Page Navigation | `932:2984` | Organism | L1 | 6 | `Type` |
| 3 | L2 Inner Page Heading | `927:10978` | Molecule | L2 | None documented | Undefined |
| 4 | Heading Content | `893:4741` | Atom | Undefined | None documented | Undefined |
| 5 | Checkbox Card | `894:6129` | Organism | Undefined | 2 | `position` |

---

## 1. Status Bar

- **Component Name (documented):** Status bar
- **Figma Node:** `949:1224` (master symbol `374:7867`)
- **Component Type:** Atom
- **Hierarchy Level:** L0
- **Variants:** None documented
- **Usage:** Used at the top of every screen as the highest hierarchy level in the interface.
- **Design Intent:** Provides a dedicated region for operating system information while establishing the starting point of the application hierarchy.
- **Anti-patterns:**
  - Do not place application content inside the status bar.
  - Do not use for navigation.
  - Do not use for page titles.
  - Do not use for actions or controls.
  - Do not remove from standard application screens.
- **Token References:** `default/status bar` (#000000). See `design-system-rules.md` for the full token table.

---

## 2. L1 Inner Page Navigation

- **Component Name (documented field):** `L2/Inner pages Heading` — *Note: the metadata "Component Name" field in this section reads "L2/Inner pages Heading", which does not match the section identity. The section name (`L1 inner page navigation`), the `Type` variant set, and the documented L1 rules all identify this as the L1 Inner Page Navigation component. Recorded verbatim; treated as a documentation artifact, not corrected.*
- **Figma Node:** `932:2984`
- **Component Type:** Organism
- **Hierarchy Level:** L1
- **Variant Property:** `Type` (6 variants — see `hierarchy-system.md` for the full variant mapping)
- **Usage:** Used at the L1 inner pages layer to communicate page context and provide access to navigation and page-specific actions.
- **Design Intent:** Provide users with clear orientation within an inner-page flow while maintaining access to navigation and contextual actions.
- **Anti-patterns:**
  - Do not use on surface-level pages.
  - Do not use inside cards or content containers.
  - Do not use more than once on a page.
  - Do not use as a section header.
  - Do not use for content grouping.
  - Do not replace L2 page headings.
- **Token References:** `icon/primary`, `icon/green`, `text/primary`, `text/tertiary`, `border/disable`, `button/actionable/enabled`, `Gaps/smaller gap`, `👄 Headings/Small`, `Sub Headings/card headings`, `Content/Medium`, `Content/Small`, `Bold content/Small`.

---

## 3. L2 Inner Page Heading

- **Component Name (documented):** L2/Inner pages Heading
- **Figma Node:** `927:10978`
- **Component Type:** Molecule
- **Hierarchy Level:** L2
- **Variants:** None documented
- **Usage:** Used as the primary heading for inner pages that exist one level deeper than surface-level pages.
- **Design Intent:** Provide clear navigation hierarchy by identifying the primary destination within an inner-page experience.
- **Anti-patterns:**
  - Do not use on surface-level pages.
  - Do not use as a section heading.
  - Do not use inside cards, sheets, or modals.
  - Do not use for L1 page hierarchy.
  - Do not use for content grouping.
- **Token References:** `text/primary`, `👄 Headings/Medium`, `👄 Headings/Small`, `Sub Headings/card headings`, `Content/Small`, `Bold content/Small`.

---

## 4. Heading Content

- **Component Name (documented):** Heading-content component
- **Figma Node:** `893:4741`
- **Component Type:** Atom
- **Hierarchy Level:** Undefined
- **Variants:** None documented
- **Elements:**
  - Heading — required
  - Supporting Content / Description — optional
- **Usage:**
  - Section introductions
  - Feature descriptions
  - Setting explanations
  - Empty states
  - Informational cards
  - List items
  - Preference descriptions
- **Design Intent:** Provide a consistent information hierarchy that helps users quickly understand a topic before reading supporting details.
- **Anti-patterns:**
  - Do not use for actionable content without a parent interaction component.
  - Do not use when more than one level of supporting content is needed.
  - Do not use for long-form paragraphs.
  - Do not use for status communication.
- **Documentation Metadata:** Contributors: Aaradhya Gautam · Last updated: 20-05-2026 · Version: 0.0.0
- **Token References:** `👄 Headings/Small`, `Sub Headings/card headings`, `Content/Small`, `Bold content/Small`, `text/primary`, `text/secondary`.

---

## 5. Checkbox Card

- **Component Name (documented):** Checkbox card
- **Figma Node:** `894:6129`
- **Component Type:** Organism
- **Hierarchy Level:** Undefined
- **Variant Property:** `position` (2 variants — see `hierarchy-system.md` for the full variant mapping)
- **Composed Of (documented):**
  - Molecule used: Actionables
  - Atoms used: Cross, Heading-content component
- **Usage:** Used for multi-selection lists where users can select and optionally remove items.
- **Design Intent:** Provide a scalable and consistent pattern for presenting selectable items while maintaining clear information hierarchy and selection visibility.
- **Anti-patterns:**
  - Do not use as a standalone card.
  - Do not use outside a list structure.
  - Do not combine with radio buttons or toggles.
  - Do not use for navigation patterns.
- **Token References:** `background/surface`, `text/primary`, `text/secondary`, `text/tertiary`, `button/checkbox/checked`, `button/checkbox/unchecked`, `button/actionable/enabled`, `Radius/Card`, `Padding/top, bottom padding small`, `Gaps/L2-Card Gap`, `S`.
