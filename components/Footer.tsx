import React from "react";
import portfolioData from "@/data/portfolio.json";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-white/10">
      <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
        <p className="mt-2">
          Built with <span className="text-pink-500">Next.js</span> & <span className="text-purple-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;