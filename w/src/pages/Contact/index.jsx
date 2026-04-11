import React from 'react';
import { Mail, Phone, Linkedin, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');
    const text = `*New Inquiry from Portfolio*\n\n*Name:* ${name}\n*Email:* ${email}\n*Service:* ${service}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918329000442?text=${encodedText}`, '_blank');
  };

  return (
    <div className="animate-in fade-in duration-500 pt-20 min-h-screen flex flex-col">
       <div className="grid grid-cols-1 lg:grid-cols-2 flex-grow">
          <div className="p-8 lg:p-20 bg-blue-600 text-white border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-center">
             <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8">Let's Work Together.</h2>
             <p className="text-xl font-light mb-12 opacity-90">Have a project in mind? Looking for a security audit? Or just want to discuss the latest tech? Drop me a line.</p>
             <div className="space-y-6">
                <a href="mailto:contact.aa@tuta.io" className="flex items-center gap-4 text-xl font-bold hover:underline">
                  <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full"><Mail size={24} /></div>
                  contact.aa@tuta.io
                </a>
                <div className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full"><Phone size={24} /></div>
                  +91 83290 00442
                </div>
                <a href="https://linkedin.com/in/arun-ammisetty" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl font-bold hover:underline">
                  <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full"><Linkedin size={24} /></div>
                  /in/arun-ammisetty
                </a>
                <div className="flex items-center gap-4 text-xl font-bold">
                   <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full"><Globe size={24} /></div>
                   Baner Pune, India
                </div>
             </div>
          </div>
          <div className="p-8 lg:p-20 bg-white flex flex-col justify-center">
             <form className="max-w-lg w-full mx-auto space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div>
                   <label className="block text-sm font-bold uppercase tracking-widest mb-2">Name</label>
                   <input name="name" type="text" className="w-full p-4 border-2 border-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_#2563EB] transition-all" placeholder="John Doe" required />
                </div>
                <div>
                   <label className="block text-sm font-bold uppercase tracking-widest mb-2">Email</label>
                   <input name="email" type="email" className="w-full p-4 border-2 border-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_#2563EB] transition-all" placeholder="john@example.com" required />
                </div>
                <div>
                   <label className="block text-sm font-bold uppercase tracking-widest mb-2">Service Needed</label>
                   <select name="service" className="w-full p-4 border-2 border-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_#2563EB] transition-all">
                      <option>Web Development</option>
                      <option>Cyber Security Audit</option>
                      <option>Digital Marketing</option>
                      <option>IT Support</option>
                      <option>Other</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-bold uppercase tracking-widest mb-2">Message</label>
                   <textarea name="message" rows="4" className="w-full p-4 border-2 border-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_#2563EB] transition-all" placeholder="Tell me about your project..." required></textarea>
                </div>
                <button type="submit" className="w-full p-4 bg-green-500 text-white font-bold uppercase tracking-widest border-2 border-black hover:bg-green-600 hover:text-white hover:border-black transition-colors flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> Send via WhatsApp
                </button>
             </form>
          </div>
       </div>
    </div>
  );
};
export default Contact;
