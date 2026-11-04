import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { IdiomaProvider } from './context/IdiomaContext'
import { TemaProvider } from './context/TemaContext'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <IdiomaProvider>
        <TemaProvider>
          <App />
        </TemaProvider>
      </IdiomaProvider>
    </BrowserRouter>
  </StrictMode>,
)
