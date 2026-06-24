import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import L1InnerPageNavigation from '../components/L1InnerPageNavigation.jsx'
import L2InnerPageHeading from '../components/L2InnerPageHeading.jsx'
import HeadingContent from '../components/HeadingContent.jsx'
import CheckboxCard from '../components/CheckboxCard.jsx'

/**
 * Device Management — turn connected devices on/off.
 *
 * Built with ONLY the 5 documented DLS components. The library has no Toggle
 * component, and Checkbox Card must not use a toggle, so the on/off control is
 * the Checkbox Card's checkbox actionable: checked = device On/Connected.
 *
 * Variant: Checkbox Card `position=checkbox Right` — documented purpose is
 * "item selection is the only required action" (no removal/cross needed).
 *
 * Composition order follows the DLS page hierarchy: L0 → L1 → content (L2 + list).
 */
const initialDevices = [
  { id: 'iphone', name: 'iPhone 15 Pro', on: true },
  { id: 'macbook', name: 'MacBook Air', on: true },
  { id: 'ipad', name: 'iPad Pro', on: false },
  { id: 'galaxy', name: 'Galaxy S24', on: false },
  { id: 'watch', name: 'Apple Watch', on: false },
]

export default function DeviceManagement() {
  const [devices, setDevices] = useState(initialDevices)

  const toggle = (id) =>
    setDevices((ds) => ds.map((d) => (d.id === id ? { ...d, on: !d.on } : d)))

  return (
    <>
      {/* L0 */}
      <StatusBar time="9:41" />

      {/* L1 — back action (Type=No icon) */}
      <L1InnerPageNavigation onBack={() => {}} />

      {/* L2 — page heading */}
      <L2InnerPageHeading title="Manage Devices" />

      {/* Heading Content atom — non-actionable section introduction */}
      <div className="section-intro">
        <HeadingContent
          heading="Your Devices"
          support="Turn a device on to connect it to your buds."
        />
      </div>

      {/* Grouped-list parent frame — Checkbox Card "Parent Frame Rules" */}
      <div className="device-list" role="list">
        {devices.map((d) => (
          <div role="listitem" key={d.id}>
            <CheckboxCard
              position="right"
              heading={d.name}
              support={d.on ? 'Connected' : 'Off'}
              supportTone={d.on ? 'connected' : 'default'}
              checked={d.on}
              onToggle={() => toggle(d.id)}
            />
          </div>
        ))}
      </div>

      <div className="home-indicator"><span /></div>
    </>
  )
}
