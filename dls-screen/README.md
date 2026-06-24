# Screens built from the Noise Audio DLS

Screens assembled strictly from the compiled DLS (`/component-registry.md`,
`/hierarchy-system.md`, `/design-system-rules.md`). React + CSS variables; every
token traces to a documented Figma variable.

## Screens

| Screen | React | Standalone HTML | Description |
|--------|-------|-----------------|-------------|
| Connected Devices | `src/screens/ConnectedDevices.jsx` | `connected-devices.standalone.html` | Multi-select device pairing (recreated mockup). |
| Manage Devices | `src/screens/DeviceManagement.jsx` | `device-management.standalone.html` | Turn connected devices on/off. |

## Run

```bash
cd dls-screen
npm install
npm run dev          # → Manage Devices (default)
#  open with #connected-devices in the URL to see the Connected Devices screen
```

The `*.standalone.html` files need no build — open them directly in a browser.

---

## Manage Devices (device on/off) — library-only build

Built with **only** the 5 documented components. Key decision:

> **The library has no Toggle component.** The toggle in the Connected Devices
> mockup was out-of-registry, and the DLS forbids toggles inside a Checkbox Card.
> So the on/off control here is the **Checkbox Card's checkbox actionable**
> (checked = device **On/Connected**), using **`position=checkbox Right`** — whose
> documented purpose is *"item selection is the only required action."*

| Screen part | DLS component | Variant / note |
|---|---|---|
| Status row | Status Bar | Atom · L0 |
| Back | L1 Inner Page Navigation | `Type=No icon` |
| "MANAGE DEVICES" | L2 Inner Page Heading | Molecule |
| "Your Devices" intro | Heading Content | Atom · standalone section intro (documented usage; non-actionable) |
| Each device On/Off row | Checkbox Card | `position=checkbox Right` |
| Device name + state | Heading Content | inside the card; support = "Connected" (`icon/green`) / "Off" |

No out-of-registry surfaces: no toggle, no custom section header, no counter.
Devices toggle independently (no cap — this is on/off, not the 1/2 pairing limit).

---

## Connected Devices (recreated mockup)

## Element → DLS mapping

| Screen element | DLS component | Type / Variant | Notes |
|----------------|---------------|----------------|-------|
| Time + signal/wifi/battery | **Status Bar** | Atom · L0 | System info only; `default/status bar` colour. |
| Back chevron | **L1 Inner Page Navigation** | Organism · `Type=No icon` | ⚠️ see flag 1. |
| "CONNECTED DEVICES" | **L2 Inner Page Heading** | Molecule · L2 | `👄 Headings/Medium`, 2-line, content-driven height. |
| Device rows (checkbox + name + ×) | **Checkbox Card** | Organism · `position=checkbox Left` | Checkbox + Heading Content + Cross. |
| Device row title / "Current Device" | **Heading Content** | Atom | Heading + optional supporting content. |
| List container | Checkbox Card **Parent Frame Rules** | — | surface, radius 18, 12px top/bottom padding, no inner spacing. |
| "Dual Pairing" toggle card | — | **OUT OF REGISTRY** | ⚠️ see flag 2. |
| "MY DEVICES  1/2" | — | **OUT OF REGISTRY** | ⚠️ see flag 3. |
| Home indicator | — | OS chrome | Not a DLS component. |

## Flags & deviations (kept honest, not invented)

1. **L1 has no "back-only" variant.** Closest documented is `Type=No icon`
   (back + title). The title slot is left empty; the page title is delivered by
   the L2 heading below, per the rule *"L2 must appear below L1 content hierarchy."*
2. **"Dual Pairing" card is out of registry.** It is a *Master Card* pattern with
   a **Toggle** actionable. Master Card is outside the 5-component scope, and a
   Checkbox Card explicitly *must not* combine with toggles. Built best-effort,
   reusing the in-scope Heading Content atom; marked `data-out-of-registry`.
3. **"MY DEVICES 1/2" section header is out of registry** — no documented
   component matches it. Built best-effort with DLS tokens.
4. **Typeface deviation.** The mockup's body text appears monospaced, but the
   documented typography tokens are **Saira** (headings) + **Geist** (content).
   The DLS is the source of truth, so DLS fonts are applied.
5. **Disabled rows.** Rows 2–6 are rendered disabled (`text/tertiary`,
   `button/checkbox/unchecked`) to match the greyed-out mockup state.

## DLS rules enforced in code

- Composition order L0 → L1 → content, with L2 below L1 (hierarchy-system.md).
- Checkbox Cards live only inside a grouped-list parent frame (never standalone).
- Heading Content's own content limits stay inside that atom (child owns its rules);
  Checkbox Card owns only composition + layout.
- All colours, type, spacing and radius come from documented tokens — none invented.
