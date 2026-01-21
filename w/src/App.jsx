import React, { useState, useEffect, useRef } from 'react';
import { 
  X, ArrowRight, ArrowLeft, Globe, Shield, 
  Monitor, Megaphone, PenTool, Briefcase, Mail, 
  Linkedin, Github, Check, ChevronRight, Download,
  Phone, MessageCircle, ArrowUp, FileText, Scale, Layout, ExternalLink,
  Lock, AlertTriangle, Eye, CreditCard, Copyright, Server,
  Plus, Trash2, Printer, IndianRupee, FileCheck, FileSignature, Stamp
} from 'lucide-react';

// --- Contract Generator Component ---
const ContractGeneratorView = () => {
    const [contractType, setContractType] = useState('Valid Contract');
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [contractDate, setContractDate] = useState(new Date().toISOString().split('T')[0]);
    const [contractValue, setContractValue] = useState('');
    const [effectiveDate, setEffectiveDate] = useState(new Date().toISOString().split('T')[0]);
    const [jurisdiction, setJurisdiction] = useState('India'); 
    const [stampDuty, setStampDuty] = useState('500');

    const contractTypes = [
        // --- Indian Law ---
        "Valid Contract", "Void Contract", "Voidable Contract", "Illegal Contract", "Unenforceable Contract",
        "Express Contract", "Implied Contract", "Quasi-Contract", "Executed Contract", "Executory Contract",
        "Unilateral Contract", "Bilateral Contract", "Contingent Contract", "Indemnity & Guarantee Contract",
        "Bailment & Pledge Contract", "Agency Contract",
        // --- International ---
        "International Sales Contract", "International Distribution Agreement", "International Agency Agreement",
        "International Licensing Agreement", "International Franchise Agreement", "International Joint Venture Agreement",
        "International Supply Agreement", "Investment/Finance Agreement (Intl)", "Letters of Credit / Payment Contracts",
        "Service Level Agreement (SLA)", "Master Service Agreement (MSA)", "Employment Contract",
        "Non-Disclosure Agreement (NDA)", "Partnership / Joint Venture Agreement", "Lease / Rental Agreement",
        "Loan / Finance Agreement", "Technology/Software Contract"
    ];

    const handlePrint = () => {
        window.print();
    };

    const getLegalClauses = () => {
        const commonClauses = `
        1. DEFINITIONS AND INTERPRETATION
        1.1. "Agreement" means this contract document and all attached schedules.
        1.2. "Confidential Information" refers to any non-public data shared between parties.
        1.3. "Services" implies the scope of work defined in the attached Statement of Work (SOW).

        2. TERM AND TERMINATION
        2.1. This Agreement shall commence on the Effective Date: ${effectiveDate} and shall remain in force until the completion of services or termination by either party.
        2.2. Either party may terminate this agreement with a 30-day written notice.

        3. CONSIDERATION AND PAYMENT TERMS
        3.1. The Client agrees to pay the Service Provider a total sum of ${contractValue || 'As agreed'} for the Services.
        3.2. Payments shall be made within 15 days of invoice generation.
        3.3. Late payments may attract an interest of 1.5% per month.
        `;

        const indianClauses = `
        4. GOVERNING LAW AND JURISDICTION (INDIA)
        4.1. This Agreement shall be governed by and construed in accordance with the laws of India, specifically the Indian Contract Act, 1872.
        4.2. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
        4.3. Arbitration: Disputes shall be referred to a sole arbitrator appointed by the Service Provider in accordance with the Arbitration and Conciliation Act, 1996.
        4.4. Stamp Duty: This agreement is executed on a stamp paper of appropriate value as per the Maharashtra Stamp Act.
        `;

        const internationalClauses = `
        4. GOVERNING LAW AND JURISDICTION (INTERNATIONAL)
        4.1. This Agreement shall be governed by generally accepted principles of international commercial law (UNIDROIT Principles 2026).
        4.2. In case of cross-border disputes, the parties agree to resolve issues through amicable negotiation.
        4.3. Failing negotiation, disputes shall be settled by arbitration under the Rules of the Singapore International Arbitration Centre (SIAC).
        4.4. The language of arbitration shall be English.
        `;

        const specificClauses = () => {
            if (contractType.includes("NDA") || contractType.includes("Non-Disclosure")) {
                return `
        5. CONFIDENTIALITY
        5.1. The Receiving Party agrees to hold all Confidential Information in strict confidence.
        5.2. No information shall be disclosed to third parties without prior written consent.
        5.3. This obligation survives the termination of this Agreement for a period of 5 years.
                `;
            } else if (contractType.includes("Employment")) {
                return `
        5. OBLIGATIONS OF EMPLOYEE
        5.1. The Employee agrees to perform duties as assigned by the Employer faithfully.
        5.2. The Employee shall not engage in any other business activity during the term of employment.
        5.3. Intellectual Property created during employment belongs solely to the Employer.
                `;
            } else if (contractType.includes("Technology") || contractType.includes("Software")) {
                return `
        5. INTELLECTUAL PROPERTY RIGHTS
        5.1. All code, designs, and software developed under this contract shall remain the IP of the Developer until full payment is received.
        5.2. Upon full payment, rights are transferred to the Client, excluding pre-existing libraries.
        5.3. The Service Provider warrants that the software does not infringe on any third-party patents or copyrights.
                `;
            } else {
                return `
        5. INDEMNIFICATION AND LIABILITY
        5.1. The Service Provider shall indemnify the Client against any direct losses arising from gross negligence.
        5.2. Liability is limited to the total value of this Contract.
        5.3. Neither party shall be liable for indirect or consequential damages.
                `;
            }
        };

        return `
        ${commonClauses}
        ${jurisdiction === 'India' ? indianClauses : internationalClauses}
        ${specificClauses()}
        
        6. GENERAL PROVISIONS
        6.1. Force Majeure: Neither party is liable for delays caused by events beyond reasonable control.
        6.2. Amendments: Modifications to this Agreement must be in writing and signed by both parties.
        6.3. Severability: If any provision is found invalid, the remaining provisions remain in effect.
        `;
    };

    return (
        <div className="p-4 lg:p-8 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                 {/* Config Panel */}
                 <div className="lg:col-span-4 bg-white border-2 border-black p-6 h-fit print:hidden">
                    <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
                        <FileSignature size={24} /> Contract Setup
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-1">Contract Type</label>
                            <select 
                                value={contractType} 
                                onChange={(e) => setContractType(e.target.value)}
                                className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-bold"
                            >
                                {contractTypes.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                         <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-1">Jurisdiction</label>
                            <select 
                                value={jurisdiction} 
                                onChange={(e) => setJurisdiction(e.target.value)}
                                className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-bold"
                            >
                                <option value="India">India (Indian Contract Act 1872)</option>
                                <option value="International">International (Commercial Practice)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-1">Client Name</label>
                            <input 
                                value={clientName} 
                                onChange={(e) => setClientName(e.target.value)}
                                className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none"
                                placeholder="Client Legal Name"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-1">Client Address</label>
                            <textarea 
                                value={clientAddress} 
                                onChange={(e) => setClientAddress(e.target.value)}
                                className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none"
                                rows="2"
                                placeholder="Full Address"
                            />
                        </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-1">Agreement Date</label>
                                <input 
                                    type="date" 
                                    value={contractDate} 
                                    onChange={(e) => setContractDate(e.target.value)}
                                    className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none"
                                />
                            </div>
                             <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-1">Effective Date</label>
                                <input 
                                    type="date" 
                                    value={effectiveDate} 
                                    onChange={(e) => setEffectiveDate(e.target.value)}
                                    className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none"
                                />
                            </div>
                        </div>
                         <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-1">Contract Value</label>
                            <input 
                                value={contractValue} 
                                onChange={(e) => setContractValue(e.target.value)}
                                className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none"
                                placeholder="e.g. INR 50,000 / USD 1,000"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-1">Stamp Duty Paid</label>
                            <input 
                                value={stampDuty} 
                                onChange={(e) => setStampDuty(e.target.value)}
                                className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none"
                                placeholder="Amount"
                            />
                        </div>
                         <button onClick={handlePrint} className="w-full py-3 bg-blue-600 text-white font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 mt-4">
                            <Printer size={20} /> Print Contract
                        </button>
                    </div>
                 </div>

                 {/* Contract Preview */}
                 <div id="contract-print-area" className="lg:col-span-8 bg-white border-2 border-black p-8 lg:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] font-serif relative">
                    
                    {/* Stamp Duty Mark */}
                    <div className="absolute top-8 right-8 border-4 border-double border-red-800 p-4 text-center transform rotate-[-2deg] opacity-80">
                         <div className="flex justify-center mb-1"><Stamp size={24} className="text-red-800"/></div>
                         <h4 className="font-bold text-red-800 uppercase text-xs tracking-widest border-b border-red-800 pb-1 mb-1">Stamp Duty Paid</h4>
                         <p className="text-red-900 font-mono font-bold text-lg">{jurisdiction === 'India' ? '₹' : '$'}{stampDuty}</p>
                         <p className="text-[10px] text-red-800 uppercase">Govt of {jurisdiction}</p>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col items-center border-b-2 border-black pb-8 mb-8">
                        <img src="p-removebg-preview.png" alt="Logo" className="h-20 w-auto object-contain mb-4" onError={(e) => e.target.style.display = 'none'} />
                        <h1 className="text-3xl font-black uppercase tracking-widest text-center">{contractType}</h1>
                        <p className="text-sm font-bold text-gray-500 mt-2">Agreement Ref: AA/{new Date().getFullYear()}/{Math.floor(Math.random()*1000)}</p>
                    </div>

                    {/* Intro */}
                    <div className="mb-8 leading-relaxed">
                        <p><strong>THIS AGREEMENT</strong> is made on this <strong>{contractDate}</strong> (the "Execution Date"), by and between:</p>
                        
                        <div className="my-6 pl-4 border-l-4 border-gray-300">
                             <p><strong>1. Arun Ammisetty</strong>, a proprietary firm having its registered office at <strong>Baner, Pune, Maharashtra, 411045, India</strong> (hereinafter referred to as the <strong>"Service Provider"</strong>), which expression shall, unless repugnant to the context or meaning thereof, be deemed to mean and include its successors and assigns of the ONE PART;</p>
                        </div>
                        
                        <p className="text-center font-bold text-sm my-2">AND</p>

                        <div className="my-6 pl-4 border-l-4 border-gray-300">
                             <p><strong>2. {clientName || '[Client Legal Name]'}</strong>, having its principal place of business at <strong>{clientAddress || '[Client Registered Address]'}</strong> (hereinafter referred to as the <strong>"Client"</strong>), which expression shall, unless repugnant to the context or meaning thereof, be deemed to mean and include its successors and permitted assigns of the OTHER PART.</p>
                        </div>
                        
                        <p>The Service Provider and the Client are hereinafter individually referred to as a "Party" and collectively as the "Parties".</p>
                    </div>

                    {/* Body */}
                    <div className="prose max-w-none mb-12 whitespace-pre-line text-justify leading-relaxed">
                        {getLegalClauses()}
                    </div>

                    {/* Signatures */}
                    <div className="mt-16 break-inside-avoid">
                        <h3 className="font-bold uppercase tracking-widest text-sm mb-8 text-center border-b border-gray-300 pb-2">IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date first above written.</h3>
                        <div className="grid grid-cols-2 gap-16">
                             <div>
                                 <p className="text-xs font-bold uppercase tracking-widest mb-4">Signed for and on behalf of<br/><strong>Arun Ammisetty</strong></p>
                                 <div className="h-24 mb-2 relative">
                                    <img src="/assets/sign.png" alt="Signed & Stamped" className="h-full object-contain absolute left-0 bottom-0" onError={(e) => e.target.style.display = 'none'} />
                                 </div>
                                 <div className="border-t border-black pt-2">
                                    <p className="font-bold">Arun Ammisetty</p>
                                    <p className="text-xs text-gray-500">Proprietor</p>
                                    <p className="text-[10px] text-gray-400">Date: {new Date().toLocaleDateString()}</p>
                                 </div>
                             </div>
                             <div>
                                 <p className="text-xs font-bold uppercase tracking-widest mb-4">Signed for and on behalf of<br/><strong>{clientName || 'Client'}</strong></p>
                                 <div className="h-24 mb-2"></div>
                                 <div className="border-t border-black pt-2">
                                    <p className="font-bold text-gray-400">[Name of Authorized Signatory]</p>
                                    <p className="text-xs text-gray-500">[Designation]</p>
                                    <p className="text-[10px] text-gray-400">Date: _______________</p>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Certificate */}
                    <div className="mt-16 pt-8 border-t-4 border-double border-gray-300 text-center break-before-auto">
                        <Shield size={24} className="mx-auto text-gray-400 mb-2" />
                        <h4 className="font-bold uppercase tracking-widest text-[10px] text-gray-600">Digital Authenticity Certificate</h4>
                        <p className="text-[10px] text-gray-400 mt-1">
                            Document Hash: {Math.random().toString(36).substr(2, 16).toUpperCase()}-{Math.random().toString(36).substr(2, 4).toUpperCase()}
                            <br/>
                            Compliant with IT Act, 2000 (India) & ESIGN Act (Global). Generated securely by Arun Ammisetty Systems.
                        </p>
                    </div>

                 </div>
            </div>
             <style>{`
                @media print {
                    body * { visibility: hidden; }
                    #contract-print-area, #contract-print-area * { visibility: visible; }
                    #contract-print-area { position: absolute; left: 0; top: 0; width: 100%; margin: 0; padding: 40px; border: none; box-shadow: none; }
                    @page { margin: 0; size: auto; }
                }
            `}</style>
        </div>
    );
};

// --- Invoice Generator Component (Kept outside App to prevent re-renders) ---
const InvoiceGeneratorView = ({ setIsAuthenticated, isAuthenticated }) => {
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showLUT, setShowLUT] = useState(false); // Toggle for LUT view
  const [activeTool, setActiveTool] = useState('invoice'); // 'invoice' or 'contract'

  const [invoiceData, setInvoiceData] = useState({
    type: 'Tax Invoice', // Default
    currency: 'INR', 
    userGstin: '', 
    gstStatus: 'Registered', // New: Registered or Unregistered
    clientType: 'Indian', // New: Indian or International
    isPaid: false, // New: Payment Status
    clientName: '',
    clientAddress: '',
    clientGstin: '',
    invoiceNo: `INV-${new Date().getFullYear()}-001`,
    date: new Date().toISOString().split('T')[0],
    dueDate: '',
    originalRef: '', 
    isInterState: false, 
    items: [{ id: 1, description: 'Web Development Services', hsn: '998314', qty: 1, rate: 25000 }]
  });

  const printRef = useRef();

  const handleLogin = (e) => {
      e.preventDefault();
      // Super Admin Passcode
      if (passcode === 'admin2026') {
          setIsAuthenticated(true);
          setErrorMsg('');
      } else {
          setErrorMsg('Invalid Access Code');
      }
  };

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { id: Date.now(), description: '', hsn: '998314', qty: 1, rate: 0 }]
    });
  };

  const updateItem = (id, field, value) => {
    setInvoiceData({
      ...invoiceData,
      items: invoiceData.items.map(item => item.id === id ? { ...item, [field]: value } : item)
    });
  };

  const removeItem = (id) => {
    if (invoiceData.items.length === 1) return;
    setInvoiceData({
      ...invoiceData,
      items: invoiceData.items.filter(item => item.id !== id)
    });
  };

  const calculateTotals = () => {
    const subtotal = invoiceData.items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.rate)), 0);
    
    // Logic: Bill of Supply, Receipt Voucher (if advance), Non-GST, Export usually no tax shown on face or different treatment
    const noTaxTypes = ['Bill of Supply', 'Non-GST Invoice', 'Proforma Invoice', 'Receipt Voucher', 'Refund Voucher', 'Export Invoice', 'International Invoice'];
    const isTaxable = !noTaxTypes.includes(invoiceData.type);
    
    const taxRate = isTaxable ? 0.18 : 0; 
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;
    return { subtotal, taxAmount, total };
  };

  const { subtotal, taxAmount, total } = calculateTotals();

  const handlePrint = () => {
     window.print();
  };

  const getInvoiceTitle = () => {
      switch(invoiceData.type) {
          case 'Tax Invoice': return 'TAX INVOICE';
          case 'GST Invoice': return 'TAX INVOICE';
          case 'Bill of Supply': return 'BILL OF SUPPLY';
          case 'Receipt Voucher': return 'RECEIPT VOUCHER';
          case 'Refund Voucher': return 'REFUND VOUCHER';
          case 'Revised Invoice': return 'REVISED INVOICE';
          case 'E-Invoice': return 'TAX INVOICE';
          case 'Export Invoice': return 'EXPORT INVOICE';
          case 'International Invoice': return 'INVOICE (INTL)';
          case 'Credit Note': return 'CREDIT NOTE';
          case 'Debit Note': return 'DEBIT NOTE';
          case 'Non-GST Invoice': return 'INVOICE'; 
          case 'Proforma Invoice': return 'PROFORMA INVOICE';
          case 'Self-Invoice': return 'TAX INVOICE (SELF)';
          default: return 'INVOICE';
      }
  };

  const getComplianceNote = () => {
      switch(invoiceData.type) {
          case 'Tax Invoice': 
          case 'GST Invoice':
              return 'Tax Invoice under Section 31 of CGST Act, 2017.';
          case 'Bill of Supply': 
              return 'Bill of Supply under Rule 49. Composition taxable person / Exempt Supply. No tax collected.';
          case 'Receipt Voucher': 
              return 'Receipt Voucher under Rule 50 of CGST Rules, 2017 (Advance Payment Received).';
          case 'Refund Voucher': 
              return 'Refund Voucher under Rule 51 of CGST Rules, 2017 (Refund of Advance).';
          case 'Revised Invoice': 
              return `Revised Invoice under Section 31(3)(a). Original Ref: ${invoiceData.originalRef || 'N/A'}`;
          case 'E-Invoice': 
              return 'IRN generated separately. Compliant with Rule 48(4) of CGST Rules.';
          case 'Export Invoice': 
              return 'Supply meant for Export under Bond/LUT without payment of IGST.';
          case 'International Invoice':
              return 'Export of Services. Invoice for overseas client.';
          case 'Credit Note': 
              return `Credit Note under Section 34 of CGST Act. Original Ref: ${invoiceData.originalRef || 'N/A'}`;
          case 'Debit Note': 
              return `Debit Note under Section 34 of CGST Act. Original Ref: ${invoiceData.originalRef || 'N/A'}`;
          case 'Non-GST Invoice': 
              return 'GST not applicable – supplier not registered under GST.';
          case 'Proforma Invoice': 
              return 'This is a quotation / estimate. Not a tax document.';
          case 'Self-Invoice': 
              return 'Self-Invoice under Section 31(3)(f) (RCM).';
          default: 
              return 'Subject to Pune Jurisdiction.';
      }
  };

  if (!isAuthenticated) {
      return (
          <div className="animate-in fade-in duration-500 pt-32 min-h-screen bg-gray-100 flex items-center justify-center p-4">
              <div className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_#000] w-full max-w-md text-center">
                  <Lock size={48} className="mx-auto mb-6 text-blue-600" />
                  <h2 className="text-2xl font-black uppercase mb-2">Restricted Access</h2>
                  <p className="text-gray-600 mb-6">Enter Super Admin Passcode.</p>
                  <form onSubmit={handleLogin} className="space-y-4">
                      <input 
                          type="password" 
                          placeholder="Passcode" 
                          value={passcode}
                          onChange={(e) => setPasscode(e.target.value)}
                          className="w-full p-3 border-2 border-black focus:outline-none text-center font-bold tracking-widest text-xl"
                          autoFocus
                      />
                      {errorMsg && <p className="text-red-600 font-bold text-sm">{errorMsg}</p>}
                      <button type="submit" className="w-full p-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors">
                          Unlock
                      </button>
                  </form>
              </div>
          </div>
      );
  }

  // --- Admin Dashboard (Authenticated) ---
  return (
    <div className="animate-in fade-in duration-500 pt-32 lg:pt-40 min-h-screen bg-gray-100 p-4 lg:p-8">
       {/* Tool Switcher */}
       <div className="max-w-7xl mx-auto mb-8 flex justify-center gap-4 print:hidden">
            <button 
                onClick={() => setActiveTool('invoice')}
                className={`px-6 py-2 font-bold uppercase tracking-widest border-2 border-black transition-colors ${activeTool === 'invoice' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}
            >
                Invoice Generator
            </button>
            <button 
                onClick={() => setActiveTool('contract')}
                className={`px-6 py-2 font-bold uppercase tracking-widest border-2 border-black transition-colors ${activeTool === 'contract' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'}`}
            >
                Contract Generator
            </button>
       </div>

       {activeTool === 'contract' ? (
           <ContractGeneratorView />
       ) : showLUT ? (
        // LUT View Code ...
        <div className="max-w-4xl mx-auto bg-white border-2 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] relative">
            <button onClick={() => setShowLUT(false)} className="absolute top-6 right-6 text-red-600 font-bold uppercase hover:underline print:hidden flex items-center gap-2">
                <X size={20} /> Close LUT
            </button>
            <div className="text-center mb-8 border-b-2 border-gray-200 pb-6">
                <h1 className="text-2xl font-black uppercase mb-2">Letter of Undertaking (LUT)</h1>
                <p className="font-mono text-gray-500">Form GST RFD-11</p>
            </div>
            <div className="prose max-w-none text-sm font-serif leading-relaxed">
                <p><strong>To</strong><br/>The Jurisdictional GST Officer<br/>[Office Address]</p>
                <p className="font-bold underline mt-4">Subject: Letter of Undertaking for Export of Services without Payment of IGST</p>
                <p className="mt-4">
                    I, <strong>Arun Ammisetty</strong>,<br/>
                    Proprietor of <strong>Arun Ammisetty</strong>,<br/>
                    having GSTIN <strong>{invoiceData.userGstin || '[Your GSTIN]'}</strong>,<br/>
                    hereby submit this Letter of Undertaking in accordance with Section 16 of the IGST Act, 2017 read with Rule 96A of the CGST Rules, 2017.
                </p>
                <h3 className="font-bold text-lg mt-6 mb-2">Declaration</h3>
                <p>I hereby undertake that:</p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li>I shall export services without payment of Integrated Goods and Services Tax (IGST).</li>
                    <li>I shall comply with all provisions of the GST Act and Rules.</li>
                    <li>If the services are not exported within the prescribed time, I shall pay the applicable tax along with interest.</li>
                    <li>I have not been prosecuted for any offence under the GST law or any existing law involving tax evasion exceeding ₹2.5 crore.</li>
                </ol>
                <h3 className="font-bold text-lg mt-6 mb-2">Details</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div><strong>Name of Exporter:</strong> Arun Ammisetty</div>
                    <div><strong>GSTIN:</strong> {invoiceData.userGstin || '[Your GSTIN]'}</div>
                    <div><strong>Address:</strong> Baner, Pune, Maharashtra, 411045</div>
                    <div><strong>Financial Year:</strong> 2025–26</div>
                    <div><strong>Nature of Supply:</strong> Export of Services</div>
                </div>
                <h3 className="font-bold text-lg mt-6 mb-2">Verification</h3>
                <p>I hereby verify that the information given above is true and correct to the best of my knowledge and belief.</p>
                
                <div className="mt-12 grid grid-cols-2 gap-8">
                        <div>
                        <p><strong>Place:</strong> Pune</p>
                        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                        <div className="h-20 flex justify-end">
                            <img src="/assets/sign.png" alt="Signature" className="h-full object-contain" />
                        </div>
                        <p className="border-t border-black inline-block px-4 mt-2">Signature</p>
                        <p className="font-bold mt-1">Arun Ammisetty</p>
                        <p className="text-xs">Proprietor / Authorized Signatory</p>
                        </div>
                </div>
            </div>
            <div className="mt-8 pt-4 border-t-2 border-black print:hidden">
                <button onClick={() => window.print()} className="bg-blue-600 text-white px-6 py-3 font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-colors">
                    <Printer size={20} /> Print LUT
                </button>
            </div>
        </div>
       ) : (
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Invoice Config and Preview Code (Reused from existing) */}
          
          {/* Configuration Panel */}
          <div className="lg:col-span-4 bg-white border-2 border-black p-6 h-fit print:hidden">
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black uppercase flex items-center gap-2">
                  <PenTool size={24} /> Configuration
                </h2>
                <button onClick={() => setShowLUT(true)} className="text-xs text-blue-600 font-bold hover:underline flex items-center gap-1">
                    <FileCheck size={14} /> Open LUT
                </button>
             </div>
             
             <div className="space-y-4">
               {/* New GST Status & Client Type Selectors */}
               <div className="grid grid-cols-2 gap-4 bg-gray-50 p-2 border border-gray-200">
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-1">My Status</label>
                        <select 
                            value={invoiceData.gstStatus}
                            onChange={(e) => setInvoiceData({...invoiceData, gstStatus: e.target.value})}
                            className="w-full p-1 border border-gray-300 text-xs font-bold"
                        >
                            <option value="Registered">Registered</option>
                            <option value="Unregistered">Unregistered</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-1">Client Loc</label>
                        <select 
                            value={invoiceData.clientType}
                            onChange={(e) => setInvoiceData({...invoiceData, clientType: e.target.value})}
                            className="w-full p-1 border border-gray-300 text-xs font-bold"
                        >
                            <option value="Indian">Indian</option>
                            <option value="International">International</option>
                        </select>
                    </div>
               </div>

               <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1">Document Type</label>
                  <select 
                      value={invoiceData.type}
                      onChange={(e) => setInvoiceData({...invoiceData, type: e.target.value})}
                      className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-bold"
                  >
                      <option>Tax Invoice</option>
                      <option>GST Invoice</option>
                      <option>Bill of Supply</option>
                      <option>Receipt Voucher</option>
                      <option>Refund Voucher</option>
                      <option>Revised Invoice</option>
                      <option>E-Invoice</option>
                      <option>Export Invoice</option>
                      <option>International Invoice</option>
                      <option>Credit Note</option>
                      <option>Debit Note</option>
                      <option>Non-GST Invoice</option>
                      <option>Proforma Invoice</option>
                      <option>Self-Invoice</option>
                  </select>
               </div>

               <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1">Currency</label>
                  <select 
                      value={invoiceData.currency}
                      onChange={(e) => setInvoiceData({...invoiceData, currency: e.target.value})}
                      className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-bold"
                  >
                      <option value="INR">INR (₹)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                  </select>
               </div>

               {['Credit Note', 'Debit Note', 'Revised Invoice', 'Refund Voucher'].includes(invoiceData.type) && (
                   <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1">Original Invoice Ref</label>
                      <input 
                          type="text" 
                          placeholder="e.g., INV-2025-001"
                          value={invoiceData.originalRef}
                          onChange={(e) => setInvoiceData({...invoiceData, originalRef: e.target.value})}
                          className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-mono"
                      />
                   </div>
               )}

               <div>
                 <label className="block text-xs font-bold uppercase tracking-widest mb-1">Document Number</label>
                 <input 
                    type="text" 
                    value={invoiceData.invoiceNo}
                    onChange={(e) => setInvoiceData({...invoiceData, invoiceNo: e.target.value})}
                    className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-mono"
                 />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1">Date</label>
                    <input 
                        type="date" 
                        value={invoiceData.date}
                        onChange={(e) => setInvoiceData({...invoiceData, date: e.target.value})}
                        className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1">Due Date</label>
                    <input 
                        type="date" 
                        value={invoiceData.dueDate}
                        onChange={(e) => setInvoiceData({...invoiceData, dueDate: e.target.value})}
                        className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-mono"
                    />
                  </div>
               </div>

               <div>
                 <label className="block text-xs font-bold uppercase tracking-widest mb-1">My GSTIN (Optional)</label>
                 <input 
                    type="text" 
                    placeholder="27ABCDE1234F1Z5"
                    value={invoiceData.userGstin}
                    onChange={(e) => setInvoiceData({...invoiceData, userGstin: e.target.value})}
                    className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-mono uppercase"
                 />
               </div>

               <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-bold mb-2">Client Details</h3>
                  <input 
                      placeholder="Client Name"
                      value={invoiceData.clientName}
                      onChange={(e) => setInvoiceData({...invoiceData, clientName: e.target.value})}
                      className="w-full p-2 mb-2 border-2 border-gray-300 focus:border-black outline-none"
                  />
                  <textarea 
                      placeholder="Client Address"
                      value={invoiceData.clientAddress}
                      onChange={(e) => setInvoiceData({...invoiceData, clientAddress: e.target.value})}
                      className="w-full p-2 mb-2 border-2 border-gray-300 focus:border-black outline-none"
                      rows="2"
                  />
                  <input 
                      placeholder="Client GSTIN / Tax ID (Optional)"
                      value={invoiceData.clientGstin}
                      onChange={(e) => setInvoiceData({...invoiceData, clientGstin: e.target.value})}
                      className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-mono uppercase"
                  />
               </div>

               <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                     <h3 className="font-bold">Line Items</h3>
                     <button onClick={addItem} className="text-xs bg-black text-white px-2 py-1 font-bold uppercase hover:bg-blue-600 transition-colors">Add Item</button>
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {invoiceData.items.map((item, idx) => (
                      <div key={item.id} className="p-2 bg-gray-50 border border-gray-200 text-sm">
                         <div className="flex justify-between mb-1">
                            <span className="font-bold text-xs text-gray-500">Item #{idx + 1}</span>
                            <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700"><Trash2 size={14}/></button>
                         </div>
                         <input 
                            placeholder="Description"
                            value={item.description}
                            onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                            className="w-full p-1 border border-gray-300 mb-1"
                         />
                         <div className="grid grid-cols-3 gap-2">
                            <input 
                              placeholder="HSN/SAC"
                              value={item.hsn}
                              onChange={(e) => updateItem(item.id, 'hsn', e.target.value)}
                              className="w-full p-1 border border-gray-300"
                            />
                            <input 
                              type="number"
                              placeholder="Qty"
                              value={item.qty}
                              onChange={(e) => updateItem(item.id, 'qty', e.target.value)}
                              className="w-full p-1 border border-gray-300"
                            />
                            <input 
                              type="number"
                              placeholder="Rate"
                              value={item.rate}
                              onChange={(e) => updateItem(item.id, 'rate', e.target.value)}
                              className="w-full p-1 border border-gray-300"
                            />
                         </div>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="flex items-center gap-2 pt-4">
                  <input 
                    type="checkbox" 
                    id="interState"
                    checked={invoiceData.isInterState}
                    onChange={(e) => setInvoiceData({...invoiceData, isInterState: e.target.checked})}
                    className="w-4 h-4 accent-black"
                  />
                  <label htmlFor="interState" className="text-sm font-bold">Inter-State Transaction (IGST)</label>
               </div>

               <div className="flex items-center gap-2 pt-2">
                  <input 
                    type="checkbox" 
                    id="isPaid"
                    checked={invoiceData.isPaid}
                    onChange={(e) => setInvoiceData({...invoiceData, isPaid: e.target.checked})}
                    className="w-4 h-4 accent-black"
                  />
                  <label htmlFor="isPaid" className="text-sm font-bold text-green-600">Mark as PAID</label>
               </div>

               <button onClick={handlePrint} className="w-full py-3 bg-blue-600 text-white font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 mt-4">
                  <Printer size={20} /> Print / Save PDF
               </button>
             </div>
          </div>

          {/* Invoice Document ID for printing */}
          <div id="invoice-print-area" className="lg:col-span-8 bg-white border-2 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] relative">
              
              {/* PAID Stamp */}
              {invoiceData.isPaid && (
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-green-600 text-green-600 font-black text-6xl px-4 py-2 rotate-[-15deg] opacity-60 pointer-events-none select-none z-10 mix-blend-multiply flex flex-col items-center">
                      <span>PAID</span>
                      <img src="image_e8ada1.png" alt="Signed" className="h-12 w-auto mt-[-10px]" />
                  </div>
              )}

              {/* Header */}
              <div className="flex justify-between items-start border-b-2 border-black pb-4 mb-4 pt-4 relative">
                 <div className="absolute top-0 left-0 -mt-2">
                     <img src="/assets/logo_aa.png" alt="Arun Ammisetty" className="h-24 w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
                 </div>
                 <div className="mt-20 w-full flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1">{getInvoiceTitle()}</h1>
                        <p className="font-mono text-gray-500 text-sm">#{invoiceData.invoiceNo}</p>
                        {invoiceData.originalRef && (
                            <p className="font-mono text-gray-500 text-xs mt-1">Orig. Ref: {invoiceData.originalRef}</p>
                        )}
                    </div>
                    <div className="text-right">
                        <h2 className="font-bold text-xl uppercase">Arun Ammisetty</h2>
                        <p className="text-gray-600 text-sm">Freelance Developer & Security Consultant</p>
                        <p className="text-gray-600 text-sm">Baner, Pune, Maharashtra, 411045</p>
                        <p className="text-gray-600 text-sm font-bold mt-1">PAN: DEWPA4187R</p>
                        {invoiceData.userGstin && <p className="text-gray-600 text-sm font-bold mt-1">GSTIN: {invoiceData.userGstin}</p>}
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                 <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Billed To</p>
                    <h3 className="font-bold text-lg">{invoiceData.clientName || 'Client Name'}</h3>
                    <p className="text-gray-600 whitespace-pre-wrap">{invoiceData.clientAddress || 'Client Address'}</p>
                    {invoiceData.clientGstin && <p className="text-sm font-mono mt-2">GSTIN/Tax ID: {invoiceData.clientGstin}</p>}
                 </div>
                 <div className="text-right">
                    <div className="mb-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Date Issued</p>
                      <p className="font-bold">{invoiceData.date}</p>
                    </div>
                    {invoiceData.dueDate && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Due Date</p>
                        <p className="font-bold">{invoiceData.dueDate}</p>
                      </div>
                    )}
                 </div>
              </div>

              <div className="mb-8">
                 <div className="grid grid-cols-12 border-b-2 border-black pb-2 mb-4 font-bold text-xs uppercase tracking-widest">
                    <div className="col-span-1">#</div>
                    <div className="col-span-5">Description</div>
                    <div className="col-span-2 text-center">HSN/SAC</div>
                    <div className="col-span-1 text-center">Qty</div>
                    <div className="col-span-1 text-right">Rate</div>
                    <div className="col-span-2 text-right">Amount</div>
                 </div>
                 
                 <div className="space-y-4">
                   {invoiceData.items.map((item, idx) => (
                     <div key={item.id} className="grid grid-cols-12 text-sm items-center">
                        <div className="col-span-1 font-mono text-gray-500">{idx + 1}</div>
                        <div className="col-span-5 font-medium">{item.description || 'Item Description'}</div>
                        <div className="col-span-2 text-center font-mono text-gray-500">{item.hsn}</div>
                        <div className="col-span-1 text-center">{item.qty}</div>
                        <div className="col-span-1 text-right font-mono">{Number(item.rate).toLocaleString('en-IN')}</div>
                        <div className="col-span-2 text-right font-bold font-mono">{(item.qty * item.rate).toLocaleString('en-IN')}</div>
                     </div>
                   ))}
                 </div>
              </div>

              <div className="flex justify-end border-t-2 border-black pt-6 mb-8">
                 <div className="w-64 space-y-3">
                    <div className="flex justify-between text-sm">
                       <span className="font-bold text-gray-500">Subtotal</span>
                       <span className="font-mono">{invoiceData.currency === 'USD' ? '$' : invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'GBP' ? '£' : '₹'}{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    
                    {/* isTaxable logic should be passed from calculateTotals for display */}
                     {/* Show GST breakdown only if invoice type suggests tax AND currency is INR */}
                     {/* Simplified check for now based on previous logic within view */}
                     {!['Bill of Supply', 'Non-GST Invoice', 'Proforma Invoice', 'Receipt Voucher', 'Refund Voucher', 'Export Invoice', 'International Invoice'].includes(invoiceData.type) && invoiceData.currency === 'INR' && invoiceData.gstStatus === 'Registered' && (
                       <>
                         <div className="flex justify-between text-sm">
                            <span className="font-bold text-gray-500">{invoiceData.isInterState ? 'IGST (18%)' : 'CGST (9%)'}</span>
                            <span className="font-mono">₹{invoiceData.isInterState ? taxAmount.toLocaleString('en-IN') : (taxAmount/2).toLocaleString('en-IN')}</span>
                         </div>
                         {!invoiceData.isInterState && (
                            <div className="flex justify-between text-sm">
                                <span className="font-bold text-gray-500">SGST (9%)</span>
                                <span className="font-mono">₹{(taxAmount/2).toLocaleString('en-IN')}</span>
                            </div>
                         )}
                       </>
                    )}


                    <div className="flex justify-between text-xl font-black border-t-2 border-black pt-3">
                       <span>Total</span>
                       <span>{invoiceData.currency === 'USD' ? '$' : invoiceData.currency === 'EUR' ? '€' : invoiceData.currency === 'GBP' ? '£' : '₹'}{total.toLocaleString('en-IN')}</span>
                    </div>
                    <p className="text-[10px] text-right text-gray-400 uppercase tracking-widest">Amount in {invoiceData.currency}</p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6 border-t-2 border-gray-200">
                 <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Bank Details</h4>
                    <div className="text-sm space-y-1 text-gray-600">
                      <p><span className="font-bold">Bank:</span> HDFC Bank</p>
                      <p><span className="font-bold">A/C Name:</span> Arun Ammisetty</p>
                      <p><span className="font-bold">A/C No:</span> 50100234567890</p>
                      <p><span className="font-bold">IFSC:</span> HDFC0000123</p>
                      <p><span className="font-bold">Branch:</span> Baner, Pune</p>
                      
                      {invoiceData.clientType === 'Indian' && invoiceData.currency === 'INR' && (
                          <div className="mt-4">
                             <p className="mb-2"><span className="font-bold">UPI ID:</span> 918329004424@waicici</p>
                             <div className="flex gap-4 mt-2">
                                <div className="text-center">
                                    <img src="/assets/p1.png" alt="PhonePe QR" className="w-20 h-20 border border-gray-300 object-contain p-1" onError={(e) => e.target.style.display = 'none'} />
                                    <p className="text-[10px] mt-1 font-bold">PhonePe</p>
                                </div>
                                <div className="text-center">
                                    <img src="/assets/p2.png" alt="WhatsApp QR" className="w-20 h-20 border border-gray-300 object-contain p-1" onError={(e) => e.target.style.display = 'none'} />
                                    <p className="text-[10px] mt-1 font-bold">WhatsApp</p>
                                </div>
                             </div>
                          </div>
                      )}

                      {invoiceData.clientType === 'International' && (
                          <p className="mt-2"><span className="font-bold">SWIFT Code:</span> HDFCINBBXXX</p>
                      )}
                    </div>
                 </div>
                 <div className="text-right flex flex-col justify-end">
                    <div className="h-24 mb-2 flex items-end justify-end">
                       <img src="/assets/sign.png" alt="Authorized Signature" className="h-full w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest">Authorized Signatory</p>
                    <p className="text-xs font-bold uppercase tracking-widest mt-1">Arun Ammisetty</p>
                 </div>
              </div>

              <div className="mt-8 text-center">
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest bg-gray-100 p-2 rounded border border-gray-200 inline-block">
                   {getComplianceNote()}
                 </p>
                 <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
                   Subject to Pune Jurisdiction
                 </p>
              </div>

          </div>
       </div>
       )}

       {/* Print Specific Styles */}
       <style>{`
          @media print {
            body * {
              visibility: hidden;
            }
            #invoice-print-area, #invoice-print-area * {
              visibility: visible;
            }
            #contract-print-area, #contract-print-area * {
              visibility: visible;
            }
            /* If printing invoice, hide contract area and vice versa. But since only one is rendered at a time, just hiding parent body works, except we need to target the currently visible print area */
            /* We can use specific IDs for each area */
            #invoice-print-area {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              margin: 0;
              padding: 20px;
              border: none;
              box-shadow: none;
              background: white;
            }
            #contract-print-area {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              margin: 0;
              padding: 40px;
              border: none;
              box-shadow: none;
              background: white;
            }
            @page { margin: 0; size: auto; }
          }
          .font-script { font-family: 'Courier New', cursive; } 
       `}</style>
    </div>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [activeBlogPost, setActiveBlogPost] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isInvoiceAuthenticated, setIsInvoiceAuthenticated] = useState(false);
  const logoPressTimeoutRef = useRef(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, activeService, activeBlogPost, activeProject]);

  // Back to top visibility toggle
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (view) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    if (view === 'services') setActiveService(null);
    if (view === 'blog') setActiveBlogPost(null);
    if (view === 'projects') setActiveProject(null);
  };

  const openService = (service) => {
    setActiveService(service);
    setCurrentView('service-detail');
    setIsMenuOpen(false);
  };

  const openBlogPost = (post) => {
    setActiveBlogPost(post);
    setCurrentView('blog-detail');
  };

  const openProject = (project) => {
    setActiveProject(project);
    setCurrentView('project-detail');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Smart Access Logic: Long Press (3 seconds) on Logo
  const handleLogoMouseDown = () => {
      logoPressTimeoutRef.current = setTimeout(() => {
          navigate('invoice');
          logoPressTimeoutRef.current = null; // Flag that we triggered
      }, 3000);
  };

  const handleLogoMouseUp = () => {
      if (logoPressTimeoutRef.current) {
          clearTimeout(logoPressTimeoutRef.current);
          navigate('home'); // Only go home if timer didn't fire (i.e., short click)
      }
  };


  // --- Data & Content ---
  const colors = ['bg-yellow-50', 'bg-green-50', 'bg-purple-50', 'bg-pink-50', 'bg-orange-50', 'bg-blue-50'];
  
  const services = [
    {
      id: 'web-dev',
      title: 'Web Dev & Design',
      icon: <Globe size={40} />,
      shortDesc: 'Custom websites, React apps, and responsive UI/UX design.',
      fullDesc: 'I build high-performance websites and web applications tailored to your business needs. From simple landing pages to complex MERN stack applications.',
      features: ['React.js / Next.js Development', 'WordPress / Shopify Setup', 'UI/UX Design (Figma)', 'Performance Optimization'],
      pricing: [
        { title: 'Landing Page', price: '₹8,000 - ₹15,000', detail: 'Single page, responsive, contact form.' },
        { title: 'Business Website', price: '₹20,000 - ₹40,000', detail: '5-10 pages, CMS integration, SEO basic.' },
        { title: 'Custom Web App', price: '₹50,000+', detail: 'React/Node.js, Database, Auth, API integration.' }
      ]
    },
    {
      id: 'cyber',
      title: 'Cyber Security',
      icon: <Shield size={40} />,
      shortDesc: 'VAPT, security audits, and risk assessment for your infrastructure.',
      fullDesc: 'Protect your digital assets with comprehensive security testing. I identify vulnerabilities before hackers do, ensuring your data remains safe.',
      features: ['Vulnerability Assessment', 'Penetration Testing (Web/Network)', 'Security Code Review', 'Compliance Consulting'],
      pricing: [
        { title: 'Basic Audit', price: '₹10,000', detail: 'Automated scan & manual review of top 10 OWASP.' },
        { title: 'Standard VAPT', price: '₹25,000', detail: 'Deep dive manual testing, detailed report & remediation.' },
        { title: 'Enterprise Sec', price: 'Custom Quote', detail: 'Full infrastructure audit & ongoing monitoring.' }
      ]
    },
    {
      id: 'it-support',
      title: 'IT & Helpdesk',
      icon: <Monitor size={40} />,
      shortDesc: 'Remote support, system administration, and hardware consultation.',
      fullDesc: 'Reliable IT support to keep your business running smoothly. From software troubleshooting to network setup and hardware procurement advice.',
      features: ['Remote Desktop Support', 'Software Installation & Troubleshooting', 'Network Configuration', 'Data Recovery Assistance'],
      pricing: [
        { title: 'Hourly Support', price: '₹800 / hour', detail: 'Remote assistance for immediate issues.' },
        { title: 'Monthly AMC', price: '₹5,000 / month', detail: 'Up to 5 workstations, unlimited remote support.' },
        { title: 'System Setup', price: '₹2,500 / system', detail: 'OS installation, driver setup, essential software.' }
      ]
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: <Megaphone size={40} />,
      shortDesc: 'SEO, Social Media Management, and Google Ads campaigns.',
      fullDesc: 'Grow your brand visibility online. I use data-driven strategies to increase traffic, generate leads, and boost your conversion rates.',
      features: ['Search Engine Optimization (SEO)', 'Social Media Management', 'PPC (Google/Meta Ads)', 'Email Marketing'],
      pricing: [
        { title: 'SEO Starter', price: '₹12,000 / month', detail: 'On-page optimization, keyword research, monthly reporting.' },
        { title: 'SMM Package', price: '₹15,000 / month', detail: '12 posts/month, community management, basic graphics.' },
        { title: 'Ads Management', price: '15% of Ad Spend', detail: 'Campaign setup, A/B testing, ROI optimization (Min ₹5k fee).' }
      ]
    },
    {
      id: 'content',
      title: 'Content Creation',
      icon: <PenTool size={40} />,
      shortDesc: 'Technical writing, blogs, copywriting, and video scripts.',
      fullDesc: 'Content is king. I craft compelling narratives that resonate with your audience, from technical documentation to engaging social media copy.',
      features: ['Blog Writing (Tech/Biz)', 'Website Copywriting', 'Technical Documentation', 'Video Scripting'],
      pricing: [
        { title: 'Blog Post', price: '₹1.50 / word', detail: 'SEO-optimized, researched content (approx ₹1500/1000 words).' },
        { title: 'Web Copy', price: '₹5,000 / page', detail: 'High-conversion landing page copy.' },
        { title: 'Social Calendar', price: '₹8,000 / month', detail: 'Content strategy & captions for 1 month.' }
      ]
    },
    {
      id: 'business',
      title: 'Business Consulting',
      icon: <Briefcase size={40} />,
      shortDesc: 'IT strategy, digital transformation, and workflow automation.',
      fullDesc: 'Streamline your operations with smart technology. I help businesses digitize their workflows and choose the right tech stack for growth.',
      features: ['Digital Transformation Strategy', 'Workflow Automation', 'CRM/ERP Implementation', 'Tech Stack Advisory'],
      pricing: [
        { title: 'Consultation', price: '₹2,500 / hour', detail: 'Video call strategy session & roadmap.' },
        { title: 'Project Basis', price: 'Custom Quote', detail: 'End-to-end implementation oversight.' }
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "AnyAstro Techno Pvt Ltd",
      category: "Web Platform",
      client: "AnyAstro Techno Pvt Ltd",
      year: "2025",
      description: "A comprehensive web platform designed to connect users with astrological services seamlessly. The platform features real-time consultations, secure payment gateways, and an intuitive user dashboard.",
      techStack: ["React.js", "Node.js", "MongoDB", "Razorpay Integration", "WebRTC"],
      link: "#",
      imageColor: "bg-purple-100"
    },
    {
      id: 2,
      title: "SecureVault VAPT",
      category: "Cyber Security",
      client: "FinTech Startup",
      year: "2024",
      description: "Conducted a thorough Vulnerability Assessment and Penetration Testing (VAPT) audit for a rising FinTech application. Identified critical IDOR vulnerabilities and assisted the dev team in patching them.",
      techStack: ["Burp Suite", "OWASP ZAP", "Python Scripting", "Manual Testing"],
      link: "#",
      imageColor: "bg-blue-100"
    },
    {
      id: 3,
      title: "GreenEarth E-Commerce",
      category: "Web Development",
      client: "Sustainable Goods Co.",
      year: "2024",
      description: "Developed a Shopify-based e-commerce store with custom liquid theme modifications. Optimized for speed and SEO, resulting in a 40% increase in organic traffic within 3 months.",
      techStack: ["Shopify Liquid", "JavaScript", "Tailwind CSS", "SEO Optimization"],
      link: "#",
      imageColor: "bg-green-100"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The State of Cybersecurity in 2025",
      excerpt: "Why small businesses are becoming the primary target for ransomware attacks and how to protect yourself.",
      date: "Jan 10, 2026",
      category: "Security",
      content: "As we move further into 2026, the cybersecurity landscape continues to evolve rapidly. While enterprise-level attacks often make headlines, the reality is that small and medium-sized businesses (SMBs) are increasingly becoming the primary targets for cybercriminals. This shift is largely due to the perception—often correct—that smaller organizations have fewer defenses in place.\n\nKey trends we're observing include:\n\n1. **AI-Driven Phishing:** Attackers are using generative AI to create highly convincing phishing emails that bypass traditional filters.\n2. **Ransomware-as-a-Service (RaaS):** The barrier to entry for cybercrime has lowered, allowing less technical criminals to launch sophisticated attacks.\n3. **Supply Chain Vulnerabilities:** Attackers are compromising software vendors to gain access to their customers' networks.\n\nTo mitigate these risks, businesses must adopt a 'security-first' mindset. This involves regular employee training, implementing multi-factor authentication (MFA) across all accounts, and conducting periodic vulnerability assessments."
    },
    {
      id: 2,
      title: "React vs. Next.js: Choosing the Right Framework",
      excerpt: "A comprehensive guide to deciding between a client-side SPA and a server-side rendered application for your next project.",
      date: "Dec 28, 2025",
      category: "Development",
      content: "The debate between using raw React and Next.js is a common one for modern web developers. While React provides the flexibility of a library, Next.js offers a robust framework with built-in features for routing, data fetching, and rendering.\n\n**When to choose React (Vite):**\n- You're building a highly interactive dashboard or admin panel.\n- SEO is not a primary concern (though it can be managed).\n- You want complete control over your routing and build configuration.\n\n**When to choose Next.js:**\n- You're building a public-facing marketing site, e-commerce store, or blog where SEO is critical.\n- You need server-side rendering (SSR) or static site generation (SSG) for performance.\n- You want a 'batteries-included' experience with API routes and image optimization out of the box.\n\nUltimately, the choice depends on your specific project requirements. For most public websites in 2026, Next.js provides a significant advantage in terms of performance and discoverability."
    },
    {
      id: 3,
      title: "Optimizing Web Performance for Indian Markets",
      excerpt: "Strategies for ensuring your website loads instantly on 4G networks and budget devices.",
      date: "Dec 15, 2025",
      category: "Performance",
      content: "India's digital landscape is mobile-first. With millions of users accessing the web via 4G networks on mid-range Android devices, performance optimization isn't just a luxury—it's a necessity. A slow website directly correlates to higher bounce rates and lost revenue.\n\n**Key Strategies:**\n\n1. **Image Optimization:** Use modern formats like WebP or AVIF. Implement lazy loading to ensure images are only downloaded when they enter the viewport.\n2. **Code Splitting:** Break your JavaScript bundles into smaller chunks so the browser only loads the code needed for the current page.\n3. **CDN Usage:** Utilize a Content Delivery Network (CDN) to serve assets from servers geographically closer to your users.\n4. **Font Loading:** Use `font-display: swap` to ensure text is visible immediately, even if the custom font hasn't loaded yet.\n\nBy focusing on these core vitals, you can ensure your digital presence is accessible and effective for the vast Indian user base."
    }
  ];

  // --- Header Component Definition ---
  const Header = () => (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black h-20 flex items-center justify-between px-6 lg:px-12 print:hidden">
      <div 
        onMouseDown={handleLogoMouseDown} 
        onMouseUp={handleLogoMouseUp} 
        onTouchStart={handleLogoMouseDown} 
        onTouchEnd={handleLogoMouseUp}
        className="flex flex-col cursor-pointer group select-none"
      >
        <h1 className="text-2xl font-black uppercase leading-none tracking-tighter group-hover:opacity-70 transition-opacity">
          Arun <span className="text-blue-600">/</span> Ammisetty
        </h1>
      </div>

      <div className="hidden lg:flex gap-8 font-bold text-sm uppercase tracking-widest">
        <button onClick={() => navigate('home')} className={`hover:text-blue-600 ${currentView === 'home' ? 'text-blue-600' : ''}`}>Home</button>
        <button onClick={() => navigate('about')} className={`hover:text-blue-600 ${currentView === 'about' ? 'text-blue-600' : ''}`}>About</button>
        <button onClick={() => navigate('services')} className={`hover:text-blue-600 ${currentView === 'services' ? 'text-blue-600' : ''}`}>Services</button>
        <button onClick={() => navigate('projects')} className={`hover:text-blue-600 ${currentView === 'projects' ? 'text-blue-600' : ''}`}>Projects</button>
        <button onClick={() => navigate('blog')} className={`hover:text-blue-600 ${currentView === 'blog' ? 'text-blue-600' : ''}`}>Blog</button>
        {/* Hidden Invoice Button */}
        {/* <button onClick={() => navigate('invoice')} className={`hover:text-blue-600 ${currentView === 'invoice' ? 'text-blue-600' : ''}`}>Invoice</button> */}
        <button onClick={() => navigate('contact')} className={`px-6 py-2 bg-black text-white hover:bg-blue-600 hover:text-black border-2 border-black transition-all ${currentView === 'contact' ? 'bg-blue-600 text-black' : ''}`}>Contact</button>
      </div>

      {/* 2-Line Hamburger Menu */}
      <button className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 group" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
           <X size={32} />
        ) : (
          <>
            <span className="block w-full h-1 bg-black group-hover:bg-blue-600 transition-colors"></span>
            <span className="block w-full h-1 bg-black group-hover:bg-blue-600 transition-colors"></span>
          </>
        )}
      </button>

      {/* Mobile Menu - Scrollable */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white border-t-2 border-black flex flex-col overflow-y-auto">
          <div className="p-8 gap-6 flex flex-col font-black text-3xl uppercase tracking-widest pb-32">
            <button onClick={() => navigate('home')} className="text-left hover:text-blue-600">Home</button>
            <button onClick={() => navigate('about')} className="text-left hover:text-blue-600">About</button>
            <button onClick={() => navigate('services')} className="text-left hover:text-blue-600">Services</button>
            
            {/* Sub-menu items for services in mobile */}
            <div className="pl-6 flex flex-col gap-4 text-xl text-gray-500 border-l-4 border-gray-200">
              {services.map(service => (
                <button key={service.id} onClick={() => openService(service)} className="text-left hover:text-blue-600 font-bold">
                  {service.title}
                </button>
              ))}
            </div>

            <button onClick={() => navigate('projects')} className="text-left hover:text-blue-600">Projects</button>
            <button onClick={() => navigate('blog')} className="text-left hover:text-blue-600">Blog</button>
            {/* Hidden from mobile menu */}
            <div className="h-px bg-gray-200 w-full my-2"></div>
            <button onClick={() => navigate('privacy')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Privacy Policy</button>
            <button onClick={() => navigate('terms')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Terms of Service</button>
            <button onClick={() => navigate('disclaimer')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Disclaimer</button>
            <button onClick={() => navigate('cookie-policy')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Cookie Policy</button>
            <button onClick={() => navigate('contact')} className="text-left hover:text-blue-600 text-blue-600 mt-4">Contact</button>
          </div>
        </div>
      )}
    </header>
  );

  const HomeView = () => (
    <div className="animate-in fade-in duration-500 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Hero */}
        <div className="flex flex-col justify-center p-8 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white relative overflow-hidden">
           {/* Abstract Decor */}
           <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-dashed border-gray-300 animate-spin-slow opacity-50 pointer-events-none"></div>
           
           <h2 className="font-bold text-lg mb-4 text-blue-600 uppercase tracking-widest">Multi-Disciplinary Professional</h2>
           {/* UPDATED: text-5xl for mobile, text-6xl for tablet, text-8xl for desktop */}
           <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter break-words">
           BUILD.<br />SECURE.<br /><span className="text-blue-600">GROW.</span>
           </h1>
           <p className="text-xl text-gray-600 max-w-md mb-10 font-medium leading-relaxed">
             I help businesses build robust web solutions, secure their infrastructure, and grow their digital presence.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             {/* UPDATED: Added justify-center to center content in mobile view */}
             <button onClick={() => navigate('services')} className="px-8 py-4 bg-black text-white text-lg font-bold uppercase tracking-widest border-2 border-black hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3">
               View Services <ArrowRight size={20} />
             </button>
             {/* UPDATED: Added justify-center to center content in mobile view */}
             <button onClick={() => navigate('contact')} className="px-8 py-4 bg-white text-black text-lg font-bold uppercase tracking-widest border-2 border-black hover:bg-blue-50 transition-all flex items-center justify-center">
               Get a Quote
             </button>
           </div>
        </div>

        {/* Right Visual */}
        <div className="bg-green-50 flex items-center justify-center p-12 pattern-grid">
          <div className="w-full max-w-md bg-white border-2 border-black p-8 shadow-[12px_12px_0px_0px_#000000] hover:shadow-[16px_16px_0px_0px_#2563EB] transition-all duration-300">
             <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center border-2 border-black text-white">
                  <span className="font-black text-2xl">AA</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase">Arun Ammisetty</h3>
                  <p className="text-sm text-gray-500 font-mono">Full Stack & Security</p>
                </div>
             </div>
             <div className="space-y-4 font-mono text-sm">
               <div className="flex justify-between items-center bg-gray-100 p-3 border-2 border-black">
                 <span><Globe size={16} className="inline mr-2"/> Web Projects</span>
                 <span className="font-bold text-blue-600">50+</span>
               </div>
               <div className="flex justify-between items-center bg-gray-100 p-3 border-2 border-black">
                 <span><Shield size={16} className="inline mr-2"/> Vulnerabilities Found</span>
                 <span className="font-bold text-blue-600">200+</span>
               </div>
               <div className="flex justify-between items-center bg-gray-100 p-3 border-2 border-black">
                 <span><Check size={16} className="inline mr-2"/> Client Satisfaction</span>
                 <span className="font-bold text-blue-600">100%</span>
               </div>
             </div>
             <div className="mt-6 pt-4 border-t-2 border-black text-center">
               <p className="font-bold text-xs uppercase tracking-widest text-gray-400">Available for Freelance</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutView = () => (
    <div className="animate-in slide-in-from-bottom-4 duration-500 pt-20 min-h-screen flex flex-col">
       <div className="bg-blue-600 text-white p-8 lg:p-16 border-b-2 border-black">
         <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4">Who is Arun?</h1>
         <p className="text-xl lg:text-2xl max-w-3xl font-light">A tech enthusiast bridging the gap between development, security, and business strategy.</p>
       </div>
       <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white">
            <div className="mb-12 p-6 bg-yellow-50 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2">
                    <Shield className="text-blue-600" /> Current Role
                </h4>
                <p className="text-lg font-bold">Founder & Chief of Operations</p>
                <p className="text-gray-600">Vanguard / Cyber</p>
                <p className="text-sm mt-2 text-gray-500">Leading red teaming operations and ethical hacking initiatives.</p>
                <a href="https://go.ly/vc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-blue-600 font-bold hover:underline uppercase text-sm tracking-widest">
                    Visit Vanguard / Cyber <ExternalLink size={16} />
                </a>
            </div>

            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-600 inline-block"></span> Biography
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a freelancer and consultant based in India, specializing in holistic digital solutions. 
              My journey started with code, but my curiosity led me into the world of cyber security and digital marketing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I don't just "make websites." I build secure, optimized, and market-ready digital assets. 
              Whether you are a startup needing a full launch kit or an enterprise needing a security audit, 
              I bring technical expertise with a business-first mindset.
            </p>
            <div className="flex gap-4">
               <a href="#" className="px-6 py-3 border-2 border-black bg-yellow-100 hover:bg-black hover:text-white font-bold transition-colors flex items-center gap-2">
                 <Download size={18} /> Download CV
               </a>
            </div>
          </div>
          <div className="p-8 lg:p-16 bg-purple-50">
             <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
               <span className="w-4 h-4 bg-blue-600 inline-block"></span> Tech Stack
             </h3>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['React.js', 'Node.js', 'Python', 'Kali Linux', 'Burp Suite', 'WordPress', 'Figma', 'Google Ads', 'SEO Tools'].map((tech) => (
                  <div key={tech} className="p-4 bg-white border-2 border-black text-center font-bold shadow-[4px_4px_0px_0px_#000000] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all cursor-default">
                    {tech}
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );

  const ServicesView = () => (
    <div className="animate-in zoom-in-95 duration-300 pt-20">
      <div className="p-8 lg:p-12 text-center border-b-2 border-black bg-gray-50">
         <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">My Services</h2>
         <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions. Click on a card to view detailed pricing and deliverables.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            onClick={() => openService(service)}
            className={`group p-8 lg:p-12 border-b-2 border-black cursor-pointer hover:bg-white transition-colors ${colors[index % colors.length]} ${index % 3 !== 2 ? 'lg:border-r-2' : ''} ${index % 2 === 0 ? 'md:border-r-2 lg:border-r-0' : ''}`}
          >
            <div className="mb-6 text-black group-hover:text-blue-600 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-black uppercase mb-4 group-hover:underline decoration-blue-600 decoration-4 underline-offset-4">{service.title}</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">
              {service.shortDesc}
            </p>
            <div className="flex items-center text-sm font-bold uppercase tracking-widest gap-2">
              View Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectsView = () => (
    <div className="animate-in fade-in duration-500 pt-20">
      <div className="p-8 lg:p-16 border-b-2 border-black bg-yellow-50 text-center">
        <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">Selected Projects</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">A showcase of recent work in development and security.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={project.id} onClick={() => openProject(project)} className={`group cursor-pointer border-b-2 border-black ${index % 3 !== 2 ? 'lg:border-r-2' : ''} ${index % 2 === 0 ? 'md:border-r-2 lg:border-r-0' : ''} bg-white flex flex-col`}>
            <div className={`h-64 ${project.imageColor} border-b-2 border-black flex items-center justify-center p-8 group-hover:opacity-90 transition-opacity`}>
              <Layout size={64} className="text-black opacity-20" />
            </div>
            <div className="p-8 flex-grow">
              <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 mb-4 inline-block">{project.category}</span>
              <h3 className="text-2xl font-black mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
              <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all text-black mt-auto">View Project <ArrowRight size={16}/></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectDetailView = () => (
    <div className="animate-in slide-in-from-right-8 duration-300 pt-20">
      {activeProject && (
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
      )}
    </div>
  );

  const ServiceDetailView = () => (
    <div className="animate-in slide-in-from-right-8 duration-300 pt-20">
      {activeService && (
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <div className="bg-black text-white p-8 lg:p-16 border-b-2 border-black relative overflow-hidden">
             <button onClick={() => navigate('services')} className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-400">
               <ArrowLeft size={16}/> Back to Services
             </button>
             <div className="mt-12 lg:mt-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
               <div>
                  <div className="text-blue-500 mb-4">{activeService.icon}</div>
                  <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6">{activeService.title}</h1>
                  <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl font-light">{activeService.fullDesc}</p>
               </div>
               <button onClick={() => navigate('contact')} className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest border-2 border-white hover:bg-white hover:text-black transition-colors shrink-0">
                 Hire Me
               </button>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 flex-grow">
            {/* Features */}
            <div className="lg:col-span-2 p-8 lg:p-16 bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-black">
               <h3 className="text-2xl font-black uppercase mb-8">What is included?</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {activeService.features.map((feature, idx) => (
                   <div key={idx} className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-black transition-colors">
                     <Check className="text-blue-600 shrink-0 mt-1" size={20} />
                     <span className="font-bold text-lg">{feature}</span>
                   </div>
                 ))}
               </div>
               
               <div className="mt-12 bg-blue-50 p-6 border-l-4 border-blue-600">
                 <h4 className="font-bold text-lg mb-2">Why Choose Me?</h4>
                 <p className="text-gray-700">I deliver enterprise-grade quality at freelance rates. My code is clean, my audits are thorough, and my strategies are data-driven. No outsourcing, direct communication.</p>
               </div>
            </div>

            {/* Pricing */}
            <div className="p-8 lg:p-12 bg-gray-50 border-b-2 lg:border-b-0 border-black">
              <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-2">
                Standard Rates <span className="text-xs font-mono bg-black text-white px-2 py-1 rounded">INR</span>
              </h3>
              <div className="space-y-6">
                {activeService.pricing.map((tier, idx) => (
                  <div key={idx} className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_#2563EB] hover:-translate-y-1 transition-all">
                    <h4 className="font-bold text-gray-500 text-sm uppercase tracking-widest mb-1">{tier.title}</h4>
                    <p className="text-2xl font-black mb-3">{tier.price}</p>
                    <p className="text-sm text-gray-600 leading-snug">{tier.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-gray-500 text-center">
                * Prices are indicative and vary based on project scope and complexity.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const BlogView = () => (
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

  const BlogDetailView = () => (
    <div className="animate-in slide-in-from-right-8 duration-300 pt-20">
      {activeBlogPost && (
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
      )}
    </div>
  );

  // --- Legal Page Components with Fixed Padding ---
  // UPDATED: pt-40 for desktop screens to fix header overlap, kept responsive
  const LegalLayout = ({ title, lastUpdated, children }) => (
    <div className="animate-in fade-in duration-500 pt-40 lg:pt-40 max-w-4xl mx-auto p-8 lg:p-16 min-h-screen">
      <h1 className="text-4xl lg:text-5xl font-black uppercase mb-4">{title}</h1>
      {lastUpdated && <p className="text-gray-500 font-mono text-sm mb-8">Last Updated: {lastUpdated}</p>}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );

  const PrivacyPolicyView = () => (
    <LegalLayout title="Privacy Policy" lastUpdated="January 1, 2026">
        <p>At Arun Ammisetty Portfolio, accessible from arunammisetty.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">Information We Collect</h2>
        <p>When you contact us via the form on this website, we collect personal identification information such as your Name, Email address, and Phone number. This information is used solely for the purpose of communicating with you regarding your service inquiry.</p>
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">How We Use Your Information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
    </LegalLayout>
  );

  const TermsOfServiceView = () => (
    <LegalLayout title="Terms of Service" lastUpdated="January 1, 2026">
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Terms</h2>
        <p>By accessing this Website, accessible from arunammisetty.in, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials on Arun Ammisetty's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose or for any public display;</li>
          <li>attempt to reverse engineer any software contained on Arun Ammisetty's Website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Disclaimer</h2>
        <p>All the materials on Arun Ammisetty's Website are provided "as is". Arun Ammisetty makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Arun Ammisetty does not make any representations concerning the accuracy or likely results of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this Website.</p>
    </LegalLayout>
  );

  const CookiePolicyView = () => (
    <LegalLayout title="Cookie Policy" lastUpdated="January 1, 2026">
      <p>This Cookie Policy explains what cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, or the information we collect using cookies and how that information is used.</p>
      <h2 className="text-2xl font-bold text-black mt-8 mb-4">What are cookies?</h2>
      <p>Cookies are small text files that are stored on your browser or device by websites, apps, online media, and advertisements. There are different types of cookies. Cookies served by the entity that operates the domain you are visiting are called "first party cookies." So cookies served by us while you are on our website are first party cookies.</p>
      <h2 className="text-2xl font-bold text-black mt-8 mb-4">How we use cookies</h2>
      <p>We use cookies and other tracking technologies for the following purposes:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>To analyze the traffic to our website.</li>
        <li>To track the performance of our marketing campaigns.</li>
        <li>To personalize your experience on our website.</li>
      </ul>
    </LegalLayout>
  );

  const DisclaimerView = () => (
    <LegalLayout title="Disclaimer" lastUpdated="January 1, 2026">
      <p>The information provided by Arun Ammisetty on this website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.</p>
      <h2 className="text-2xl font-bold text-black mt-8 mb-4">External Links Disclaimer</h2>
      <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>
    </LegalLayout>
  );

  const AcceptableUseView = () => (
    <LegalLayout title="Acceptable Use Policy" lastUpdated="January 1, 2026">
      <p>This Acceptable Use Policy covers the security and use of all Arun Ammisetty's products and services.</p>
      <h2 className="text-2xl font-bold text-black mt-8 mb-4">Prohibited Use</h2>
      <p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
        <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
        <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
      </ul>
    </LegalLayout>
  );

  const RefundPolicyView = () => (
    <LegalLayout title="Refund Policy" lastUpdated="January 1, 2026">
      <p>Thank you for choosing Arun Ammisetty's services.</p>
      <h2 className="text-2xl font-bold text-black mt-8 mb-4">Services</h2>
      <p>We issue refunds for contracts within 7 days of the original purchase of the contract if the work has not yet commenced. Once the work has commenced, refunds are processed on a pro-rata basis at our sole discretion, minus any administrative fees.</p>
      <h2 className="text-2xl font-bold text-black mt-8 mb-4">Contact Us</h2>
      <p>If you have any questions about our Returns and Refunds Policy, please contact us at contact.aa@tuta.io.</p>
    </LegalLayout>
  );

  const CopyrightView = () => (
    <LegalLayout title="Copyright Notice" lastUpdated="January 1, 2026">
      <p>All materials contained on this site are protected by Indian copyright law and may not be reproduced, distributed, transmitted, displayed, published or broadcast without the prior written permission of Arun Ammisetty or in the case of third party materials, the owner of that content. You may not alter or remove any trademark, copyright or other notice from copies of the content.</p>
    </LegalLayout>
  );

  const GDPRView = () => (
    <LegalLayout title="GDPR Compliance" lastUpdated="January 1, 2026">
      <p>We are a Data Controller of your information.</p>
      <p>Arun Ammisetty legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Arun Ammisetty needs to perform a contract with you</li>
        <li>You have given Arun Ammisetty permission to do so</li>
        <li>Processing your personal information is in Arun Ammisetty legitimate interests</li>
        <li>Arun Ammisetty needs to comply with the law</li>
      </ul>
      <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.</p>
    </LegalLayout>
  );

  const ContactView = () => (
    <div className="animate-in fade-in duration-500 pt-20 min-h-screen flex flex-col">
       <div className="grid grid-cols-1 lg:grid-cols-2 flex-grow">
          <div className="p-8 lg:p-20 bg-blue-600 text-white border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-center">
             <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8">Let's Work Together.</h2>
             <p className="text-xl font-light mb-12 opacity-90">Have a project in mind? Looking for a security audit? Or just want to discuss the latest tech? Drop me a line.</p>
             
             <div className="space-y-6">
                <a href="mailto:contact.aa@tuta.io" className="flex items-center gap-4 text-xl font-bold hover:underline">
                  <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full">
                    <Mail size={24} />
                  </div>
                  contact.aa@tuta.io
                </a>
                <div className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full">
                    <Phone size={24} />
                  </div>
                  +91 83290 00442
                </div>
                <a href="https://linkedin.com/in/arun-ammisetty" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl font-bold hover:underline">
                  <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full">
                    <Linkedin size={24} />
                  </div>
                  /in/arun-ammisetty
                </a>
                <div className="flex items-center gap-4 text-xl font-bold">
                   <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full">
                     <Globe size={24} />
                   </div>
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

  return (
    <div className="font-sans text-black selection:bg-blue-200 min-h-screen bg-white relative">
      <Header />
      
      <main>
        {currentView === 'home' && <HomeView />}
        {currentView === 'about' && <AboutView />}
        {currentView === 'services' && <ServicesView />}
        {currentView === 'service-detail' && <ServiceDetailView />}
        {currentView === 'projects' && <ProjectsView />}
        {currentView === 'project-detail' && <ProjectDetailView />}
        {currentView === 'contact' && <ContactView />}
        {currentView === 'blog' && <BlogView />}
        {currentView === 'blog-detail' && <BlogDetailView />}
        
        {/* Hidden Route Logic: Only accessible if explicitly set */}
        {currentView === 'invoice' && <InvoiceGeneratorView isAuthenticated={isInvoiceAuthenticated} setIsAuthenticated={setIsInvoiceAuthenticated} />}
        
        {/* Legal Pages */}
        {currentView === 'privacy' && <PrivacyPolicyView />}
        {currentView === 'terms' && <TermsOfServiceView />}
        {currentView === 'cookie-policy' && <CookiePolicyView />}
        {currentView === 'disclaimer' && <DisclaimerView />}
        {currentView === 'acceptable-use' && <AcceptableUseView />}
        {currentView === 'refund-policy' && <RefundPolicyView />}
        {currentView === 'copyright' && <CopyrightView />}
        {currentView === 'gdpr' && <GDPRView />}
      </main>

      <footer className="border-t-2 border-black bg-white print:hidden">
        <div className="grid grid-cols-1 md:grid-cols-4">
          
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black bg-black text-white flex flex-col justify-between">
            <div>
                <h4 className="font-bold text-2xl uppercase mb-4 tracking-tighter">Arun / Ammisetty</h4>
                <p className="text-gray-400 leading-relaxed mb-6">Building robust digital ecosystems. Securing the future of web technologies.</p>
                
                <a href="https://go.ly/vc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold uppercase text-xs tracking-widest border border-white hover:bg-white hover:text-black transition-colors">
                    <Shield size={14} /> Verified by Vanguard / Cyber
                </a>
            </div>
            <div className="mt-8">
                <p className="text-sm text-gray-500">© 2026 All Rights Reserved.</p>
                <p className="text-xs text-gray-600 mt-2">Designed with Neubrutalism.</p>
            </div>
          </div>

          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500 flex items-center gap-2">
                <FileText size={14}/> Legal & Resources
            </h5>
            <div className="flex flex-col gap-3 font-bold text-sm">
              <button onClick={() => navigate('blog')} className="text-left hover:text-blue-600 flex items-center gap-2 transition-colors">Tech Blog</button>
              <button onClick={() => window.open('https://github.com/arunammisetty', '_blank')} className="text-left hover:text-blue-600 flex items-center gap-2 transition-colors">Open Source</button>
              <div className="h-px bg-gray-200 w-full my-2"></div>
              <button onClick={() => navigate('privacy')} className="text-left hover:text-blue-600 text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</button>
              <button onClick={() => navigate('terms')} className="text-left hover:text-blue-600 text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</button>
              <button onClick={() => navigate('cookie-policy')} className="text-left hover:text-blue-600 text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</button>
              <button onClick={() => navigate('disclaimer')} className="text-left hover:text-blue-600 text-gray-600 hover:text-blue-600 transition-colors">Disclaimer</button>
              <button onClick={() => navigate('acceptable-use')} className="text-left hover:text-blue-600 text-gray-600 hover:text-blue-600 transition-colors">Acceptable Use</button>
              <button onClick={() => navigate('refund-policy')} className="text-left hover:text-blue-600 text-gray-600 hover:text-blue-600 transition-colors">Refund Policy</button>
              <button onClick={() => navigate('copyright')} className="text-left hover:text-blue-600 text-gray-600 hover:text-blue-600 transition-colors">Copyright Notice</button>
              <button onClick={() => navigate('gdpr')} className="text-left hover:text-blue-600 text-gray-600 hover:text-blue-600 transition-colors">GDPR Compliance</button>
            </div>
          </div>

          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col">
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Contact</h5>
            <div className="space-y-4">
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email</p>
                    <a href="mailto:contact.aa@tuta.io" className="font-bold text-lg hover:text-blue-600 hover:underline">contact.aa@tuta.io</a>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Phone</p>
                    <p className="font-bold text-lg">+91 83290 00442</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">HQ</p>
                    <p className="font-bold text-lg">Baner Pune, India</p>
                </div>
            </div>
            
            <div className="mt-auto pt-8">
                <p className="text-xs font-bold uppercase tracking-widest mb-4">Socials</p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Github size={18} /></a>
                    <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"><MessageCircle size={18} /></a>
                </div>
            </div>
          </div>

          <div className="p-8 flex flex-col justify-between bg-gray-50">
            <div>
                <h5 className="font-bold uppercase tracking-widest text-xs mb-4 text-gray-500">Stay Updated</h5>
                <p className="text-sm mb-4">Join 2,000+ developers receiving my monthly security & tech digest.</p>
                <div className="flex flex-col gap-2">
                    <input type="email" placeholder="Enter your email" className="p-3 border-2 border-black focus:outline-none focus:shadow-[4px_4px_0px_0px_#2563EB] transition-shadow text-sm" />
                    <button className="p-3 bg-black text-white font-bold uppercase text-xs tracking-widest border-2 border-black hover:bg-blue-600 hover:border-black transition-colors">Subscribe</button>
                </div>
            </div>
            
            <button onClick={() => navigate('contact')} className="mt-8 text-blue-600 font-black uppercase text-2xl hover:scale-105 transition-transform flex items-center gap-2 origin-left">
              Let's Talk <ArrowRight size={32} />
            </button>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 print:hidden">
        {showBackToTop && (
          <button 
            onClick={scrollToTop} 
            className="w-12 h-12 bg-black text-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            title="Back to Top"
          >
            <ArrowUp size={24} />
          </button>
        )}
        <a 
          href="tel:+918329000442"
          className="w-12 h-12 bg-blue-600 text-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          title="Call Now"
        >
          <Phone size={24} />
        </a>
        <a 
          href="https://wa.me/918329000442"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-green-500 text-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          title="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      <style>{`
        .pattern-grid {
          background-image: radial-gradient(#000 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;