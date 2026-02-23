import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { initWebVitals } from './utils/webVitals'

// Initialize Web Vitals monitoring
if (import.meta.env.PROD || import.meta.env.DEV) {
  initWebVitals();
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
