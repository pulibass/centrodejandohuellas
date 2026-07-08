// Centralized content so sections stay presentational and easy to connect
// later to a CMS or headless WordPress backend.

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Profesionales', href: '#profesionales' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
]

export const PROFESSIONALS = [
  {
    id: 'psicopedagogia',
    name: 'Psicopedagogía',
    description:
      'Acompañamos los procesos de aprendizaje, identificando fortalezas y diseñando estrategias a la medida de cada niño.',
    icon: 'GiBrain',
  },
  {
    id: 'psicologia',
    name: 'Psicología',
    description:
      'Contención emocional para niños y familias, trabajando vínculos, autoestima y herramientas para la vida diaria.',
    icon: 'FaHandHoldingHeart',
  },
  {
    id: 'fonoaudiologia',
    name: 'Fonoaudiología',
    description:
      'Estimulamos el lenguaje, la voz y la comunicación con un abordaje lúdico y personalizado en cada etapa.',
    icon: 'FaComments',
  },
  {
    id: 'psicomotricidad',
    name: 'Psicomotricidad',
    description:
      'Trabajamos el cuerpo en movimiento para favorecer el desarrollo motor, sensorial y emocional.',
    icon: 'FaRunning',
  },
  {
    id: 'maestra-particular',
    name: 'Maestra Particular',
    description:
      'Apoyo pedagógico personalizado que refuerza contenidos escolares al ritmo de cada estudiante.',
    icon: 'FaChalkboardTeacher',
  },
  {
    id: 'docente-apoyo',
    name: 'Docente de Apoyo',
    description:
      'Acompañamos la trayectoria escolar en articulación con la escuela, docentes y familia.',
    icon: 'FaBookReader',
  },
]

export const BENEFITS = [
  {
    id: 'integral',
    title: 'Atención Integral',
    description: 'Abordamos cada proceso desde una mirada completa, no solo un síntoma.',
    icon: 'FaHeartbeat',
  },
  {
    id: 'seguimiento',
    title: 'Seguimiento Profesional',
    description: 'Revisamos avances de forma constante y ajustamos el plan cuando es necesario.',
    icon: 'FaClipboardCheck',
  },
  {
    id: 'equipo',
    title: 'Trabajo en Equipo',
    description: 'Nuestros profesionales se comunican entre sí para sostener un mismo camino.',
    icon: 'FaUsers',
  },
  {
    id: 'espacios',
    title: 'Espacios Cómodos',
    description: 'Ambientes cálidos, pensados para que cada niño se sienta seguro.',
    icon: 'FaHome',
  },
  {
    id: 'familia',
    title: 'Acompañamiento Familiar',
    description: 'Guiamos también a las familias, porque el proceso se sostiene en casa.',
    icon: 'FaHandsHelping',
  },
  {
    id: 'evaluaciones',
    title: 'Evaluaciones Personalizadas',
    description: 'Cada plan de trabajo nace de una evaluación pensada para esa persona.',
    icon: 'FaFileMedicalAlt',
  },
]

export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Primera Entrevista',
    description: 'Escuchamos la consulta y conocemos la historia de cada familia.',
  },
  {
    id: 2,
    title: 'Evaluación',
    description: 'Analizamos en profundidad las áreas a fortalecer.',
  },
  {
    id: 3,
    title: 'Plan de Trabajo',
    description: 'Diseñamos objetivos claros junto al equipo interdisciplinario.',
  },
  {
    id: 4,
    title: 'Tratamiento',
    description: 'Ponemos en marcha el acompañamiento con encuentros regulares.',
  },
  {
    id: 5,
    title: 'Seguimiento',
    description: 'Medimos avances y sostenemos el progreso en el tiempo.',
  },
]

export const BLOG_POSTS = [
  {
    id: 'post-1',
    category: 'Psicopedagogía',
    title: 'Cómo acompañar las tareas escolares sin generar frustración',
    excerpt:
      'Algunas claves prácticas para sostener el aprendizaje en casa sin que se vuelva una lucha diaria.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-2',
    category: 'Fonoaudiología',
    title: 'Señales tempranas para consultar por el desarrollo del lenguaje',
    excerpt:
      'Qué observar en casa y cuándo conviene pedir una evaluación fonoaudiológica.',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-3',
    category: 'Familia',
    title: 'El rol de la familia en el proceso terapéutico',
    excerpt:
      'Por qué el acompañamiento en casa potencia cada avance logrado en las sesiones.',
    image:
      'https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&w=800&q=80',
  },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Marcela R.',
    comment:
      'Encontramos un equipo que realmente escucha. El acompañamiento fue clave para el progreso de mi hijo.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Fernando G.',
    comment:
      'La calidez del trato y la profesionalidad del equipo nos dieron mucha tranquilidad desde el primer día.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Luciana P.',
    comment:
      'Vimos cambios concretos en pocos meses. Se nota el trabajo coordinado entre todas las áreas.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Diego M.',
    comment:
      'Un espacio cómodo y cercano, donde mi hija se siente segura en cada sesión.',
    rating: 5,
  },
]

export const CONTACT_INFO = {
  address: 'Av. Colón 1234, Córdoba, Argentina',
  whatsapp: '+54 9 351 000 0000',
  phone: '(0351) 000-0000',
  email: 'hola@dejandohuellas.com.ar',
  hours: 'Lunes a Viernes de 9 a 19 hs',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0!2d-64.1888!3d-31.4201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzEyLjQiUyA2NMKwMTEnMTkuNyJX!5e0!3m2!1ses!2sar!4v0000000000000',
}

export const WHATSAPP_NUMBER = '5493510000000'
