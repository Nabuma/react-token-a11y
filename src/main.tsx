import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (import.meta.env.DEV) {
  // Logs accessibility violations to the console during development
  import('axe-core').then(({ default: axe }) => {
    const run = () =>
      axe.run(document.body).then(({ violations }) => {
        violations.forEach((v) => console.warn(`[axe] ${v.id}: ${v.help}`, v.nodes))
      })
    setTimeout(run, 1000)
  })
}