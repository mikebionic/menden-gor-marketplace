import React from 'react';
import { MdStarRate } from 'react-icons/md';
import { FaStarHalfAlt } from 'react-icons/fa';

export const StarRate: React.FC = () => {
  return (
    <div className="flex">
      <MdStarRate className="text-yellow-400" />
      <MdStarRate className="text-yellow-400" />
      <FaStarHalfAlt className="text-yellow-400" />
      <MdStarRate className="text-yellow-400" />
      <MdStarRate />
    </div>
  );
};
