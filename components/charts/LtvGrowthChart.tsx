
import React from 'react';
import { LTV_GROWTH_DATA, BRILLIANT_BLUES } from '../../constants';
import { ChartWrapper } from './ChartContainer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';

export const LtvGrowthChart: React.FC = () => {

  return (
    <ChartWrapper className="h-72 md:h-80">
      <LineChart data={LTV_GROWTH_DATA} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
        <XAxis 
            dataKey="name" 
            axisLine={{stroke: "#b0b0b0"}} 
            tickLine={{stroke: "#b0b0b0"}}
            tick={{fill: "#666", fontSize: "0.75rem"}}
        />
        <YAxis 
          tickFormatter={(value: number) => `${value.toLocaleString()}円`} 
          axisLine={{stroke: "#b0b0b0"}} 
          tickLine={{stroke: "#b0b0b0"}}
          tick={{fill: "#666", fontSize: "0.75rem"}}
          width={80}
        />
        <Tooltip
          formatter={(value: number) => `${value.toLocaleString()}円`}
          wrapperStyle={{ outline: "none" }}
          contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '0.25rem', padding: '0.5rem 0.75rem', border: '1px solid #ccc' }}
        />
        <Legend wrapperStyle={{paddingTop: "10px"}} />
        <defs>
            <linearGradient id="colorLtvNormal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={BRILLIANT_BLUES.darkBlue} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={BRILLIANT_BLUES.darkBlue} stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorLtvSubscription" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={BRILLIANT_BLUES.yellow} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={BRILLIANT_BLUES.yellow} stopOpacity={0}/>
            </linearGradient>
        </defs>
        <Line type="monotone" dataKey="通常購入のみ" stroke={BRILLIANT_BLUES.darkBlue} strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        <Area type="monotone" dataKey="通常購入のみ" stroke="none" fill="url(#colorLtvNormal)" />
        <Line type="monotone" dataKey="定期便導入後" stroke={BRILLIANT_BLUES.yellow} strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        <Area type="monotone" dataKey="定期便導入後" stroke="none" fill="url(#colorLtvSubscription)" />
      </LineChart>
    </ChartWrapper>
  );
};