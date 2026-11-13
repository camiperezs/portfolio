export const fields = ['name', 'email', 'phone', 'reason', 'message'] as const
export type Field = (typeof fields)[number]

export const requiredFields: Field[] = ['name', 'email', 'message']

export const reasons = ['job', 'freelance', 'other'] as const
export type Reason = (typeof reasons)[number]

export const contactForm = {
  name: 'contacto',
  honeypot: 'bot-field',
}

export const envelopeIcon = '/sprites/mask-envelope.png'
