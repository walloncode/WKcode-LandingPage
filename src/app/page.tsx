import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Projects from '@/components/sections/Projects'
import Benefits from '@/components/sections/Benefits'
import Investment from '@/components/sections/Investment'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Projects />
      <Benefits />
      <Investment />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
