import React from "react";
import portfolioData from "@/data/portfolio.json";

interface SkillsProps {
  data: typeof portfolioData;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.skills.map((category, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300 group-hover:text-purple-400 transition-colors">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-4 py-1.5 bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-white text-sm rounded-full border border-purple-500/30 hover:border-purple-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;