import React from 'react';

export const Divider = ({ title = 'Just for you' }: any) => {
  return (
    <div className="grid gap-4 my-4 grid-cols-Divider grid-rows-Divider">
      <h1 className="text-2xl font-medium text-center uppercase">{title}</h1>
      <span className="w-full h-0 mt-3 border-2 border-[#DEDFE4]"></span>
    </div>
  );
};
