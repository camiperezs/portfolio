import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import CartaContacto from '../components/ui/CartaContacto'
import ContactoDirecto from '../components/ui/ContactoDirecto'
import Panel from '../components/ui/Panel'
import SobreEnviado from '../components/ui/SobreEnviado'
import { useIdioma } from '../context/IdiomaContext'
import { camposObligatorios, formularioContacto, iconoSobre, motivos } from '../data/contacto'
import type { Campo } from '../data/contacto'
import { perfil, redes } from '../data/perfil'
import './Contacto.css'

type Estado = 'editando' | 'enviando' | 'enviado' | 'error'

const vacio: Record<Campo, string> = { nombre: '', email: '', telefono: '', motivo: '', mensaje: '' }
const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contacto() {
  const { textos } = useIdioma()
  const { contacto } = textos
  const idBase = useId()
  const [valores, setValores] = useState(vacio)
  const [errores, setErrores] = useState<Partial<Record<Campo, string>>>({})
  const [estado, setEstado] = useState<Estado>('editando')
  const [copiado, setCopiado] = useState(false)

  const validar = () => {
    const encontrados: Partial<Record<Campo, string>> = {}
    camposObligatorios.forEach((campo) => {
      if (!valores[campo].trim()) encontrados[campo] = contacto.errores[campo as 'nombre' | 'email' | 'mensaje']
    })
    if (!encontrados.email && !emailValido.test(valores.email.trim())) encontrados.email = contacto.errores.emailInvalido
    return encontrados
  }

  const cambiar = (campo: Campo, valor: string) => {
    setValores((previos) => ({ ...previos, [campo]: valor }))
    if (errores[campo]) setErrores((previos) => ({ ...previos, [campo]: undefined }))
  }

  const enviar = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const encontrados = validar()
    setErrores(encontrados)
    const primero = camposObligatorios.find((campo) => encontrados[campo])
    if (primero) {
      document.getElementById(`${idBase}-${primero}`)?.focus()
      return
    }

    setEstado('enviando')
    const cuerpo = new URLSearchParams({ 'form-name': formularioContacto.nombre, ...valores })
    const pausa = new Promise((resolver) => setTimeout(resolver, 700))
    try {
      const [respuesta] = await Promise.all([
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: cuerpo.toString(),
        }),
        pausa,
      ])
      setEstado(respuesta.ok ? 'enviado' : 'error')
    } catch {
      await pausa
      setEstado('error')
    }
  }

  const reiniciar = () => {
    setValores(vacio)
    setErrores({})
    setEstado('editando')
  }

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      setCopiado(false)
    }
  }

  return (
    <Panel className="contacto">
      <h1 className="titulo-seccion">{contacto.titulo}</h1>
      {estado === 'enviado' ? (
        <SobreEnviado
          icono={iconoSobre}
          titulo={contacto.enviado.titulo}
          texto={contacto.enviado.texto}
          accion={contacto.enviado.otra}
          onAccion={reiniciar}
        />
      ) : (
        <CartaContacto
          idBase={idBase}
          nombreFormulario={formularioContacto.nombre}
          campoTrampa={formularioContacto.trampa}
          para={contacto.para}
          destinatario={perfil.nombre}
          etiquetas={contacto.etiquetas}
          opcional={contacto.opcional}
          motivos={motivos.map((id) => ({ id, texto: contacto.motivos[id] }))}
          valores={valores}
          errores={errores}
          enviando={estado === 'enviando'}
          errorEnvio={estado === 'error' ? `${contacto.errorEnvio} ${perfil.email}.` : undefined}
          textoEnviar={contacto.enviar}
          textoEnviando={contacto.enviando}
          iconoEnviar={iconoSobre}
          onCambiar={cambiar}
          onEnviar={enviar}
        />
      )}
      <ContactoDirecto
        titulo={contacto.directo.titulo}
        email={perfil.email}
        iconoEmail={iconoSobre}
        textoCopiar={contacto.directo.copiar}
        textoCopiado={contacto.directo.copiado}
        copiado={copiado}
        onCopiar={copiar}
        redes={redes}
      />
    </Panel>
  )
}
