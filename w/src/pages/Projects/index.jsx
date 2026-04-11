import React from 'react';
import { BookOpen, Layout, ArrowRight } from 'lucide-react';
import { projects } from '../../data/content';

const Projects = ({ navigate, openProject }) => (
  <div className="animate-in fade-in duration-500 pt-20">
    <div className="p-8 lg:p-16 border-b-2 border-black bg-yellow-50 text-center">
      <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">Selected Projects</h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">A showcase of recent work in development and security.</p>
      <button onClick={()=>navigate('case-studies')} className="mt-6 px-6 py-2 bg-black text-white font-bold uppercase tracking-widest border-2 border-black hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
           <BookOpen size={18}/> View Full Case Studies
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div key={project.id} onClick={() => openProject(project)} className={`group cursor-pointer border-b-2 border-black ${index % 3 !== 2 ? 'lg:border-r-2' : ''} ${index % 2 === 0 ? 'md:border-r-2 lg:border-r-0' : ''} bg-white flex flex-col`}>
          <div className={`h-64 ${project.imageColor} border-b-2 border-black flex items-center justify-center p-8 group-hover:opacity-90 transition-opacity`}>
            <Layout size={64} className="text-black opacity-20" />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 mb-4 inline-block">{project.category}</span>
            <h3 className="text-2xl font-black mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
            <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all text-black mt-auto">View Project <ArrowRight size={16}/></span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Projects;
