import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import ContactCard from '../components/ui/ContactCard'
import DirectContact from '../components/ui/DirectContact'
import Panel from '../components/ui/Panel'
import ReasonMenu from '../components/ui/ReasonMenu'
import SentEnvelope from '../components/ui/SentEnvelope'
import StepProgress from '../components/ui/StepProgress'
import { useLanguage } from '../context/LanguageContext'
import { usePageTitle } from '../hooks/usePageTitle'
import {
  contactForm,
  copyIcons,
  envelopeIcon,
  reasonParam,
  reasons,
  reasonsByParam,
  requiredFields,
  serviceParam,
  servicesByParam,
} from '../data/contact'
import type { Field, Reason, ServiceOption } from '../data/contact'
import { menuCursor } from '../data/navigation'
import { profile, socials } from '../data/profile'
import './Contact.css'

type Status = 'editing' | 'sending' | 'sent' | 'error'

const empty: Record<Field, string> = { name: '', email: '', reason: '', service: '', message: '' }
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TOTAL_STEPS = 2

export default function Contact() {
  const { texts } = useLanguage()
  usePageTitle(texts.contact.title)
  const { contact } = texts
  const baseId = useId()
  const [params] = useSearchParams()
  const [values, setValues] = useState<Record<Field, string>>(() => {
    const reason = reasonsByParam[params.get(reasonParam) ?? ''] ?? ''
    const service = reason === 'freelance' ? (servicesByParam[params.get(serviceParam) ?? ''] ?? '') : ''
    return { ...empty, reason, service }
  })
  const [step, setStep] = useState(values.reason ? 2 : 1)
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [status, setStatus] = useState<Status>('editing')
  const [copied, setCopied] = useState(false)
  const moved = useRef(false)

  useEffect(() => {
    if (!moved.current) return
    const target = step === 2 ? `${baseId}-name` : `${baseId}-reason-${values.reason || reasons[0].id}`
    document.getElementById(target)?.focus()
  }, [step])

  const goTo = (next: number) => {
    moved.current = true
    setStep(next)
  }

  const choose = (reason: string) => {
    setValues((previous) => ({ ...previous, reason, service: reason === 'freelance' ? previous.service : '' }))
    goTo(2)
  }

  const change = (field: Field, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }))
    if (errors[field]) setErrors((previous) => ({ ...previous, [field]: undefined }))
  }

  const validate = () => {
    const found: Partial<Record<Field, string>> = {}
    requiredFields.forEach((field) => {
      if (!values[field].trim()) found[field] = contact.errors[field as 'name' | 'email' | 'message']
    })
    if (!found.email && !validEmail.test(values.email.trim())) found.email = contact.errors.invalidEmail
    return found
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
    goTo(1)
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

  const chosen = reasons.find(({ id }) => id === values.reason)
  const stepTitle = step === 1 || !chosen ? contact.reasonTitle : contact.detailsTitle
  const stepLabel = `${contact.step} ${step} ${contact.of} ${TOTAL_STEPS}`
  const context = chosen
    ? [contact.reasons[chosen.id as Reason].title, values.service && contact.services[values.service as ServiceOption]]
        .filter(Boolean)
        .join(' · ')
    : ''

  return (
    <div className="contact">
      <header className="contact-intro">
        <h1 className="contact-heading">{contact.heading}</h1>
        <p className="contact-lead">{contact.intro}</p>
      </header>
      <Panel className="contact-panel">
        {status === 'sent' ? (
          <SentEnvelope
            icon={envelopeIcon}
            title={contact.sent.title}
            text={contact.sent.text}
            action={contact.sent.another}
            onAction={reset}
          />
        ) : (
          <>
            <StepProgress current={step} total={TOTAL_STEPS} label={stepLabel} />
            <div className="contact-step-header">
              <h2>{stepTitle}</h2>
              {step === 2 && chosen && (
                <p className="contact-step-context">
                  {context}
                  <button type="button" className="contact-change" onClick={() => goTo(1)}>
                    {contact.change}
                  </button>
                </p>
              )}
            </div>
            {step === 1 || !chosen ? (
              <ReasonMenu
                baseId={baseId}
                label={contact.reasonTitle}
                cursor={menuCursor}
                options={reasons.map(({ id, icon }) => ({ id, icon, ...contact.reasons[id] }))}
                current={values.reason}
                onChoose={choose}
              />
            ) : (
              <ContactCard
                baseId={baseId}
                formName={contactForm.name}
                honeypotField={contactForm.honeypot}
                labels={contact.labels}
                values={values}
                errors={errors}
                sending={status === 'sending'}
                sendError={status === 'error' ? `${contact.sendError} ${profile.email}.` : undefined}
                sendText={contact.send}
                sendingText={contact.sending}
                sendIcon={envelopeIcon}
                onField={change}
                onSend={send}
              />
            )}
          </>
        )}
      </Panel>
      <div className="contact-direct">
        <DirectContact
          title={contact.direct.title}
          email={profile.email}
          emailIcon={envelopeIcon}
          copyText={contact.direct.copy}
          copiedText={contact.direct.copied}
          copyIcon={copyIcons.copy}
          copiedIcon={copyIcons.copied}
          copied={copied}
          onCopy={copy}
          socials={socials}
        />
      </div>
    </div>
  )
}
