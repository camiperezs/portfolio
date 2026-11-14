export const fields = ['name', 'email', 'reason', 'service', 'message'] as const
export type Field = (typeof fields)[number]

export const requiredFields: Field[] = ['name', 'email', 'message']

export const reasons = [
  { id: 'freelance', icon: '/sprites/mask-code.png' },
  { id: 'job', icon: '/sprites/mask-briefcase.png' },
  { id: 'salon', icon: '/sprites/mask-clipboard.png' },
  { id: 'other', icon: '/sprites/mask-envelope.png' },
] as const
export type Reason = (typeof reasons)[number]['id']

export const serviceOptions = ['landing', 'integrations', 'automation', 'features', 'support', 'unsure'] as const
export type ServiceOption = (typeof serviceOptions)[number]

export const reasonParam = 'motivo'
export const serviceParam = 'servicio'

export const reasonsByParam: Record<string, Reason> = {
  proyecto: 'freelance',
  empleo: 'job',
  gestor: 'salon',
  otro: 'other',
}

export const servicesByParam: Record<string, ServiceOption> = {
  landing: 'landing',
  integraciones: 'integrations',
  automatizaciones: 'automation',
  funcionalidades: 'features',
  soporte: 'support',
}

export const contactForm = {
  name: 'contacto',
  honeypot: 'bot-field',
}

export const envelopeIcon = '/sprites/mask-envelope.png'

export const copyIcons = { copy: '/icons/copy.svg', copied: '/icons/check.svg' }
