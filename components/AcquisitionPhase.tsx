
import React from 'react';
import { TrafficSourceChart } from './charts/TrafficSourceChart';
import { BRILLIANT_BLUES } from '../../constants';

export const AcquisitionPhase: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-[#003f5c]">Phase 1: 新規顧客の獲得 (Acquisition)</h2>
      <p className="text-center max-w-3xl mx-auto mb-8 text-[#003f5c]">
        ブランドの認知を広げ、質の高い見込み客をサイトに呼び込むことが最初のステップです。特にスキンケアのようなビジュアルが重要な商品は、SNS、特にショート動画の活用が売上を大きく左右します。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-xl font-bold mb-2 text-center text-[#003f5c]">理想的な集客チャネルの割合</h3>
          <TrafficSourceChart />
        </div>
        <div className="order-1 md:order-2 text-[#003f5c]">
          <h3 className="text-xl font-bold mb-2">解説：SNS中心の集客戦略</h3>
          <p className="leading-relaxed mb-4">
            オーガニック検索からの流入は安定的ですが、短期的な成長にはSNS広告とインフルエンサーマーケティングが不可欠です。特にTikTokとInstagramリールは、商品の使用感や世界観を伝えるのに最適で、爆発的な認知度向上に繋がる可能性があります。
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start"><span className="font-bold mr-2" style={{color: BRILLIANT_BLUES.pink}}>●</span><strong>SNS (40%):</strong> インフルエンサー施策と動画広告で潜在顧客にリーチ。</li>
            <li className="flex items-start"><span className="font-bold mr-2" style={{color: BRILLIANT_BLUES.darkBlue}}>●</span><strong>オーガニック検索 (30%):</strong> 「敏感肌 スキンケア」等のキーワードでのSEO対策。</li>
            <li className="flex items-start"><span className="font-bold mr-2" style={{color: BRILLIANT_BLUES.orange}}>●</span><strong>有料広告 (20%):</strong> リターゲティング広告で離脱ユーザーを呼び戻す。</li>
            <li className="flex items-start"><span className="font-bold mr-2" style={{color: BRILLIANT_BLUES.yellow}}>●</span><strong>リファラル (10%):</strong> 口コミや紹介プログラムで信頼性の高い流入を確保。</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
