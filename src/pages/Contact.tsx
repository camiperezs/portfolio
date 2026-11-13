import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import ContactCard from '../components/ui/ContactCard'
import DirectContact from '../components/ui/DirectContact'
import Panel from '../components/ui/Panel'
import SentEnvelope from '../components/ui/SentEnvelope'
import { useLanguage } from '../context/LanguageContext'
import { usePageTitle } from '../hooks/usePageTitle'
import { requiredFields, contactForm, envelopeIcon, reasons } from '../data/contact'
import type { Field } from '../data/contact'
import { profile, socials } from '../data/profile'
import './Contact.css'

type Status = 'editing' | 'sending' | 'sent' | 'error'

const empty: Record<Field, string> = { name: '', email: '', phone: '', reason: '', message: '' }
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const { texts } = useLanguage()
  usePageTitle(texts.contact.title)
  const { contact } = texts
  const baseId = useId()
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [status, setStatus] = useState<Status>('editing')
  const [copied, setCopied] = useState(false)

  const validate = () => {
    const found: Partial<Record<Field, string>> = {}
    requiredFields.forEach((field) => {
      if (!values[field].trim()) found[field] = contact.errors[field as 'name' | 'email' | 'message']
    })
    if (!found.email && !validEmail.test(values.email.trim())) found.email = contact.errors.invalidEmail
    return found
  }

  const change = (field: Field, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }))
    if (errors[field]) setErrors((previous) => ({ ...previous, [field]: undefined }))
  }

  const send = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    const first = requiredFields.find((field) => found[field])
    if (first) {
      document.getElementById(`${baseId}-${first}`)?.focus()
      return
    }

    setStatus('sending')
    const body = new URLSearchParams({ 'form-name': contactForm.name, ...values })
    const pause = new Promise((resolve) => setTimeout(resolve, 700))
    try {
      const [response] = await Promise.all([
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        }),
        pause,
      ])
      setStatus(response.ok ? 'sent' : 'error')
    } catch {
      await pause
      setStatus('error')
    }
  }

  const reset = () => {
    setValues(empty)
    setErrors({})
    setStatus('editing')
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Panel className="contact">
      <h1 className="section-title">{contact.title}</h1>
      {status === 'sent' ? (
        <SentEnvelope
          icon={envelopeIcon}
          title={contact.sent.title}
          text={contact.sent.text}
          action={contact.sent.another}
          onAction={reset}
        />
      ) : (
        <ContactCard
          baseId={baseId}
          formName={contactForm.name}
          honeypotField={contactForm.honeypot}
          to={contact.to}
          recipient={profile.name}
          labels={contact.labels}
          optional={contact.optional}
          reasons={reasons.map((id) => ({ id, text: contact.reasons[id] }))}
          values={values}
          errors={errors}
          sending={status === 'sending'}
          sendError={status === 'error' ? `${contact.sendError} ${profile.email}.` : undefined}
          sendText={contact.send}
          sendingText={contact.sending}
          sendIcon={envelopeIcon}
          onChange={change}
          onSend={send}
        />
      )}
      <DirectContact
        title={contact.direct.title}
        email={profile.email}
        emailIcon={envelopeIcon}
        copyText={contact.direct.copy}
        copiedText={contact.direct.copied}
        copied={copied}
        onCopy={copy}
        socials={socials}
      />
    </Panel>
  )
}
