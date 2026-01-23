import React, { useState } from 'react';
import { 
  Laptop, MapPin, X, ShieldCheck, Phone, User, ArrowRight,
  Clock, Zap, Mail, Download, Star, Moon, Sun,
  Database, PenTool, Code, Smartphone, Cpu, ExternalLink,
  Linkedin, Globe, Facebook, Instagram, ShoppingBag, 
  FileText, Users, Coffee, CheckCircle, HelpCircle, QrCode, CreditCard,
  FileQuestion, AlertTriangle, Lock, ChevronDown
} from 'lucide-react';

// --- ICON MAPPING ---
const iconMap = {
  101: Code,
  102: Smartphone,
  103: Cpu,
  104: Globe,
  1: Database,
  2: PenTool,
  3: Star,
  4: User,
  201: FileText,
  202: ShoppingBag,
  203: Users
};

// --- CURRENCY RATES (Approximate Real Rates) ---
const currencyRates = {
  INR: { symbol: "₹", rate: 1 },
  USD: { symbol: "$", rate: 0.012 }, // 1 INR = 0.012 USD
  EUR: { symbol: "€", rate: 0.011 }, // 1 INR = 0.011 EUR
  JPY: { symbol: "¥", rate: 1.75 },  // 1 INR = 1.75 JPY
  AUD: { symbol: "A$", rate: 0.018 } // 1 INR = 0.018 AUD
};

// --- TRANSLATIONS & DATA ---

const translations = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", pricing: "Pricing", ethics: "Ethics", contact: "Contact" },
    hero: {
      badge: "AVAILABLE FOR HIRE",
      title: "AFFORDABLE SERVICES.",
      subtitle: "Tech & Non-Tech Solutions by Arun Ammisetty.",
      desc: "Providing high-quality IT support, data entry, and local errands in Pune at market-beating rates.",
      ctaPrimary: "HIRE ME",
      ctaSecondary: "VIEW RATES",
      stats: ["Lowest Rates", "Fast Service", "Trustworthy"]
    },
    about: {
      title: "ABOUT ME",
      desc: "I am Arun Ammisetty, a freelancer based in Baner, Pune. My mission is to provide accessible, affordable, and honest services to individuals and small businesses. Whether you need a website, a typed document, or someone to run local errands, I am here to help."
    },
    ethics: {
      title: "MY ETHICS & PROMISES",
      noHidden: "NO HIDDEN FEES",
      noHiddenDesc: "Prices mentioned are final for standard work. No registration charges or security deposits ever.",
      privacy: "100% PRIVACY",
      privacyDesc: "Your data, documents, and personal details are never shared with third parties.",
      quality: "QUALITY ASSURANCE",
      qualityDesc: "I don't stop until the work meets the agreed standards. Revisions included.",
      speed: "ON-TIME DELIVERY",
      speedDesc: "I respect your time. Deadlines are taken seriously."
    },
    payment: {
      title: "PAYMENT METHODS",
      desc: "Secure Payment Gateways",
      upi: "UPI ID:",
      copy: "Copy",
      selectCountry: "Select Country for Payment Details",
      payToggle: { india: "India (UPI)", intl: "International (Bank)" }
    },
    legal: {
      title: "LEGAL & POLICIES",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      refund: "Refund Policy",
      cookie: "Cookie Policy",
      disclaimer: "Disclaimer",
      cancellation: "Cancellation Policy",
      privacyContent: "Effective Date: 2026. We strictly value your privacy. All personal data collected (Name, Phone, Documents) is used exclusively for service delivery. We do not sell or share data. Data is retained for 7 days post-service for quality checks and then permanently deleted. Secure encryption is used for all digital transfers.",
      termsContent: "By hiring Arun Ammisetty, you agree to the following: 1. Payment is due upon task completion or as per agreed milestones. 2. Services are provided 'as is' based on user requirements. 3. We reserve the right to refuse work that is illegal or unethical. 4. Client must provide clear instructions to avoid delays.",
      refundContent: "Full refunds are issued if the service is not started within 24 hours of agreement. Partial refunds may be considered if work is incomplete due to our fault. No refunds are provided for completed and approved work, or for third-party costs (e.g., domain registration, print costs).",
      cookieContent: "We use essential local storage cookies only to remember your theme preference (Dark/Light) and language selection. No third-party tracking, advertising, or analytics cookies are used on this portfolio website.",
      disclaimerContent: "Arun Ammisetty acts as a freelance service provider. While every effort is made to ensure 100% accuracy, we are not liable for incidental or consequential damages resulting from the use of our services. Clients are advised to verify all data entry or typed documents before official use.",
      cancellationContent: "Cancellations are accepted with zero penalty if communicated before work commencement. If work has already started, a cancellation fee proportional to the work done (up to 50% of the quote) may apply to cover time and resources utilized."
    },
    servicesData: [
      { id: 101, category: "tech", title: "Web Development", role: "IT Services", desc: "Single page websites, landing pages, or portfolios. Ultra fast & mobile friendly.", rate: 1999, unit: "starts at" },
      { id: 102, category: "tech", title: "App Design", role: "IT Services", desc: "Clean UI/UX design for Android or iOS apps (Figma/Images).", rate: 2499, unit: "starts at" },
      { id: 103, category: "tech", title: "IT Support", role: "Tech Support", desc: "PC/Laptop slow speed fix, software installation, virus cleaning.", rate: 199, unit: "per visit" },
      { id: 104, category: "tech", title: "Remote IT Help", role: "Intl Support", desc: "Remote desktop support for global clients. Virus removal & setup.", rate: 1499, unit: "per hour" },
      { id: 1, category: "office", title: "Data Entry", role: "Data Specialist", desc: "Typing data into Excel/Word. 100% accuracy guaranteed.", rate: 199, unit: "per hour" },
      { id: 2, category: "office", title: "Typing Work", role: "Document Control", desc: "English/Hindi/Marathi typing for legal or college documents.", rate: 20, unit: "per page" },
      { id: 3, category: "office", title: "PPT / Canva", role: "Creative Design", desc: "Professional presentations, posters, and social media banners.", rate: 299, unit: "per design" },
      { id: 4, category: "office", title: "Virtual Assistant", role: "Global Admin", desc: "Email management, scheduling, and research for international clients.", rate: 999, unit: "per hour" },
      { id: 201, category: "daily", title: "Form Filling", role: "Admin Help", desc: "Online govt forms, exam registrations, or KYC updates assistance.", rate: 49, unit: "per form" },
      { id: 202, category: "daily", title: "Errand Runner", role: "Local Help", desc: "Grocery shopping, bank cheque drop, or courier pickup/delivery in Baner.", rate: 99, unit: "per trip" },
      { id: 203, category: "daily", title: "Queue Manager", role: "Local Help", desc: "Standing in queues for tickets, admissions, or government offices.", rate: 149, unit: "per hour" }
    ],
    services: {
      title: "SERVICE CATALOG",
      cat_tech: "Technology & IT",
      cat_office: "Office & Data",
      cat_daily: "Daily Tasks & Errands",
      tech_stack: "Tech & Non-Tech Expert",
      intl_toggle: "Show International Rates"
    },
    contact: {
      title: "CONTACT INFO",
      formTitle: "WhatsApp Inquiry",
      name: "Your Name",
      serviceLabel: "Select Service Needed",
      servicePlaceholder: "Select a service...",
      msg: "Message",
      send: "SEND VIA WHATSAPP",
      addressTitle: "Visit Me",
      address: "Baner, Pune, Maharashtra, 411045",
      mapLabel: "Locate on Map"
    },
    footer: {
      col1: "Company",
      col2: "Services",
      col3: "Legal",
      col4: "Connect",
      col5: "Payments",
      col6: "Resources",
      links: {
        about: "About Me",
        ethics: "My Ethics",
        tech: "IT Services",
        office: "Data Work",
        daily: "Local Errands",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        refund: "Refund Policy"
      },
      parentTitle: "Parent Website",
      copyright: "© 2026 Arun Ammisetty. All Rights Reserved. Registered in Pune, Maharashtra, India. Providing ISO Standard Professional Services since 2020."
    },
    common: { startingAt: "Starts at", perHour: "per hour" }
  },
  hi: {
    nav: { home: "होम", about: "परिचय", services: "सेवाएं", pricing: "मूल्य", ethics: "सिद्धांत", contact: "संपर्क" },
    hero: {
      badge: "काम के लिए उपलब्ध",
      title: "किफायती सेवाएं।",
      subtitle: "अरुण अम्मीसेट्टी द्वारा टेक और नॉन-टेक समाधान।",
      desc: "पुणे में सबसे कम दरों पर उच्च गुणवत्ता वाली आईटी सहायता, डेटा एंट्री और स्थानीय काम।",
      ctaPrimary: "संपर्क करें",
      ctaSecondary: "रेट देखें",
      stats: ["सबसे कम रेट", "तेज़ सेवा", "भरोसेमंद"]
    },
    about: {
      title: "मेरे बारे में",
      desc: "मैं अरुण अम्मीसेट्टी, बानेर, पुणे स्थित एक फ्रीलांसर हूँ। मेरा उद्देश्य लोगों और छोटे व्यवसायों को सस्ती और ईमानदार सेवाएं प्रदान करना है। चाहे आपको वेबसाइट चाहिए हो, टाइपिंग का काम हो, या स्थानीय दौड़-भाग, मैं मदद के लिए यहाँ हूँ।"
    },
    ethics: {
      title: "मेरे सिद्धांत और वादे",
      noHidden: "कोई छुपा शुल्क नहीं",
      noHiddenDesc: "बताई गई कीमतें मानक कार्य के लिए अंतिम हैं। कोई पंजीकरण शुल्क या सुरक्षा जमा नहीं।",
      privacy: "100% गोपनीयता",
      privacyDesc: "आपका डेटा, दस्तावेज़ और व्यक्तिगत विवरण कभी भी किसी तीसरे पक्ष के साथ साझा नहीं किए जाते हैं।",
      quality: "गुणवत्ता आश्वासन",
      qualityDesc: "जब तक काम तय मानकों पर खरा नहीं उतरता, मैं नहीं रुकता। संशोधन शामिल हैं।",
      speed: "समय पर डिलीवरी",
      speedDesc: "मैं आपके समय का सम्मान करता हूं। समय सीमा को गंभीरता से लिया जाता है।"
    },
    payment: {
      title: "भुगतान के तरीके",
      desc: "सुरक्षित भुगतान गेटवे",
      upi: "UPI आईडी:",
      copy: "कॉपी",
      selectCountry: "भुगतान विवरण के लिए देश चुनें",
      payToggle: { india: "भारत (UPI)", intl: "अंतर्राष्ट्रीय (बैंक)" }
    },
    legal: {
      title: "कानूनी और नीतियां",
      privacy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें",
      refund: "रिफंड नीति",
      cookie: "कुकी नीति",
      disclaimer: "अस्वीकरण",
      cancellation: "रद्दीकरण नीति",
      privacyContent: "हम आपकी गोपनीयता का सम्मान करते हैं। एकत्रित किया गया कोई भी व्यक्तिगत डेटा (नाम, फोन, दस्तावेज) केवल सेवा वितरण के लिए उपयोग किया जाता है। हम डेटा बेचते या साझा नहीं करते हैं। गुणवत्ता जांच के लिए डेटा को सेवा के 7 दिन बाद तक रखा जाता है और फिर स्थायी रूप से हटा दिया जाता है।",
      termsContent: "अरुण अम्मीसेट्टी को काम पर रखकर, आप निम्नलिखित से सहमत होते हैं: 1. कार्य पूरा होने पर भुगतान देय है। 2. सेवाएं 'जैसी हैं' वैसी ही प्रदान की जाती हैं। 3. हम अवैध कार्यों से इनकार करने का अधिकार सुरक्षित रखते हैं। 4. ग्राहक को देरी से बचने के लिए स्पष्ट निर्देश प्रदान करने होंगे।",
      refundContent: "पूर्ण रिफंड तभी जारी किया जाता है जब समझौते के 24 घंटों के भीतर सेवा शुरू नहीं की गई हो। यदि हमारी गलती के कारण काम अधूरा है तो आंशिक रिफंड पर विचार किया जा सकता है। पूर्ण और स्वीकृत कार्य के लिए कोई रिफंड नहीं।",
      cookieContent: "हम केवल आपकी थीम पसंद (डार्क/लाइट) और भाषा चयन को याद रखने के लिए आवश्यक स्थानीय कुकीज़ का उपयोग करते हैं। इस पोर्टफोलियो वेबसाइट पर कोई थर्ड-पार्टी ट्रैकिंग या विज्ञापन कुकीज़ का उपयोग नहीं किया जाता है।",
      disclaimerContent: "अरुण अम्मीसेट्टी एक फ्रीलांस सेवा प्रदाता हैं। हालांकि हम 100% सटीकता सुनिश्चित करने का प्रयास करते हैं, हम हमारी सेवाओं के उपयोग से होने वाले किसी भी आकस्मिक नुकसान के लिए उत्तरदायी नहीं हैं। ग्राहकों को सलाह दी जाती है कि वे आधिकारिक उपयोग से पहले सभी कार्यों का सत्यापन करें।",
      cancellationContent: "काम शुरू होने से पहले सूचित करने पर बिना किसी दंड के रद्दीकरण स्वीकार किए जाते हैं। यदि काम पहले ही शुरू हो चुका है, तो उपयोग किए गए समय और संसाधनों को कवर करने के लिए काम के अनुपात में रद्दीकरण शुल्क लागू हो सकता है।"
    },
    servicesData: [
      { id: 101, category: "tech", title: "वेब डेवलपमेंट", role: "आईटी सेवाएं", desc: "सिंगल पेज वेबसाइट, लैंडिंग पेज, या पोर्टफोलियो। अल्ट्रा फास्ट और मोबाइल फ्रेंडली।", rate: 1999, unit: "शुरुआती" },
      { id: 102, category: "tech", title: "ऐप डिज़ाइन", role: "आईटी सेवाएं", desc: "Android या iOS ऐप्स के लिए साफ UI/UX डिज़ाइन (Figma/Images)।", rate: 2499, unit: "शुरुआती" },
      { id: 103, category: "tech", title: "आईटी सपोर्ट", role: "टेक सपोर्ट", desc: "पीसी/लैपटॉप की धीमी गति ठीक करना, सॉफ्टवेयर इंस्टॉलेशन, वायरस हटाना।", rate: 199, unit: "प्रति विज़िट" },
      { id: 104, category: "tech", title: "रिमोट आईटी", role: "अंतर्राष्ट्रीय", desc: "वैश्विक ग्राहकों के लिए रिमोट डेस्कटॉप सहायता। वायरस हटाना और सेटअप।", rate: 1499, unit: "प्रति घंटा" },
      { id: 1, category: "office", title: "डेटा एंट्री", role: "डेटा विशेषज्ञ", desc: "Excel/Word में डेटा टाइप करना। 100% सटीकता की गारंटी।", rate: 199, unit: "प्रति घंटा" },
      { id: 2, category: "office", title: "टाइपिंग कार्य", role: "दस्तावेज़ नियंत्रण", desc: "कानूनी या कॉलेज दस्तावेजों के लिए अंग्रेजी/हिंदी/मराठी टाइपिंग।", rate: 20, unit: "प्रति पेज" },
      { id: 3, category: "office", title: "पीपीटी / कैनवा", role: "रचनात्मक डिज़ाइन", desc: "पेशेवर प्रस्तुतियाँ, पोस्टर और सोशल मीडिया बैनर।", rate: 299, unit: "प्रति डिज़ाइन" },
      { id: 4, category: "office", title: "वर्चुअल असिस्टेंट", role: "ग्लोबल एडमिन", desc: "अंतर्राष्ट्रीय ग्राहकों के लिए ईमेल प्रबंधन, शेड्यूलिंग और शोध।", rate: 999, unit: "प्रति घंटा" },
      { id: 201, category: "daily", title: "फॉर्म भरना", role: "एडमिन मदद", desc: "ऑनलाइन सरकारी फॉर्म, परीक्षा पंजीकरण, या केवाईसी अपडेट में सहायता।", rate: 49, unit: "प्रति फॉर्म" },
      { id: 202, category: "daily", title: "स्थानीय काम", role: "लोकल हेल्प", desc: "किराना खरीदारी, बैंक चेक जमा करना, या बानेर में कूरियर पिकअप/डिलीवरी।", rate: 99, unit: "प्रति ट्रिप" },
      { id: 203, category: "daily", title: "कतार प्रबंधन", role: "लोकल हेल्प", desc: "टिकट, प्रवेश या सरकारी कार्यालयों के लिए कतार में खड़े होना।", rate: 149, unit: "प्रति घंटा" }
    ],
    services: {
      title: "सेवा सूची",
      cat_tech: "तकनीक और आईटी",
      cat_office: "ऑफिस और डेटा",
      cat_daily: "दैनिक कार्य और दौड़-भाग",
      tech_stack: "टेक और नॉन-टेक विशेषज्ञ",
      intl_toggle: "अंतर्राष्ट्रीय दरें दिखाएं"
    },
    contact: {
      title: "संपर्क जानकारी",
      formTitle: "व्हाट्सएप पूछताछ",
      name: "आपका नाम",
      serviceLabel: "आवश्यक सेवा चुनें",
      servicePlaceholder: "एक सेवा चुनें...",
      msg: "संदेश",
      send: "व्हाट्सएप भेजें",
      addressTitle: "पता",
      address: "बानेर, पुणे, महाराष्ट्र, 411045",
      mapLabel: "मैप पर देखें"
    },
    footer: {
      col1: "कंपनी",
      col2: "सेवाएं",
      col3: "कानूनी",
      col4: "जुड़ें",
      col5: "भुगतान",
      col6: "संसाधन",
      links: {
        about: "मेरे बारे में",
        ethics: "मेरे सिद्धांत",
        tech: "आईटी सेवाएं",
        office: "डेटा कार्य",
        daily: "स्थानीय काम",
        privacy: "गोपनीयता नीति",
        terms: "सेवा की शर्तें",
        refund: "रिफंड नीति"
      },
      parentTitle: "मुख्य वेबसाइट",
      copyright: "© 2026 अरुण अम्मीसेट्टी। सर्वाधिकार सुरक्षित। पुणे, महाराष्ट्र, भारत में पंजीकृत। 2020 से आईएसओ मानक पेशेवर सेवाएं प्रदान कर रहा है।"
    },
    common: { startingAt: "शुरुआती", perHour: "प्रति घंटा" }
  },
  mr: {
    nav: { home: "मुख्यपृष्ठ", about: "माहिती", services: "सेवा", pricing: "दर", ethics: "तत्वे", contact: "संपर्क" },
    hero: {
      badge: "उपलब्ध",
      title: "परवडणाऱ्या सेवा.",
      subtitle: "अरुण अम्मीसेट्टी द्वारे टेक आणि नॉन-टेक उपाय.",
      desc: "पुण्यात सर्वात कमी दरात उच्च दर्जाचे आयटी सपोर्ट, डेटा एंट्री आणि स्थानिक कामे.",
      ctaPrimary: "संपर्क साधा",
      ctaSecondary: "दर पहा",
      stats: ["स्वस्त दर", "वेगवान सेवा", "विश्वासार्ह"]
    },
    about: {
      title: "माझ्याबद्दल",
      desc: "मी अरुण अम्मीसेट्टी, बानेर, पुणे येथील फ्रीलान्सर आहे. लोकांना आणि छोट्या व्यवसायांना परवडणाऱ्या आणि प्रामाणिक सेवा देणे हे माझे ध्येय आहे. तुम्हाला वेबसाइट हवी असेल, टायपिंगचे काम असेल किंवा स्थानिक कामे, मी मदतीसाठी येथे आहे."
    },
    ethics: {
      title: "माझी तत्वे आणि वचने",
      noHidden: "कोणतेही छुपे शुल्क नाही",
      noHiddenDesc: "नमूद केलेल्या किमती मानक कामासाठी अंतिम आहेत. कोणतेही नोंदणी शुल्क किंवा सुरक्षा ठेव नाही.",
      privacy: "100% गोपनीयता",
      privacyDesc: "तुमचा डेटा, कागदपत्रे आणि वैयक्तिक तपशील कधीही तृतीय पक्षासोबत शेअर केले जात नाहीत.",
      quality: "गुणवत्ता हमी",
      qualityDesc: "जोपर्यंत काम मान्य मानकांप्रमाणे होत नाही तोपर्यंत मी थांबत नाही. सुधारणा समाविष्ट आहेत.",
      speed: "वेळेवर वितरण",
      speedDesc: "मी तुमच्या वेळेचा आदर करतो. मुदती गांभीर्याने घेतल्या जातात."
    },
    payment: {
      title: "पेमेंट पद्धती",
      desc: "सुरक्षित पेमेंट गेटवे",
      upi: "UPI आयडी:",
      copy: "कॉपी",
      selectCountry: "पेमेंट तपशीलांसाठी देश निवडा",
      payToggle: { india: "भारत (UPI)", intl: "आंतरराष्ट्रीय (बँक)" }
    },
    legal: {
      title: "कायदेशीर आणि धोरणे",
      privacy: "गोपनीयता धोरण",
      terms: "अटी आणि शर्ती",
      refund: "परतावा धोरण",
      cookie: "कुकी धोरण",
      disclaimer: "अस्वीकरण",
      cancellation: "रद्दीकरण धोरण",
      privacyContent: "आम्ही तुमच्या गोपनीयतेचा आदर करतो. अरुण अम्मीसेट्टी यांच्याशी शेअर केलेली कोणतीही वैयक्तिक माहिती (नाव, फोन, कागदपत्रे) केवळ तुमची विनंती केलेली सेवा पूर्ण करण्यासाठी वापरली जाते. कायद्यानुसार आवश्यक असल्याशिवाय आम्ही तुमचा डेटा तृतीय पक्षांना विकत नाही, भाड्याने देत नाही किंवा शेअर करत नाही. प्रकल्प पूर्ण झाल्यानंतर 7 दिवसांनी सर्व डिजिटल फाइल्स हटवल्या जातात.",
      termsContent: "अरुण अम्मीसेट्टी यांना कामावर घेऊन, तुम्ही खालील गोष्टींशी सहमत आहात: 1. काम पूर्ण झाल्यावर पेमेंट देय आहे. 2. सेवा 'जशा आहेत तशा' प्रदान केल्या जातात. 3. बेकायदेशीर कामांना नकार देण्याचा अधिकार आम्ही राखून ठेवतो. 4. विलंब टाळण्यासाठी ग्राहकाने स्पष्ट सूचना देणे आवश्यक आहे.",
      refundContent: "कराराच्या 24 तासांच्या आत सेवा सुरू न झाल्यास पूर्ण परतावा दिला जातो. आमच्या चुकीमुळे काम अपूर्ण असल्यास आंशिक परतावा विचारात घेतला जाऊ शकतो. पूर्ण झालेल्या आणि मंजूर केलेल्या कामासाठी परतावा नाही.",
      cookieContent: "तुमची थीम पसंती (गडद/प्रकाश) आणि भाषा निवड लक्षात ठेवण्यासाठी आम्ही केवळ आवश्यक स्थानिक कुकीज वापरतो. या पोर्टफोलिओ वेबसाइटवर कोणत्याही तृतीय-पक्ष ट्रॅकिंग किंवा जाहिरात कुकीज वापरल्या जात नाहीत.",
      disclaimerContent: "अरुण अम्मीसेट्टी एक फ्रीलांस सेवा प्रदाता म्हणून काम करतात. 100% अचूकता सुनिश्चित करण्यासाठी सर्व प्रयत्न केले जात असताना, आमच्या सेवांच्या वापरामुळे उद्भवणाऱ्या कोणत्याही आकस्मिक नुकसानीसाठी आम्ही जबाबदार नाही. अधिकृत वापरापूर्वी ग्राहकांनी सर्व कामाची पडताळणी करण्याचा सल्ला दिला जातो.",
      cancellationContent: "काम सुरू होण्यापूर्वी कळवल्यास शून्य दंडासह रद्दीकरण स्वीकारले जाते. जर काम आधीच सुरू झाले असेल, तर वापरलेला वेळ आणि संसाधने कव्हर करण्यासाठी कामाच्या प्रमाणात रद्दीकरण शुल्क लागू होऊ शकते."
    },
    servicesData: [
      { id: 101, category: "tech", title: "वेब डेव्हलपमेंट", role: "आयटी सेवा", desc: "सिंगल पेज वेबसाइट, लँडिंग पेज किंवा पोर्टफोलिओ. अल्ट्रा फास्ट आणि मोबाईल फ्रेंडली.", rate: 1999, unit: "सुरुवात" },
      { id: 102, category: "tech", title: "अॅप डिझाइन", role: "आयटी सेवा", desc: "Android किंवा iOS अॅप्ससाठी क्लीन UI/UX डिझाइन (Figma/Images).", rate: 2499, unit: "सुरुवात" },
      { id: 103, category: "tech", title: "आयटी सपोर्ट", role: "टेक सपोर्ट", desc: "पीसी/लॅपटॉपचा स्लो स्पीड ठीक करणे, सॉफ्टवेअर इन्स्टॉलेशन, व्हायरस काढणे.", rate: 199, unit: "प्रति व्हिजिट" },
      { id: 1, category: "office", title: "डेटा एंट्री", role: "डेटा तज्ञ", desc: "Excel/Word मध्ये डेटा टाईप करणे. 100% अचूकतेची हमी.", rate: 199, unit: "प्रति तास" },
      { id: 2, category: "office", title: "टायपिंग काम", role: "कागदपत्रे", desc: "कायदेशीर किंवा कॉलेज कागदपत्रांसाठी इंग्रजी/हिंदी/मराठी टायपिंग.", rate: 20, unit: "प्रति पान" },
      { id: 3, category: "office", title: "PPT / Canva", role: "क्रिएटिव्ह डिझाइन", desc: "व्यावसायिक सादरीकरणे, पोस्टर आणि सोशल मीडिया बॅनर.", rate: 299, unit: "प्रति डिझाइन" },
      { id: 201, category: "daily", title: "फॉर्म भरणे", role: "मदत", desc: "ऑनलाइन सरकारी फॉर्म, परीक्षा नोंदणी किंवा केवायसी अपडेटमध्ये मदत.", rate: 49, unit: "प्रति फॉर्म" },
      { id: 202, category: "daily", title: "स्थानिक कामे", role: "लोकल हेल्प", desc: "किराणा खरेदी, बँक चेक जमा करणे किंवा बानेरमध्ये कुरिअर पिकअप/डिलिव्हरी.", rate: 99, unit: "प्रति ट्रिप" },
      { id: 203, category: "daily", title: "रांग व्यवस्थापक", role: "लोकल हेल्प", desc: "तिकीट, प्रवेश किंवा सरकारी कार्यालयांसाठी रांगेत उभे राहणे.", rate: 149, unit: "प्रति तास" }
    ],
    services: {
      title: "सेवा यादी",
      cat_tech: "तंत्रज्ञान आणि आयटी",
      cat_office: "ऑफिस आणि डेटा",
      cat_daily: "दैनंदिन कामे",
      tech_stack: "टेक आणि नॉन-टेक तज्ञ"
    },
    contact: {
      title: "संपर्क माहिती",
      formTitle: "व्हॉट्सअॅप चौकशी",
      name: "तुमचे नाव",
      serviceLabel: "सेवा निवडा",
      servicePlaceholder: "एक सेवा निवडा...",
      msg: "संदेश",
      send: "व्हॉट्सअॅप पाठवा",
      addressTitle: "पत्ता",
      address: "बानेर, पुणे, महाराष्ट्र, 411045",
      mapLabel: "नकाशावर पहा"
    },
    footer: {
      col1: "कंपनी",
      col2: "सेवा",
      col3: "कायदेशीर",
      col4: "संपर्क",
      col5: "पेमेंट",
      col6: "संसाधने",
      links: {
        about: "माझ्याबद्दल",
        ethics: "तत्वे",
        tech: "आयटी सेवा",
        office: "डेटा काम",
        daily: "स्थानिक मदत",
        privacy: "गोपनीयता धोरण",
        terms: "अटी आणि शर्ती",
        refund: "परतावा धोरण"
      },
      parentTitle: "मुख्य वेबसाइट",
      copyright: "© 2026 अरुण अम्मीसेट्टी. सर्व हक्क राखीव. पुणे, महाराष्ट्र, भारत येथे नोंदणीकृत. 2020 पासून ISO मानक व्यावसायिक सेवा प्रदान करत आहे."
    },
    common: { startingAt: "सुरुवात", perHour: "प्रति तास" }
  },
  te: {
    nav: { home: "హోమ్", about: "నా గురించి", services: "సేవలు", pricing: "ధరలు", ethics: "విలువలు", contact: "సంప్రదించండి" },
    hero: {
      badge: "అందుబాటులో ఉంది",
      title: "సరసమైన సేవలు.",
      subtitle: "అరుణ్ అమ్మిశెట్టి ద్వారా టెక్ & నాన్-టెక్ పరిష్కారాలు.",
      desc: "పూణేలో అతి తక్కువ ధరలకు అధిక నాణ్యత గల IT మద్దతు, డేటా ఎంట్రీ మరియు స్థానిక పనులను అందిస్తున్నాను.",
      ctaPrimary: "నన్ను సంప్రదించండి",
      ctaSecondary: "ధరలను చూడండి",
      stats: ["తక్కువ ధరలు", "వేగవంతమైన సేవ", "నమ్మదగినది"]
    },
    about: {
      title: "నా గురించి",
      desc: "నేను అరుణ్ అమ్మిశెట్టి, బానేర్, పూణేలో ఫ్రీలాన్సర్. ప్రజలకు మరియు చిన్న వ్యాపారాలకు అందుబాటులో ఉండే, సరసమైన మరియు నిజాయితీ గల సేవలను అందించడమే నా లక్ష్యం. మీకు వెబ్‌సైట్ కావాలన్నా, టైపింగ్ పని ఉన్నా, లేదా స్థానిక పనులు ఉన్నా, నేను సహాయం చేయడానికి సిద్ధంగా ఉన్నాను."
    },
    ethics: {
      title: "నా విలువలు & వాగ్దానాలు",
      noHidden: "దాచిన ఫీజులు లేవు",
      noHiddenDesc: "పేర్కొన్న ధరలు ప్రామాణిక పని కోసం అంతిమమైనవి. రిజిస్ట్రేషన్ ఛార్జీలు లేదా సెక్యూరిటీ డిపాజిట్లు లేవు.",
      privacy: "100% గోప్యత",
      privacyDesc: "మీ డేటా, పత్రాలు మరియు వ్యక్తిగత వివరాలు మూడవ పక్షాలతో ఎప్పుడూ భాగస్వామ్యం చేయబడవు.",
      quality: "నాణ్యత హామీ",
      qualityDesc: "పని అంగీకరించిన ప్రమాణాలకు అనుగుణంగా ఉండే వరకు నేను ఆగను. సవరణలు చేర్చబడ్డాయి.",
      speed: "సమయానికి డెలివరీ",
      speedDesc: "నేను మీ సమయాన్ని గౌరవిస్తాను. గడువులను సీరియస్‌గా తీసుకుంటాను."
    },
    payment: {
      title: "చెల్లింపు పద్ధతులు",
      desc: "సురక్షిత చెల్లింపు గేట్‌వేలు",
      upi: "UPI ID:",
      copy: "కాపీ",
      selectCountry: "చెల్లింపు వివరాల కోసం దేశాన్ని ఎంచుకోండి",
      payToggle: { india: "భారతదేశం (UPI)", intl: "అంతర్జాతీయ (బ్యాంకు)" }
    },
    legal: {
      title: "చట్టపరమైన & విధానాలు",
      privacy: "గోప్యతా విధానం",
      terms: "నిబంధనలు",
      refund: "రీఫండ్ పాలసీ",
      cookie: "కుకీ విధానం",
      disclaimer: "నిరాకరణ",
      cancellation: "రద్దు విధానం",
      privacyContent: "మేము మీ గోప్యతను గౌరవిస్తాము. సేకరించిన ఏదైనా వ్యక్తిగత డేటా (పేరు, ఫోన్, పత్రాలు) సేవ డెలివరీ కోసం మాత్రమే ఉపయోగించబడుతుంది. మేము డేటాను విక్రయించము లేదా భాగస్వామ్యం చేయము. నాణ్యత తనిఖీల కోసం సేవ తర్వాత 7 రోజుల పాటు డేటా ఉంచబడుతుంది మరియు తర్వాత శాశ్వతంగా తొలగించబడుతుంది.",
      termsContent: "అరుణ్ అమ్మిశెట్టిని నియమించుకోవడం ద్వారా, మీరు ఈ క్రింది వాటికి అంగీకరిస్తున్నారు: 1. పని పూర్తయిన తర్వాత చెల్లింపు చేయాలి. 2. సేవలు 'ఉన్నది ఉన్నట్లుగా' అందించబడతాయి. 3. చట్టవిరుద్ధమైన పనులను తిరస్కరించే హక్కు మాకు ఉంది. 4. జాప్యాలను నివారించడానికి క్లయింట్ స్పష్టమైన సూచనలను అందించాలి.",
      refundContent: "ఒప్పందం జరిగిన 24 గంటలలోపు సేవ ప్రారంభం కాకపోతే పూర్తి వాపసు ఇవ్వబడుతుంది. మా తప్పు కారణంగా పని అసంపూర్తిగా ఉంటే పాక్షిక వాపసు పరిగణించబడుతుంది. పూర్తయిన మరియు ఆమోదించబడిన పనికి వాపసు లేదు.",
      cookieContent: "మీ థీమ్ ప్రాధాన్యత (డార్క్/లైట్) మరియు భాష ఎంపికను గుర్తుంచుకోవడానికి మేము అవసరమైన స్థానిక కుక్కీలను మాత్రమే ఉపయోగిస్తాము. ఈ పోర్ట్‌ఫోలియో వెబ్‌సైట్‌లో థర్డ్-పార్టీ ట్రాకింగ్ లేదా అడ్వర్టైజింగ్ కుక్కీలు ఉపయోగించబడవు.",
      disclaimerContent: "అరుణ్ అమ్మిశెట్టి ఫ్రీలాన్స్ సర్వీస్ ప్రొవైడర్. 100% ఖచ్చితత్వాన్ని నిర్ధారించడానికి ప్రయత్నిస్తున్నప్పటికీ, మా సేవల వినియోగం వల్ల కలిగే ఏవైనా యాదృచ్ఛిక నష్టాలకు మేము బాధ్యత వహించము. అధికారిక వినియోగానికి ముందు క్లయింట్లు అన్ని పనులను ధృవీకరించుకోవాలని సూచించబడింది.",
      cancellationContent: "పని ప్రారంభించడానికి ముందు తెలియజేస్తే ఎటువంటి పెనాల్టీ లేకుండా రద్దు అంగీకరించబడుతుంది. పని అప్పటికే ప్రారంభమైతే, ఉపయోగించిన సమయం మరియు వనరులను కవర్ చేయడానికి పనికి అనుగుణంగా రద్దు రుసుము వర్తించవచ్చు."
    },
    servicesData: [
      { id: 101, category: "tech", title: "వెబ్ డెవలప్‌మెంట్", role: "IT సేవలు", desc: "సింగిల్ పేజీ వెబ్‌సైట్లు, ల్యాండింగ్ పేజీలు లేదా పోర్ట్‌ఫోలియోలు. అల్ట్రా ఫాస్ట్ & మొబైల్ ఫ్రెండ్లీ.", rate: 1999, unit: "ప్రారంభ ధర" },
      { id: 102, category: "tech", title: "యాప్ డిజైన్", role: "IT సేవలు", desc: "Android లేదా iOS యాప్‌ల కోసం క్లీన్ UI/UX డిజైన్ (Figma/Images).", rate: 2499, unit: "ప్రారంభ ధర" },
      { id: 103, category: "tech", title: "IT మద్దతు", role: "టెక్ సేవలు", desc: "PC/ల్యాప్‌టాప్ నెమ్మదిగా ఉంటే సరిచేయడం, సాఫ్ట్‌వేర్ ఇన్‌స్టాలేషన్, వైరస్ తొలగింపు.", rate: 199, unit: "సందర్శనకు" },
      { id: 1, category: "office", title: "డేటా ఎంట్రీ", role: "డేటా స్పెషలిస్ట్", desc: "Excel/Wordలో డేటాను టైప్ చేయడం. 100% ఖచ్చితత్వం.", rate: 199, unit: "గంటకు" },
      { id: 2, category: "office", title: "టైపింగ్ పని", role: "డాక్యుమెంట్ పని", desc: "లీగల్ లేదా కాలేజీ డాక్యుమెంట్ల కోసం ఇంగ్లీష్/హిందీ/మరాఠీ టైపింగ్.", rate: 20, unit: "పేజీకి" },
      { id: 3, category: "office", title: "PPT / Canva", role: "డిజైన్", desc: "ప్రొఫెషనల్ ప్రెజెంటేషన్లు, పోస్టర్లు మరియు సోషల్ మీడియా బ్యానర్లు.", rate: 299, unit: "డిజైన్‌కు" },
      { id: 201, category: "daily", title: "ఫారమ్ నింపడం", role: "అడ్మిన్ సహాయం", desc: "ఆన్‌లైన్ ప్రభుత్వ ఫారమ్‌లు, పరీక్ష రిజిస్ట్రేషన్‌లు లేదా KYC అప్‌డేట్‌లు.", rate: 49, unit: "ఫారమ్‌కు" },
      { id: 202, category: "daily", title: "స్థానిక పనులు", role: "లోకల్ హెల్ప్", desc: "కిరాణా షాపింగ్, బ్యాంక్ చెక్ డ్రాప్, లేదా బానేర్‌లో కొరియర్ పికప్/డెలివరీ.", rate: 99, unit: "ట్రిప్‌కు" },
      { id: 203, category: "daily", title: "క్యూ మేనేజర్", role: "లోకల్ హెల్ప్", desc: "టిక్కెట్లు, అడ్మిషన్లు లేదా ప్రభుత్వ కార్యాలయాల కోసం క్యూలో నిలబడటం.", rate: 149, unit: "గంటకు" }
    ],
    services: {
      title: "సేవల జాబితా",
      cat_tech: "టెక్నాలజీ & IT",
      cat_office: "ఆఫీస్ & డేటా",
      cat_daily: "రోజువారీ పనులు",
      tech_stack: "టెక్ & నాన్-టెక్ నిపుణుడు"
    },
    contact: {
      title: "సంప్రదింపు వివరాలు",
      formTitle: "వాట్సాప్ విచారణ",
      name: "మీ పేరు",
      serviceLabel: "సేవను ఎంచుకోండి",
      servicePlaceholder: "సేవను ఎంచుకోండి...",
      msg: "సందేశం",
      send: "వాట్సాప్ పంపండి",
      addressTitle: "చిరునామా",
      address: "బానేర్, పూణే, మహారాష్ట్ర, 411045",
      mapLabel: "మ్యాప్‌లో చూడండి"
    },
    footer: {
      col1: "కంపెనీ",
      col2: "సేవలు",
      col3: "చట్టపరమైన",
      col4: "కనెక్ట్",
      col5: "చెల్లింపులు",
      col6: "వనరులు",
      links: {
        about: "నా గురించి",
        ethics: "విలువలు",
        tech: "IT సేవలు",
        office: "డేటా పని",
        daily: "స్థానిక పనులు",
        privacy: "గోప్యతా విధానం",
        terms: "నిబంధనలు",
        refund: "రీఫండ్ పాలసీ"
      },
      parentTitle: "ప్రధాన వెబ్‌సైట్",
      copyright: "© 2026 అరుణ్ అమ్మిశెట్టి. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి. పూణే, మహారాష్ట్ర, భారతదేశంలో నమోదు చేయబడింది. 2020 నుండి ISO ప్రామాణిక ప్రొఫెషనల్ సేవలను అందిస్తోంది."
    },
    common: { startingAt: "ప్రారంభ ధర", perHour: "గంటకు" }
  }
};

// --- COMPONENTS ---

const NeubrutalButton = ({ children, onClick, color = "bg-white", className = "" }) => (
  <button 
    onClick={onClick}
    className={`
      ${color} border-2 border-black px-6 py-3 font-bold text-black 
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
      hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none 
      transition-all active:bg-black active:text-white
      uppercase tracking-wider ${className}
    `}
  >
    {children}
  </button>
);

const NeubrutalCard = ({ children, className = "", color = "bg-white" }) => (
  <div className={`
    ${color} border-2 border-black p-6 
    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
    rounded-none ${className}
  `}>
    {children}
  </div>
);

// Custom Two-Line Hamburger
const TwoLineMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
    <line x1="3" y1="8" x2="21" y2="8" />
    <line x1="3" y1="16" x2="21" y2="16" />
  </svg>
);

export default function App() {
  const [lang, setLang] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLegalDoc, setCurrentLegalDoc] = useState('privacy');
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', service: '', message: '' });
  const [selectedCountry, setSelectedCountry] = useState('India'); // Default country
  
  const [intlMode, setIntlMode] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [paymentMethod, setPaymentMethod] = useState('india'); // 'india' or 'intl'

  const t = translations[lang];

  const cycleLang = () => {
    const order = ['en', 'hi', 'mr', 'te'];
    const nextIndex = (order.indexOf(lang) + 1) % order.length;
    setLang(order[nextIndex]);
  };

  const LangLabel = { en: "English", hi: "हिंदी", mr: "मराठी", te: "తెలుగు" };
  const toggleDark = () => setDarkMode(!darkMode);
  
  const navigate = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo(0,0);
  };

  const openLegal = (doc) => {
    setCurrentLegalDoc(doc);
    setCurrentPage('legal');
    window.scrollTo(0,0);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phone = "918329004424";
    const text = `Name: ${formData.name}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };
  
  // Helper to format currency
  const formatPrice = (priceInINR) => {
    if (!intlMode) return `₹${priceInINR}`;
    
    const rate = currencyRates[selectedCurrency].rate;
    const symbol = currencyRates[selectedCurrency].symbol;
    const converted = (priceInINR * rate).toFixed(2);
    
    return `${symbol}${converted}`;
  };

  // --- PAGES ---

  const HomePage = () => (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 animate-in fade-in zoom-in duration-300">
      <div className={`
        inline-block px-4 py-2 border-2 border-black font-black mb-6 transform -rotate-2
        ${darkMode ? 'bg-blue-600 text-white' : 'bg-black text-white'}
      `}>
        {t.hero.badge}
      </div>
      
      <h1 className={`
        text-5xl md:text-8xl font-black mb-6 leading-none
        ${darkMode ? 'text-white' : 'text-black'}
      `}>
        {t.hero.title}
      </h1>
      
      <h2 className={`
        text-xl md:text-3xl font-bold mb-8 inline-block px-4 py-1 border-2 border-black
        ${darkMode ? 'bg-white text-black' : 'bg-blue-600 text-white'}
      `}>
        {t.hero.subtitle}
      </h2>

      <p className={`max-w-2xl text-xl font-medium mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        {t.hero.desc}
      </p>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {t.hero.stats.map((stat, idx) => (
          <div key={idx} className={`
            border-2 border-black px-4 py-2 font-bold
            ${darkMode ? 'bg-gray-900 text-white border-white' : 'bg-white text-black'}
          `}>
            {stat}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <NeubrutalButton onClick={() => navigate('contact')} color="bg-blue-600" className="text-white">
          {t.hero.ctaPrimary}
        </NeubrutalButton>
        <NeubrutalButton onClick={() => navigate('services')} color="bg-white">
          {t.hero.ctaSecondary}
        </NeubrutalButton>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="py-12 px-4 max-w-4xl mx-auto animate-in zoom-in duration-300">
      <NeubrutalCard color="bg-white">
        <h2 className="text-4xl font-black mb-6 uppercase border-b-4 border-black pb-2 inline-block">
          {t.about.title}
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
           <div className="w-32 h-32 bg-black text-white flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <User size={64} />
           </div>
           <div>
              <p className="text-xl font-medium leading-relaxed">
                {t.about.desc}
              </p>
              <div className="mt-6 flex gap-4">
                 <div className="bg-blue-100 px-3 py-1 border-2 border-black font-bold text-sm">Pune Based</div>
                 <div className="bg-blue-100 px-3 py-1 border-2 border-black font-bold text-sm">Verified</div>
                 <div className="bg-blue-100 px-3 py-1 border-2 border-black font-bold text-sm">Freelancer</div>
              </div>
           </div>
        </div>
      </NeubrutalCard>
    </div>
  );

  const ServicesPage = () => (
    <div className="py-12 px-4 max-w-7xl mx-auto animate-in slide-in-from-right duration-300">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-8 border-black pb-4">
        <h2 className={`text-5xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
          {t.services.title}
        </h2>
        
        {/* INTERNATIONAL TOGGLE */}
        <div className="flex items-center gap-2 mt-4 md:mt-0">
           <span className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-black'}`}>{t.services.intl_toggle}</span>
           <button 
             onClick={() => setIntlMode(!intlMode)}
             className={`w-12 h-6 rounded-full border-2 border-black flex items-center p-1 transition-colors ${intlMode ? 'bg-green-400' : 'bg-gray-300'}`}
           >
              <div className={`w-3 h-3 bg-black rounded-full transition-transform ${intlMode ? 'translate-x-6' : ''}`}></div>
           </button>
           {intlMode && (
             <select 
               value={selectedCurrency}
               onChange={(e) => setSelectedCurrency(e.target.value)}
               className="border-2 border-black p-1 text-sm font-bold ml-2"
             >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="JPY">JPY (¥)</option>
                <option value="AUD">AUD (A$)</option>
             </select>
           )}
        </div>
      </div>

      {/* CATEGORY: TECH */}
      <div className="mb-12">
         <h3 className={`text-2xl font-black mb-6 uppercase ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>{t.services.cat_tech}</h3>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.servicesData.filter(s => s.category === 'tech').map((item) => (
               <ServiceItem key={item.id} item={item} darkMode={darkMode} />
            ))}
         </div>
      </div>

      {/* CATEGORY: OFFICE */}
      <div className="mb-12">
         <h3 className={`text-2xl font-black mb-6 uppercase ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>{t.services.cat_office}</h3>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.servicesData.filter(s => s.category === 'office').map((item) => (
               <ServiceItem key={item.id} item={item} darkMode={darkMode} />
            ))}
         </div>
      </div>

      {/* CATEGORY: DAILY */}
      <div className="mb-12">
         <h3 className={`text-2xl font-black mb-6 uppercase ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>{t.services.cat_daily}</h3>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.servicesData.filter(s => s.category === 'daily').map((item) => (
               <ServiceItem key={item.id} item={item} darkMode={darkMode} />
            ))}
         </div>
      </div>
    </div>
  );

  const ServiceItem = ({ item, darkMode }) => {
    const IconComponent = iconMap[item.id] || Zap;
    return (
      <NeubrutalCard color={darkMode ? "bg-gray-900" : "bg-white"} className="flex flex-col h-full hover:-translate-y-1 transition-transform">
        <div className={`w-14 h-14 border-2 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${darkMode ? 'bg-black text-white' : 'bg-blue-600 text-white'}`}>
          <IconComponent size={28} />
        </div>
        <h3 className={`text-xl font-black mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>{item.title}</h3>
        <span className={`text-xs font-bold uppercase tracking-widest mb-3 block border-b-2 ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'} pb-2`}>
          {item.role}
        </span>
        <p className={`font-medium mb-4 flex-grow text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {item.desc}
        </p>
        <div className={`border-2 border-black p-2 text-center font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-50 text-black'}`}>
          {item.unit} {formatPrice(item.rate)}
        </div>
      </NeubrutalCard>
    );
  };

  const PricingPage = () => (
    <div className="py-12 px-4 max-w-5xl mx-auto animate-in slide-in-from-bottom duration-300">
      <div className="flex flex-col items-center mb-12">
        <h2 className={`text-5xl font-black mb-4 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
          {t.nav.pricing}
        </h2>
        
        {/* INTERNATIONAL TOGGLE */}
        <div className="flex items-center gap-2">
           <span className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-black'}`}>{t.services.intl_toggle}</span>
           <button 
             onClick={() => setIntlMode(!intlMode)}
             className={`w-12 h-6 rounded-full border-2 border-black flex items-center p-1 transition-colors ${intlMode ? 'bg-green-400' : 'bg-gray-300'}`}
           >
              <div className={`w-3 h-3 bg-black rounded-full transition-transform ${intlMode ? 'translate-x-6' : ''}`}></div>
           </button>
           {intlMode && (
             <select 
               value={selectedCurrency}
               onChange={(e) => setSelectedCurrency(e.target.value)}
               className="border-2 border-black p-1 text-sm font-bold ml-2"
             >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="JPY">JPY (¥)</option>
                <option value="AUD">AUD (A$)</option>
             </select>
           )}
        </div>
      </div>

      <NeubrutalCard color="bg-blue-100" className="mb-12 text-center">
         <h3 className="text-2xl font-black mb-4 flex items-center justify-center gap-2">{t.payment.title} <CreditCard size={28}/></h3>
         
         <div className="flex justify-center gap-4 mb-6">
            <button 
               onClick={() => setPaymentMethod('india')}
               className={`px-4 py-2 border-2 border-black font-bold text-sm ${paymentMethod === 'india' ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
               {t.payment.payToggle.india}
            </button>
            <button 
               onClick={() => setPaymentMethod('intl')}
               className={`px-4 py-2 border-2 border-black font-bold text-sm ${paymentMethod === 'intl' ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
               {t.payment.payToggle.intl}
            </button>
         </div>

         {paymentMethod === 'india' ? (
           <>
             <p className="font-bold mb-4">{t.payment.desc}</p>
             <div className="flex flex-wrap justify-center gap-4 mb-6">
                {[
                  {name: 'PhonePe', src: 'public/ph.png'},
                  {name: 'WhatsApp', src: 'public/wa.png'},
                  {name: 'BHIM', src: 'public/bhim.jpeg'},
                  {name: 'GPAY', src: 'public/intl.png'}
                ].map((pay) => (
                    <div key={pay.name} className="bg-white border-2 border-black p-2 shadow-sm w-32">
                        <img 
                            src={pay.src} 
                            alt={`${pay.name} QR Code`}
                            className="w-full h-auto mb-2"
                            onError={(e) => {
                              e.target.onerror = null; 
                              e.target.src=`https://placehold.co/100x100/2563EB/FFFFFF?text=${pay.name}`;
                            }}
                        />
                        <p className="text-xs font-bold">{pay.name}</p>
                    </div>
                ))}
             </div>
             <div className="inline-block bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-mono font-bold text-lg break-all">{t.payment.upi} <span className="bg-yellow-200 px-1">918329004424@waicici</span></p>
             </div>
           </>
         ) : (
           <>
              <p className="font-bold mb-4">International Payment Methods</p>
              
              {/* PayPal QR Code */}
              <div className="flex justify-center mb-6">
                  <div className="bg-white border-2 border-black p-2 shadow-sm w-40">
                      <img 
                          src="public/paypal.png" 
                          alt="PayPal QR Code"
                          className="w-full h-auto mb-2"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src=`public/paypal.png`;
                          }}
                      />
                      <p className="text-xs font-bold">PayPal</p>
                  </div>
              </div>

              <div className="text-left bg-white border-2 border-black p-4 mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto space-y-6">
                
                {/* UAE */}
                <div className="border-b-2 border-gray-200 pb-4">
                  <h4 className="font-black text-lg mb-2">UAE (United Arab Emirates)</h4>
                  <p className="text-sm"><span className="font-bold">Bank:</span> Standard Chartered</p>
                  <p className="text-sm"><span className="font-bold">Address:</span> Standard Chartered Tower, Emaar Square Dubai, UAE</p>
                  <p className="text-sm"><span className="font-bold">SWIFT:</span> SCBLAEADXXX</p>
                  <p className="text-sm"><span className="font-bold">IBAN:</span> AE550446420010001414704</p>
                  <p className="text-sm"><span className="font-bold">Beneficiary:</span> Arun Ammisetty</p>
                </div>

                {/* Australia */}
                <div className="border-b-2 border-gray-200 pb-4">
                  <h4 className="font-black text-lg mb-2">Australia</h4>
                  <p className="text-sm"><span className="font-bold">Bank:</span> Citibank</p>
                  <p className="text-sm"><span className="font-bold">Address:</span> 2 Park Street, Sydney NSW 2000</p>
                  <p className="text-sm"><span className="font-bold">BSB:</span> 248024</p>
                  <p className="text-sm"><span className="font-bold">Account:</span> 10516966</p>
                  <p className="text-sm"><span className="font-bold">Beneficiary:</span> Arun Ammisetty</p>
                </div>

                {/* Japan */}
                <div className="border-b-2 border-gray-200 pb-4">
                  <h4 className="font-black text-lg mb-2">Japan</h4>
                  <p className="text-sm"><span className="font-bold">Bank:</span> MUFG Bank, Ltd.</p>
                  <p className="text-sm"><span className="font-bold">Address:</span> 7-1 Marunouchi 2-Chome, Chiyoda-ku Tokyo, Japan</p>
                  <p className="text-sm"><span className="font-bold">Bank Code:</span> 0005</p>
                  <p className="text-sm"><span className="font-bold">Branch:</span> 869</p>
                  <p className="text-sm"><span className="font-bold">Account:</span> 4674430 (Savings)</p>
                  <p className="text-sm"><span className="font-bold">Beneficiary:</span> ﾍﾟｲｵﾆｱ ｼﾞﾔﾊﾟﾝ(ｶ</p>
                </div>

                {/* Eurozone */}
                <div>
                  <h4 className="font-black text-lg mb-2">Eurozone</h4>
                  <p className="text-sm"><span className="font-bold">Bank:</span> Banking Circle S.A.</p>
                  <p className="text-sm"><span className="font-bold">Address:</span> 2, Boulevard de la Foire L-1528 LUXEMBOURG</p>
                  <p className="text-sm"><span className="font-bold">IBAN:</span> LU744080000045726924</p>
                  <p className="text-sm"><span className="font-bold">BIC:</span> BCIRLULL</p>
                  <p className="text-sm"><span className="font-bold">Beneficiary:</span> Arun Ammisetty</p>
                </div>
              </div>
           </>
         )}
      </NeubrutalCard>

      <div className="space-y-4">
        {t.servicesData.map((item, idx) => {
          const IconComponent = iconMap[item.id] || Zap;
          return (
            <div key={idx} className={`
              flex flex-col md:flex-row items-center justify-between p-4 border-2 border-black
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
              ${darkMode ? 'bg-gray-900 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'bg-white'}
            `}>
              <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
                <div className={`p-3 border-2 border-black ${darkMode ? 'bg-black text-white' : 'bg-blue-600 text-white'} hidden md:block`}>
                  <IconComponent size={20} />
                </div>
                <div className="text-left">
                  <h3 className={`text-xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>{item.title}</h3>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.unit}</p>
                </div>
              </div>
              
              <div className={`
                text-2xl font-black px-4 py-1 border-b-4 border-blue-500
                ${darkMode ? 'text-white' : 'text-black'}
              `}>
                {formatPrice(item.rate)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const EthicsPage = () => (
    <div className="py-12 px-4 max-w-4xl mx-auto animate-in zoom-in duration-300">
      <NeubrutalCard color="bg-white" className="!p-0 overflow-hidden">
        <div className="bg-black text-white p-8 border-b-4 border-black">
          <h2 className="text-4xl font-black uppercase tracking-tighter">{t.ethics.title}</h2>
        </div>
        
        <div className="p-8 space-y-8">
          <div className="flex gap-6 items-start">
            <div className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ShieldCheck size={32} className="text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-black mb-2">{t.ethics.noHidden}</h3>
              <p className="text-lg font-medium text-gray-800">
                {t.ethics.noHiddenDesc}
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <User size={32} className="text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-black mb-2">{t.ethics.privacy}</h3>
              <p className="text-lg font-medium text-gray-800">
                {t.ethics.privacyDesc}
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CheckCircle size={32} className="text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-black mb-2">{t.ethics.quality}</h3>
              <p className="text-lg font-medium text-gray-800">
                {t.ethics.qualityDesc}
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Clock size={32} className="text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-black mb-2">{t.ethics.speed}</h3>
              <p className="text-lg font-medium text-gray-800">
                {t.ethics.speedDesc}
              </p>
            </div>
          </div>
        </div>
      </NeubrutalCard>
    </div>
  );

  const LegalPage = () => (
    <div className="py-12 px-4 max-w-4xl mx-auto animate-in zoom-in duration-300">
      <NeubrutalCard color="bg-white">
        <div className="border-b-4 border-black pb-4 mb-6">
           <h2 className="text-3xl font-black uppercase">{t.legal[currentLegalDoc]}</h2>
        </div>
        <div className="prose font-medium text-lg leading-relaxed">
           <p className="mb-4 font-bold">Effective Date: January 1, 2026</p>
           {/* Fallback to default content if specific key is missing, though keys are added */}
           <p className="mb-6">{t.legal[`${currentLegalDoc}Content`] || t.legal.content}</p>
           
           <div className="bg-gray-100 p-4 border-l-4 border-black mb-6">
              <h4 className="font-bold mb-2 uppercase">Policy Details</h4>
              <p>For specific inquiries regarding {t.legal[currentLegalDoc]}, please contact me directly at ask.aa@tuta.io.</p>
           </div>

           <p>This policy is compliant with Indian IT Act, 2000 and applicable consumer protection laws.</p>
        </div>
      </NeubrutalCard>
    </div>
  );

  const ContactPage = () => (
    <div className="py-12 px-4 max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* CONTACT FORM */}
        <div className={`
          border-4 border-black p-8 
          ${darkMode ? 'bg-gray-900 border-white' : 'bg-white'}
          shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] 
          ${darkMode ? 'shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]' : ''}
        `}>
          <h2 className={`text-4xl font-black mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            {t.contact.title}
          </h2>
          
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            <div>
              <label className={`block font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{t.contact.name}</label>
              <input 
                type="text" 
                required
                className="w-full border-2 border-black p-3 font-bold focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className={`block font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{t.contact.serviceLabel}</label>
              <select 
                required
                className="w-full border-2 border-black p-3 font-bold focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none"
                value={formData.service}
                onChange={e => setFormData({...formData, service: e.target.value})}
              >
                <option value="">{t.contact.servicePlaceholder}</option>
                {t.servicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className={`block font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{t.contact.msg}</label>
              <textarea 
                required
                rows="4"
                className="w-full border-2 border-black p-3 font-bold focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <NeubrutalButton color="bg-blue-600" className="w-full text-white hover:bg-blue-700">
              {t.contact.send}
            </NeubrutalButton>
          </form>
        </div>

        {/* DETAILS SECTION */}
        <div className="space-y-8">
          <NeubrutalCard color="bg-white">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
              <Phone size={28} className="text-blue-600" /> +91 83290 04424
            </h3>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Mail size={28} className="text-blue-600" /> ask.aa@tuta.io
            </h3>
            <div className="border-t-4 border-black pt-4 mt-4">
              <h4 className="font-black uppercase text-gray-500 mb-2">{t.contact.addressTitle}</h4>
              <p className="text-lg font-bold font-mono mb-4">
                Arun Ammisetty<br/>
                {t.contact.address}
              </p>
              {/* GOOGLE MAP IFRAME */}
              <div className="w-full h-48 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588827988!2d73.7683!3d18.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa2a5%3A0x86134b12e3532c14!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baner Pune Map"
                ></iframe>
              </div>
            </div>
          </NeubrutalCard>
        </div>

      </div>
    </div>
  );

  // --- LAYOUT ---

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
      
      {/* NAVBAR */}
      <nav className={`
        fixed top-0 left-0 w-full z-50 border-b-4 border-black
        ${darkMode ? 'bg-gray-900 border-b-white' : 'bg-white'}
      `}>
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div 
            onClick={() => navigate('home')}
            className={`
              text-2xl font-black tracking-tighter cursor-pointer select-none
              ${darkMode ? 'text-white' : 'text-black'}
            `}
          >
            ARUN<span className="text-blue-500">.</span>A
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['home', 'about', 'services', 'pricing', 'ethics', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`
                  font-bold uppercase tracking-wide hover:underline decoration-4 decoration-blue-500 underline-offset-4
                  ${currentPage === page ? 'text-blue-500' : (darkMode ? 'text-white' : 'text-black')}
                `}
              >
                {t.nav[page]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleDark} className={`p-2 border-2 border-black ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={cycleLang} className="px-3 py-2 border-2 border-black font-bold bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px]">
              {LangLabel[lang]}
            </button>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={32} className={darkMode ? 'text-white' : 'text-black'} /> : <div className={darkMode ? 'text-white' : 'text-black'}><TwoLineMenu /></div>}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={`md:hidden absolute top-20 left-0 w-full h-[calc(100vh-80px)] ${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 flex flex-col gap-6`}>
            {['home', 'about', 'services', 'pricing', 'ethics', 'contact'].map(page => (
              <button key={page} onClick={() => navigate(page)} className={`
                text-4xl font-black uppercase text-left border-b-2 border-dashed pb-4
                ${darkMode ? 'text-white border-gray-700' : 'text-black border-gray-300'}
                ${currentPage === page ? 'text-blue-500 pl-4' : ''}
              `}>
                {t.nav[page]}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="pt-28 pb-20">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'ethics' && <EthicsPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'legal' && <LegalPage />}
      </main>

      {/* FOOTER */}
      <footer className={`
        border-t-4 border-black py-12 px-4
        ${darkMode ? 'bg-black text-white border-t-white' : 'bg-white text-black'}
      `}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-8 mb-8 text-left">
           {/* Col 1 */}
           <div className="col-span-2 md:col-span-1">
             <h3 className="font-black text-xl mb-4">ARUN.A</h3>
             <p className="text-sm opacity-75">Professional Services.</p>
           </div>
           
           {/* Col 2 */}
           <div>
             <h3 className="font-bold mb-4 uppercase text-blue-600">{t.footer.col2}</h3>
             <div className="flex flex-col gap-2 text-sm font-medium">
                <button onClick={() => navigate('services')} className="text-left hover:underline">{t.footer.links.tech}</button>
                <button onClick={() => navigate('services')} className="text-left hover:underline">{t.footer.links.office}</button>
                <button onClick={() => navigate('services')} className="text-left hover:underline">{t.footer.links.daily}</button>
             </div>
           </div>

           {/* Col 3 */}
           <div>
             <h3 className="font-bold mb-4 uppercase text-blue-600">{t.footer.col3}</h3>
             <div className="flex flex-col gap-2 text-sm font-medium">
                <button onClick={() => openLegal('privacy')} className="text-left hover:underline">{t.footer.links.privacy}</button>
                <button onClick={() => openLegal('terms')} className="text-left hover:underline">{t.footer.links.terms}</button>
                <button onClick={() => openLegal('refund')} className="text-left hover:underline">{t.footer.links.refund}</button>
                <button onClick={() => openLegal('cookie')} className="text-left hover:underline">{t.legal.cookie}</button>
                <button onClick={() => openLegal('cancellation')} className="text-left hover:underline">{t.legal.cancellation}</button>
             </div>
           </div>

           {/* Col 4 - Payments */}
           <div>
             <h3 className="font-bold mb-4 uppercase text-blue-600">{t.footer.col5}</h3>
             <div className="flex flex-col gap-2 text-sm font-medium">
                <p className="font-bold text-xs uppercase opacity-75">Accepted via</p>
                
                {/* Country Selection */}
                <div className="relative inline-block w-full">
                  <select 
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="block appearance-none w-full bg-white border border-black hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black font-bold text-xs"
                  >
                    <option value="India">India (UPI)</option>
                    <option value="UAE">UAE (Bank Transfer)</option>
                    <option value="Australia">Australia (Bank Transfer)</option>
                    <option value="Japan">Japan (Bank Transfer)</option>
                    <option value="Eurozone">Eurozone (Bank Transfer)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown size={16} />
                  </div>
                </div>

                {selectedCountry === 'India' && (
                  <>
                    <p>PhonePe / WhatsApp Pay</p>
                    <div className="mt-2 p-1 bg-gray-200 border border-black inline-block text-xs font-mono">
                      918329004424@waicici
                    </div>
                    <div className="flex gap-2 mt-2">
                       <img src="public/ph.png" alt="PhonePe" className="w-16 h-16 border border-black"/>
                       <img src="public/wa.png" alt="WhatsApp" className="w-16 h-16 border border-black"/>
                       <img src="public/bhim.jpeg" alt="UPI" className="w-16 h-16 border border-black"/>
                    </div>
                  </>
                )}
                
                {selectedCountry === 'UAE' && (
                  <div className="mt-2 text-xs border-l-2 border-black pl-2">
                    <p className="font-bold">Standard Chartered</p>
                    <p>Standard Chartered Tower, Emaar Square Dubai, UAE</p>
                    <p><span className="font-bold">SWIFT:</span> SCBLAEADXXX</p>
                    <p><span className="font-bold">IBAN:</span> AE550446420010001414704</p>
                    <p><span className="font-bold">Beneficiary:</span> Arun Ammisetty</p>
                    <p className="opacity-75 text-[10px]">ARUN CHANDRASHEKHAR AMMISETTY</p>
                    
                    <div className="mt-4">
                       <p className="font-bold text-xs uppercase opacity-75 mb-2">Or Pay via PayPal</p>
                       <img 
                          src="public/paypal.png" 
                          alt="PayPal QR" 
                          className="w-20 h-20 border border-black"
                          onError={(e) => { e.target.onerror = null; e.target.src=`public/paypal.png`; }}
                       />
                    </div>
                  </div>
                )}

                {selectedCountry === 'Australia' && (
                  <div className="mt-2 text-xs border-l-2 border-black pl-2">
                    <p className="font-bold">Citibank</p>
                    <p>2 Park Street, Sydney NSW 2000</p>
                    <p><span className="font-bold">BSB:</span> 248024</p>
                    <p><span className="font-bold">Account:</span> 10516966</p>
                    <p><span className="font-bold">Beneficiary:</span> Arun Ammisetty</p>
                    <p className="opacity-75 text-[10px]">ARUN CHANDRASHEKHAR AMMISETTY</p>
                    
                    <div className="mt-4">
                       <p className="font-bold text-xs uppercase opacity-75 mb-2">Or Pay via PayPal</p>
                       <img 
                          src="public/paypal.png" 
                          alt="PayPal QR" 
                          className="w-20 h-20 border border-black"
                          onError={(e) => { e.target.onerror = null; e.target.src=`public/paypal.png`; }}
                       />
                    </div>
                  </div>
                )}

                {selectedCountry === 'Japan' && (
                  <div className="mt-2 text-xs border-l-2 border-black pl-2">
                    <p className="font-bold">MUFG Bank, Ltd.</p>
                    <p>7-1 Marunouchi 2-Chome, Chiyoda-ku Tokyo, Japan</p>
                    <p><span className="font-bold">Bank Code:</span> 0005</p>
                    <p><span className="font-bold">Branch Code:</span> 869</p>
                    <p><span className="font-bold">Account:</span> 4674430 (Savings)</p>
                    <p><span className="font-bold">Beneficiary:</span> ﾍﾟｲｵﾆｱ ｼﾞﾔﾊﾟﾝ(ｶ</p>
                    
                    <div className="mt-4">
                       <p className="font-bold text-xs uppercase opacity-75 mb-2">Or Pay via PayPal</p>
                       <img 
                          src="public/paypal.png" 
                          alt="PayPal QR" 
                          className="w-20 h-20 border border-black"
                          onError={(e) => { e.target.onerror = null; e.target.src=`public/paypal.png`; }}
                       />
                    </div>
                  </div>
                )}
                
                {selectedCountry === 'Eurozone' && (
                  <div className="mt-2 text-xs border-l-2 border-black pl-2">
                    <p className="font-bold">Banking Circle S.A.</p>
                    <p>2, Boulevard de la Foire L-1528 LUXEMBOURG</p>
                    <p><span className="font-bold">IBAN:</span> LU744080000045726924</p>
                    <p><span className="font-bold">BIC:</span> BCIRLULL</p>
                    <p><span className="font-bold">Beneficiary:</span> Arun Ammisetty</p>
                    <p className="opacity-75 text-[10px]">ARUN CHANDRASHEKHAR AMMISETTY</p>
                    
                    <div className="mt-4">
                       <p className="font-bold text-xs uppercase opacity-75 mb-2">Or Pay via PayPal</p>
                       <img 
                          src="public/paypal.png" 
                          alt="PayPal QR" 
                          className="w-20 h-20 border border-black"
                          onError={(e) => { e.target.onerror = null; e.target.src=`public/paypal.png`; }}
                       />
                    </div>
                  </div>
                )}
             </div>
           </div>

           {/* Col 5 - Resources */}
           <div>
             <h3 className="font-bold mb-4 uppercase text-blue-600">{t.footer.col6}</h3>
             <div className="flex flex-col gap-2 text-sm font-medium">
                <button onClick={() => navigate('about')} className="text-left hover:underline">{t.footer.links.about}</button>
                <button onClick={() => navigate('ethics')} className="text-left hover:underline">{t.footer.links.ethics}</button>
             </div>
           </div>

           {/* Col 6 */}
           <div>
             <h3 className="font-bold mb-4 uppercase text-blue-600">{t.footer.col4}</h3>
             <div className="flex gap-4 mb-6">
                <a href="https://go.ly/am" target="_blank" className={`p-2 border-2 border-black transition-all hover:bg-black hover:text-white ${darkMode ? 'border-white hover:bg-white hover:text-black' : ''}`}><Globe size={20} /></a>
                <a href="#" className={`p-2 border-2 border-black transition-all hover:bg-black hover:text-white ${darkMode ? 'border-white hover:bg-white hover:text-black' : ''}`}><Linkedin size={20} /></a>
             </div>
             
             <div className="border-2 border-black p-4 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white text-black">
                <p className="text-xs font-bold uppercase mb-1">{t.footer.parentTitle}</p>
                <a href="https://go.ly/am" target="_blank" className="text-lg font-black flex items-center gap-2 hover:text-blue-600">
                  GO.LY/AM <ExternalLink size={16} />
                </a>
             </div>
           </div>
        </div>

        <div className={`border-t-2 border-dashed pt-8 text-center ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
          <p className="font-bold font-mono text-sm uppercase tracking-wide opacity-60">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}