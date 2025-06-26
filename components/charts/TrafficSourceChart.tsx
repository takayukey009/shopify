
import React, { useState, useEffect } from 'react';
import { TRAFFIC_SOURCE_DATA, BRILLIANT_BLUES } from '../../constants';
import { ChartWrapper } from './ChartContainer';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export const TrafficSourceChart: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <ChartWrapper className="h-64 md:h-80 max-w-md">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm text-gray-500">Chart is loading...</p>
        </div>
      </ChartWrapper>
    );
  }

  return (
    <ChartWrapper className="h-64 md:h-80 max-w-md">
      <PieChart>
        <Pie
          data={TRAFFIC_SOURCE_DATA}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius="80%"
          fill={BRILLIANT_BLUES.purple} // Default fill, overridden by Cell
          dataKey="value"
          nameKey="name"
        >
          {TRAFFIC_SOURCE_DATA.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} stroke={BRILLIANT_BLUES.lightBg} strokeWidth={4}/>
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number, name: string) => [`${value}%`, name]}
          wrapperStyle={{ outline: "none" }}
          contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '0.25rem', padding: '0.5rem 0.75rem', border: '1px solid #ccc' }}
        />
        <Legend wrapperStyle={{paddingTop: "20px"}}/>
      </PieChart>
    </ChartWrapper>
  );
};