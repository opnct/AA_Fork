import React from 'react';

const LegalLayout = ({ title, lastUpdated, children }) => (
    <div className="animate-in fade-in duration-500 pt-40 lg:pt-40 max-w-4xl mx-auto p-8 lg:p-16 min-h-screen">
      <h1 className="text-4xl lg:text-5xl font-black uppercase mb-4">{title}</h1>
      {lastUpdated && <p className="text-gray-500 font-mono text-sm mb-8">Last Updated: {lastUpdated}</p>}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
);

export const PrivacyPolicy = () => (
    <LegalLayout title="Privacy Policy" lastUpdated="January 1, 2026">
        <p>At Arun Ammisetty Portfolio, accessible from arunammisetty.in, one of our main priorities is the privacy of our visitors.</p>
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">Information We Collect</h2>
        <p>When you contact us via the form on this website, we collect personal identification information such as your Name, Email address, and Phone number.</p>
    </LegalLayout>
);

export const TermsOfService = () => (
    <LegalLayout title="Terms of Service" lastUpdated="January 1, 2026">
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Terms</h2>
        <p>By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use.</p>
    </LegalLayout>
);

export const CookiePolicy = () => (
    <LegalLayout title="Cookie Policy" lastUpdated="January 1, 2026">
        <p>This Cookie Policy explains what cookies are and how we use them. You should read this policy so you can understand what type of cookies we use.</p>
    </LegalLayout>
);

export const Disclaimer = () => (
    <LegalLayout title="Disclaimer" lastUpdated="January 1, 2026">
        <p>The information provided by Arun Ammisetty on this website is for general informational purposes only.</p>
    </LegalLayout>
);

export const AcceptableUse = () => (
    <LegalLayout title="Acceptable Use Policy" lastUpdated="January 1, 2026">
        <p>This Acceptable Use Policy covers the security and use of all Arun Ammisetty's products and services.</p>
    </LegalLayout>
);

export const RefundPolicy = () => (
    <LegalLayout title="Refund Policy" lastUpdated="January 1, 2026">
        <p>We issue refunds for contracts within 7 days of the original purchase of the contract if the work has not yet commenced.</p>
    </LegalLayout>
);

export const Copyright = () => (
    <LegalLayout title="Copyright Notice" lastUpdated="January 1, 2026">
        <p>All materials contained on this site are protected by Indian copyright law and may not be reproduced, distributed, transmitted.</p>
    </LegalLayout>
);

export const GDPR = () => (
    <LegalLayout title="GDPR Compliance" lastUpdated="January 1, 2026">
        <p>We are a Data Controller of your information. We will retain your personal information only for as long as is necessary.</p>
    </LegalLayout>
);
