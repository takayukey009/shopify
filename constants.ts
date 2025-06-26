
export const BRILLIANT_BLUES = {
  darkBlue: '#003f5c',
  purple: '#58508d',
  pink: '#bc5090',
  orange: '#ff6361',
  yellow: '#ffa600',
  lightBg: '#f0f4f8',
  slate50: '#f8fafc', // for bg-slate-50
};

export const TRAFFIC_SOURCE_DATA = [
  { name: 'SNS', value: 40, fill: BRILLIANT_BLUES.pink },
  { name: 'オーガニック検索', value: 30, fill: BRILLIANT_BLUES.darkBlue },
  { name: '有料広告', value: 20, fill: BRILLIANT_BLUES.orange },
  { name: 'リファラル', value: 10, fill: BRILLIANT_BLUES.yellow },
];

export const OFFER_EFFECTIVENESS_LABELS = ['初回限定割引', '送料無料', 'セット割引', '期間限定セール'];

export const OFFER_EFFECTIVENESS_DATA = [
  {
    name: OFFER_EFFECTIVENESS_LABELS[0],
    '新規顧客獲得効果': 85,
    'リピート顧客促進効果': 40,
  },
  {
    name: OFFER_EFFECTIVENESS_LABELS[1],
    '新規顧客獲得効果': 75,
    'リピート顧客促進効果': 55,
  },
  {
    name: OFFER_EFFECTIVENESS_LABELS[2],
    '新規顧客獲得効果': 60,
    'リピート顧客促進効果': 70,
  },
  {
    name: OFFER_EFFECTIVENESS_LABELS[3],
    '新規顧客獲得効果': 50,
    'リピート顧客促進効果': 80,
  },
];

export const LTV_GROWTH_DATA = [
  { name: '1ヶ月目', '通常購入のみ': 3000, '定期便導入後': 3000 },
  { name: '3ヶ月目', '通常購入のみ': 4500, '定期便導入後': 5000 },
  { name: '6ヶ月目', '通常購入のみ': 5500, '定期便導入後': 8000 },
  { name: '9ヶ月目', '通常購入のみ': 6000, '定期便導入後': 11000 },
  { name: '12ヶ月目', '通常購入のみ': 6200, '定期便導入後': 15000 },
];

export const FONT_FAMILY = "'Noto Sans JP', sans-serif";

// Helper for multi-line labels in Recharts custom ticks
export const processAxisLabel = (label: string): string[] => {
    if (typeof label !== 'string' || label.length <= 10) { // Adjusted for axis tick display
        return [label];
    }
    const words = label.split(' ');
    const lines: string[] = [];
    let currentLine = '';
    words.forEach(word => {
        if ((currentLine + word).length > 10 && currentLine.length > 0) {
            lines.push(currentLine.trim());
            currentLine = '';
        }
        currentLine += word + ' ';
    });
    if (currentLine.trim().length > 0) {
        lines.push(currentLine.trim());
    }
    return lines.filter(line => line.length > 0);
};
