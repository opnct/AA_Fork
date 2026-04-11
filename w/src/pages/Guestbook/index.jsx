import React, { useState, useEffect } from 'react';
import { MessageCircle, Loader2, Send, Clock, User, ShieldAlert } from 'lucide-react';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';

const Guestbook = () => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // 1. Real-time Firestore Listener
    useEffect(() => {
        // Query the 'guestbook' collection, ordering by creation time (newest first)
        const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedMessages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(fetchedMessages);
            setIsLoading(false);
        }, (error) => {
            console.error("Error fetching guestbook messages: ", error);
            setIsLoading(false);
        });

        // Cleanup listener on unmount
        return () => unsubscribe();
    }, []);

    // 2. Submit Handler to push data to Firestore
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim() || !msg.trim()) return;
        
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'guestbook'), {
                name: name.trim(),
                msg: msg.trim(),
                createdAt: serverTimestamp()
            });
            // Clear form on success
            setName('');
            setMsg('');
        } catch (error) {
            console.error("Error adding message: ", error);
            alert("Failed to post message. Please ensure Firestore rules allow public writes to the guestbook collection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // 3. Helper to format Firestore Timestamps
    const formatTime = (timestamp) => {
        if (!timestamp) return 'Just now';
        const date = timestamp.toDate();
        return new Intl.DateTimeFormat('en-US', {
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        }).format(date);
    };

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen">
            
            {/* Section 1: Header */}
            <div className="mb-12 border-b-4 border-black pb-6">
                <h1 className="text-4xl lg:text-5xl font-black uppercase mb-4 flex items-center gap-4">
                    <MessageCircle className="text-blue-600 w-10 h-10 lg:w-12 lg:h-12"/> 
                    Public Guestbook
                </h1>
                <p className="text-xl text-gray-600 font-serif">
                    Leave a mark. This feed is synced globally in real-time.
                </p>
            </div>
            
            {/* Section 2: Input Form */}
            <form onSubmit={handleSubmit} className="bg-yellow-50 border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000] mb-16 space-y-6 relative overflow-hidden transition-all hover:shadow-[12px_12px_0px_0px_#2563EB]">
                <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
                    Live Feed
                </div>
                
                <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                        <User size={16}/> Your Name
                    </label>
                    <input 
                        type="text" 
                        placeholder="e.g., John Doe" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        required 
                        maxLength={50}
                        className="w-full p-4 border-2 border-black font-bold outline-none focus:bg-white focus:ring-4 focus:ring-blue-200 transition-all" 
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                        <MessageCircle size={16}/> Your Message
                    </label>
                    <textarea 
                        placeholder="What brings you here today?..." 
                        rows="3" 
                        value={msg} 
                        onChange={e => setMsg(e.target.value)} 
                        required 
                        maxLength={500}
                        className="w-full p-4 border-2 border-black font-bold outline-none focus:bg-white focus:ring-4 focus:ring-blue-200 transition-all resize-none" 
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-black text-white font-black uppercase tracking-widest border-2 border-black hover:bg-blue-600 hover:text-white transition-colors disabled:opacity-70 flex items-center justify-center gap-3"
                >
                    {isSubmitting ? (
                        <><Loader2 className="animate-spin" size={20} /> Posting...</>
                    ) : (
                        <><Send size={20} /> Sign Guestbook</>
                    )}
                </button>
            </form>

            {/* Section 3: Guidelines Note */}
            <div className="bg-gray-100 border border-gray-300 p-4 mb-8 flex items-start gap-3 text-sm text-gray-600 font-bold uppercase tracking-wide">
                <ShieldAlert size={20} className="text-red-500 shrink-0"/>
                <p>All messages are public. Spam or malicious links will be actively moderated and removed.</p>
            </div>

            {/* Section 4: Loading State */}
            {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20 text-blue-600">
                    <Loader2 className="animate-spin w-12 h-12 mb-4" />
                    <p className="font-bold uppercase tracking-widest animate-pulse">Syncing Database...</p>
                </div>
            ) : (
                /* Section 5: Real-Time Message Feed */
                <div className="space-y-6">
                    {messages.length === 0 ? (
                        /* Section 6: Empty State */
                        <div className="text-center py-20 border-2 border-dashed border-gray-300 bg-gray-50">
                            <MessageCircle className="mx-auto w-12 h-12 text-gray-300 mb-4" />
                            <p className="text-xl font-bold text-gray-500 uppercase tracking-widest">No messages yet.</p>
                            <p className="text-gray-400 mt-2 font-serif">Be the first to leave a mark!</p>
                        </div>
                    ) : (
                        messages.map((m, index) => (
                            /* Section 7 & 8: Animated Message Cards */
                            <div 
                                key={m.id} 
                                className="bg-white border-2 border-black p-6 flex flex-col items-start hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-300 animate-in slide-in-from-bottom-4"
                                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                            >
                                <div className="flex items-center gap-2 mb-4 w-full justify-between border-b-2 border-gray-100 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 border-2 border-black flex items-center justify-center font-black text-blue-800 uppercase">
                                            {m.name.charAt(0)}
                                        </div>
                                        <span className="font-black text-xl uppercase truncate max-w-[200px] md:max-w-[400px]">{m.name}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs font-mono text-gray-500 bg-gray-50 px-2 py-1 border border-gray-200 shrink-0">
                                        <Clock size={12} />
                                        {formatTime(m.createdAt)}
                                    </div>
                                </div>
                                <p className="text-gray-800 font-serif leading-relaxed text-lg break-words w-full">
                                    {m.msg}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Guestbook;