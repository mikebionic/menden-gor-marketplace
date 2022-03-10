import React from 'react';
import { Rate } from 'antd';

interface IRateStarProps {
  disabled?: boolean;
}

export const StarRate: React.FC<IRateStarProps> = ({ disabled = false }) => {
  return (
    <div className="px-4">
      <Rate
        allowHalf
        defaultValue={2.5}
        className="text-sm"
        disabled={disabled}
      />
    </div>
  );
};
