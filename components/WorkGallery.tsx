
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: "Digital Synthesis", 
    category: "3D Art Direction", 
    year: "2024", 
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", // Purple Abstract
    gridClass: "md:col-span-5",
    aspect: "aspect-[4/5]"
  },
  { 
    id: 2, 
    title: "Future Mobility", 
    category: "Automotive CGI", 
    year: "2024", 
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop", // White Sports Car
    gridClass: "md:col-span-7 md:mt-32", // Staggered down
    aspect: "aspect-[16/9]"
  },
  { 
    id: 3, 
    title: "Fluid Dynamics", 
    category: "Motion Design", 
    year: "2023", 
    image: "https://images.unsplash.com/photo-1504609773096-104ff10587bd?q=80&w=1000&auto=format&fit=crop", // Ink/Smoke
    gridClass: "md:col-span-4",
    aspect: "aspect-[4/3]"
  },
  { 
    id: 4, 
    title: "Deep Space", 
    category: "Visual Effects", 
    year: "2023", 
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1000&auto=format&fit=crop", // Starry Sky
    gridClass: "md:col-span-4 md:mt-16", // Slight offset
    aspect: "aspect-[4/3]"
  },
  { 
    id: 5, 
    title: "Portrait Study", 
    category: "Photography", 
    year: "2023", 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", // Portrait
    gridClass: "md:col-span-4",
    aspect: "aspect-[4/3]"
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => (
  <div className={`group relative block w-full ${className} ${project.gridClass}`}>
    <div className={`relative overflow-hidden bg-gray-900 border border-white/10 w-full mb-6 ${project.aspect}`}>
      <img 
        src={project.image} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    
    <div className="flex flex-col border-t border-white/20 pt-4 group-hover:border-yellow-500 transition-colors duration-300">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight group-hover:text-yellow-500 transition-colors">
          {project.title}
        </h3>
        <span className="text-xs font-mono text-gray-500">0{project.id}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
          {project.category}
        </span>
        <span className="text-xs font-mono text-gray-600">{project.year}</span>
      </div>
    </div>
  </div>
);

const WorkGallery: React.FC = () => {
  return (
    <section id="work" className="bg-black text-white py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-t border-white/20 pt-8 relative">
           {/* Decorative Label */}
           <div className="absolute top-0 left-0 -translate-y-1/2 bg-black pr-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">01 — Selected Works</span>
           </div>

           <div className="w-full md:w-2/3">
             <h2 className="text-[10vw] leading-[0.8] font-black uppercase tracking-tighter text-white">
               Featured<br/>Projects
             </h2>
           </div>

           <div className="w-full md:w-1/3 flex flex-col items-end mt-8 md:mt-0 text-right">
             <p className="text-xs font-mono text-gray-400 uppercase tracking-widest leading-relaxed max-w-xs mb-8">
               A curation of avant-garde visual explorations,<br/>
               redefining the digital landscape through light, form, and code.
             </p>
             <a href="#all-work" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-yellow-500 transition-colors">
                <span className="border-b border-white/30 group-hover:border-yellow-500 pb-1 transition-colors">View All Case Studies</span>
                <ArrowUpRight size={14} />
             </a>
           </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
           {projects.map((project) => (
             <ProjectCard 
               key={project.id} 
               project={project} 
             />
           ))}
        </div>

      </div>
    </section>
  );
};

export default WorkGallery;
