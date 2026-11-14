import './ModeColumn.css'

type Props = {
  number: string
  title: string
  text: string
  keywords: string[]
}

export default function ModeColumn({ number, title, text, keywords }: Props) {
  return (
    <div className="mode">
      <span className="mode-number" aria-hidden="true">
        {number}
      </span>
      <h3 className="mode-title">{title}</h3>
      <p className="mode-text">{text}</p>
      <p className="mode-keywords">{keywords.join(' · ')}</p>
    </div>
  )
}
