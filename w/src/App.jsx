import React, { useState, useEffect, useRef } from 'react';
import { 
  X, ArrowRight, ArrowLeft, Globe, Shield, 
  Monitor, Megaphone, PenTool, Briefcase, Mail, 
  Linkedin, Github, Check, ChevronRight, Download,
  Phone, MessageCircle, ArrowUp, FileText, Scale, Layout, ExternalLink,
  Lock, AlertTriangle, Eye, CreditCard, Copyright, Server,
  Plus, Trash2, Printer, IndianRupee
} from 'lucide-react';

// --- Invoice Generator Component (Kept outside App to prevent re-renders) ---
const InvoiceGeneratorView = ({ setIsAuthenticated, isAuthenticated }) => {
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [invoiceData, setInvoiceData] = useState({
    type: 'Tax Invoice', // Default
    currency: 'INR', 
    userGstin: '', 
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

  // Updated compliance notes for 2026 standards
  const getComplianceNote = () => {
      switch(invoiceData.type) {
          case 'Tax Invoice': 
          case 'GST Invoice':
              return 'Tax Invoice issued u/s 31 of CGST Act, 2017 & Rule 46 of CGST Rules, 2017. Tax is payable on reverse charge basis: No.';
          case 'Bill of Supply': 
              return 'Bill of Supply issued u/s 31(3)(c) of CGST Act, 2017 & Rule 49. Composition taxable person / Exempt Supply. No tax collected.';
          case 'Receipt Voucher': 
              return 'Receipt Voucher u/s 31(3)(d) of CGST Act, 2017 read with Rule 50. Advance payment received for supply of services.';
          case 'Refund Voucher': 
              return 'Refund Voucher u/s 31(3)(e) of CGST Act, 2017 read with Rule 51. Refund of advance payment received.';
          case 'Revised Invoice': 
              return `Revised Invoice u/s 31(3)(a) of CGST Act, 2017. Original Invoice Ref: ${invoiceData.originalRef || 'N/A'}`;
          case 'E-Invoice': 
              return 'IRN generated separately. Valid E-Invoice u/r 48(4) of CGST Rules, 2017.';
          case 'Export Invoice': 
              return 'Supply meant for Export under Bond/Letter of Undertaking without payment of Integrated Tax (IGST). Supply of services u/s 16 of IGST Act.';
          case 'International Invoice':
              return 'Export of Services. Invoice for overseas client. Not liable for GST in India (Zero Rated Supply) subject to realization of convertible foreign exchange.';
          case 'Credit Note': 
              return `Credit Note u/s 34(1) of CGST Act, 2017. Original Invoice Ref: ${invoiceData.originalRef || 'N/A'}`;
          case 'Debit Note': 
              return `Debit Note u/s 34(3) of CGST Act, 2017. Original Invoice Ref: ${invoiceData.originalRef || 'N/A'}`;
          case 'Non-GST Invoice': 
              return 'This document is not a Tax Invoice. GST not applicable. Supplier not registered under GST or supply is non-taxable.';
          case 'Proforma Invoice': 
              return 'This is a Proforma Invoice / Estimate only. Not valid for input tax credit. A final Tax Invoice will be issued upon payment/delivery.';
          case 'Self-Invoice': 
              return 'Self-Invoice u/s 31(3)(f) of CGST Act, 2017. Tax payable on Reverse Charge Mechanism (RCM) for supply received from unregistered person.';
          default: 
              return 'Subject to Pune Jurisdiction. E. & O.E.';
      }
  };

  if (!isAuthenticated) {
      // Reduced padding for lock screen to center it better
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

  // UPDATED: Padding increased for desktop (lg:pt-40) to fix header overlap, kept responsive
  return (
    <div className="animate-in fade-in duration-500 pt-32 lg:pt-40 min-h-screen bg-gray-100 p-4 lg:p-8">
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Configuration Panel - Hidden on Print */}
          <div className="lg:col-span-4 bg-white border-2 border-black p-6 h-fit print:hidden">
             <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
               <PenTool size={24} /> Configuration
             </h2>
             
             <div className="space-y-4">
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

               {/* Fields for Original Ref (Credit/Debit/Revised/Refund) */}
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

               {/* New field for user's GSTIN */}
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

               <button onClick={handlePrint} className="w-full py-3 bg-blue-600 text-white font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 mt-4">
                  <Printer size={20} /> Print / Save PDF
               </button>
             </div>
          </div>

          {/* Invoice Document ID for printing */}
          <div id="invoice-print-area" className="lg:col-span-8 bg-white border-2 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              
              {/* Header - Fixed Vertical Gap */}
              <div className="flex justify-between items-start border-b-2 border-black pb-4 mb-4 pt-4 relative">
                 <div className="absolute top-0 left-0 -mt-2">
                     {/* Ensured logo visibility by adjusting positioning and size if needed */}
                     <img src="public/assets/logo_aa.png" alt="Arun Ammisetty" className="h-24 w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
                 </div>
                 <div className="mt-20 w-full flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1">{getInvoiceTitle()}</h1>
                        <p className="font-mono text-gray-500 text-sm">#{invoiceData.invoiceNo}</p>
                        {/* Display Original Invoice Ref if applicable */}
                        {invoiceData.originalRef && ['Credit Note', 'Debit Note', 'Revised Invoice', 'Refund Voucher'].includes(invoiceData.type) && (
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
                    {invoiceData.clientGstin && <p className="text-sm font-mono mt-2">{invoiceData.type === 'International Invoice' || invoiceData.type === 'Export Invoice' ? 'Tax ID' : 'GSTIN'}: {invoiceData.clientGstin}</p>}
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
                    
                    {/* Show GST breakdown only if invoice type suggests tax AND currency is INR */}
                    {!['Bill of Supply', 'Non-GST Invoice', 'Proforma Invoice', 'Receipt Voucher', 'Refund Voucher', 'Export Invoice', 'International Invoice'].includes(invoiceData.type) && invoiceData.currency === 'INR' && (
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
                      {/* Show UPI and QR Codes only for Indian Invoices */}
                      {invoiceData.currency === 'INR' && !['International Invoice', 'Export Invoice'].includes(invoiceData.type) && (
                          <div className="mt-4">
                             <p className="mb-2"><span className="font-bold">UPI ID:</span> 918329004424@waicici</p>
                             <div className="flex gap-4 mt-2">
                                <div className="text-center">
                                    <img src="public/assets/p1.png" alt="PhonePe QR" className="w-20 h-20 border border-gray-300 object-contain p-1" onError={(e) => e.target.style.display = 'none'} />
                                    <p className="text-[10px] mt-1 font-bold">PhonePe</p>
                                </div>
                                <div className="text-center">
                                    <img src="public/assets/p2.png" alt="WhatsApp QR" className="w-20 h-20 border border-gray-300 object-contain p-1" onError={(e) => e.target.style.display = 'none'} />
                                    <p className="text-[10px] mt-1 font-bold">WhatsApp</p>
                                </div>
                             </div>
                          </div>
                      )}

                      {(invoiceData.type === 'International Invoice' || invoiceData.type === 'Export Invoice') && (
                          <p><span className="font-bold">SWIFT Code:</span> HDFCINBBXXX</p>
                      )}
                    </div>
                 </div>
                 <div className="text-right flex flex-col justify-end">
                    <div className="h-24 mb-2 flex items-end justify-end">
                       <img src="public/assets/sign.png" alt="Authorized Signature" className="h-full w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
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

       {/* Print Specific Styles - Fixes "Only Invoice" printing */}
       <style>{`
          @media print {
            body * {
              visibility: hidden;
            }
            #invoice-print-area, #invoice-print-area * {
              visibility: visible;
            }
            #invoice-print-area {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              margin: 0;
              padding: 20px; /* Added padding for print */
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
  const [logoClickCount, setLogoClickCount] = useState(0);
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
  const handleLogoPressStart = () => {
    logoPressTimeoutRef.current = setTimeout(() => {
      navigate('invoice');
    }, 3000); // 3 seconds hold
  };

  const handleLogoPressEnd = () => {
    if (logoPressTimeoutRef.current) {
      clearTimeout(logoPressTimeoutRef.current);
      // If short press, navigate home. If long press triggered, navigation already happened.
      // But simple click should go home.
      // The issue with this pattern in React without complex state is that if navigate('invoice') runs, component updates.
      // A simple check is: if we haven't navigated yet, go home.
      // However, to keep it simple and robust per instructions:
      // We will let the long press navigate. A short press acts as normal click.
      // Since timeout clears on mouse up, if it wasn't 3s, it won't nav to invoice.
      // We need to trigger 'home' only if we didn't trigger 'invoice'.
      // But we can just navigate 'home' on click usually. 
      // Let's rely on standard onClick for Home, and onMouseDown/TouchStart for secret.
    }
  };

  // Separation of concerns: 
  // onClick -> Home
  // onMouseDown/TouchStart + Timer -> Invoice
  // If Invoice triggers, we need to prevent Home? 
  // Actually, if we navigate to invoice, the 'home' navigation from onclick might override it if they happen sequentially.
  // Correct approach: Handle everything in PressStart/End.
  
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