export const campos = ['nombre', 'email', 'telefono', 'motivo', 'mensaje'] as const
export type Campo = (typeof campos)[number]

export const camposObligatorios: Campo[] = ['nombre', 'email', 'mensaje']

export const motivos = ['puesto', 'freelance', 'otro'] as const
export type Motivo = (typeof motivos)[number]

export const formularioContacto = {
  nombre: 'contacto',
  trampa: 'campo-trampa',
}

export const iconoSobre = '/sprites/mascara-sobre.png'
