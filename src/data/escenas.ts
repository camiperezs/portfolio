type Escena = {
  imagen: string
  encuadre: string
}

export const escenaInicio: Escena = {
  imagen: '/escenas/inicio.webp',
  encuadre: '28% 50%',
}

export const escenasPorRuta: Record<string, Escena> = {
  '/sobre-mi': { imagen: '/escenas/sobre-mi.webp', encuadre: '50% 50%' },
  '/tecnologias': { imagen: '/escenas/tecnologias.webp', encuadre: '50% 50%' },
  '/trabajo': { imagen: '/escenas/trabajo.webp', encuadre: '50% 50%' },
  '/contacto': { imagen: '/escenas/contacto.webp', encuadre: '50% 50%' },
}
