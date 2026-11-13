export type EntryId = 'current' | 'waia' | 'cybersecurity' | 'fullStack'
export type ColumnId = 'experience' | 'training'

export type EntryText = {
  date: string
  title: string
  place: string
}

export const portrait = {
  image: '/img/portrait.webp',
  city: 'Rosario, Argentina',
}

export const careerColumns: { id: ColumnId; icon: string; entries: EntryId[] }[] = [
  { id: 'experience', icon: '/sprites/mask-briefcase.png', entries: ['current', 'waia'] },
  { id: 'training', icon: '/sprites/mask-graduation.png', entries: ['cybersecurity', 'fullStack'] },
]
