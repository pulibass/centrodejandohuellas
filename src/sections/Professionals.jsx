import { motion } from 'framer-motion'
import {
  GiBrain,
} from 'react-icons/gi'
import {
  FaHandHoldingHeart,
  FaComments,
  FaRunning,
  FaChalkboardTeacher,
  FaBookReader,
} from 'react-icons/fa'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { PROFESSIONALS } from '../utils/constants'

const ICONS = {
  GiBrain,
  FaHandHoldingHeart,
  FaComments,
  FaRunning,
  FaChalkboardTeacher,
  FaBookReader,
}

export default function Professionals() {
  return (
    <section id="profesionales" className="bg-surface-soft py-24">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Nuestro Equipo"
          title="Profesionales especializados en cada área"
          subtitle="Un equipo interdisciplinario que trabaja de forma articulada para acompañar cada proceso de desarrollo."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONALS.map((pro, index) => {
            const Icon = ICONS[pro.icon]
            return (
              <motion.div
                key={pro.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-soft"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient-soft text-2xl text-brand-magenta">
                  <Icon />
                </span>
                <h3 className="text-lg font-semibold text-ink">{pro.name}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{pro.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
