const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-auto items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
