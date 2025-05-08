import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Badge } from "@/components/ui/badge"



const projects =[
  {
    title: "Portfolio Website",
    description:"A personal website to showcase my skill,projects, and contact information.",
    techStack :["React","Tailwind CSS","ShadCN UI"],
    github:"",
    demo:""
  },
  {
    title:"E-Book Blog",
    description:"Static blog site for downloading and reading free e-books.",
    techStack:["HTML","CSS","JavaScript","Bootstrap"],
    github:"",
    demo:"https://e-book-website-blush.vercel.app/index.html"
  },
  {
    title: "Office Design Website",
    description: "A modern and responsive website showcasing creative office interior designs. Built with HTML and Bootstrap CSS to deliver a clean layout, smooth navigation, and engaging user experience.",
    techStack: ["HTML", "Bootstrap CSS", "JavaScript"],
    github: "https://github.com/yourusername/office-design-website", 
    demo: "https://office-design-website-git-main-pavan-gouds-projects.vercel.app/"
  },
  {
    title: "Training Website",
    description: "A clean and informative website designed for promoting training programs. It highlights courses, trainers, and benefits in a responsive layout using modern UI components.",
    techStack: ["HTML", "BootStrap CSS", "JavaSCript", "SaSS"],
    github: "https://github.com/yourusername/training-website", 
    demo: "https://training-website-eight.vercel.app/"
  }
  
  

]

export default function Projects() {
  return (
    <section className="py-12 px-6" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="rounded-2xl shadow-lg">
            
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <Badge key={i}>{tech}</Badge>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <Button asChild variant="default">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}