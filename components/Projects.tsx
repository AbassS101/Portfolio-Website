export default function Projects() {
    return (
      <section id="projects" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/project1.jpg" alt="Project 1" className="h-40 w-full object-cover rounded-lg" />
              <h3 className="text-2xl font-bold mt-4">Project Title</h3>
              <p className="mt-2">A short description of the project.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  