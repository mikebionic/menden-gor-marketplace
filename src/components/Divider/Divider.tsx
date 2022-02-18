import React from 'react';

export const Divider: React.FC = () => {
  return (
    <div className="grid my-4 grid-cols-Divider grid-rows-Divider">
      <h1 className="text-2xl font-medium text-center uppercase">
        Just for you
      </h1>
      <span className="w-full h-0 mt-3 border-2 border-Divider"></span>
    </div>
  );
};
