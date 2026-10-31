import Panel from '../components/ui/Panel'
import { useIdioma } from '../context/IdiomaContext'

export default function Contacto() {
  const { textos } = useIdioma()

  return (
    <Panel>
      <h1 className="titulo">{textos.contacto.titulo}</h1>
      <p>{textos.pendiente}</p>
    </Panel>
  )
}
