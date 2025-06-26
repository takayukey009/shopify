
import React from 'react';
import { LtvGrowthChart } from './charts/LtvGrowthChart';
import { BRILLIANT_BLUES } from '../constants';

export const RetentionPhase: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-[#003f5c]">Phase 3: リピート顧客の育成 (Retention)</h2>
      <p className="text-center max-w-3xl mx-auto mb-8 text-[#003f5c]">
        新規顧客の獲得コストは年々上昇しています。一度購入してくれたお客様との関係を深め、LTV（顧客生涯価値）を高めることが、持続的な成長の最大の鍵です。スキンケアは消耗品であるため、定期購入（サブスクリプション）モデルとの相性が抜群です。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-[#003f5c]">
          <h3 className="text-xl font-bold mb-2">解説：サブスクリプションの威力</h3>
          <p className="leading-relaxed mb-4">
            定期便モデルは、毎月安定した収益を生み出すだけでなく、顧客との継続的な接点を提供します。メルマガや同梱物を活用し、新商品情報やブランドのこだわりを伝えることで、ファン化を促進できます。
          </p>
          <ul className="space-y-3">
            <li className="flex items-center p-3 rounded-lg" style={{backgroundColor: BRILLIANT_BLUES.slate50}}>
              <span className="text-3xl mr-4">💰</span>
              <div>
                <h4 className="font-bold text-[#58508d]">安定した収益</h4>
                <p className="text-sm">売上予測が立てやすくなり、経営が安定します。</p>
              </div>
            </li>
            <li className="flex items-center p-3 rounded-lg" style={{backgroundColor: BRILLIANT_BLUES.slate50}}>
              <span className="text-3xl mr-4">📈</span>
              <div>
                <h4 className="font-bold text-[#bc5090]">LTV向上</h4>
                <p className="text-sm">一度の獲得で、継続的な売上が見込めます。</p>
              </div>
            </li>
            <li className="flex items-center p-3 rounded-lg" style={{backgroundColor: BRILLIANT_BLUES.slate50}}>
              <span className="text-3xl mr-4">💌</span>
              <div>
                <h4 className="font-bold text-[#ff6361]">顧客との関係構築</h4>
                <p className="text-sm">定期的なコミュニケーションでファンを育成します。</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-center text-[#003f5c]">定期便導入によるLTVの推移</h3>
          <LtvGrowthChart />
        </div>
      </div>
    </section>
  );
};