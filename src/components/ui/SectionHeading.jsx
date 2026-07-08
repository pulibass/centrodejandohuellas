import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-semibold md:text-4xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed ${light ? 'text-white/80' : 'text-ink-soft'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
