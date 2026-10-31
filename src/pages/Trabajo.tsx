import Panel from '../components/ui/Panel'
import { useIdioma } from '../context/IdiomaContext'

export default function Trabajo() {
  const { textos } = useIdioma()

  return (
    <Panel>
      <h1 className="titulo">{textos.trabajo.titulo}</h1>
      <p>{textos.pendiente}</p>
    </Panel>
  )
}
