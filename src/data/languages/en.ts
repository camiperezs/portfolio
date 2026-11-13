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
      experience: 'Unio and WAIA',
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
    intro: "Where I've worked and what I did at each place.",
    label: 'Companies',
    achievements: 'Responsibilities',
    technologies: 'Technologies',
    jobs: {
      unio: {
        role: 'Backend Developer',
        period: 'Sep 2026 – present',
        description: [
          'Unio speeds up hiring processes and reduces the operational load on company teams, using artificial intelligence and automation.',
        ],
        achievements: [
          'Business logic, endpoints and APIs with Node.js and Fastify.',
          'Authentication and role- and permission-based access control with JWT.',
          'Serverless services with AWS Lambda and API Gateway.',
          'Automation workflows in n8n, integrations with external services and migration of automated workflows to code.',
          'Database changes.',
          'Collaboration on the frontend.',
        ],
      },
      waia: {
        role: 'Full Stack Developer',
        period: 'Mar 2024 – Jul 2026',
        description: [
          'Development and maintenance of production e-commerce platforms built on OpenCart, analyzing client requirements and needs to deliver updates and task automation.',
        ],
        achievements: [
          'Mercado Pago and MODO integrations with REST APIs, OAuth and webhooks.',
          'Checkout, payment methods, shipping and shopping experience components.',
          'Business logic for gift cards, coupons, promotions and discounts.',
          'Requirements gathering with clients and solution proposals.',
          'Scheduled jobs and PDF and Excel reports.',
          'Docker environments and production debugging.',
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
