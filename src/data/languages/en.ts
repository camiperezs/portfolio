import type { Texts } from './es'

export const en: Texts = {
  role: 'Full Stack Developer',
  language: 'Language',
  theme: { label: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
  navigation: {
    label: 'Sections',
    menu: 'Menu',
    about: 'About me',
    technologies: 'Technologies',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  home: {
    menu: 'Sections',
    value: 'I build custom web solutions: websites, integrations, automations and management systems.',
    write: 'Get in touch',
    descriptions: {
      about: 'Profile and journey',
      technologies: 'Stack and tools',
      experience: 'Integrations, security and automation',
      projects: 'Own and published work',
      contact: 'Send me a message',
    },
  },
  about: {
    title: 'About me',
    portrait: 'Pixel art portrait of',
    contact: 'Contact links',
    location: 'Working remotely',
    introduction: [
      "I like solving problems end to end: understanding what's needed, weighing alternatives, proposing a solution with a clear scope and building it until it works.",
      'I currently work as a Backend Developer at Unio and take on freelance projects, always remotely.',
      'I work across frontend and backend, and backend is where I most want to keep growing: APIs, integrations, databases and automation.',
    ],
    career: {
      label: 'Career summary',
      columns: { experience: 'Work experience', training: 'Education' },
      entries: {
        current: { date: '2026 – present', title: 'Backend Developer', place: 'Unio' },
        waia: { date: '2024 – 2026', title: 'Full Stack Developer', place: 'WAIA' },
        cybersecurity: { date: '2025 – present', title: 'Cybersecurity', place: 'Educación IT' },
        fullStack: { date: '2023', title: 'Full Stack Development', place: 'Egg Live · Udemy' },
      },
    },
  },
  technologies: {
    title: 'Technologies',
    label: 'Technology categories',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Databases',
      'e-commerce': 'E‑commerce',
      tools: 'Tools',
      ai: 'AI',
    },
    cta: {
      title: 'Want to see how I use them?',
      text: 'In Experience I explain the problems I solved with them.',
      experience: 'See experience',
    },
  },
  experience: {
    title: 'Experience',
    intro: 'Solutions and features I built professionally.',
    label: 'Experience areas',
    whatIDid: 'What I built',
    technologies: 'Technologies',
    cta: {
      title: 'Need to solve something similar?',
      text: "Tell me what you need and I'll reply by email.",
      journey: 'See my journey',
    },
    areas: {
      ecommerce: {
        tab: 'E-commerce',
        title: 'E-commerce integrations and systems',
        description: 'Payment integrations, checkout customization and commercial features for online stores.',
        achievements: [
          'Integrated, maintained and improved Mercado Pago and MODO.',
          'Adapted checkout, promotions, discounts and gift cards.',
          'Automated processes and reports.',
        ],
      },
      authentication: {
        tab: 'Security & roles',
        title: 'Authentication, roles and permissions',
        description: 'Authentication and authorization mechanisms for applications with different types of users.',
        achievements: [
          'Authentication with JWT.',
          'Role- and permission-based access control.',
          'Protection of backend endpoints and operations.',
        ],
      },
      automation: {
        tab: 'Automation & AI',
        title: 'Automation and AI systems',
        description: 'Backend development for a recruiting platform with automated processes and external integrations.',
        achievements: [
          'Built features for recruiting processes.',
          'Integrated external services and migrated automated workflows to code.',
          'Implemented backend services and serverless functions.',
        ],
      },
    },
  },
  projects: {
    title: 'Projects',
    intro: 'Personal and published projects.',
    label: 'Project list',
    cta: {
      title: 'Have a project in mind?',
      text: "Tell me what you need and I'll reply by email.",
      experience: 'See experience',
    },
    back: 'Back to Projects',
    challenge: 'The challenge',
    context: 'Context',
    technologies: 'Technologies',
    viewSite: 'View live site',
    imageOf: 'Screenshot of',
    types: { project: 'Personal project', training: 'Training' },
    statuses: { development: 'In development', published: 'Published' },
    items: {
      salonSystem: {
        title: 'Beauty Salon Management System',
        role: 'Full Stack Developer · Project Owner',
        summary:
          'Full-stack web application designed to simplify daily operations for beauty salons and independent professionals.',
        challenge:
          'Different users need access to different features and information: an administrator manages system configuration, a receptionist handles appointments and clients, and a professional accesses information relevant to their own work. I designed a centralized security model with JWT, BCrypt and Spring Security, with three roles (ADMIN, RECEPTIONIST and PROFESSIONAL) and permissions validated before each protected operation.',
        list: {
          title: 'Key features',
          items: [
            'Appointment scheduling and availability management.',
            'Client, service, and professional management.',
            'Multi-service bookings and status tracking.',
            'Pricing, deposits, and suggested return intervals.',
            'Role-based authentication and access control.',
          ],
        },
        context:
          'Independently developed, from database design and REST APIs to frontend implementation. Currently in development.',
      },
      festival: {
        title: 'Rock & EDM Festival',
        summary: 'Festival-themed frontend project with line-up information, a gallery, and tickets.',
      },
      frontendStore: {
        title: 'Frontend Store',
        summary: 'Simulated T-shirt store with shop, about us, and product description sections.',
      },
    },
  },
  contact: {
    title: 'Contact',
    to: 'To:',
    labels: {
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      reason: 'Reason',
      message: 'Message',
    },
    optional: '(optional)',
    reasons: { job: 'Job position', freelance: 'Freelance project', other: 'Other' },
    send: 'Send',
    sending: 'Sending…',
    errors: {
      name: 'Your name is missing.',
      email: 'Your email is missing.',
      invalidEmail: "This email doesn't look valid. Check that it has an @ and a domain.",
      message: 'The message is missing.',
    },
    sendError: "The letter couldn't be sent. What you wrote is still here: try again or write to me at",
    sent: {
      title: 'Letter sent',
      text: "Thanks for writing. I'll reply to the email you left.",
      another: 'Write another letter',
    },
    direct: { title: 'Direct contact', copy: 'Copy email', copied: 'Email copied' },
  },
}
