
import React from 'react';
import { BRILLIANT_BLUES } from '../../constants';

export const KpiCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-center items-center">
      <h3 className="text-[4rem] font-bold" style={{color: BRILLIANT_BLUES.orange}}>+65%</h3>
      <p className="font-bold text-center mt-2 text-[#003f5c]">レビューがある商品のCVR向上率</p>
      <p className="text-sm text-center mt-2 text-[#58508d]">1件でもレビューがあるだけで、購入率は飛躍的に向上します。信頼性が購入の最後のひと押しになります。</p>
    </div>
  );
};
