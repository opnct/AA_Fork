import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BlogDetail = ({ activeBlogPost, navigate }) => {
  if(!activeBlogPost) return null;
  return (
    <div className="animate-in slide-in-from-right-8 duration-300 pt-20">
      <article className="max-w-4xl mx-auto p-8 lg:p-16 min-h-screen">
        <button onClick={() => navigate('blog')} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-600 mb-8">
          <ArrowLeft size={16}/> Back to Blog
        </button>
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">{activeBlogPost.category}</span>
        <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">{activeBlogPost.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 font-mono mb-8 pb-8 border-b-2 border-gray-200">
          <span>By Arun Ammisetty</span>
          <span>•</span>
          <span>{activeBlogPost.date}</span>
        </div>
        <div className="prose prose-lg max-w-none prose-headings:font-black prose-p:text-gray-700">
          {activeBlogPost.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};
export default BlogDetail;
