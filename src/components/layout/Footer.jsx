import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Logo from '../ui/Logo'
import Container from '../ui/Container'
import { NAV_LINKS, CONTACT_INFO, WHATSAPP_NUMBER } from '../../utils/constants'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Logo dark />
          <p className="text-sm leading-relaxed text-white/70 max-w-xs">
            Centro interdisciplinario de rehabilitación. Acompañamos el desarrollo de
            cada niño y su familia con calidez y profesionalismo.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/70 hover:text-brand-pink transition-colors text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/70 hover:text-brand-pink transition-colors text-lg"
            >
              <FaFacebook />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              aria-label="WhatsApp"
              className="text-white/70 hover:text-brand-pink transition-colors text-lg"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold mb-4">Menú</h3>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold mb-4">Contacto</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li>{CONTACT_INFO.address}</li>
            <li>{CONTACT_INFO.phone}</li>
            <li>{CONTACT_INFO.email}</li>
            <li>{CONTACT_INFO.hours}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Dejando Huellas. Todos los derechos reservados.</p>
          <p>Diseñado con calidez para acompañar cada proceso.</p>
        </Container>
      </div>
    </footer>
  )
}
