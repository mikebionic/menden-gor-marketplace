import React from 'react';
import { Rate } from 'antd';

export const StarRate: React.FC = () => {
  return (
    <div>
      <Rate allowHalf defaultValue={2.5} className="text-sm" />
    </div>
  );
};
