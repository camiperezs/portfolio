import { useId } from 'react'
import type { ReactNode } from 'react'
import './ContactCta.css'

type Props = {
  title: string
  text: string
  children: ReactNode
}

export default function ContactCta({ title, text, children }: Props) {
  const titleId = useId()

  return (
    <section className="cta" aria-labelledby={titleId}>
      <div className="cta-text">
        <h2 id={titleId}>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-actions">{children}</div>
    </section>
  )
}
