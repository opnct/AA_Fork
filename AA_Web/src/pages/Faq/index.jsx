import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { q: "What is your typical payment structure?", a: "For web development, I typically request 50% upfront, 25% upon design approval, and 25% prior to launch. For VAPT audits, it is 50% upfront and 50% upon delivery of the final report." },
        { q: "Do you sign Non-Disclosure Agreements (NDAs)?", a: "Absolutely. Security and confidentiality are paramount. You can generate a standard NDA right here on my site using the Contract Generator." },
        { q: "How long does a VAPT audit take?", a: "A standard web application audit takes between 1 to 2 weeks, depending on the complexity and scope defined in the initial agreement." },
        { q: "Do you provide ongoing maintenance?", a: "Yes, I offer Annual Maintenance Contracts (AMCs) for both web applications and security monitoring. Pricing is based on the specific stack and SLAs required." }
    ];

    return (
        <div className="animate-in slide-in-from-bottom-4 pt-32 lg:pt-40 max-w-3xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-12 flex items-center gap-3"><HelpCircle className="text-blue-600"/> FAQ</h1>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border-2 border-black bg-white">
                        <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full p-6 text-left font-bold text-lg flex justify-between items-center hover:bg-gray-50 transition-colors">
                            {faq.q}
                            <span className="text-blue-600 text-2xl">{openIndex === i ? '-' : '+'}</span>
                        </button>
                        {openIndex === i && (
                            <div className="p-6 border-t-2 border-black bg-gray-50 text-gray-700 leading-relaxed font-serif">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Faq;
