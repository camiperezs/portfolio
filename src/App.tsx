import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Contacto from './pages/Contacto'
import Experiencia from './pages/Experiencia'
import Inicio from './pages/Inicio'
import Marco from './pages/Marco'
import ProyectoDetalle from './pages/ProyectoDetalle'
import Proyectos from './pages/Proyectos'
import RedireccionTrabajo from './pages/RedireccionTrabajo'
import SobreMi from './pages/SobreMi'
import Tecnologias from './pages/Tecnologias'

export default function App() {
  return (
    <Routes>
      <Route element={<Marco />}>
        <Route index element={<Inicio />} />
        <Route element={<Layout />}>
          <Route path="sobre-mi" element={<SobreMi />} />
          <Route path="tecnologias" element={<Tecnologias />} />
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="proyectos/:slug" element={<ProyectoDetalle />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Route>
      <Route path="trabajo" element={<RedireccionTrabajo />} />
      <Route path="trabajo/:slug" element={<RedireccionTrabajo />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
