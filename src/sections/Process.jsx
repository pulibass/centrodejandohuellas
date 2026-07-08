import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { PROCESS_STEPS } from '../utils/constants'

export default function Process() {
  return (
    <section className="bg-surface-soft py-24">
      <Container className="flex flex-col items-center gap-16">
        <SectionHeading
          eyebrow="Cómo Trabajamos"
          title="Un camino claro, paso a paso"
          subtitle="Cada proceso comienza con una escucha atenta y avanza con objetivos concretos, siempre acompañando a la familia."
        />

        <div className="relative w-full">
          {/* Connecting line */}
          <div className="absolute left-6 top-6 h-[calc(100%-2.5rem)] w-px bg-ink/10 md:left-0 md:top-6 md:h-px md:w-full" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                className="relative flex gap-4 pl-16 md:flex-col md:items-center md:gap-4 md:pl-0 md:text-center"
              >
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-semibold text-white shadow-soft md:static">
                  {step.id}
                </span>
                <div className="flex flex-col gap-1 md:mt-2">
                  <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
