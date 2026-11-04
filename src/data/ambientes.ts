type Ambiente = {
  imagenes: { dia: string; noche: string }
  encuadre: string
  lado: 'izquierda' | 'centro' | 'derecha'
  velo?: boolean
}

function imagenes(nombre: string) {
  return { dia: `/ambientes/${nombre}-dia.png`, noche: `/ambientes/${nombre}-noche.png` }
}

export const ambienteInicio: Ambiente = {
  imagenes: imagenes('inicio'),
  encuadre: '50% 100%',
  lado: 'centro',
}

export const ambientesPorRuta: Record<string, Ambiente> = {
  '/sobre-mi': { imagenes: imagenes('sobre-mi'), encuadre: '100% 50%', lado: 'izquierda' },
  '/tecnologias': { imagenes: imagenes('tecnologias'), encuadre: '100% 50%', lado: 'izquierda', velo: true },
  '/trabajo': { imagenes: imagenes('trabajo'), encuadre: '100% 50%', lado: 'izquierda' },
  '/contacto': { imagenes: imagenes('contacto'), encuadre: '100% 50%', lado: 'izquierda', velo: true },
}
