# Hierarchy System

> Noise Audio DLS — Page hierarchy, composition order, and variant mappings.
> Compiled strictly from documented metadata. Levels and ordering are only those explicitly documented.

## Page Hierarchy Levels

The metadata documents a layered page hierarchy. Each level is owned by a specific component:

| Level | Owning Component | Documented Rule |
|-------|------------------|-----------------|
| L0 | Status Bar | Represents L0 hierarchy. Must always appear above L1 navigation. Must always appear above page content. |
| L1 | L1 Inner Page Navigation | Must represent L1 page hierarchy. Must always appear below the status bar. Must always appear above page content. |
| L2 | L2 Inner Page Heading | Must always represent L2 page hierarchy. Must only appear on inner pages. Must appear below L1 content hierarchy. |

> Hierarchy levels for **Heading Content** and **Checkbox Card** are `Undefined` (not documented as page-hierarchy levels). They are content/list components rather than page-structure layers.

## Documented Composition / Stacking Order

Derived only from the explicit placement rules above (top → bottom of the page structure):

```
┌─────────────────────────────────────────┐
│  L0 — Status Bar (fixed, top of screen)  │  first visible component
├─────────────────────────────────────────┤
│  L1 — L1 Inner Page Navigation           │  below status bar, above page content
├─────────────────────────────────────────┤
│  Page content                            │
│    └─ L2 — L2 Inner Page Heading         │  inner pages only, below L1 content hierarchy
│    └─ Checkbox Card (within a list)      │
│         └─ Heading Content (atom)         │
└─────────────────────────────────────────┘
```

Documented ordering constraints:

- Status Bar must be the **first visible component** in the page structure and remain **fixed at the top**.
- L1 Inner Page Navigation must appear **below the status bar** and **above page content**.
- L2 Inner Page Heading must appear **below L1 content hierarchy**, and **only on inner pages**.

---

## Variant Mappings

### Status Bar
- **Variant property:** Undefined (no variants documented).
- Single master symbol (`374:7867`).

### L1 Inner Page Navigation — property `Type`

| Variant Value | Documented Label | Contains | Use When |
|---------------|------------------|----------|----------|
| `2 Icons` | 2 Trailing Icons | Leading Back Action, Page Title, Two Trailing Actions | Two contextual actions are required. |
| `1 Icon` | 1 Trailing Icon | Leading Back Action, Page Title, One Trailing Action | A single contextual action is required. |
| `No icon` | 0 Trailing Icons | Leading Back Action, Page Title | No contextual actions are required. |
| `ONLY HEADING` | Heading Only | Page Title | Navigation and actions are intentionally removed. |
| `with ai token credit` | AI Credit Variant | Leading Back Action, AI Credit Indicator, Trailing Action | Within AI-powered experiences that require credit visibility. |
| `Selected Items Nav` | Selected Items Navigation | Close Action, Selection Count, Contextual Actions | Users enter multi-selection mode. |

### L2 Inner Page Heading
- **Variant property:** Undefined (no variants documented).
- **Layout (documented):** Height is content driven. Minimum height is 56px. Single-line content keeps the component at 56px; when content wraps, height expands based on content. Max 2 line content is supported.

### Heading Content
- **Variant property:** Undefined (no variants documented).
- **Elements:** Heading (required) + Supporting Content / Description (optional).

### Checkbox Card — property `position`

| Variant Value | Contains | Use When |
|---------------|----------|----------|
| `checkbox Left` | Checkbox Actionable Molecule, Heading Content Atom, Cross Atom | Items can be selected and independently removed. |
| `checkbox Right` | Checkbox Actionable Molecule, Heading Content Atom | Item selection is the only required action. |
