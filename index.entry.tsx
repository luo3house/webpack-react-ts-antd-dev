import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App'
import 'antd/dist/antd.min.css'

window.onload = () => {
  const root = createRoot(document.getElementById('app')!)
  root.render(<App />)
}
