import React from 'react';
import { Calculator, ChevronRight } from 'lucide-react';
import { services, colors } from '../../data/content';

const Services = ({ navigate, openService }) => (
  <div className="animate-in zoom-in-95 duration-300 pt-20">
    <div className="p-8 lg:p-12 text-center border-b-2 border-black bg-gray-50">
       <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">My Services</h2>
       <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions. Click on a card to view detailed pricing and deliverables.</p>
       <button onClick={()=>navigate('estimator')} className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold uppercase tracking-widest border-2 border-black hover:bg-black transition-colors inline-flex items-center gap-2">
           <Calculator size={18}/> Pricing Estimator
       </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div 
          key={service.id} 
          onClick={() => openService(service)}
          className={`group p-8 lg:p-12 border-b-2 border-black cursor-pointer hover:bg-white transition-colors ${colors[index % colors.length]} ${index % 3 !== 2 ? 'lg:border-r-2' : ''} ${index % 2 === 0 ? 'md:border-r-2 lg:border-r-0' : ''}`}
        >
          <div className="mb-6 text-black group-hover:text-blue-600 transition-colors duration-300">{service.icon}</div>
          <h3 className="text-2xl font-black uppercase mb-4 group-hover:underline decoration-blue-600 decoration-4 underline-offset-4">{service.title}</h3>
          <p className="text-gray-600 mb-6 font-medium leading-relaxed">{service.shortDesc}</p>
          <div className="flex items-center text-sm font-bold uppercase tracking-widest gap-2">
            View Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Services;
