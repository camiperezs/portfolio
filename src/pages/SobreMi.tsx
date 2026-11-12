import EnlaceAccion from '../components/ui/EnlaceAccion'
import Panel from '../components/ui/Panel'
import ResumenTrayectoria from '../components/ui/ResumenTrayectoria'
import { useIdioma } from '../context/IdiomaContext'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { iconoEscribir } from '../data/navegacion'
import { perfil, redes } from '../data/perfil'
import { columnasTrayectoria, retrato } from '../data/sobreMi'
import './SobreMi.css'

export default function SobreMi() {
  const { textos } = useIdioma()
  useTituloPagina(textos.sobreMi.titulo)
  const { sobreMi } = textos
  const { trayectoria } = sobreMi

  const columnas = columnasTrayectoria.map(({ id, icono, entradas }) => ({
    id,
    icono,
    titulo: trayectoria.columnas[id],
    entradas: entradas.map((entrada) => ({ id: entrada, ...trayectoria.entradas[entrada] })),
  }))

  return (
    <Panel className="sobre-mi">
      <div className="sobre-mi-cabecera">
        <div className="sobre-mi-marco">
          <img
            className="sobre-mi-imagen"
            src={retrato.imagen}
            alt={`${sobreMi.retrato} ${perfil.nombre}`}
            width={128}
            height={160}
            fetchPriority="high"
          />
        </div>
        <div className="sobre-mi-identidad">
          <h1 className="titulo-seccion">{sobreMi.titulo}</h1>
          <p className="sobre-mi-nombre">{perfil.nombre}</p>
          <p className="sobre-mi-rol">
            {textos.rol} · {retrato.ciudad}
          </p>
        </div>
      </div>
      <p className="sobre-mi-presentacion">{sobreMi.presentacion}</p>
      <ResumenTrayectoria etiqueta={trayectoria.etiqueta} columnas={columnas} />
      <div className="sobre-mi-acciones" role="group" aria-label={sobreMi.contacto}>
        <EnlaceAccion texto={textos.inicio.escribir} icono={iconoEscribir} destino="/contacto" variante="principal" />
        {redes.map(({ texto, url, icono }) => (
          <EnlaceAccion key={url} texto={texto} icono={icono} destino={url} externo />
        ))}
      </div>
    </Panel>
  )
}
