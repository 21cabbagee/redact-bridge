import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RedactorStudio } from './components/RedactorStudio';
import { SafeHarborMatrix } from './components/SafeHarborMatrix';
import { SecuritySpec } from './components/SecuritySpec';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { AuditCertificateModal } from './components/AuditCertificateModal';
import { CABModal } from './components/CABModal';

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isCABModalOpen, setIsCABModalOpen] = useState(false);

  const handleOpenCertificate = (cert) => {
    setSelectedCertificate(cert);
    setIsCertModalOpen(true);
  };

  const handleScrollToStudio = () => {
    const studioEl = document.getElementById('studio');
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Header */}
      <Header 
        onOpenCAB={() => setIsCABModalOpen(true)}
        onScrollToStudio={handleScrollToStudio}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onScrollToStudio={handleScrollToStudio}
          onOpenCAB={() => setIsCABModalOpen(true)}
        />

        {/* Live Scrubbing Studio */}
        <RedactorStudio 
          onOpenCertificate={handleOpenCertificate}
        />

        {/* 18 HIPAA Safe Harbor Specification */}
        <SafeHarborMatrix />

        {/* Zero-Retention Architecture & Comparison */}
        <SecuritySpec />

        {/* Pricing & Customer Advisory Board */}
        <PricingSection 
          onOpenCAB={() => setIsCABModalOpen(true)}
          onScrollToStudio={handleScrollToStudio}
        />
      </main>

      {/* Footer */}
      <Footer 
        onScrollToStudio={handleScrollToStudio}
        onOpenCAB={() => setIsCABModalOpen(true)}
      />

      {/* Cryptographic Verification Modal */}
      <AuditCertificateModal
        certificate={selectedCertificate}
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />

      {/* Customer Advisory Board Modal */}
      <CABModal
        isOpen={isCABModalOpen}
        onClose={() => setIsCABModalOpen(false)}
      />
    </div>
  );
}

export default App;
