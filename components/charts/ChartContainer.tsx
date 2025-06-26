
import React, { ReactElement } from 'react';
import { ResponsiveContainer } from 'recharts';

interface ChartContainerProps {
  children: ReactElement;
  className?: string;
}

export const ChartWrapper: React.FC<ChartContainerProps> = ({ children, className }) => {
  return (
    <div className={`relative w-full mx-auto ${className || 'h-[300px] md:h-[350px] max-h-[400px]'}`}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
};