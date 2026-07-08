import Hero from '../sections/Hero'
import About from '../sections/About'
import Professionals from '../sections/Professionals'
import Benefits from '../sections/Benefits'
import Process from '../sections/Process'
import Blog from '../sections/Blog'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import OrganicDivider from '../components/ui/OrganicDivider'

export default function Home() {
  return (
    <>
      <Hero />
      <OrganicDivider color="#FFFFFF" />
      <About />
      <OrganicDivider color="#F8F9FC" />
      <Professionals />
      <OrganicDivider color="#FFFFFF" flip />
      <Benefits />
      <OrganicDivider color="#F8F9FC" />
      <Process />
      <OrganicDivider color="#FFFFFF" flip />
      <Blog />
      <Testimonials />
      <OrganicDivider color="#FFFFFF" flip />
      <Contact />
    </>
  )
}
