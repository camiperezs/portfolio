import Boton from './Boton'
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
        <img src={iconoEmail} alt="" width={24} height={24} />
        <a href={`mailto:${email}`}>{email}</a>
        <Boton variante="papel" onClick={onCopiar} aria-live="polite">
          {copiado ? textoCopiado : textoCopiar}
        </Boton>
      </div>
      <ul className="contacto-directo-redes">
        {redes.map(({ texto, url, icono }) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={icono} alt="" width={24} height={24} />
              {texto}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
