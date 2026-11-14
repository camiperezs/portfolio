export type ServiceId = 'integrations' | 'automation' | 'features' | 'support'
export type ModeId = 'design' | 'implementation'

export type ServiceText = {
  title: string
  description: string
  examples: string[]
}

export type ModeText = {
  number: string
  title: string
  text: string
  keywords: string[]
}

export const mainServiceIcon = '/sprites/mask-window.png'

export const modes: ModeId[] = ['design', 'implementation']

export const services: { id: ServiceId; icon: string; contact: string }[] = [
  { id: 'integrations', icon: '/sprites/mask-plug.png', contact: '/contacto?motivo=proyecto&servicio=integraciones' },
  { id: 'automation', icon: '/sprites/mask-gear.png', contact: '/contacto?motivo=proyecto&servicio=automatizaciones' },
  { id: 'features', icon: '/sprites/mask-clipboard.png', contact: '/contacto?motivo=proyecto&servicio=funcionalidades' },
  { id: 'support', icon: '/sprites/mask-wrench.png', contact: '/contacto?motivo=proyecto&servicio=soporte' },
]

export const mainServiceContact = '/contacto?motivo=proyecto&servicio=landing'
