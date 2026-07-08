import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-surface-soft px-6 text-center">
      <span className="text-6xl font-display font-bold text-gradient">404</span>
      <h1 className="text-2xl font-semibold text-ink">Esta página no existe</h1>
      <p className="max-w-md text-ink-soft">
        El contenido que buscás pudo haberse movido. Volvé al inicio para seguir navegando.
      </p>
      <Button as={Link} href={undefined} to="/" variant="primary">
        Volver al inicio
      </Button>
    </section>
  )
}
