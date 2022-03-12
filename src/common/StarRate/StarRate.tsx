import React from 'react';
import { Rate } from 'antd';

interface IRateStarProps {
  disabled?: boolean;
  value?: number;
}

export const StarRate: React.FC<IRateStarProps> = ({ disabled = false, value=0 }) => {
  return (
    <div className="px-4">
      <Rate
        allowHalf
        defaultValue={2.5}
        value={value > 0 ? value : 2.5}
        className="text-xs"
        disabled={disabled}
      />
    </div>
  );
};
