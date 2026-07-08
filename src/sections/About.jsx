import { motion } from 'framer-motion'
import { FaUserFriends, FaGraduationCap, FaClipboardList, FaHome } from 'react-icons/fa'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'

const FEATURES = [
  { icon: FaUserFriends, title: 'Atención personalizada' },
  { icon: FaGraduationCap, title: 'Profesionales especializados' },
  { icon: FaClipboardList, title: 'Seguimiento continuo' },
  { icon: FaHome, title: 'Espacio cálido' },
]

export default function About() {
  return (
    <section id="nosotros" className="relative bg-white py-24">
      <Container className="grid items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative order-2 md:order-1"
        >
          <div className="overflow-hidden rounded-4xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=80"
              alt="Equipo interdisciplinario reunido trabajando en conjunto"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <div className="order-1 flex flex-col gap-8 md:order-2">
          <SectionHeading
            align="left"
            eyebrow="Sobre Nosotros"
            title="Un equipo que trabaja de forma interdisciplinaria"
            subtitle="En Dejando Huellas creemos que cada proceso es único. Por eso nuestros profesionales trabajan de manera coordinada, compartiendo miradas y estrategias para acompañar el desarrollo integral de cada niño, siempre junto a su familia."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="flex items-center gap-3 rounded-2xl bg-surface-soft p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                  <feature.icon className="text-base" />
                </span>
                <span className="text-sm font-medium text-ink">{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
