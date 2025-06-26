
import React, { useState, useEffect } from 'react';
import { OFFER_EFFECTIVENESS_DATA, BRILLIANT_BLUES } from '../../constants';
import { ChartWrapper } from './ChartContainer';
import { CustomXAxisTick } from './CustomXAxisTick';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const OfferEffectivenessChart: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <ChartWrapper className="h-64 md:h-72">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm text-gray-500">Chart is loading...</p>
        </div>
      </ChartWrapper>
    );
  }

  return (
    <ChartWrapper className="h-64 md:h-72">
      <BarChart data={OFFER_EFFECTIVENESS_DATA} margin={{ top: 5, right: 0, left: 0, bottom: 40 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0"/>
        <XAxis 
          dataKey="name" 
          tick={<CustomXAxisTick />} 
          interval={0} 
          axisLine={{stroke: "#b0b0b0"}} 
          tickLine={{stroke: "#b0b0b0"}}
        />
        <YAxis 
          tickFormatter={(value: number) => `${value}%`} 
          axisLine={{stroke: "#b0b0b0"}} 
          tickLine={{stroke: "#b0b0b0"}}
          tick={{fill: "#666", fontSize: "0.75rem"}}
        />
        <Tooltip
          formatter={(value: number) => `${value}%`}
          wrapperStyle={{ outline: "none" }}
          contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '0.25rem', padding: '0.5rem 0.75rem', border: '1px solid #ccc' }}
        />
        <Legend wrapperStyle={{paddingTop: "10px"}}/>
        <Bar dataKey="新規顧客獲得効果" fill={BRILLIANT_BLUES.orange} radius={[4, 4, 0, 0]} barSize={20} />
        <Bar dataKey="リピート顧客促進効果" fill={BRILLIANT_BLUES.purple} radius={[4, 4, 0, 0]} barSize={20} />
      </BarChart>
    </ChartWrapper>
  );
};