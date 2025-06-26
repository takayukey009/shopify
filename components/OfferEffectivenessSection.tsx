
import React from 'react';
import { OfferEffectivenessChart } from './charts/OfferEffectivenessChart';

export const OfferEffectivenessSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 h-full">
      <h3 className="text-xl font-bold mb-2 text-center text-[#003f5c]">最も効果的なオファーの種類</h3>
      <p className="text-center max-w-xl mx-auto mb-4 text-sm text-[#003f5c]">
        新規顧客には「購入のハードルを下げる」オファー、リピーターには「ブランドへの愛着を深める」オファーが有効です。
      </p>
      <OfferEffectivenessChart />
    </div>
  );
};
