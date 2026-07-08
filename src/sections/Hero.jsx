import { motion } from 'framer-motion'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      {/* Organic background shapes using the brand palette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-surface-soft">
        <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-brand-gradient-soft blur-2xl" />
        <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-brand-gradient-soft blur-2xl" />
      </div>

      <Container className="grid items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <span className="w-fit rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink shadow-card">
            Centro Interdisciplinario
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl lg:text-6xl">
            Centro Interdisciplinario de{' '}
            <span className="text-gradient">Rehabilitación</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
            Acompañamos a cada niño y a su familia con un equipo de profesionales
            especializados, en un espacio cálido pensado para crecer con confianza,
            paso a paso.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="#contacto" variant="primary">
              Solicitar Turno
            </Button>
            <Button href="#profesionales" variant="secondary">
              Conocer Profesionales
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-md md:max-w-full"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand-gradient opacity-15 blur-xl" />
          <div className="overflow-hidden rounded-[2.5rem] shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
              alt="Terapeuta acompañando con calidez a una niña durante una sesión"
              className="h-[420px] w-full object-cover md:h-[520px]"
              loading="eager"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
