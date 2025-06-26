
import React from 'react';
import { Header } from './components/Header';
import { IntroductionSection } from './components/IntroductionSection';
import { AcquisitionPhase } from './components/AcquisitionPhase';
import { ConversionPhase } from './components/ConversionPhase';
import { KpiCard } from './components/KpiCard';
import { OfferEffectivenessSection } from './components/OfferEffectivenessSection';
import { RetentionPhase } from './components/RetentionPhase';
import { ConclusionSection } from './components/ConclusionSection';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <Header />
      <main className="space-y-12">
        <IntroductionSection />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 lg:col-span-3">
            <AcquisitionPhase />
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <ConversionPhase />
          </div>
          
          <div className="lg:col-span-1 md:col-span-2">
            <KpiCard />
          </div>

          <div className="lg:col-span-2 md:col-span-2">
            <OfferEffectivenessSection />
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <RetentionPhase />
          </div>
        </div>

        <ConclusionSection />
      </main>
    </div>
  );
};

export default App;
