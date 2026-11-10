import FondoRadial from '../components/layout/FondoRadial'
import EnlaceAccion from '../components/ui/EnlaceAccion'
import MenuJuego from '../components/ui/MenuJuego'
import { useIdioma } from '../context/IdiomaContext'
import { cursorMenu, iconoEscribir, secciones } from '../data/navegacion'
import { perfil, redes } from '../data/perfil'
import './Inicio.css'

export default function Inicio() {
  const { textos } = useIdioma()
  const { inicio } = textos
  const opciones = secciones.map(({ id, ruta, icono }) => ({
    ruta,
    icono,
    nombre: textos.navegacion[id],
    descripcion: inicio.descripciones[id],
  }))

  return (
    <FondoRadial>
      <main className="inicio">
        <p className="inicio-insignia">{perfil.marca}</p>
        <h1 className="inicio-nombre">{perfil.nombre}</h1>
        <p className="inicio-rol">
          <span className="inicio-punto" aria-hidden="true"></span>
          {textos.rol}
        </p>
        <p className="inicio-valor">{inicio.valor}</p>
        <div className="inicio-menu">
          <MenuJuego etiqueta={inicio.menu} cursor={cursorMenu} opciones={opciones} />
        </div>
        <div className="inicio-acciones">
          <EnlaceAccion texto={inicio.escribir} icono={iconoEscribir} destino="/contacto" variante="principal" />
          {redes.map(({ texto, url, icono }) => (
            <EnlaceAccion key={url} texto={texto} icono={icono} destino={url} externo />
          ))}
        </div>
      </main>
    </FondoRadial>
  )
}
