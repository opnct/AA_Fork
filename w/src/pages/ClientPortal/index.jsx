import React, { useState, useEffect } from 'react';
import { 
    Users, Check, Clipboard, Plus, Lock, LogOut, Loader2, FileText, 
    Clock, Activity, ArrowRight, ExternalLink 
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { 
    signInWithEmailAndPassword, createUserWithEmailAndPassword, 
    signOut, onAuthStateChanged 
} from 'firebase/auth';
import { 
    doc, onSnapshot, setDoc, collection, addDoc, serverTimestamp, query, orderBy 
} from 'firebase/firestore';
import { auth, db } from '../../config/firebase';

const ClientPortal = () => {
    // Auth States
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');
    const [authMode, setAuthMode] = useState('login'); // 'login', 'signup', 'verify', 'set_password'
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // Real-time Data States
    const [clientData, setClientData] = useState(null);
    const [secureFiles, setSecureFiles] = useState([]);
    
    // File Upload States
    const [newFileName, setNewFileName] = useState('');
    const [newFileUrl, setNewFileUrl] = useState('');

    // 1. Listen for Auth State Changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (!currentUser) {
                setClientData(null);
                setSecureFiles([]);
            }
        });
        return () => unsubscribe();
    }, []);

    // 2. Real-time Firestore Listeners
    useEffect(() => {
        if (!user) return;

        // Fetch Main Client Document
        const clientDocRef = doc(db, 'clients', user.uid);
        const unsubDoc = onSnapshot(clientDocRef, (docSnap) => {
            if (docSnap.exists()) {
                setClientData(docSnap.data());
            } else {
                // Initialize default data for newly signed up clients
                const defaultData = {
                    clientName: user.email.split('@')[0],
                    projectName: 'Initial Project Setup',
                    status: 'Phase 1: Onboarding',
                    progress: 10,
                    phases: [
                        { id: 1, name: 'Project Onboarding', status: 'In Progress' },
                        { id: 2, name: 'Design & Architecture', status: 'Pending' },
                        { id: 3, name: 'Development', status: 'Pending' }
                    ],
                    latestInvoice: { ref: 'Pending Generation', amount: 0, status: 'Unpaid' }
                };
                setDoc(clientDocRef, defaultData);
                setClientData(defaultData);
            }
        });

        // Fetch Secure Files Subcollection
        const filesRef = collection(db, 'clients', user.uid, 'secure_files');
        const q = query(filesRef, orderBy('uploadedAt', 'desc'));
        const unsubFiles = onSnapshot(q, (snapshot) => {
            const filesArr = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setSecureFiles(filesArr);
        });

        return () => {
            unsubDoc();
            unsubFiles();
        };
    }, [user]);

    // --- Authentication Logic ---

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setErrorMsg('Invalid email or password.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendOTP = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');
        
        const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(newOtp);

        try {
            // REQUIRES .ENV SETUP: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
                { to_email: email, otp: newOtp }, 
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setAuthMode('verify');
        } catch (error) {
            console.error(error);
            setErrorMsg('Failed to send OTP. Check EmailJS configuration.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        if (otp === generatedOtp) {
            setAuthMode('set_password');
            setErrorMsg('');
        } else {
            setErrorMsg('Invalid OTP. Please try again.');
        }
    };

    const handleSetPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Firebase automatically logs the user in, useEffect will catch it and route to portal
        } catch (error) {
            setErrorMsg('Error creating account: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        setAuthMode('login');
        setEmail('');
        setPassword('');
    };

    // --- Secure File Upload Logic ---
    const handleAddFileLink = async (e) => {
        e.preventDefault();
        if (!newFileName || !newFileUrl) return;
        setIsLoading(true);
        try {
            await addDoc(collection(db, 'clients', user.uid, 'secure_files'), {
                name: newFileName,
                url: newFileUrl,
                uploadedAt: serverTimestamp()
            });
            setNewFileName('');
            setNewFileUrl('');
        } catch (error) {
            alert('Error adding file: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // --- RENDER UNAUTHENTICATED VIEWS ---
    if (!user) {
        return (
            <div className="pt-32 lg:pt-40 min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_#000] w-full max-w-md text-center animate-in fade-in duration-500">
                    <Users size={48} className="mx-auto mb-6 text-blue-600" />
                    
                    {authMode === 'login' && (
                        <>
                            <h2 className="text-2xl font-black uppercase mb-2">Client Login</h2>
                            <p className="text-gray-600 mb-6">Access your secure project dashboard.</p>
                            <form onSubmit={handleLogin} className="space-y-4">
                                <input type="email" placeholder="Email Address" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 border-2 border-black font-bold outline-none" required />
                                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-3 border-2 border-black font-bold outline-none" required />
                                {errorMsg && <p className="text-red-600 font-bold text-sm">{errorMsg}</p>}
                                <button type="submit" disabled={isLoading} className="w-full p-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors flex justify-center items-center gap-2">
                                    {isLoading ? <Loader2 className="animate-spin" size={20}/> : <Lock size={20} />} Secure Login
                                </button>
                            </form>
                            <button onClick={()=>{setAuthMode('signup'); setErrorMsg('');}} className="mt-6 text-sm font-bold text-blue-600 hover:underline">New Client? Verify Email to Signup</button>
                        </>
                    )}

                    {authMode === 'signup' && (
                        <>
                            <h2 className="text-2xl font-black uppercase mb-2">Client Signup</h2>
                            <p className="text-gray-600 mb-6">Verify your email to access the portal.</p>
                            <form onSubmit={handleSendOTP} className="space-y-4">
                                <input type="email" placeholder="Enter your Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 border-2 border-black font-bold outline-none" required />
                                {errorMsg && <p className="text-red-600 font-bold text-sm">{errorMsg}</p>}
                                <button type="submit" disabled={isLoading} className="w-full p-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors flex justify-center items-center gap-2">
                                    {isLoading ? <Loader2 className="animate-spin" size={20}/> : 'Send OTP via Email'}
                                </button>
                            </form>
                            <button onClick={()=>{setAuthMode('login'); setErrorMsg('');}} className="mt-6 text-sm font-bold text-blue-600 hover:underline">Back to Login</button>
                        </>
                    )}

                    {authMode === 'verify' && (
                        <>
                            <h2 className="text-2xl font-black uppercase mb-2">Verify OTP</h2>
                            <p className="text-gray-600 mb-6">Enter the 6-digit code sent to {email}</p>
                            <form onSubmit={handleVerifyOTP} className="space-y-4">
                                <input type="text" placeholder="123456" maxLength={6} value={otp} onChange={e=>setOtp(e.target.value)} className="w-full p-3 border-2 border-black text-center text-2xl tracking-widest font-bold outline-none" required autoFocus />
                                {errorMsg && <p className="text-red-600 font-bold text-sm">{errorMsg}</p>}
                                <button type="submit" className="w-full p-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors">Verify Code</button>
                            </form>
                        </>
                    )}

                    {authMode === 'set_password' && (
                        <>
                            <h2 className="text-2xl font-black uppercase mb-2">Set Password</h2>
                            <p className="text-gray-600 mb-6">Email verified! Create a password for your account.</p>
                            <form onSubmit={handleSetPassword} className="space-y-4">
                                <input type="password" placeholder="New Password (min 6 chars)" minLength={6} value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-3 border-2 border-black font-bold outline-none" required autoFocus />
                                {errorMsg && <p className="text-red-600 font-bold text-sm">{errorMsg}</p>}
                                <button type="submit" disabled={isLoading} className="w-full p-3 bg-green-500 text-white font-bold uppercase tracking-widest hover:bg-black transition-colors flex justify-center items-center gap-2">
                                    {isLoading ? <Loader2 className="animate-spin" size={20}/> : 'Create Account & Login'}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        );
    }

    // --- RENDER AUTHENTICATED CLIENT PORTAL VIEWS ---
    if (!clientData) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" size={48}/></div>;

    return (
        <div className="animate-in fade-in duration-500 pt-32 lg:pt-40 max-w-6xl mx-auto p-8 min-h-screen">
            
            {/* Section 1: Header / Quick Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-black pb-6 gap-4">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter">Welcome, {clientData.clientName}</h1>
                    <p className="text-xl text-gray-500 mt-2 font-serif">{clientData.projectName}</p>
                </div>
                <div className="flex gap-4">
                    <button onClick={handleLogout} className="px-4 py-2 font-bold uppercase tracking-widest border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors flex items-center gap-2">
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* LEFT COLUMN: Main Dash */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Section 2: Project Progress Overview */}
                    <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000]">
                        <h3 className="font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2"><Activity size={20}/> Overall Progress</h3>
                        <div className="flex justify-between items-end mb-3">
                            <span className="font-black text-2xl">{clientData.status}</span>
                            <span className="font-black text-3xl text-blue-600">{clientData.progress}%</span>
                        </div>
                        <div className="w-full h-6 bg-gray-100 border-2 border-black overflow-hidden relative">
                            <div className="h-full bg-blue-600 transition-all duration-1000 ease-out" style={{width: `${clientData.progress}%`}}></div>
                        </div>
                    </div>

                    {/* Section 3: Phase / Milestone Breakdown */}
                    <div className="bg-gray-50 border-2 border-black p-8">
                        <h3 className="font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2"><Clock size={20}/> Milestones Tracker</h3>
                        <ul className="space-y-4">
                            {clientData.phases && clientData.phases.map((phase, idx) => (
                                <li key={idx} className="flex items-center justify-between p-4 bg-white border border-gray-200 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        {phase.status === 'Done' ? (
                                            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center"><Check size={14}/></div>
                                        ) : phase.status === 'In Progress' ? (
                                            <div className="w-6 h-6 rounded-full border-4 border-blue-600 animate-pulse"></div>
                                        ) : (
                                            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                                        )}
                                        <span className={`font-bold ${phase.status === 'Done' ? 'text-gray-500 line-through' : 'text-black'}`}>{phase.name}</span>
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 bg-gray-100 border border-gray-300">
                                        {phase.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* RIGHT COLUMN: Files & Finance */}
                <div className="space-y-8">
                    
                    {/* Section 4: Finance / Invoices */}
                    <div className="bg-yellow-50 border-2 border-black p-8 shadow-[6px_6px_0px_0px_#000]">
                        <h3 className="font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2"><FileText size={20}/> Latest Invoice</h3>
                        <p className="text-3xl font-black mb-2">₹{clientData.latestInvoice?.amount.toLocaleString('en-IN')}</p>
                        <p className="font-mono text-sm text-gray-600 mb-6">Ref: {clientData.latestInvoice?.ref}</p>
                        <div className={`text-center py-2 font-bold uppercase tracking-widest border-2 border-black ${clientData.latestInvoice?.status === 'Paid' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                            {clientData.latestInvoice?.status}
                        </div>
                    </div>

                    {/* Section 5: Secure Files List */}
                    <div className="bg-white border-2 border-black p-8">
                        <h3 className="font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2"><Clipboard size={20}/> Secure Assets</h3>
                        {secureFiles.length === 0 ? (
                            <p className="text-sm text-gray-500 italic">No files shared yet.</p>
                        ) : (
                            <ul className="space-y-3 mb-6 max-h-[200px] overflow-y-auto pr-2">
                                {secureFiles.map(file => (
                                    <li key={file.id}>
                                        <a href={file.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-gray-200 hover:border-blue-600 transition-colors group">
                                            <span className="font-bold text-sm truncate">{file.name}</span>
                                            <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-600" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Section 6: File Link Uploader */}
                        <form onSubmit={handleAddFileLink} className="border-t-2 border-dashed border-gray-300 pt-4 mt-4 space-y-3">
                            <p className="text-xs font-bold uppercase text-gray-400">Share New Link</p>
                            <input type="text" placeholder="File/Asset Name" value={newFileName} onChange={e=>setFileName(e.target.value)} required className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none text-sm font-bold"/>
                            <input type="url" placeholder="Secure URL (Drive, Dropbox)" value={newFileUrl} onChange={e=>setNewFileUrl(e.target.value)} required className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none text-sm font-mono"/>
                            <button type="submit" disabled={isLoading} className="w-full py-2 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-blue-600 transition-colors flex justify-center items-center gap-2 disabled:opacity-50">
                                {isLoading ? <Loader2 className="animate-spin" size={14}/> : <Plus size={14} />} Add Link
                            </button>
                        </form>
                    </div>

                    {/* Quick Contact Footer */}
                    <a href="mailto:contact.aa@tuta.io" className="block text-center py-4 bg-gray-100 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors group">
                        Contact Project Lead <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default ClientPortal;