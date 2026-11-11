import { Navigate, useParams } from 'react-router-dom'
import { redireccionesTrabajo } from '../data/proyectos'

export default function RedireccionTrabajo() {
  const { slug } = useParams()
  const destino = slug ? (redireccionesTrabajo[slug] ?? `/proyectos/${slug}`) : '/proyectos'
  return <Navigate to={destino} replace />
}
