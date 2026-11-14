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
  copyIcon: string
  copiedIcon: string
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
  copyIcon,
  copiedIcon,
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
        <button
          type="button"
          className={copied ? 'direct-contact-copy copied' : 'direct-contact-copy'}
          title={copied ? copiedText : copyText}
          onClick={onCopy}
        >
          <PixelIcon image={copied ? copiedIcon : copyIcon} size={18} />
          <span className="direct-contact-status" aria-live="polite">
            {copied ? copiedText : copyText}
          </span>
        </button>
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
