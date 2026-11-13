import Button from './Button'
import ActionLink from './ActionLink'
import PixelIcon from './PixelIcon'
import './DirectContact.css'

type Social = {
  text: string
  url: string
  icon: string
}

type Props = {
  title: string
  email: string
  emailIcon: string
  copyText: string
  copiedText: string
  copied: boolean
  onCopy: () => void
  socials: Social[]
}

export default function DirectContact({
  title,
  email,
  emailIcon,
  copyText,
  copiedText,
  copied,
  onCopy,
  socials,
}: Props) {
  return (
    <section className="direct-contact" aria-label={title}>
      <h2>{title}</h2>
      <div className="direct-contact-email">
        <PixelIcon image={emailIcon} />
        <a href={`mailto:${email}`}>{email}</a>
        <Button onClick={onCopy} aria-live="polite">
          {copied ? copiedText : copyText}
        </Button>
      </div>
      <ul className="direct-contact-socials">
        {socials.map(({ text, url, icon }) => (
          <li key={url}>
            <ActionLink text={text} icon={icon} target={url} external />
          </li>
        ))}
      </ul>
    </section>
  )
}
