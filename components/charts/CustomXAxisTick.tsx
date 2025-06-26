
import React from 'react';
import { processAxisLabel } from '../constants';
import { CustomTickProps } from '../../types';


export const CustomXAxisTick: React.FC<CustomTickProps> = (props) => {
  const { x, y, payload, textAnchor = "middle" } = props;
  
  if (!payload || typeof payload.value !== 'string') {
    return null;
  }

  const lines = processAxisLabel(payload.value);

  return (
    <g transform={`translate(${x},${y})`}>
      {lines.map((line, index) => (
        <text
          key={index}
          x={0}
          y={0}
          dy={16 + index * 15} // Adjust vertical spacing for lines
          textAnchor={textAnchor}
          fill="#666"
          fontSize="0.75rem" // text-xs
        >
          {line}
        </text>
      ))}
    </g>
  );
};
