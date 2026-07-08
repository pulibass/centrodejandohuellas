import { motion } from 'framer-motion'
import {
  FaHeartbeat,
  FaClipboardCheck,
  FaUsers,
  FaHome,
  FaHandsHelping,
  FaFileMedicalAlt,
} from 'react-icons/fa'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { BENEFITS } from '../utils/constants'

const ICONS = {
  FaHeartbeat,
  FaClipboardCheck,
  FaUsers,
  FaHome,
  FaHandsHelping,
  FaFileMedicalAlt,
}

export default function Benefits() {
  return (
    <section id="servicios" className="bg-white py-24">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Beneficios"
          title="Por qué elegir Dejando Huellas"
          subtitle="Cada detalle de nuestro trabajo está pensado para sostener un proceso de desarrollo integral y humano."
        />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => {
            const Icon = ICONS[benefit.icon]
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
                className="flex flex-col gap-3 rounded-3xl border border-ink/5 p-8 transition-colors hover:border-brand-magenta/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-lg text-white">
                  <Icon />
                </span>
                <h3 className="text-base font-semibold text-ink">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
