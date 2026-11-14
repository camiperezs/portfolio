import { Outlet, useMatch } from 'react-router-dom'
import SiteControls from './SiteControls'
import './Frame.css'

export default function Frame() {
  const atHome = useMatch('/')

  return (
    <div className="frame">
      {atHome && (
        <div className="frame-controls">
          <SiteControls />
        </div>
      )}
      <Outlet />
    </div>
  )
}
