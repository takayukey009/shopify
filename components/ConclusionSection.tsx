
import React from 'react';

export const ConclusionSection: React.FC = () => {
  return (
    <section id="conclusion" className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#bc5090] to-[#ff6361] bg-clip-text text-transparent">
        結論：今日から始めるアクションプラン
      </h2>
      <p className="text-base md:text-lg leading-relaxed mb-6 text-[#003f5c]">
        売上最速向上は、魔法ではなく、データに基づいた具体的な施策の積み重ねによって実現します。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#003f5c]">
        <div className="border-l-4 border-[#bc5090] pl-4">
          <h3 className="font-bold text-lg">Step 1: 集客強化 (1ヶ月目)</h3>
          <p className="text-sm">少額からでもInstagram/TikTok広告を開始し、インフルエンサーに商品のギフティング（無償提供）を打診する。</p>
        </div>
        <div className="border-l-4 border-[#ff6361] pl-4">
          <h3 className="font-bold text-lg">Step 2: CVR改善 (1-2ヶ月目)</h3>
          <p className="text-sm">Shop PayとAmazon Payを有効化。商品ページにレビュー依頼の機能を設置し、最初のレビュー獲得を目指す。</p>
        </div>
        <div className="border-l-4 border-[#ffa600] pl-4">
          <h3 className="font-bold text-lg">Step 3: LTV最大化 (3ヶ月目以降)</h3>
          <p className="text-sm">Shopifyアプリを使い、お得な定期便オプションを導入。初回購入者へのメルマガ配信を自動化する。</p>
        </div>
      </div>
    </section>
  );
};
