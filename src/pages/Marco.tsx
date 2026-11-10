import { Outlet, useMatch } from 'react-router-dom'
import ControlesSitio from './ControlesSitio'
import './Marco.css'

export default function Marco() {
  const enInicio = useMatch('/')

  return (
    <div className="marco">
      {enInicio && (
        <div className="marco-controles">
          <ControlesSitio />
        </div>
      )}
      <Outlet />
    </div>
  )
}
