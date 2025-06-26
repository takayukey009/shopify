
import React from 'react';
// Recharts types might not be globally available via UMD, so using 'any' for Recharts components.
// If you have @types/recharts installed, you can use proper types.
// For UMD, Recharts is usually accessed via `window.Recharts`.

interface ChartContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ChartWrapper: React.FC<ChartContainerProps> = ({ children, className }) => {
  const Recharts = (window as any).Recharts;

  if (!Recharts) {
    console.warn("Recharts library not found, chart will not render.");
    return (
      <div className={`relative w-full mx-auto flex items-center justify-center ${className || 'h-[300px] md:h-[350px] max-h-[400px]'}`}>
        <p className="text-sm text-gray-500">Chart is loading...</p>
      </div>
    );
  }
  const { ResponsiveContainer } = Recharts;

  return (
    <div className={`relative w-full mx-auto ${className || 'h-[300px] md:h-[350px] max-h-[400px]'}`}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
};