import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MakeupProvider } from '../context/MakeupContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MakeupProvider>
    <App />
     </MakeupProvider>
  </StrictMode>,

)
