import React from 'react';

function Projects() {
  // Static project data (array of objects)
  const projects = [
    {
      id: 1,
      title: "College Student Dashboard",
      description: "A dashboard application for college students built with React.js, Tailwind CSS, Node.js, and MongoDB.",
      tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/project1",
      demoLink: "https://demo.project1.com"
    },
    {
      id: 2,
      title: "SecureFileShare",
      description: "Secure file sharing application using Node.js, Express.js, PostgreSQL, and encryption techniques.",
      tags: ["Node.js", "Express.js", "PostgreSQL", "Encryption"],
      githubLink: "https://github.com/yourusername/project2",
      demoLink: "https://demo.project2.com"
    },
   
  ];

  return (
    <section className="text-white flex justify-center mt-5 pr-16 pl-16">
      <div className="w-full max-w-4xl border border-gray-300 p-4 bg-gray-900 rounded-lg shadow-lg">
     
   
        <div className="text-center text-2xl font-bold mb-4">Projects</div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a key={project.id} href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <div className="border border-gray-300 bg-gray-900 rounded-lg shadow-lg p-4 hover:bg-gray-800">
                <div className="text-lg font-bold mb-2">{project.title}</div>
                <div className="text-sm text-gray-400 mb-2">{project.description}</div>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-sm bg-gray-800 text-gray-300 rounded-full px-2 py-1 mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-2 text-sm">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4">
                    GitHub
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    Demo
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Placeholder for empty state */}
        {projects.length === 0 && (
          <div className="text-center mt-4 text-sm text-gray-400">
            No projects to display.
          </div>
        )}
      </div>
    
    </section>
  );
}

export default Projects;
