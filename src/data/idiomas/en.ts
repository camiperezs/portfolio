import { certificados } from '../sobreMi'
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
    secciones: 'About me sections',
    pestanas: { perfil: 'Profile', recorrido: 'Journey' },
    retrato: 'Pixel art portrait of',
    contacto: 'Contact links',
    perfil: [
      "I'm a software developer with a backend focus. I'm interested in working on the structure and logic that make an application run, from data modeling to service integration.",
      'I especially enjoy the analysis and design stage, where I can evaluate different approaches and turn requirements into technical solutions. My frontend experience complements this perspective and lets me approach web projects as a whole.',
    ],
    recorrido: {
      etiqueta: 'Career and education journey',
      tipos: { experiencia: 'Experience', formacion: 'Education' },
      paradas: {
        inicios: {
          fecha: '2022',
          titulo: 'Programación desde cero Latam',
          lugar: 'Egg',
          parrafos: [
            'I learned programming logic with PSeInt, an open-source tool for students, and wrote my first algorithms.',
          ],
        },
        fullStack: {
          fecha: '2023',
          titulo: 'Full Stack Latam',
          lugar: 'Egg Live',
          parrafos: [
            'I took an intensive Full Stack development program, with hands-on practice in frontend and backend, databases and REST API development.',
            'I worked in teams with students from different Latin American countries on collaborative activities and projects.',
          ],
          enlaces: [{ texto: 'View certificate', url: certificados.fullStack }],
        },
        desarrolloWeb: {
          fecha: '2023',
          titulo: 'Desarrollo Web Completo',
          lugar: 'Udemy',
          parrafos: [
            "I took Juan Pablo De la Torre Valdez's course, covering HTML, CSS, Sass, JavaScript, PHP, object-oriented programming, MVC, MySQL and API integration.",
            'During this stage I built my first personal projects and deepened my PHP knowledge. I stopped the course when I joined my first job as a developer.',
          ],
        },
        waia: {
          fecha: '2024 – 2026',
          titulo: 'Full Stack Developer',
          lugar: 'WAIA',
          parrafos: ['I built features for production OpenCart stores using PHP and MySQL.'],
          logros: [
            'Integrated Mercado Pago and MODO payments through REST APIs, OAuth and webhooks.',
            'Implemented business rules for promotions, discounts and gift cards.',
            'Automated processes and reports.',
            'Gathered requirements directly from clients.',
          ],
        },
        ciberseguridad: {
          fecha: '2025 – present',
          titulo: 'Arquitectura en Ciberseguridad',
          lugar: 'Educación IT',
          parrafos: [
            'I study the fundamentals of information security, networks and Linux systems, along with secure development and DevSecOps practices.',
            'I completed Introduction to Cybersecurity and I am continuing with network security, Linux system administration and secure development.',
          ],
          enlaces: [
            { texto: 'View Introduction to Cybersecurity certificate', url: certificados.introduccionCiberseguridad },
          ],
        },
        actual: {
          fecha: '2026 – present',
          titulo: 'Backend Developer',
          lugar: 'AI automation startup',
          parrafos: [
            'I work at a startup that uses AI to automate processes and reduce manual work. Alongside this, I am deepening my knowledge of Java and Spring Boot.',
          ],
          logros: [
            'Build services with Node.js and Fastify, on PostgreSQL and Redis.',
            'Implement JWT authentication and role and permission control.',
            'Implement AWS Lambda functions and API Gateway.',
            'Implement external service integrations and automations.',
          ],
        },
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
    intro: 'Areas I have worked on professionally: what the problem was, what I did and which technologies I used.',
    etiqueta: 'Experience areas',
    problema: 'The problem',
    queHice: 'What I did',
    tecnologias: 'Technologies',
    cierre: {
      titulo: 'Need to solve something similar?',
      texto: "Tell me what you need and I'll reply by email.",
      recorrido: 'See my journey',
    },
    areas: {
      ecommerce: {
        titulo: 'E-commerce integrations and systems',
        problema:
          'Production stores that needed to accept local payment methods and adapt checkout to their business rules.',
        logros: [
          'Integrated Mercado Pago, MODO and GOcuotas through REST APIs, OAuth and webhooks, and maintained and improved those integrations.',
          'Adapted checkout and payment flows to each business’s requirements.',
          'Implemented business rules for promotions, discounts and gift cards.',
          'Automated processes and reports, and gathered requirements directly from clients.',
        ],
      },
      autenticacion: {
        titulo: 'Authentication, roles and permissions',
        problema: 'Each user must access only the features and data that belong to them.',
        logros: [
          'Implement JWT authentication.',
          'Implement role and permission control in backend services.',
          'Protect endpoints by validating permissions before each operation.',
        ],
      },
      automatizacion: {
        titulo: 'Automation and AI systems',
        problema: 'Manual processes that needed to be automated and integrated with other services.',
        logros: [
          'Build features for a recruitment platform.',
          'Integrate external services and automate processes.',
          'Migrate automation workflows to custom code.',
          'Build services with Node.js and Fastify, plus AWS Lambda functions and API Gateway.',
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
