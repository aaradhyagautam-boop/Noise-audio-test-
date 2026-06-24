import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/tokens.css'
import './styles/app.css'
import ConnectedDevices from './screens/ConnectedDevices.jsx'
import DeviceManagement from './screens/DeviceManagement.jsx'

// Tiny hash switch so both DLS screens stay runnable:
//   (default)        → Device Management (on/off)
//   #connected-devices → Connected Devices (multi-select pairing)
const Screen =
  window.location.hash === '#connected-devices' ? ConnectedDevices : DeviceManagement

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="device-frame">
      <Screen />
    </div>
  </React.StrictMode>,
)
