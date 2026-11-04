import { certificados } from '../sobreMi'
import type { Textos } from './es'

export const en: Textos = {
  rol: 'Backend Developer',
  idioma: 'Language',
  modoNoche: 'Night mode',
  pendiente: 'This section is coming next.',
  navegacion: {
    etiqueta: 'Sections',
    menu: 'Menu',
    sobreMi: 'About me',
    tecnologias: 'Technologies',
    trabajo: 'Work',
    contacto: 'Contact',
  },
  inicio: {
    menu: 'Main',
    redes: 'Professional profiles',
    abrir: 'Open scroll',
    cerrar: 'Close scroll',
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
      etiqueta: 'Journey stops',
      tipos: { experiencia: 'Experience', formacion: 'Education' },
      anterior: 'Previous stop',
      siguiente: 'Next stop',
      paradas: {
        inicios: {
          etiqueta: '2022',
          nombre: 'First steps',
          titulo: 'Programación desde 0',
          lugar: 'Egg · 2022',
          parrafos: [
            'Introduction to programming course using PSeInt, an open-source tool for students, where I learned programming logic and wrote my first algorithms.',
          ],
        },
        fullStack: {
          etiqueta: '2023',
          nombre: 'Full Stack',
          titulo: 'Full Stack Developer',
          lugar: 'Egg Live · December 2023',
          parrafos: [
            'Intensive Full Stack development training program, with hands-on practice in frontend and backend technologies, databases and REST API development.',
            'During the program I worked in teams with students from different Latin American countries, taking part in collaborative activities and projects.',
          ],
          enlaces: [{ texto: 'View certificate', url: certificados.fullStack }],
        },
        desarrolloWeb: {
          etiqueta: 'Course',
          nombre: 'PHP',
          titulo: 'Desarrollo Web Completo',
          lugar: 'Udemy, with Juan Pablo De la Torre Valdez',
          parrafos: [
            'Hands-on web development training covering HTML, CSS, Sass, JavaScript, PHP, object-oriented programming, MVC, MySQL and API integration.',
            'During this stage I built my first personal projects and deepened my PHP knowledge. I stopped the course when I joined my first job as a developer.',
          ],
        },
        waia: {
          etiqueta: '2024 – 2026',
          nombre: 'WAIA',
          titulo: 'Full Stack Developer',
          lugar: 'WAIA · March 2024 – July 2026',
          parrafos: ['I built features for production OpenCart stores using PHP and MySQL.'],
          logros: [
            'Integrated Mercado Pago and MODO payments through REST APIs, OAuth and webhooks.',
            'Implemented business rules for promotions, discounts and gift cards.',
            'Automated processes and reports.',
            'Gathered requirements directly from clients.',
          ],
        },
        ciberseguridad: {
          etiqueta: '2025',
          nombre: 'Cybersecurity',
          titulo: 'Cybersecurity Architect',
          lugar: 'Educación IT · Program in progress',
          parrafos: [
            'Training focused on the fundamentals of information security, networks and Linux systems, incorporating secure development concepts and DevSecOps practices.',
            'I completed Introduction to Cybersecurity and went on to explore areas such as network security, Linux system administration and secure development.',
          ],
          enlaces: [
            { texto: 'View Introduction to Cybersecurity certificate', url: certificados.introduccionCiberseguridad },
          ],
        },
        actual: {
          etiqueta: 'Now',
          nombre: 'Backend',
          titulo: 'Backend Developer',
          lugar: 'AI automation startup · Since September 2026',
          parrafos: [
            'I work at a startup that uses AI to automate processes and reduce manual work. I build services with Node.js and Fastify, on PostgreSQL and Redis. I implement JWT authentication, role and permission control, AWS Lambda functions and API Gateway, along with external service integrations and automations. Alongside this, I am deepening my knowledge of Java and Spring Boot.',
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
  },
  trabajo: {
    titulo: 'Work',
    etiqueta: 'Projects and experience',
    volver: 'Back to Work',
    verFicha: 'View details',
    rol: 'Role',
    desafio: 'The challenge',
    contexto: 'Context',
    tecnologias: 'Technologies',
    verSitio: 'View live site',
    parteDe: 'Part of',
    incluye: 'Includes',
    imagenDe: 'Screenshot of',
    tipos: {
      proyecto: 'Personal project',
      experiencia: 'Professional experience',
      implementacion: 'Implementation',
      formacion: 'Training',
    },
    estados: { desarrollo: 'In development', produccion: 'In production', publicado: 'Published' },
    items: {
      sistemaSalon: {
        titulo: 'Beauty Salon Management System',
        rol: 'Full Stack Developer · Project Owner',
        resumen:
          'Full-stack web application designed to simplify daily operations for beauty salons and independent professionals.',
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
      integracionesPago: {
        titulo: 'E-commerce Payment Gateway Integrations',
        rol: 'Backend Developer · Payment Integrations',
        resumen:
          'Developing, maintaining, and improving payment integrations for production e-commerce platforms.',
        lista: {
          titulo: 'Key contributions',
          items: [
            'Integrated Mercado Pago, MODO, and GOcuotas.',
            'Developed and maintained payment gateway functionality.',
            'Worked with REST APIs and external services.',
            'Adapted checkout and payment flows to business requirements.',
            'Troubleshot payment issues and improved existing integrations.',
          ],
        },
        contexto: 'Work performed at WAIA, maintaining and improving real-world e-commerce applications.',
      },
      rbac: {
        titulo: 'Role-Based Access Control (RBAC)',
        rol: 'Backend Developer · Authentication & Authorization',
        resumen:
          "Authentication and role-based authorization in a full-stack beauty salon management application, providing different levels of access depending on each user's responsibilities.",
        desafio:
          'Different users need access to different features and information: an administrator manages system configuration, a receptionist handles appointments and clients, and a professional accesses information relevant to their own work. The application needed a centralized security model to enforce these restrictions consistently.',
        lista: {
          titulo: 'What I implemented',
          items: [
            'Authentication with JSON Web Tokens (JWT) and BCrypt password protection, integrated with Spring Security.',
            'Three user roles: ADMIN, RECEPTIONIST, and PROFESSIONAL.',
            'Role-based authorization for protected backend operations.',
            'Access restrictions based on user identity and resource ownership.',
            'Permission validation before protected operations, on a stateless architecture.',
            'Separation between authentication and business logic.',
          ],
        },
        contexto:
          'Independently designed and implemented the authentication and authorization architecture, focusing on maintainability, clear separation of responsibilities, and protecting application resources from unauthorized access.',
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
  contacto: { titulo: 'Contact' },
}
