import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Frame from './pages/Frame'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import WorkRedirect from './pages/WorkRedirect'
import About from './pages/About'
import Technologies from './pages/Technologies'

export default function App() {
  return (
    <Routes>
      <Route element={<Frame />}>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path="sobre-mi" element={<About />} />
          <Route path="tecnologias" element={<Technologies />} />
          <Route path="experiencia" element={<Experience />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="proyectos/:slug" element={<ProjectDetail />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Route>
      <Route path="trabajo" element={<WorkRedirect />} />
      <Route path="trabajo/:slug" element={<WorkRedirect />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
