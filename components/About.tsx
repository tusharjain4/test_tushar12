import React from "react";
import portfolioData from "@/data/portfolio.json";

interface AboutProps {
  data: typeof portfolioData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {data.about}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-purple-400 mb-2">{data.experience}+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-xl font-bold text-pink-400 mb-2">{data.currentRole}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Current Role</div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-xl font-bold text-purple-400 mb-2">{data.highlights[0]}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Highlights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;