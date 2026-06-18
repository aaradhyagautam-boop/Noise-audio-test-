import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/tokens.css'
import './styles/app.css'
import ConnectedDevices from './screens/ConnectedDevices.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="device-frame">
      <ConnectedDevices />
    </div>
  </React.StrictMode>,
)
