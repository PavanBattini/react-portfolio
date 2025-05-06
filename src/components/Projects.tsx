import { Card, CardContent } from "@/components/ui/card"

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Todo App</h3>
            <p className="text-gray-600 dark:text-gray-300">Manage your daily tasks easily.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Weather App</h3>
            <p className="text-gray-600 dark:text-gray-300">Real-time weather data by city.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Projects
