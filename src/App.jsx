import { motion, useScroll, useSpring } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-fg"
        aria-hidden
      />
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
      </main>
      <Footer />
    </>
  )
}
