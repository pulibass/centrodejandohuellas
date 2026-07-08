const VARIANTS = {
  primary:
    'bg-brand-gradient text-white shadow-soft hover:shadow-lg hover:brightness-105',
  secondary:
    'bg-white text-ink border border-ink/10 hover:border-brand-magenta/40 hover:text-brand-magenta',
  ghost: 'text-ink hover:text-brand-magenta',
}

export default function Button({
  as = 'a',
  href = '#',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Tag = as
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-display transition-all duration-300 ease-out'

  return (
    <Tag
      href={as === 'a' ? href : undefined}
      className={`${base} ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
