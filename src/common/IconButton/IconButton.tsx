import React from 'react';

interface IButton {
  icon: JSX.Element;
  color: string;
  hover: string;
  className?: string;
}

export const IconButton: React.FC<IButton> = ({ icon, color, hover }) => {
  return (
    <div className="w-auto h-auto mx-1">
      <div className="flex-1 w-10 h-10 m-auto cursor-pointer">
        <div
          className={`flex items-center justify-center flex-1 h-full p-2 text-white bg-${color} rounded-lg shadow hover:bg-${hover} focus:outline-none`}
        >
          <div className="relative">{icon}</div>
        </div>
      </div>
    </div>
  );
};
