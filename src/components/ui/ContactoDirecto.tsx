import Boton from './Boton'
import EnlaceAccion from './EnlaceAccion'
import IconoPixel from './IconoPixel'
import './ContactoDirecto.css'

type Red = {
  texto: string
  url: string
  icono: string
}

type Props = {
  titulo: string
  email: string
  iconoEmail: string
  textoCopiar: string
  textoCopiado: string
  copiado: boolean
  onCopiar: () => void
  redes: Red[]
}

export default function ContactoDirecto({
  titulo,
  email,
  iconoEmail,
  textoCopiar,
  textoCopiado,
  copiado,
  onCopiar,
  redes,
}: Props) {
  return (
    <section className="contacto-directo" aria-label={titulo}>
      <h2>{titulo}</h2>
      <div className="contacto-directo-email">
        <IconoPixel imagen={iconoEmail} />
        <a href={`mailto:${email}`}>{email}</a>
        <Boton onClick={onCopiar} aria-live="polite">
          {copiado ? textoCopiado : textoCopiar}
        </Boton>
      </div>
      <ul className="contacto-directo-redes">
        {redes.map(({ texto, url, icono }) => (
          <li key={url}>
            <EnlaceAccion texto={texto} icono={icono} destino={url} externo />
          </li>
        ))}
      </ul>
    </section>
  )
}
