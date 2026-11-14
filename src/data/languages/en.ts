import type { Texts } from './es'

export const en: Texts = {
  role: 'Full Stack Developer',
  language: 'Language',
  theme: { label: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
  navigation: {
    label: 'Sections',
    menu: 'Menu',
    about: 'About me',
    services: 'Services',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  home: {
    menu: 'Sections',
    value: 'I build custom web solutions: websites, integrations and automations.',
    write: 'Get in touch',
    descriptions: {
      services: 'What I do and how I work',
      projects: "What I'm building",
      experience: 'Unio and WAIA',
      about: 'Profile and journey',
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
  services: {
    title: 'Services',
    intro: 'Independent work for businesses, professionals and startups.',
    main: {
      title: 'Landing pages and websites',
      description: 'Web design and development for professionals, businesses and startups.',
      modes: {
        design: {
          number: '01',
          title: 'Design and build',
          text: 'We start from your idea and build a visual, functional proposal.',
          keywords: ['Structure', 'Content', 'Design', 'Development'],
        },
        implementation: {
          number: '02',
          title: 'Implementation',
          text: 'We turn your existing design into a working website.',
          keywords: ['Review', 'Development', 'Adaptation', 'Testing'],
        },
      },
      common: 'Both options include responsive adaptation, testing and publishing.',
    },
    listLabel: 'Other services',
    items: {
      integrations: {
        title: 'Integrations',
        description: 'I get your platforms and services talking to each other so they share information without manual steps.',
        examples: [
          'Payment methods such as Mercado Pago and MODO',
          'Your own and third-party APIs',
          'Webhooks',
          'E-commerce platforms',
        ],
      },
      automation: {
        title: 'Automation',
        description: 'Processes that run on their own and take repetitive tasks off your plate.',
        examples: ['Automated workflows', 'Scheduled jobs', 'Report generation', 'Data processing'],
      },
      features: {
        title: 'New features for your system',
        description: 'I add features and improvements to applications already in use, adapting them to how your business works.',
        examples: ['New modules and processes', 'Users, roles and permissions', 'Improvements to existing processes'],
      },
      support: {
        title: 'Support and fixes',
        description: 'I fix bugs and make one-off adjustments to websites and applications that are already running.',
        examples: ['Bug fixes', 'Updates', 'Technical adjustments'],
      },
    },
    cta: {
      title: 'Have a project in mind?',
    },
  },
  projects: {
    title: 'Projects',
    intro: 'Personal projects.',
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
        title: 'Management app for beauty centers',
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
    },
  },
  contact: {
    title: 'Contact',
    heading: 'What do you have in mind?',
    intro: "A project, a job offer or a question: tell me and I'll reply by email.",
    step: 'Step',
    of: 'of',
    reasonTitle: 'What is it about?',
    detailsTitle: 'Tell me a bit more',
    reasons: {
      freelance: { title: 'Freelance project', detail: 'A website, an integration or an automation' },
      job: { title: 'Job offer', detail: 'A role on your team' },
      salon: { title: 'Management app for beauty centers', detail: 'I want to know more' },
      other: { title: 'Something else', detail: 'Any other question' },
    },
    change: 'Change',
    labels: {
      name: 'Full name',
      email: 'Email',
      message: 'Message',
    },
    services: {
      landing: 'Landing page or website',
      integrations: 'Integrations',
      automation: 'Automation',
      features: 'New features',
      support: 'Support and fixes',
      unsure: "I'm not sure yet",
    },
    send: 'Send',
    sending: 'Sending…',
    errors: {
      name: 'Your name is missing.',
      email: 'Your email is missing.',
      invalidEmail: "This email doesn't look valid. Check that it has an @ and a domain.",
      message: 'The message is missing.',
    },
    sendError: "The message couldn't be sent. What you wrote is still here: try again or write to me at",
    sent: {
      title: 'Message sent',
      text: "Thanks for writing. I'll reply to the email you left.",
      another: 'Write another message',
    },
    direct: { title: 'Prefer to write to me directly?', copy: 'Copy email', copied: 'Email copied' },
  },
}
