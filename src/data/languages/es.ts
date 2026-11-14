import type { EntryId, EntryText } from '../about'
import type { CategoryId } from '../technologies'
import type { JobId, JobText } from '../experience'
import type { ProjectId, ProjectText } from '../projects'

const jobs: Record<JobId, JobText> = {
  unio: {
    role: 'Desarrolladora Backend',
    period: 'sept. 2026 – actualidad',
    description: [
      'Unio agiliza procesos de selección de personal y reduce la carga operativa de los equipos en empresas, utilizando la inteligencia artificial y automatizaciones.',
    ],
    achievements: [
      'Lógica de negocio, endpoints y APIs con Node.js y Fastify.',
      'Autenticación y control de acceso por roles y permisos con JWT.',
      'Servicios serverless con AWS Lambda y API Gateway.',
      'Flujos de automatización en n8n, integraciones con servicios externos y migración de flujos automatizados a código.',
      'Cambios en la base de datos.',
      'Colaboración con el frontend.',
    ],
  },
  waia: {
    role: 'Desarrolladora Full Stack',
    period: 'mar. 2024 – jul. 2026',
    description: [
      'Desarrollo y mantenimiento de plataformas e-commerce en producción sobre OpenCart, analizando los requerimientos y necesidades de los clientes para realizar actualizaciones y automatizaciones de tareas.',
    ],
    achievements: [
      'Integración de Mercado Pago y MODO con REST APIs, OAuth y webhooks.',
      'Checkout, medios de pago, envíos y componentes de la experiencia de compra.',
      'Lógica de gift cards, cupones, promociones y descuentos.',
      'Relevamiento de requerimientos con clientes y propuesta de soluciones.',
      'Tareas programadas y reportes en PDF y Excel.',
      'Entornos con Docker y depuración de errores en producción.',
    ],
  },
}

const projects: Record<ProjectId, ProjectText> = {
  salonSystem: {
    title: 'Gestor para centros de estética',
    role: 'Desarrolladora Full Stack · Responsable del proyecto',
    summary:
      'Aplicación web full stack pensada para simplificar la operación diaria de centros de estética, peluquerías y profesionales independientes.',
    challenge:
      'Cada usuario necesita acceder a funciones e información distintas: la administración configura el sistema, recepción gestiona turnos y clientes, y cada profesional accede a lo relativo a su propio trabajo. Diseñé un modelo de seguridad centralizado con JWT, BCrypt y Spring Security, con tres roles (ADMIN, RECEPTIONIST y PROFESSIONAL) y permisos validados antes de cada operación protegida.',
    list: {
      title: 'Funcionalidades principales',
      items: [
        'Agenda de turnos y gestión de disponibilidad.',
        'Gestión de clientes, servicios y profesionales.',
        'Reservas de varios servicios con seguimiento de estado.',
        'Precios, señas e intervalos de regreso sugeridos.',
        'Autenticación y control de acceso por roles.',
      ],
    },
    context:
      'Desarrollado de forma independiente, desde el diseño de la base de datos y las APIs REST hasta la implementación del frontend. Actualmente en desarrollo.',
  },
}

const entries: Record<EntryId, EntryText> = {
  current: { date: '2026 – actualidad', title: 'Desarrolladora Backend', place: 'Unio' },
  waia: { date: '2024 – 2026', title: 'Desarrolladora Full Stack', place: 'WAIA' },
  cybersecurity: { date: '2025 – actualidad', title: 'Ciberseguridad', place: 'Educación IT' },
  fullStack: { date: '2023', title: 'Desarrollo Full Stack', place: 'Egg Live · Udemy' },
}

const categories: Record<CategoryId, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  databases: 'Bases de datos',
  'e-commerce': 'E‑commerce',
  tools: 'Herramientas',
  ai: 'IA',
}

export const es = {
  role: 'Desarrolladora Full Stack',
  language: 'Idioma',
  theme: { label: 'Tema', system: 'Sistema', light: 'Claro', dark: 'Oscuro' },
  navigation: {
    label: 'Secciones',
    menu: 'Menú',
    about: 'Sobre mí',
    services: 'Servicios',
    projects: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  home: {
    menu: 'Secciones',
    value: 'Desarrollo soluciones web a medida: sitios, integraciones y automatizaciones.',
    write: 'Escribime',
    descriptions: {
      services: 'Qué hago y cómo trabajo',
      projects: 'Lo que estoy construyendo',
      experience: 'Unio y WAIA',
      about: 'Perfil y recorrido',
      contact: 'Escribime un mensaje',
    },
  },
  about: {
    title: 'Sobre mí',
    portrait: 'Retrato pixel art de',
    contact: 'Enlaces de contacto',
    location: 'Trabajo remoto',
    introduction: [
      'Me gusta resolver problemas completos: entender qué se necesita, evaluar alternativas, proponer una solución con un alcance claro y desarrollarla hasta que funcione.',
    ],
    career: {
      label: 'Trayectoria resumida',
      columns: { experience: 'Experiencia laboral', training: 'Formación' },
      entries,
    },
  },
  technologies: {
    title: 'Tecnologías',
    label: 'Categorías de tecnologías',
    categories,
    cta: {
      title: '¿Querés ver cómo las uso?',
      text: 'En Experiencia cuento qué problemas resolví con ellas.',
      experience: 'Ver experiencia',
    },
  },
  experience: {
    title: 'Experiencia',
    intro: 'Dónde trabajé y qué hice en cada lugar.',
    label: 'Empresas',
    achievements: 'Responsabilidades',
    technologies: 'Tecnologías',
    jobs,
  },
  services: {
    title: 'Servicios',
    intro: 'Trabajo independiente para negocios, profesionales y emprendimientos.',
    main: {
      title: 'Landing pages y sitios web',
      description: 'Diseño y desarrollo web para profesionales, negocios y emprendimientos.',
      modes: {
        design: {
          number: '01',
          title: 'Diseño y desarrollo',
          text: 'Partimos de tu idea y construimos una propuesta visual y funcional.',
          keywords: ['Estructura', 'Contenido', 'Diseño', 'Desarrollo'],
        },
        implementation: {
          number: '02',
          title: 'Implementación',
          text: 'Convertimos tu diseño existente en una página web funcional.',
          keywords: ['Revisión', 'Desarrollo', 'Adaptación', 'Pruebas'],
        },
      },
      common: 'Ambas modalidades incluyen adaptación responsive, pruebas y publicación.',
    },
    listLabel: 'Otros servicios',
    items: {
      integrations: {
        title: 'Integraciones',
        description: 'Hago que tus plataformas y servicios se comuniquen para intercambiar información sin pasos manuales.',
        examples: [
          'Medios de pago como Mercado Pago y MODO',
          'APIs propias y de terceros',
          'Webhooks',
          'Plataformas de comercio electrónico',
        ],
      },
      automation: {
        title: 'Automatizaciones',
        description: 'Procesos que se ejecutan solos y te sacan de encima las tareas repetitivas.',
        examples: ['Flujos de trabajo automáticos', 'Tareas programadas', 'Generación de reportes', 'Procesamiento de datos'],
      },
      features: {
        title: 'Nuevas funcionalidades para tu sistema',
        description:
          'Sumo funcionalidades y mejoras a aplicaciones que ya están en uso, adaptándolas a cómo trabaja tu negocio.',
        examples: ['Nuevos módulos y procesos', 'Usuarios, roles y permisos', 'Mejoras en procesos existentes'],
      },
      support: {
        title: 'Soporte y correcciones',
        description: 'Resuelvo errores y hago ajustes puntuales en sitios y aplicaciones que ya están funcionando.',
        examples: ['Corrección de errores', 'Actualizaciones', 'Ajustes técnicos'],
      },
    },
    cta: {
      title: '¿Tenés un proyecto en mente?',
    },
  },
  projects: {
    title: 'Proyectos',
    intro: 'Desarrollos propios.',
    label: 'Lista de proyectos',
    cta: {
      title: '¿Tenés un proyecto en mente?',
      text: 'Contame qué necesitás y te respondo por email.',
      experience: 'Ver experiencia',
    },
    back: 'Volver a Proyectos',
    challenge: 'El desafío',
    context: 'Contexto',
    technologies: 'Tecnologías',
    viewSite: 'Ver sitio publicado',
    imageOf: 'Captura de',
    types: { project: 'Proyecto propio', training: 'Formación' },
    statuses: { development: 'En desarrollo', published: 'Publicado' },
    items: projects,
  },
  contact: {
    title: 'Contacto',
    heading: '¿Qué tenés en mente?',
    intro: 'Un proyecto, una propuesta laboral o una consulta: contame y te respondo por email.',
    step: 'Paso',
    of: 'de',
    reasonTitle: '¿De qué se trata?',
    detailsTitle: 'Contame un poco más',
    reasons: {
      freelance: { title: 'Proyecto freelance', detail: 'Un sitio, una integración o una automatización' },
      job: { title: 'Propuesta laboral', detail: 'Un puesto en tu equipo' },
      salon: { title: 'Gestor para centros de estética', detail: 'Quiero saber más' },
      other: { title: 'Otra consulta', detail: 'Cualquier otra cosa' },
    },
    change: 'Cambiar',
    labels: {
      name: 'Nombre y apellido',
      email: 'Email',
      message: 'Mensaje',
    },
    services: {
      landing: 'Landing page o sitio web',
      integrations: 'Integraciones',
      automation: 'Automatizaciones',
      features: 'Nuevas funcionalidades',
      support: 'Soporte y correcciones',
      unsure: 'Todavía no lo sé',
    },
    send: 'Enviar',
    sending: 'Enviando…',
    errors: {
      name: 'Falta tu nombre.',
      email: 'Falta tu email.',
      invalidEmail: 'Este email no parece válido. Revisá que tenga @ y un dominio.',
      message: 'Falta el mensaje.',
    },
    sendError: 'No se pudo enviar el mensaje. Lo que escribiste sigue acá: probá de nuevo o escribime a',
    sent: {
      title: 'Mensaje enviado',
      text: 'Gracias por escribir. Te respondo al email que dejaste.',
      another: 'Escribir otro mensaje',
    },
    direct: { title: '¿Preferís escribirme directo?', copy: 'Copiar email', copied: 'Email copiado' },
  },
}

export type Texts = typeof es
