const Skills = () => {
  const skills: string[] = ["Bootstrap 5","React", "TypeScript", "Tailwind CSS", "ShadCN", "Git","Mysql","Excel"]

  return (
    <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
