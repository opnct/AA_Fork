import React from 'react';
import { ArrowLeft, Layout, ExternalLink } from 'lucide-react';

const ProjectDetail = ({ activeProject, navigate }) => {
  if(!activeProject) return null;
  return (
    <div className="animate-in slide-in-from-right-8 duration-300 pt-20">
      <div className="min-h-screen flex flex-col">
        <div className={`p-8 lg:p-16 border-b-2 border-black ${activeProject.imageColor}`}>
          <button onClick={() => navigate('projects')} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-600 mb-8">
            <ArrowLeft size={16}/> Back to Projects
          </button>
          <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">{activeProject.category}</span>
          <h1 className="text-4xl lg:text-6xl font-black mt-4 mb-2">{activeProject.title}</h1>
          <p className="text-xl font-bold opacity-70 mb-8">{activeProject.client} • {activeProject.year}</p>
        </div>
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 p-8 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white">
            <h3 className="text-2xl font-black uppercase mb-6">Overview</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{activeProject.description}</p>
            <h3 className="text-2xl font-black uppercase mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {activeProject.techStack.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 border-2 border-black bg-gray-50 font-bold text-sm uppercase">{tech}</span>
              ))}
            </div>
          </div>
          <div className="p-8 lg:p-16 bg-gray-50 flex flex-col justify-center items-center text-center">
            <div className="mb-8">
              <Layout size={80} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Project Visuals</p>
            </div>
            <button className="px-8 py-4 bg-black text-white font-bold uppercase tracking-widest border-2 border-black hover:bg-blue-600 hover:text-white hover:border-black transition-colors flex items-center gap-3">
              Live Demo <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
