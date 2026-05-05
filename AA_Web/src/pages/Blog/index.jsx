import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/content';

const Blog = ({ navigate, openBlogPost }) => (
  <div className="animate-in fade-in duration-500 pt-20">
    <div className="p-8 lg:p-16 border-b-2 border-black bg-pink-50 text-center">
      <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">The Blog</h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">Insights on security, development, and digital strategy from the front lines.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, index) => (
        <div key={post.id} onClick={() => openBlogPost(post)} className={`p-8 border-b-2 border-black cursor-pointer hover:bg-white transition-colors group ${index % 3 !== 2 ? 'lg:border-r-2' : ''} ${index % 2 === 0 ? 'md:border-r-2 lg:border-r-0' : ''} bg-white`}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1">{post.category}</span>
            <span className="text-xs font-mono text-gray-500">{post.date}</span>
          </div>
          <h3 className="text-2xl font-black mb-4 group-hover:text-blue-600 leading-tight">{post.title}</h3>
          <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
          <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all text-black">Read More <ArrowRight size={16}/></span>
        </div>
      ))}
    </div>
  </div>
);
export default Blog;
