import StatusBar from '../components/StatusBar.jsx'
import L1InnerPageNavigation from '../components/L1InnerPageNavigation.jsx'
import L2InnerPageHeading from '../components/L2InnerPageHeading.jsx'
import CheckboxCard from '../components/CheckboxCard.jsx'
import PairingCard from '../components/_out-of-registry/PairingCard.jsx'
import ListSectionHeader from '../components/_out-of-registry/ListSectionHeader.jsx'

/**
 * Connected Devices — inner page assembled from the Noise Audio DLS.
 *
 * Composition order follows the DLS page hierarchy (hierarchy-system.md):
 *   L0 Status Bar → L1 Inner Page Navigation → page content
 *   (L2 Inner Page Heading sits below the L1 content hierarchy, inner pages only).
 */

// Mockup data. First device is the enabled/selected "current device";
// the remaining rows are shown disabled, matching the greyed-out mockup state.
const devices = [
  { id: 1, name: "Manas's iPhone", support: 'Current Device', checked: true, disabled: false },
  { id: 2, name: "Manas's iPhone", disabled: true },
  { id: 3, name: "Manas's iPhone", disabled: true },
  { id: 4, name: "Manas's iPhone", disabled: true },
  { id: 5, name: "Manas's iPhone", disabled: true },
  { id: 6, name: "Manas's iPhone", disabled: true },
]

export default function ConnectedDevices() {
  return (
    <>
      {/* L0 */}
      <StatusBar time="9:41" />

      {/* L1 — back action (Type=No icon; title carried by L2 below) */}
      <L1InnerPageNavigation onBack={() => {}} />

      {/* L2 — page heading, 2-line content supported */}
      <L2InnerPageHeading title="Connected Devices" />

      {/* [OUT OF REGISTRY] Dual Pairing — Master Card + Toggle */}
      <PairingCard
        heading="Dual Pairing"
        support="Your buds can connect to 2 devices at a time."
        on
      />

      {/* [OUT OF REGISTRY] list section header with selection count */}
      <ListSectionHeader label="My Devices" count="1/2" />

      {/* Grouped-list parent frame — DLS Checkbox Card "Parent Frame Rules":
          surface token, 18px radius, 12px top/bottom padding, no inner spacing. */}
      <div className="device-list" role="list">
        {devices.map((d) => (
          <div role="listitem" key={d.id}>
            <CheckboxCard
              heading={d.name}
              support={d.support}
              checked={!!d.checked}
              disabled={!!d.disabled}
            />
          </div>
        ))}
      </div>

      {/* OS chrome */}
      <div className="home-indicator"><span /></div>
    </>
  )
}
