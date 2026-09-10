import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Process } from './sections/Process'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { FloatingWhatsApp } from './sections/FloatingWhatsApp'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Process />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App