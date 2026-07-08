export default function Logo({ dark = false, compact = false }) {
  return (
    <a href="#inicio" className="flex items-center gap-3 shrink-0" aria-label="Dejando Huellas - Inicio">
      <svg
        viewBox="0 0 64 64"
        className={compact ? 'h-8 w-8' : 'h-10 w-10'}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D000C8" />
            <stop offset="45%" stopColor="#F0007A" />
            <stop offset="100%" stopColor="#F58A1F" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="29" fill="none" stroke="url(#logoGradient)" strokeWidth="5" />
        <circle cx="32" cy="21" r="7.5" fill="url(#logoGradient)" />
        <circle cx="32" cy="41" r="11.5" fill="url(#logoGradient)" opacity="0.9" />
      </svg>
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
