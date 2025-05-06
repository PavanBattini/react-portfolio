import { Github } from "lucide-react"
import {Linkedin} from "lucide-react"

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-blue-100 to-white">
      <img
        src="/pavan_portfolio.jpg"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-white mb-6"
      />
      <h1 className="text-5xl font-bold">Hi, I'm John Doe</h1>
      <p className="mt-4 text-lg text-gray-700">Frontend Developer | React Enthusiast</p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://github.com/PavanBattini"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black-600 hover:text-black transition"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="https://github.com/PavanBattini"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black-600 hover:text-black transition"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>
    
    </section>
  )
}

export default Hero
