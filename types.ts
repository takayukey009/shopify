
export interface ChartDataItem {
  name: string;
  value?: number;
  fill?: string;
  [key: string]: any; // For additional properties like in bar/line charts
}

// Props for custom axis tick component in Recharts
export interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
  textAnchor?: string;
  orientation?: 'top' | 'bottom' | 'left' | 'right';
  lineHeight?: string | number;
  tickFormatter?: (value: string) => string | string[];
}
