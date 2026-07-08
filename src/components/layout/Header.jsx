import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import Container from '../ui/Container'
import useScrollPosition from '../../hooks/useScrollPosition'
import { NAV_LINKS } from '../../utils/constants'

export default function Header() {
  const scrolled = useScrollPosition(24)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-card py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <Container className="flex items-center justify-between">
        <div className={`transition-transform duration-300 ${scrolled ? 'scale-90 origin-left' : ''}`}>
          <Logo compact={scrolled} />
        </div>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft hover:text-brand-magenta transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contacto" variant="primary">
            Solicitar Turno
          </Button>
        </div>

        <button
          className="lg:hidden text-2xl text-ink p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md shadow-card"
          >
            <Container className="flex flex-col gap-4 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-ink-soft hover:text-brand-magenta transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contacto" variant="primary" onClick={() => setOpen(false)}>
                Solicitar Turno
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
