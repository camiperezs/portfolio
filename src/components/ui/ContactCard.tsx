import type { ChangeEvent, FormEvent } from 'react'
import Button from './Button'
import './ContactCard.css'

type Field = 'name' | 'email' | 'reason' | 'service' | 'message'

type Props = {
  baseId: string
  formName: string
  honeypotField: string
  labels: { name: string; email: string; message: string }
  values: Record<Field, string>
  errors: Partial<Record<Field, string>>
  sending: boolean
  sendError?: string
  sendText: string
  sendingText: string
  sendIcon: string
  onField: (field: Field, value: string) => void
  onSend: (event: FormEvent<HTMLFormElement>) => void
}

export default function ContactCard({
  baseId,
  formName,
  honeypotField,
  labels,
  values,
  errors,
  sending,
  sendError,
  sendText,
  sendingText,
  sendIcon,
  onField,
  onSend,
}: Props) {
  const id = (field: Field) => `${baseId}-${field}`
  const errorId = (field: Field) => `${baseId}-${field}-error`
  const change = (field: Field) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onField(field, event.target.value)
  const describedBy = (field: Field) =>
    errors[field] ? { 'aria-invalid': true, 'aria-describedby': errorId(field) } : {}
  const error = (field: Field) =>
    errors[field] && (
      <p className="form-error" id={errorId(field)}>
        {errors[field]}
      </p>
    )

  return (
    <form
      className={sending ? 'contact-form sending' : 'contact-form'}
      name={formName}
      method="post"
      noValidate
      onSubmit={onSend}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="reason" value={values.reason} />
      <input type="hidden" name="service" value={values.service} />
      <p className="form-honeypot" aria-hidden="true">
        <input name={honeypotField} tabIndex={-1} autoComplete="off" />
      </p>
      <div className="form-field">
        <div className="form-control">
          <input
            id={id('name')}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={change('name')}
            disabled={sending}
            required
            placeholder=" "
            {...describedBy('name')}
          />
          <label htmlFor={id('name')}>{labels.name}</label>
        </div>
        {error('name')}
      </div>
      <div className="form-field">
        <div className="form-control">
          <input
            id={id('email')}
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            value={values.email}
            onChange={change('email')}
            disabled={sending}
            required
            placeholder=" "
            {...describedBy('email')}
          />
          <label htmlFor={id('email')}>{labels.email}</label>
        </div>
        {error('email')}
      </div>
      <div className="form-field">
        <div className="form-control">
          <textarea
            id={id('message')}
            name="message"
            rows={5}
            value={values.message}
            onChange={change('message')}
            disabled={sending}
            required
            placeholder=" "
            {...describedBy('message')}
          />
          <label htmlFor={id('message')}>{labels.message}</label>
        </div>
        {error('message')}
      </div>
      <p className="form-error form-send-error" role="alert">
        {sendError}
      </p>
      <div className="form-footer">
        <Button type="submit" variant="primary" icon={sendIcon} disabled={sending}>
          {sending ? sendingText : sendText}
        </Button>
      </div>
    </form>
  )
}
