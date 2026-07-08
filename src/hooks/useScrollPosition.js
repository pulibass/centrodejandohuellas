import { useEffect, useState } from 'react'

/**
 * Returns true once the page has been scrolled past `threshold` pixels.
 * Used to toggle the compact/blurred state of the fixed header.
 */
export default function useScrollPosition(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
