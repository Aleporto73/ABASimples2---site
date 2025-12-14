import React from 'react';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ProblemSolution } from './components/ProblemSolution';
import { ClinicalDomains } from './components/ClinicalDomains';
import { ClinicalLibrary } from './components/ClinicalLibrary';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { ComparisonTable } from './components/ComparisonTable';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <FeaturesGrid />
        <ClinicalLibrary />
        <ClinicalDomains />
        <SocialProof />
        <ComparisonTable />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;