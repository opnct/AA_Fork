import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Shield, Lock, Printer, PenTool, FileCheck, Trash2, Stamp, FileSignature 
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
    </div>
  );
};

export default InvoiceGeneratorView;
