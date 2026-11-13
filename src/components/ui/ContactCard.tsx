import type { ChangeEvent, FormEvent } from 'react'
import Button from './Button'
import './ContactCard.css'

type Field = 'name' | 'email' | 'phone' | 'reason' | 'message'

type Props = {
  baseId: string
  formName: string
  honeypotField: string
  to: string
  recipient: string
  labels: Record<Field, string>
  optional: string
  reasons: { id: string; text: string }[]
  values: Record<Field, string>
  errors: Partial<Record<Field, string>>
  sending: boolean
  sendError?: string
  sendText: string
  sendingText: string
  sendIcon: string
  onChange: (field: Field, value: string) => void
  onSend: (event: FormEvent<HTMLFormElement>) => void
}

export default function ContactCard({
  baseId,
  formName,
  honeypotField,
  to,
  recipient,
  labels,
  optional,
  reasons,
  values,
  errors,
  sending,
  sendError,
  sendText,
  sendingText,
  sendIcon,
  onChange,
  onSend,
}: Props) {
  const id = (field: Field) => `${baseId}-${field}`
  const errorId = (field: Field) => `${baseId}-${field}-error`
  const change = (field: Field) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange(field, event.target.value)
  const describedBy = (field: Field) => (errors[field] ? { 'aria-invalid': true, 'aria-describedby': errorId(field) } : {})
  const error = (field: Field) =>
    errors[field] && (
      <p className="card-error" id={errorId(field)}>
        {errors[field]}
      </p>
    )

  const line = (field: Field, type: string, autocomplete: string, required: boolean) => (
    <div className="card-line">
      <label htmlFor={id(field)}>
        {labels[field]}
        {!required && <span className="card-optional">{optional}</span>}
      </label>
      <input
        id={id(field)}
        name={field}
        type={type}
        autoComplete={autocomplete}
        spellCheck={type === 'email' ? false : undefined}
        value={values[field]}
        onChange={change(field)}
        disabled={sending}
        required={required}
        {...describedBy(field)}
      />
      {error(field)}
    </div>
  )

  return (
    <form
      className={sending ? 'contact-card sending' : 'contact-card'}
      name={formName}
      method="post"
      noValidate
      onSubmit={onSend}
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="card-honeypot" aria-hidden="true">
        <input name={honeypotField} tabIndex={-1} autoComplete="off" />
      </p>
      <p className="card-to">
        <span>{to}</span> {recipient}
      </p>
      {line('name', 'text', 'name', true)}
      {line('email', 'email', 'email', true)}
      {line('phone', 'tel', 'tel', false)}
      <fieldset className="card-line card-reason">
        <legend>
          {labels.reason}
          <span className="card-optional">{optional}</span>
        </legend>
        <div className="card-reasons">
          {reasons.map(({ id: reason, text }) => (
            <label key={reason} className="card-chip">
              <input
                type="radio"
                name="reason"
                value={reason}
                checked={values.reason === reason}
                onChange={change('reason')}
                disabled={sending}
              />
              <span>{text}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="card-body">
        <label htmlFor={id('message')}>{labels.message}</label>
        <textarea
          id={id('message')}
          name="message"
          rows={5}
          value={values.message}
          onChange={change('message')}
          disabled={sending}
          required
          {...describedBy('message')}
        />
        {error('message')}
      </div>
      <div className="card-footer">
        <p className="card-error card-error-send" role="alert">
          {sendError}
        </p>
        <Button type="submit" variant="primary" icon={sendIcon} disabled={sending}>
          {sending ? sendingText : sendText}
        </Button>
      </div>
    </form>
  )
}
