import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Contacto from './pages/Contacto'
import Inicio from './pages/Inicio'
import Marco from './pages/Marco'
import SobreMi from './pages/SobreMi'
import Tecnologias from './pages/Tecnologias'
import Trabajo from './pages/Trabajo'

export default function App() {
  return (
    <Routes>
      <Route element={<Marco />}>
        <Route index element={<Inicio />} />
        <Route element={<Layout />}>
          <Route path="trabajo" element={<Trabajo />} />
          <Route path="tecnologias" element={<Tecnologias />} />
          <Route path="sobre-mi" element={<SobreMi />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
