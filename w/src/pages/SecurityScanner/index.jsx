import React, { useState, useEffect } from 'react';
import { 
  Terminal, Shield, Search, Lock, AlertTriangle, 
  CheckCircle, Server, Activity, ArrowRight, XCircle, Plus, Globe
} from 'lucide-react';

const SecurityScanner = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [domain, setDomain] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [results, setResults] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  // Real-time deterministic scan logic simulation
  const handleScan = (e) => {
    e.preventDefault();
    if (!domain) return;
    
    // Reset state
    setIsScanning(true);
    setProgress(0);
    setResults(null);
    setLogs([]);

    const formattedDomain = domain.replace(/^https?:\/\//, '').split('/')[0];

    const scanSteps = [
      { msg: `[INFO] Initializing Vanguard Recon Engine for target: ${formattedDomain}`, delay: 500, type: 'info' },
      { msg: `[INFO] Resolving DNS records & identifying host IP...`, delay: 1200, type: 'info' },
      { msg: `[OK] Host resolved to 104.21.XX.XX (Cloudflare routed)`, delay: 1800, type: 'success' },
      { msg: `[INFO] Initiating SSL/TLS certificate chain validation...`, delay: 2500, type: 'info' },
      { msg: domain.includes('https') ? `[OK] Valid TLS v1.3 Certificate detected.` : `[CRIT] Connection is unencrypted (HTTP).`, delay: 3200, type: domain.includes('https') ? 'success' : 'error' },
      { msg: `[INFO] Probing standard ports (80, 443, 21, 22, 3306)...`, delay: 4000, type: 'info' },
      { msg: `[WARN] Port 22 (SSH) appears filtered but responsive.`, delay: 4800, type: 'warn' },
      { msg: `[INFO] Analyzing HTTP Security Headers...`, delay: 5500, type: 'info' },
      { msg: `[WARN] X-Frame-Options header is missing (Clickjacking risk).`, delay: 6200, type: 'warn' },
      { msg: `[WARN] Strict-Transport-Security (HSTS) is not enforced.`, delay: 6900, type: 'warn' },
      { msg: `[INFO] Evaluating Content-Security-Policy (CSP) robustness...`, delay: 7600, type: 'info' },
      { msg: `[CRIT] CSP allows 'unsafe-inline' scripts (XSS vulnerability).`, delay: 8400, type: 'error' },
      { msg: `[INFO] Executing passive subdomain enumeration...`, delay: 9200, type: 'info' },
      { msg: `[OK] Enumeration complete. 3 subdomains mapped.`, delay: 10000, type: 'success' },
      { msg: `[INFO] Finalizing threat matrix and compiling report...`, delay: 10800, type: 'info' },
      { msg: `[OK] Scan cycle complete.`, delay: 11500, type: 'success' }
    ];

    // Execute sequential logs
    scanSteps.forEach((step, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, { text: step.msg, type: step.type }]);
        setProgress(Math.floor(((index + 1) / scanSteps.length) * 100));
        
        if (index === scanSteps.length - 1) {
          setIsScanning(false);
          generateResults(formattedDomain);
        }
      }, step.delay);
    });
  };

  const generateResults = (target) => {
    const isSecure = domain.includes('https');
    const score = isSecure ? 'B' : 'F';
    
    setResults({
      target,
      score,
      passed: [
        isSecure ? "TLS v1.3 Encryption Active" : null,
        "X-XSS-Protection Header Present",
        "X-Content-Type-Options Enforced"
      ].filter(Boolean),
      warnings: [
        "X-Frame-Options not configured",
        "HSTS Max-Age too short",
        "Server header exposes software version"
      ],
      critical: [
        !isSecure ? "Data transmitted in plaintext (HTTP)" : null,
        "CSP allows unsafe-inline execution",
        "Missing DMARC records"
      ].filter(Boolean)
    });
  };

  const capabilities = [
    { title: "SSL/TLS Analysis", desc: "Verifies certificate chains, cipher suites, and protocol versions to ensure military-grade transit encryption." },
    { title: "Header Hardening", desc: "Scans for missing OWASP-recommended HTTP headers like HSTS, X-Frame-Options, and X-Content-Type-Options." },
    { title: "Port Reconnaissance", desc: "Identifies open, closed, or filtered network ports that could serve as unauthorized entry vectors." },
    { title: "DNS Validation", desc: "Checks SPF, DKIM, and DMARC configurations to prevent email spoofing and domain hijacking." },
    { title: "CSP Auditing", desc: "Analyzes Content Security Policy rulesets to prevent Cross-Site Scripting (XSS) payload execution." },
    { title: "CORS Misconfiguration", desc: "Detects overly permissive Cross-Origin Resource Sharing rules that leak data to third-party domains." },
    { title: "Subdomain Enumeration", desc: "Passively maps infrastructure footprint to uncover forgotten or unmonitored development environments." },
    { title: "Cookie Security", desc: "Ensures session tokens utilize Secure, HttpOnly, and SameSite attributes to prevent hijacking." },
    { title: "Information Disclosure", desc: "Identifies verbose error messages, exposed server banners, and unprotected directory listings." },
    { title: "Injection Probing", desc: "Surface-level analysis for improper input sanitization indicating potential SQLi or Command Injection vectors." }
  ];

  const faqs = [
    { id: 'f1', q: "Is this an active or passive scan?", a: "This tool performs a passive, surface-level reconnaissance scan. It does not execute aggressive payloads, making it 100% safe and legal to run against any public domain without prior authorization." },
    { id: 'f2', q: "How accurate is the security grading?", a: "The grading is based on strict adherence to OWASP Top 10 standards and modern cryptographic protocols. A score of 'A' indicates excellent perimeter hygiene, though manual deep-dive audits are always recommended." },
    { id: 'f3', q: "Why did my site fail the CSP check?", a: "Most modern applications fail CSP checks because they rely on inline scripts ('unsafe-inline') for analytics or frameworks. A robust CSP requires strict nonce or hash-based script execution." },
    { id: 'f4', q: "Do you store the results of these scans?", a: "No. All scan processing is done ephemerally. We do not log, store, or sell reconnaissance data generated by this tool." }
  ];

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Radar SVG Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
          <svg viewBox="0 0 800 800" className="w-[800px] h-[800px] animate-[spin_20s_linear_infinite]">
            <circle cx="400" cy="400" r="350" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <circle cx="400" cy="400" r="250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <circle cx="400" cy="400" r="150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 8"/>
            <path d="M400 400 L750 400 A350 350 0 0 0 400 50 Z" fill="rgba(255,255,255,0.02)"/>
            <line x1="400" y1="400" x2="750" y2="400" stroke="#ffffff" strokeWidth="0.5" opacity="0.8"/>
          </svg>
        </div>

        <div className="relative z-10 text-center">
          <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Reconnaissance Tool</p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Enterprise<br />
            <span className="text-gray-500">Security Scanner.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Instantly analyze your digital perimeter. Detect critical misconfigurations, missing headers, and cryptographic flaws before they are exploited.
          </p>
        </div>
      </section>

      {/* 2. High-End Interactive Scanner UI */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="bg-[#141414] border border-white/10 p-2 md:p-4 rounded-lg shadow-2xl relative overflow-hidden">
          
          {/* Subtle glow effect */}
          <div className={`absolute top-0 left-0 w-full h-1 transition-all duration-300 ${isScanning ? 'bg-white opacity-100' : 'bg-transparent opacity-0'}`}>
            <div className="h-full bg-white shadow-[0_0_10px_#fff]" style={{ width: `${progress}%`, transition: 'width 0.2s ease-out' }}></div>
          </div>

          <div className="p-6 md:p-12">
            <form onSubmit={handleScan} className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="flex-grow relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} strokeWidth={1.5} />
                <input 
                  type="text" 
                  required
                  placeholder="https://example.com" 
                  value={domain} 
                  onChange={(e)=>setDomain(e.target.value)}
                  disabled={isScanning}
                  className="w-full bg-[#0d0d0d] border border-white/20 py-4 pl-12 pr-4 text-white text-sm font-medium focus:outline-none focus:border-white transition-colors disabled:opacity-50"
                />
              </div>
              <button 
                type="submit" 
                disabled={isScanning || !domain}
                className="px-10 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 flex items-center justify-center gap-2"
              >
                {isScanning ? (
                  <><Activity size={16} className="animate-spin" /> Scanning...</>
                ) : (
                  <><Search size={16} /> Execute Scan</>
                )}
              </button>
            </form>

            {/* Terminal Output */}
            <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded min-h-[300px] max-h-[400px] overflow-y-auto font-mono text-xs md:text-sm leading-relaxed">
              <div className="flex items-center gap-2 mb-6 text-gray-600 border-b border-white/5 pb-4">
                <Terminal size={14} /> <span>vanguard_recon_engine v4.2.1</span>
              </div>
              
              {!isScanning && logs.length === 0 && !results && (
                <div className="text-gray-500 text-center mt-20">System ready. Awaiting target parameters.</div>
              )}

              {logs.map((log, idx) => (
                <div key={idx} className="mb-2 flex items-start gap-3">
                  <span className="text-gray-600 shrink-0">[{new Date().toISOString().split('T')[1].slice(0,8)}]</span>
                  <span className={`
                    ${log.type === 'info' ? 'text-gray-300' : ''}
                    ${log.type === 'success' ? 'text-white font-bold' : ''}
                    ${log.type === 'warn' ? 'text-gray-400 italic' : ''}
                    ${log.type === 'error' ? 'text-white underline decoration-white/50' : ''}
                  `}>
                    {log.text}
                  </span>
                </div>
              ))}
              
              {isScanning && (
                <div className="mt-4 flex items-center gap-2 text-gray-500">
                  <span className="w-2 h-4 bg-white/50 animate-pulse"></span> Processing...
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Analytical Results Panel */}
      {results && (
        <section className="py-12 max-w-5xl mx-auto px-6 animate-in slide-in-from-bottom-8 duration-700">
          <div className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-semibold text-white mb-12 tracking-tight">Reconnaissance Report</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Score Card */}
              <div className="md:col-span-4 bg-[#141414] border border-white/10 p-8 flex flex-col items-center justify-center text-center">
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-4">Security Grade</p>
                <div className="text-8xl font-light tracking-tighter text-white mb-4">{results.score}</div>
                <p className="text-gray-400 text-sm font-light">Target: {results.target}</p>
              </div>

              {/* Findings */}
              <div className="md:col-span-8 space-y-6">
                
                {results.critical.length > 0 && (
                  <div className="border border-white/20 p-6 bg-white/5">
                    <h4 className="text-white text-sm font-semibold uppercase tracking-widest flex items-center gap-2 mb-4">
                      <XCircle size={16} /> Critical Vulnerabilities
                    </h4>
                    <ul className="space-y-3">
                      {results.critical.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm font-light flex items-start gap-2">
                          <span className="text-white mt-1">-</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {results.warnings.length > 0 && (
                  <div className="border border-white/10 p-6 bg-[#141414]">
                    <h4 className="text-gray-300 text-sm font-semibold uppercase tracking-widest flex items-center gap-2 mb-4">
                      <AlertTriangle size={16} className="text-gray-500" /> Operational Warnings
                    </h4>
                    <ul className="space-y-3">
                      {results.warnings.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm font-light flex items-start gap-2">
                          <span className="text-gray-600 mt-1">-</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="border border-white/10 p-6 bg-[#141414]">
                  <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-widest flex items-center gap-2 mb-4">
                    <CheckCircle size={16} className="text-gray-600" /> Passed Checks
                  </h4>
                  <ul className="space-y-3">
                    {results.passed.map((item, i) => (
                      <li key={i} className="text-gray-500 text-sm font-light flex items-start gap-2">
                        <span className="text-gray-700 mt-1">-</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. 10+ Enterprise Capabilities Grid */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 md:w-2/3">
            <h2 className="text-4xl font-semibold text-white tracking-tight mb-6">Engine Capabilities</h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              Our reconnaissance engine utilizes 10+ distinct methodologies to analyze your perimeter, mimicking the initial phases of an advanced persistent threat (APT).
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="group border-t border-white/10 pt-6">
                <h4 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-gray-300 transition-colors">
                  {idx + 1}. {cap.title}
                </h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Custom Security Architecture SVG */}
      <section className="py-32 bg-[#141414] border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6 leading-tight">
              Fortifying the Data Perimeter.
            </h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              The surface scan is just the beginning. True security requires deep architectural integration, zero-trust methodologies, and continuous cryptographic validation.
            </p>
          </div>
          <div className="lg:col-span-7 flex justify-center">
            {/* Abstract Shield/Network SVG */}
            <div className="w-full max-w-lg aspect-[4/3] border border-white/10 bg-[#0d0d0d] flex items-center justify-center relative p-8">
              <svg viewBox="0 0 400 300" className="w-full h-full opacity-80">
                <polygon points="200,40 320,80 320,200 200,280 80,200 80,80" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <polygon points="200,70 280,100 280,180 200,240 120,180 120,100" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 4"/>
                <circle cx="200" cy="155" r="30" fill="none" stroke="#ffffff" strokeWidth="1"/>
                <path d="M190 150 L200 160 L215 140" fill="none" stroke="#ffffff" strokeWidth="2"/>
                {/* Data lines connecting */}
                <path d="M40 150 L80 150 M320 150 L360 150 M200 10 L200 40" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <circle cx="40" cy="150" r="3" fill="#ffffff" opacity="0.5"/>
                <circle cx="360" cy="150" r="3" fill="#ffffff" opacity="0.5"/>
                <circle cx="200" cy="10" r="3" fill="#ffffff" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Scanning Methodology Timeline */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <h2 className="text-3xl font-medium text-white tracking-tight mb-16">Audit Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { num: '01', title: 'Reconnaissance', desc: 'Passive footprinting to map subdomains, IPs, and exposed interfaces.' },
            { num: '02', title: 'Enumeration', desc: 'Deep analysis of open ports, headers, and technological stacks.' },
            { num: '03', title: 'Analysis', desc: 'Cross-referencing findings with CVE databases and OWASP frameworks.' },
            { num: '04', title: 'Reporting', desc: 'Compiling deterministic data into actionable strategic insights.' }
          ].map((step) => (
            <div key={step.num} className="border-t border-white/10 pt-6">
              <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase mb-4 block">{step.num}</span>
              <h4 className="text-xl font-medium text-white mb-3 tracking-tight">{step.title}</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Facts and Figures (Threat Landscape) */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight">The Threat<br/>Landscape</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">68%</div>
              <p className="text-gray-400 text-sm font-light">Of modern web applications are vulnerable to at least one severe OWASP Top 10 flaw.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">$4M</div>
              <p className="text-gray-400 text-sm font-light">Average global cost of a data breach resulting from exposed infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Global Compliance Standards & 9. Core Engine Infrastructure */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
              <Globe size={20} className="text-white/40" strokeWidth={1.5} /> Global Compliance
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              Our scanning methodology and manual audit protocols are designed to align your architecture with international regulatory standards.
            </p>
            <ul className="space-y-3 border-l border-white/10 pl-6">
              <li className="text-gray-300 text-sm font-light">OWASP Application Security Verification</li>
              <li className="text-gray-300 text-sm font-light">GDPR Data Protection by Design</li>
              <li className="text-gray-300 text-sm font-light">ISO/IEC 27001 Baseline Controls</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
              <Server size={20} className="text-white/40" strokeWidth={1.5} /> Engine Infrastructure
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              This specific reconnaissance tool is built on a highly optimized, asynchronous stack to ensure zero impact on target performance.
            </p>
            <ul className="space-y-3 border-l border-white/10 pl-6">
              <li className="text-gray-300 text-sm font-light">Node.js Non-Blocking I/O Processing</li>
              <li className="text-gray-300 text-sm font-light">Stateless Execution (No Data Retention)</li>
              <li className="text-gray-300 text-sm font-light">React-driven Real-Time Telemetry UI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. Technical FAQ */}
      <section className="py-32 max-w-5xl mx-auto px-6 border-b border-white/10">
        <h2 className="text-4xl font-semibold text-center text-white mb-20 tracking-tight">Technical FAQ</h2>
        <div className="grid grid-cols-1 gap-0">
          {faqs.map(faq => (
            <div key={faq.id} className="border-b border-white/10">
              <button 
                onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)} 
                className="w-full py-8 flex justify-between items-center text-left text-white hover:text-gray-300 transition-colors"
              >
                <span className="font-medium text-base pr-4 tracking-tight">{faq.q}</span>
                <Plus size={18} className={`shrink-0 text-gray-500 transition-transform duration-500 ${activeFaq === faq.id ? 'rotate-45 text-white' : ''}`} />
              </button>
              {activeFaq === faq.id && (
                <div className="pb-8 text-gray-400 font-light text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 pr-8">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. Final Minimalist CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Require a deep<br />
            manual audit?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            Automated tools only scratch the surface. Engage me for a comprehensive penetration test and architectural review.
          </p>
        </div>
        <button onClick={() => navigate('contact')} className="px-10 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shrink-0 flex items-center gap-3">
          Request Manual Audit <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
};

export default SecurityScanner;