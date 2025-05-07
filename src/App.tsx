import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Certifications from "./components/Certifications"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications/>
      <Contact />
    </div>
  )
}

export default App
