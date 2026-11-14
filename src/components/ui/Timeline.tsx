import './Timeline.css'

type Entry = {
  id: string
  date: string
  title: string
  place: string
}

type Props = {
  entries: Entry[]
}

export default function Timeline({ entries }: Props) {
  return (
    <ol className="timeline">
      {entries.map((entry) => (
        <li key={entry.id} className="timeline-entry">
          <p className="timeline-date">{entry.date}</p>
          <h3 className="timeline-role">{entry.title}</h3>
          <p className="timeline-place">{entry.place}</p>
        </li>
      ))}
    </ol>
  )
}
