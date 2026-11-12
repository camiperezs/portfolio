import type { Textos } from './es'

export const en: Textos = {
  rol: 'Backend Developer',
  idioma: 'Language',
  tema: { etiqueta: 'Theme', sistema: 'System', dia: 'Light', noche: 'Dark' },
  navegacion: {
    etiqueta: 'Sections',
    menu: 'Menu',
    sobreMi: 'About me',
    tecnologias: 'Technologies',
    experiencia: 'Experience',
    proyectos: 'Projects',
    contacto: 'Contact',
  },
  inicio: {
    menu: 'Sections',
    valor: 'Integrations, APIs and management systems',
    escribir: 'Get in touch',
    descripciones: {
      sobreMi: 'Profile and journey',
      tecnologias: 'Stack and tools',
      experiencia: 'Integrations, security and automation',
      proyectos: 'Own and published work',
      contacto: 'Send me a message',
    },
  },
  sobreMi: {
    titulo: 'About me',
    retrato: 'Pixel art portrait of',
    contacto: 'Contact links',
    presentacion:
      "I'm a software developer with a backend focus. I like designing solutions, working on application logic and integrating services. I especially enjoy turning needs into concrete features.",
    trayectoria: {
      etiqueta: 'Career summary',
      columnas: { experiencia: 'Work experience', formacion: 'Education' },
      entradas: {
        actual: { fecha: '2026 – present', titulo: 'Backend Developer', lugar: 'AI automation startup' },
        waia: { fecha: '2024 – 2026', titulo: 'Full Stack Developer', lugar: 'WAIA' },
        ciberseguridad: { fecha: '2025 – present', titulo: 'Cybersecurity', lugar: 'Educación IT' },
        fullStack: { fecha: '2023', titulo: 'Full Stack Development', lugar: 'Egg Live · Udemy' },
      },
    },
  },
  tecnologias: {
    titulo: 'Technologies',
    etiqueta: 'Technology categories',
    categorias: {
      backend: 'Backend',
      frontend: 'Frontend',
      'bases-de-datos': 'Databases',
      'e-commerce': 'E‑commerce',
      herramientas: 'Tools',
      ia: 'AI',
    },
    cierre: {
      titulo: 'Want to see how I use them?',
      texto: 'In Experience I explain the problems I solved with them.',
      experiencia: 'See experience',
    },
  },
  experiencia: {
    titulo: 'Experience',
    intro: 'Solutions and features I built professionally.',
    etiqueta: 'Experience areas',
    queHice: 'What I built',
    tecnologias: 'Technologies',
    cierre: {
      titulo: 'Need to solve something similar?',
      texto: "Tell me what you need and I'll reply by email.",
      recorrido: 'See my journey',
    },
    areas: {
      ecommerce: {
        pestana: 'E-commerce',
        titulo: 'E-commerce integrations and systems',
        descripcion: 'Payment integrations, checkout customization and commercial features for online stores.',
        logros: [
          'Integrated, maintained and improved Mercado Pago, MODO and GOcuotas.',
          'Adapted checkout, promotions, discounts and gift cards.',
          'Automated processes and reports.',
        ],
      },
      autenticacion: {
        pestana: 'Security & roles',
        titulo: 'Authentication, roles and permissions',
        descripcion: 'Authentication and authorization mechanisms for applications with different types of users.',
        logros: [
          'Authentication with JWT.',
          'Role- and permission-based access control.',
          'Protection of backend endpoints and operations.',
        ],
      },
      automatizacion: {
        pestana: 'Automation & AI',
        titulo: 'Automation and AI systems',
        descripcion: 'Backend development for a recruiting platform with automated processes and external integrations.',
        logros: [
          'Built features for recruiting processes.',
          'Integrated external services and migrated automated workflows to code.',
          'Implemented backend services and serverless functions.',
        ],
      },
    },
  },
  proyectos: {
    titulo: 'Projects',
    intro: 'Personal and published projects.',
    etiqueta: 'Project list',
    cierre: {
      titulo: 'Have a project in mind?',
      texto: "Tell me what you need and I'll reply by email.",
      experiencia: 'See experience',
    },
    volver: 'Back to Projects',
    desafio: 'The challenge',
    contexto: 'Context',
    tecnologias: 'Technologies',
    verSitio: 'View live site',
    imagenDe: 'Screenshot of',
    tipos: { proyecto: 'Personal project', formacion: 'Training' },
    estados: { desarrollo: 'In development', publicado: 'Published' },
    items: {
      sistemaSalon: {
        titulo: 'Beauty Salon Management System',
        rol: 'Full Stack Developer · Project Owner',
        resumen:
          'Full-stack web application designed to simplify daily operations for beauty salons and independent professionals.',
        desafio:
          'Different users need access to different features and information: an administrator manages system configuration, a receptionist handles appointments and clients, and a professional accesses information relevant to their own work. I designed a centralized security model with JWT, BCrypt and Spring Security, with three roles (ADMIN, RECEPTIONIST and PROFESSIONAL) and permissions validated before each protected operation.',
        lista: {
          titulo: 'Key features',
          items: [
            'Appointment scheduling and availability management.',
            'Client, service, and professional management.',
            'Multi-service bookings and status tracking.',
            'Pricing, deposits, and suggested return intervals.',
            'Role-based authentication and access control.',
          ],
        },
        contexto:
          'Independently developed, from database design and REST APIs to frontend implementation. Currently in development.',
      },
      festival: {
        titulo: 'Rock & EDM Festival',
        resumen: 'Festival-themed frontend project with line-up information, a gallery, and tickets.',
      },
      frontendStore: {
        titulo: 'Frontend Store',
        resumen: 'Simulated T-shirt store with shop, about us, and product description sections.',
      },
    },
  },
  contacto: {
    titulo: 'Contact',
    para: 'To:',
    etiquetas: {
      nombre: 'Full name',
      email: 'Email',
      telefono: 'Phone',
      motivo: 'Reason',
      mensaje: 'Message',
    },
    opcional: '(optional)',
    motivos: { puesto: 'Job position', freelance: 'Freelance project', otro: 'Other' },
    enviar: 'Send',
    enviando: 'Sending…',
    errores: {
      nombre: 'Your name is missing.',
      email: 'Your email is missing.',
      emailInvalido: "This email doesn't look valid. Check that it has an @ and a domain.",
      mensaje: 'The message is missing.',
    },
    errorEnvio: "The letter couldn't be sent. What you wrote is still here: try again or write to me at",
    enviado: {
      titulo: 'Letter sent',
      texto: "Thanks for writing. I'll reply to the email you left.",
      otra: 'Write another letter',
    },
    directo: { titulo: 'Direct contact', copiar: 'Copy email', copiado: 'Email copied' },
  },
}
