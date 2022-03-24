import React from 'react';
import { Rate } from 'antd';

interface IRateStarProps {
  disabled?: boolean;
  value?: number;
  className?: string;
  starSize?: string;
}

export const StarRate: React.FC<IRateStarProps> = ({
  disabled = false,
  value = 0,
  className = 'px-4',
  starSize = 'text-xs',
}) => {
  return (
    <div className={className}>
      <Rate
        allowHalf
        defaultValue={2.5}
        value={value > 0 ? value : 2.5}
        className={starSize}
        disabled={disabled}
      />
    </div>
  );
};
