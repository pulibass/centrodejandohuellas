import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { BLOG_POSTS } from '../utils/constants'

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-24">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Blog"
          title="Recursos para familias"
          subtitle="Artículos y guías pensadas para acompañar el día a día, escritos por nuestro equipo profesional."
        />

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-surface-soft shadow-card"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="w-fit rounded-full bg-brand-gradient-soft px-3 py-1 text-xs font-semibold text-brand-magenta">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-ink leading-snug">{post.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-magenta hover:gap-3 transition-all"
                >
                  Leer más <FaArrowRight className="text-xs" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
