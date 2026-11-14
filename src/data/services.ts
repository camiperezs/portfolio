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

export const services: { id: ServiceId; icon: string }[] = [
  { id: 'integrations', icon: '/sprites/mask-plug.png' },
  { id: 'automation', icon: '/sprites/mask-gear.png' },
  { id: 'features', icon: '/sprites/mask-clipboard.png' },
  { id: 'support', icon: '/sprites/mask-wrench.png' },
]
