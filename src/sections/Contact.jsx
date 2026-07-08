import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaWhatsapp, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { CONTACT_INFO, WHATSAPP_NUMBER } from '../utils/constants'

const inputClass =
  'w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brand-magenta/50 transition-colors'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Prepared to connect to a backend / email service later.
    setStatus('sent')
  }

  return (
    <section id="contacto" className="bg-white py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Contacto"
          title="Escribinos, estamos para ayudarte"
          subtitle="Contanos tu consulta y te responderemos a la brevedad para coordinar una primera entrevista."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-3xl bg-surface-soft p-8 shadow-card"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                Nombre
              </label>
              <input id="name" name="name" type="text" required className={inputClass} placeholder="Tu nombre" />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                Email
              </label>
              <input id="email" name="email" type="email" required className={inputClass} placeholder="tu@email.com" />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                Teléfono
              </label>
              <input id="phone" name="phone" type="tel" className={inputClass} placeholder="Tu teléfono" />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={inputClass}
                placeholder="Contanos brevemente tu consulta"
              />
            </div>

            <Button as="button" type="submit" variant="primary" className="mt-2 w-fit">
              Enviar
            </Button>

            {status === 'sent' && (
              <p className="text-sm font-medium text-brand-magenta" role="status">
                ¡Gracias! Recibimos tu mensaje y te contactaremos pronto.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient-soft text-brand-magenta">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Dirección</p>
                  <p className="text-sm text-ink-soft">{CONTACT_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient-soft text-brand-magenta">
                  <FaWhatsapp />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">WhatsApp</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    className="text-sm text-ink-soft hover:text-brand-magenta transition-colors"
                  >
                    {CONTACT_INFO.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient-soft text-brand-magenta">
                  <FaPhone />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Teléfono</p>
                  <p className="text-sm text-ink-soft">{CONTACT_INFO.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient-soft text-brand-magenta">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <p className="text-sm text-ink-soft">{CONTACT_INFO.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient-soft text-brand-magenta">
                  <FaClock />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Horarios</p>
                  <p className="text-sm text-ink-soft">{CONTACT_INFO.hours}</p>
                </div>
              </li>
            </ul>

            <div className="overflow-hidden rounded-3xl shadow-card">
              <iframe
                title="Ubicación de Dejando Huellas"
                src={CONTACT_INFO.mapEmbedSrc}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
