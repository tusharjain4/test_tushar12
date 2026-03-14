import React from "react";
import portfolioData from "@/data/portfolio.json";

interface ProjectsProps {
  data: typeof portfolioData;
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col"
            >
              {/* Gradient overlay on hover */}
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gray-800 text-purple-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;