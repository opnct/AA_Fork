import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const testimonials = [
        { quote: "Arun fundamentally changed how we view our application security. His VAPT audit found things automated scanners missed.", author: "Rajesh S.", role: "CTO, FinGuard" },
        { quote: "The React architecture he built for AnyAstro is blazing fast. Highly recommend his development services.", author: "Neha K.", role: "Founder, AnyAstro" },
        { quote: "Professional, transparent, and highly skilled. The workflow automation saved us 20 hours a week.", author: "Amit P.", role: "Operations Lead" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen flex flex-col items-center justify-center text-center">
            <Star className="text-yellow-400 mb-8" size={64} />
            <h1 className="text-4xl font-black uppercase mb-12">Wall of Love</h1>
            <div className="bg-white border-2 border-black p-8 lg:p-16 shadow-[12px_12px_0px_0px_#000] min-h-[300px] flex flex-col justify-center transition-all duration-500">
                <p className="text-2xl lg:text-4xl font-black leading-tight mb-8">"{testimonials[index].quote}"</p>
                <p className="font-bold text-lg uppercase tracking-widest text-blue-600">{testimonials[index].author}</p>
                <p className="text-sm text-gray-500 font-mono">{testimonials[index].role}</p>
            </div>
            <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                    <button key={i} onClick={()=>setIndex(i)} className={`w-3 h-3 rounded-full border-2 border-black transition-colors ${index === i ? 'bg-blue-600' : 'bg-transparent'}`}></button>
                ))}
            </div>
        </div>
    );
};
export default Testimonials;
