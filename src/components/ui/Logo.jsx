import logo from '../../assets/dejando-huellas-logo.png'

export default function Logo({ dark = false, compact = false }) {
  return (
    <a href="#inicio" className="flex items-center gap-3 shrink-0" aria-label="Dejando Huellas - Inicio">
     <img
  src={logo}
  alt="Dejando Huellas"
  style={{ width: 40, height: 40, objectFit: 'contain' }}
/>
      <span
        className={`font-display font-semibold leading-none ${
          compact ? 'text-base' : 'text-lg'
        } ${dark ? 'text-white' : 'text-ink'}`}
      >
        Dejando
        <br />
        <span className="text-gradient">Huellas</span>
      </span>
    </a>
  )
}