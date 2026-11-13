import type { ReactNode } from 'react'
import './RadialBackground.css'

export default function RadialBackground({ children }: { children: ReactNode }) {
  return (
    <div className="radial-background">
      <span className="radial-background-dither" aria-hidden="true"></span>
      <span className="radial-background-dither second" aria-hidden="true"></span>
      {children}
    </div>
  )
}
