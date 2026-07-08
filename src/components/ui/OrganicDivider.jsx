/**
 * Subtle organic separator between sections. `flip` mirrors it vertically,
 * `color` sets the fill to match the section it leads into.
 */
export default function OrganicDivider({ color = '#F8F9FC', flip = false }) {
  return (
    <div className={`organic-divider ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] md:h-[90px]">
        <path
          fill={color}
          d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,37.3C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,90L1380,90C1320,90,1200,90,1080,90C960,90,840,90,720,90C600,90,480,90,360,90C240,90,120,90,60,90L0,90Z"
        />
      </svg>
    </div>
  )
}
