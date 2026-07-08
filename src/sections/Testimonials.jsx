import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { TESTIMONIALS } from '../utils/constants'

export default function Testimonials() {
  const scrollerRef = useRef(null)

  const scrollBy = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="bg-brand-gradient-soft py-24">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Testimonios"
          title="Historias de familias que confiaron en nosotros"
        />

        <div className="relative w-full">
          <div
            ref={scrollerRef}
            className="scrollbar-thin flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          >
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="flex w-[280px] shrink-0 snap-start flex-col gap-4 rounded-3xl bg-white p-7 shadow-card sm:w-[340px]"
              >
                <div className="flex gap-1 text-brand-orange">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">“{t.comment}”</p>
                <span className="text-sm font-semibold text-ink">{t.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => scrollBy(-360)}
              aria-label="Testimonio anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-card hover:text-brand-magenta transition-colors"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scrollBy(360)}
              aria-label="Testimonio siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-card hover:text-brand-magenta transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
