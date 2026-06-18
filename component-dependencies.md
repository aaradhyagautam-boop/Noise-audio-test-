# Component Dependencies

> Noise Audio DLS — Component relationships and composition dependencies.
> Compiled strictly from documented metadata. Relationships are only recorded where explicitly documented. Dependencies that reference design-system elements outside the five in-scope components are listed as documented and flagged `[out of registry scope]`.

## Dependency Summary

| Component | Type | Depends On (Molecules) | Depends On (Atoms) | Internal Elements |
|-----------|------|------------------------|--------------------|-------------------|
| Status Bar | Atom | None documented | None documented | Undefined |
| L1 Inner Page Navigation | Organism | None documented | None documented | See variant elements below |
| L2 Inner Page Heading | Molecule | None documented | None documented | Undefined |
| Heading Content | Atom | None documented | None documented | Heading (required), Supporting Content (optional) |
| Checkbox Card | Organism | Actionables | Cross `[out of registry scope]`, Heading Content | Composed per `position` variant |

---

## Status Bar

- **Dependencies:** None documented.
- **Notes:** Documented as an Atom representing L0. Owns no child components. System information is owned by the operating system (see ownership rule in `design-system-rules.md`).

---

## L1 Inner Page Navigation

- **Molecule dependencies:** None documented.
- **Atom dependencies:** None documented.
- **Composed elements (documented per `Type` variant):**
  - Leading Back Action
  - Page Title
  - Trailing Action(s) (zero, one, or two depending on variant)
  - AI Credit Indicator (AI Credit variant only)
  - Close Action (Selected Items Navigation variant only)
  - Selection Count (Selected Items Navigation variant only)
  - Contextual Actions (Selected Items Navigation variant only)

  > These are documented as the contents of each variant. They are not declared as named registry components in the supplied metadata; their standalone component identities are `Undefined`.

---

## L2 Inner Page Heading

- **Dependencies:** None documented.
- **Notes:** Documented as a Molecule. No child molecules or atoms are documented.

---

## Heading Content

- **Dependencies:** None documented (Atom).
- **Internal elements:**
  - Heading — required
  - Supporting Content / Description — optional
- **Consumed by:** Checkbox Card (as the "Heading Content Atom"). Also referenced by the Master Card component `[out of registry scope]` as a used atom.

---

## Checkbox Card

Documented composition:

- **Molecule used:** Actionables `[out of registry scope]`
- **Atoms used:** Cross `[out of registry scope]`, Heading Content

Composition by variant (documented):

| Variant (`position`) | Contains | Purpose |
|----------------------|----------|---------|
| `checkbox Left` | Checkbox Actionable Molecule, Heading Content Atom, Cross Atom | Use when items can be selected and independently removed. |
| `checkbox Right` | Checkbox Actionable Molecule, Heading Content Atom | Use when item selection is the only required action. |

- **Construction dependency:** Documented to "Follow Master Card construction principles" `[out of registry scope]` for its parent frame.

---

## Out-of-Registry References

The following elements are referenced by in-scope components but are **not** part of the five supplied registry components. They are recorded here verbatim as documented dependencies and are **not** invented or expanded:

- **Actionables** (molecule) — referenced by Checkbox Card. The `Checkbox` actionable specifically is the selection control used in `checkbox Left` / `checkbox Right`.
- **Cross** (atom) — referenced by Checkbox Card (`checkbox Left`).
- **Master Card** — referenced by Checkbox Card as a construction-principles source.

Their full definitions are outside the scope of this compilation.
