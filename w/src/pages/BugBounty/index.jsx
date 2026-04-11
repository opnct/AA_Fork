import React, { useState } from 'react';
import { Target } from 'lucide-react';

const BugBounty = () => {
    const [bugs, setBugs] = useState([
        { id: 1, target: 'Major EdTech', type: 'SQL Injection', cvss: 9.8, status: 'Patched' },
        { id: 2, target: 'Fintech Startup', type: 'IDOR', cvss: 8.5, status: 'Patched' },
        { id: 3, target: 'E-Comm Platform', type: 'Stored XSS', cvss: 6.4, status: 'Patched' },
        { id: 4, target: 'SaaS Provider', type: 'CSRF', cvss: 5.3, status: 'Patched' }
    ]);
    const [sortAsc, setSortAsc] = useState(false);

    const handleSort = () => {
        const sorted = [...bugs].sort((a, b) => sortAsc ? a.cvss - b.cvss : b.cvss - a.cvss);
        setBugs(sorted);
        setSortAsc(!sortAsc);
    };

    return (
        <div className="animate-in slide-in-from-right-8 pt-32 lg:pt-40 max-w-5xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-4"><Target className="inline mr-2 text-blue-600"/> Hall of Fame</h1>
            <p className="text-gray-600 mb-8">Ethical disclosures and vulnerabilities identified in the wild.</p>
            
            <div className="overflow-x-auto border-2 border-black shadow-[8px_8px_0px_0px_#000]">
                <table className="w-full text-left bg-white">
                    <thead className="bg-black text-white uppercase text-sm tracking-widest">
                        <tr>
                            <th className="p-4">Target (Anonymized)</th>
                            <th className="p-4">Vulnerability Type</th>
                            <th className="p-4 cursor-pointer hover:text-blue-400" onClick={handleSort}>CVSS Score ↕</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                        {bugs.map((b, i) => (
                            <tr key={b.id} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="p-4 font-bold">{b.target}</td>
                                <td className="p-4">{b.type}</td>
                                <td className="p-4"><span className={`px-2 py-1 font-bold ${b.cvss >= 9 ? 'bg-red-200 text-red-800' : b.cvss >= 7 ? 'bg-orange-200 text-orange-800' : 'bg-yellow-200 text-yellow-800'}`}>{b.cvss}</span></td>
                                <td className="p-4 text-green-600 font-bold">{b.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default BugBounty;
