
import React from 'react';
import { BRILLIANT_BLUES } from '../constants';

interface FunnelStepProps {
  backgroundColor: string;
  textColor?: string;
  text: string;
  widthClass: string;
}

const FunnelStep: React.FC<FunnelStepProps> = ({ backgroundColor, textColor = 'text-white', text, widthClass }) => (
  <div 
    className={`${textColor} p-3 rounded-lg text-center shadow ${widthClass} mx-auto`}
    style={{ backgroundColor: backgroundColor }}
  >
    <p className="font-bold">{text}</p>
  </div>
);

const FlowArrow: React.FC<{ text: string }> = ({ text }) => (
  <div className="text-center text-2xl leading-none my-1" style={{color: BRILLIANT_BLUES.orange}}>
    ▼ <span className="text-sm text-[#58508d] font-semibold">{text}</span>
  </div>
);

export const ConversionPhase: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-[#003f5c]">Phase 2: 購入率の向上 (Conversion)</h2>
      <p className="text-center max-w-3xl mx-auto mb-8 text-[#003f5c]">
        サイト訪問者を実際の購入客に変えるフェーズです。信頼性の構築と、購入プロセスの徹底的な簡略化が鍵となります。特に初回購入のハードルを下げる工夫が重要です。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-xl font-bold mb-2 text-center text-[#003f5c]">購入ファネルの典型的な離脱ポイント</h3>
          <div className="space-y-0"> {/* Adjusted space for tighter flow arrows */}
            <FunnelStep backgroundColor={BRILLIANT_BLUES.purple} text="商品ページ閲覧 (100%)" widthClass="w-full" />
            <FlowArrow text="60%が離脱" />
            <FunnelStep backgroundColor="#8a7aa7" text="カート追加 (40%)" widthClass="w-2/3" />
            <FlowArrow text="37.5%が離脱" />
            <FunnelStep backgroundColor={BRILLIANT_BLUES.pink} text="チェックアウト開始 (25%)" widthClass="w-1/2" />
            <FlowArrow text="40%が離脱" />
            <FunnelStep backgroundColor={BRILLIANT_BLUES.orange} text="購入完了 (15%)" widthClass="w-1/3" />
          </div>
        </div>
        <div className="text-[#003f5c]">
          <h3 className="text-xl font-bold mb-2">解説：離脱率を改善する3つの鍵</h3>
          <p className="leading-relaxed mb-4">
            カート追加後の離脱率が高いのが一般的です。原因は「予期せぬ送料」「アカウント作成の強制」「決済方法の少なさ」です。これらの障壁を取り除くことで、購入率は劇的に改善します。
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg" style={{backgroundColor: BRILLIANT_BLUES.slate50}}>
              <h4 className="font-bold text-[#bc5090]">1. ソーシャルプルーフの徹底</h4>
              <p className="text-sm">お客様のレビューや使用感の投稿（UGC）を商品ページに積極的に掲載し、信頼性を高めます。レビュー投稿でクーポンを付与する施策は非常に有効です。</p>
            </div>
            <div className="p-4 rounded-lg" style={{backgroundColor: BRILLIANT_BLUES.slate50}}>
              <h4 className="font-bold text-[#ff6361]">2. チェックアウトの最適化</h4>
              <p className="text-sm">Shopify Paymentsに加え、Amazon Payや後払い決済（あと払いペイディ）など、多様な決済手段を導入します。住所入力の手間を省く「Shop Pay」の活用も必須です。</p>
            </div>
            <div className="p-4 rounded-lg" style={{backgroundColor: BRILLIANT_BLUES.slate50}}>
              <h4 className="font-bold text-[#ffa600]">3. 送料無料ラインの明示</h4>
              <p className="text-sm">「あと◯◯円で送料無料」のように、送料無料までの金額を分かりやすく表示し、アップセル（追加購入）を促します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};