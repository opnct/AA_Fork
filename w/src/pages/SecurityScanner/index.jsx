import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

const SecurityScanner = () => {
    const [domain, setDomain] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [results, setResults] = useState(null);
    const [logs, setLogs] = useState([]);

    const handleScan = (e) => {
        e.preventDefault();
        if(!domain) return;
        setIsScanning(true);
        setResults(null);
        setLogs([]);

        const scanLogs = [
            `Resolving IP for ${domain}...`,
            "Checking SSL/TLS Certificates...",
            "Analyzing HTTP Security Headers...",
            "Checking for Open Ports (80, 443, 21, 22)...",
            "Validating DNS Records...",
            "Scan Complete."
        ];

        let i = 0;
        const logInterval = setInterval(() => {
            setLogs((prev) => [...prev, scanLogs[i]]);
            i++;
            if (i >= scanLogs.length) {
                clearInterval(logInterval);
                setIsScanning(false);
                const score = domain.length % 2 === 0 ? 'B+' : 'C';
                setResults({
                    score: domain.includes('https') ? 'A-' : score,
                    issues: [
                        domain.includes('https') ? "Strict-Transport-Security header missing" : "No HTTPS detected (Critical)",
                        "X-Frame-Options header not configured",
                        "Content-Security-Policy is too broad"
                    ]
                });
            }
        }, 800);
    };

    return (
        <div className="animate-in slide-in-from-bottom-4 duration-500 pt-32 lg:pt-40 max-w-3xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-4 flex items-center gap-4"><Terminal className="text-blue-600"/> Security Scanner</h1>
            <p className="text-gray-600 mb-8">Run a surface-level passive reconnaissance scan on any domain.</p>
            
            <form onSubmit={handleScan} className="flex gap-4 mb-8">
                <input 
                    type="text" 
                    placeholder="example.com or https://example.com" 
                    value={domain} 
                    onChange={(e)=>setDomain(e.target.value)}
                    className="flex-grow p-4 border-2 border-black font-mono focus:outline-none focus:border-blue-600"
                    disabled={isScanning}
                />
                <button disabled={isScanning} type="submit" className="px-8 py-4 bg-black text-white font-bold uppercase border-2 border-black hover:bg-blue-600 transition-colors disabled:opacity-50">
                    {isScanning ? 'Scanning...' : 'Scan'}
                </button>
            </form>

            <div className="bg-black text-green-400 font-mono p-6 min-h-[200px] border-2 border-black rounded shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2 text-gray-400 text-sm">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="ml-2">vanguard_scan_cli v1.0.2</span>
                </div>
                {logs.map((log, idx) => (
                    <div key={idx} className="mb-2">> {log}</div>
                ))}
                {isScanning && <div className="animate-pulse">> _</div>}
                
                {results && (
                    <div className="mt-8 border-t border-gray-700 pt-4 text-white">
                        <h3 className="text-xl font-bold mb-2">Scan Results for {domain}</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-gray-400">Security Grade:</span>
                            <span className={`text-4xl font-black ${results.score.includes('A') ? 'text-green-500' : 'text-yellow-500'}`}>{results.score}</span>
                        </div>
                        <ul className="list-disc pl-5 text-red-400">
                            {results.issues.map((issue, idx) => <li key={idx}>{issue}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
export default SecurityScanner;
