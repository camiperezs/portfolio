import './StepProgress.css'

type Props = {
  current: number
  total: number
  label: string
}

export default function StepProgress({ current, total, label }: Props) {
  return (
    <div className="step-progress">
      <span className="step-progress-label">{label}</span>
      <div
        className="step-progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
      >
        {Array.from({ length: total }, (_, index) => (
          <span key={index} className={index < current ? 'step-progress-segment filled' : 'step-progress-segment'} />
        ))}
      </div>
    </div>
  )
}
