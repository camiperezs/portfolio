import type { HTMLAttributes } from 'react'
import './Panel.css'

export default function Panel({ className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={`panel ${className}`.trim()} {...props} />
}
