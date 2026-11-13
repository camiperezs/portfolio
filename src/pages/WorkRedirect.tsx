import { Navigate, useParams } from 'react-router-dom'
import { workRedirects } from '../data/projects'

export default function WorkRedirect() {
  const { slug } = useParams()
  const target = slug ? (workRedirects[slug] ?? `/proyectos/${slug}`) : '/proyectos'
  return <Navigate to={target} replace />
}
