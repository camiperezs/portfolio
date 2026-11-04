import './IconosContacto.css'

type Contacto = {
  texto: string
  url: string
  icono: string
}

type Props = {
  etiqueta: string
  contactos: Contacto[]
}

export default function IconosContacto({ etiqueta, contactos }: Props) {
  return (
    <nav className="iconos-contacto" aria-label={etiqueta}>
      {contactos.map(({ texto, url, icono }) => (
        <a
          className="iconos-contacto-enlace"
          key={url}
          href={url}
          aria-label={texto}
          title={texto}
          {...(url.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          <img src={icono} alt="" />
        </a>
      ))}
    </nav>
  )
}
