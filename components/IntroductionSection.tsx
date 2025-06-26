
import React from 'react';

export const IntroductionSection: React.FC = () => {
  return (
    <section id="introduction" className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#bc5090] to-[#ff6361] bg-clip-text text-transparent">
        はじめに：成長へのロードマップ
      </h2>
      <p className="text-base md:text-lg leading-relaxed text-[#003f5c]">
        「NaturaLuna」様の強みである「自然由来」「日本製」「敏感肌向け」という価値を最大限に活かし、売上を最速で伸ばすための具体的な戦略を、データと共にご提案します。現代のオンラインストア成功の鍵は、「<span className="font-bold text-[#bc5090]">新規顧客の獲得</span>」「<span className="font-bold text-[#ff6361]">購入率の向上</span>」「<span className="font-bold text-[#ffa600]">リピート顧客の育成</span>」の3つのサイクルを高速で回すことです。このインフォグラフィックでは、各ステップで最も効果的な最新施策を可視化しました。
      </p>
    </section>
  );
};
