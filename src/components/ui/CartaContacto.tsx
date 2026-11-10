import type { ChangeEvent, FormEvent } from 'react'
import Boton from './Boton'
import './CartaContacto.css'

type Campo = 'nombre' | 'email' | 'telefono' | 'motivo' | 'mensaje'

type Props = {
  idBase: string
  nombreFormulario: string
  campoTrampa: string
  para: string
  destinatario: string
  etiquetas: Record<Campo, string>
  opcional: string
  motivos: { id: string; texto: string }[]
  valores: Record<Campo, string>
  errores: Partial<Record<Campo, string>>
  enviando: boolean
  errorEnvio?: string
  textoEnviar: string
  textoEnviando: string
  iconoEnviar: string
  onCambiar: (campo: Campo, valor: string) => void
  onEnviar: (evento: FormEvent<HTMLFormElement>) => void
}

export default function CartaContacto({
  idBase,
  nombreFormulario,
  campoTrampa,
  para,
  destinatario,
  etiquetas,
  opcional,
  motivos,
  valores,
  errores,
  enviando,
  errorEnvio,
  textoEnviar,
  textoEnviando,
  iconoEnviar,
  onCambiar,
  onEnviar,
}: Props) {
  const id = (campo: Campo) => `${idBase}-${campo}`
  const idError = (campo: Campo) => `${idBase}-${campo}-error`
  const cambiar = (campo: Campo) => (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onCambiar(campo, evento.target.value)
  const ayuda = (campo: Campo) => (errores[campo] ? { 'aria-invalid': true, 'aria-describedby': idError(campo) } : {})
  const error = (campo: Campo) =>
    errores[campo] && (
      <p className="carta-error" id={idError(campo)}>
        {errores[campo]}
      </p>
    )

  const renglon = (campo: Campo, tipo: string, autocompletar: string, obligatorio: boolean) => (
    <div className="carta-renglon">
      <label htmlFor={id(campo)}>
        {etiquetas[campo]}
        {!obligatorio && <span className="carta-opcional">{opcional}</span>}
      </label>
      <input
        id={id(campo)}
        name={campo}
        type={tipo}
        autoComplete={autocompletar}
        spellCheck={tipo === 'email' ? false : undefined}
        value={valores[campo]}
        onChange={cambiar(campo)}
        disabled={enviando}
        required={obligatorio}
        {...ayuda(campo)}
      />
      {error(campo)}
    </div>
  )

  return (
    <form
      className={enviando ? 'carta-contacto enviando' : 'carta-contacto'}
      name={nombreFormulario}
      method="post"
      noValidate
      onSubmit={onEnviar}
    >
      <input type="hidden" name="form-name" value={nombreFormulario} />
      <p className="carta-trampa" aria-hidden="true">
        <input name={campoTrampa} tabIndex={-1} autoComplete="off" />
      </p>
      <p className="carta-para">
        <span>{para}</span> {destinatario}
      </p>
      {renglon('nombre', 'text', 'name', true)}
      {renglon('email', 'email', 'email', true)}
      {renglon('telefono', 'tel', 'tel', false)}
      <fieldset className="carta-renglon carta-motivo">
        <legend>
          {etiquetas.motivo}
          <span className="carta-opcional">{opcional}</span>
        </legend>
        <div className="carta-motivos">
          {motivos.map(({ id: motivo, texto }) => (
            <label key={motivo} className="carta-chip">
              <input
                type="radio"
                name="motivo"
                value={motivo}
                checked={valores.motivo === motivo}
                onChange={cambiar('motivo')}
                disabled={enviando}
              />
              <span>{texto}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="carta-cuerpo">
        <label htmlFor={id('mensaje')}>{etiquetas.mensaje}</label>
        <textarea
          id={id('mensaje')}
          name="mensaje"
          rows={5}
          value={valores.mensaje}
          onChange={cambiar('mensaje')}
          disabled={enviando}
          required
          {...ayuda('mensaje')}
        />
        {error('mensaje')}
      </div>
      <div className="carta-pie">
        <p className="carta-error carta-error-envio" role="alert">
          {errorEnvio}
        </p>
        <Boton type="submit" variante="principal" icono={iconoEnviar} disabled={enviando}>
          {enviando ? textoEnviando : textoEnviar}
        </Boton>
      </div>
    </form>
  )
}
