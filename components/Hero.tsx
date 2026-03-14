import React from "react";
import Image from "next/image";
import portfolioData from "@/data/portfolio.json";

interface HeroProps {
  data: typeof portfolioData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              {data.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
            {data.role}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            {data.tagline}
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="md:w-1/3 flex justify-center">
          {data.heroImageUrl && (
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Image
                src={data.heroImageUrl}
                alt={`${data.name} profile`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;