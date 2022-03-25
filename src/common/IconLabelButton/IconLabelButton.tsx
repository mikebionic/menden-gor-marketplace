import React from 'react';

interface IButtonProps {
  onClick?: () => void;
  icon?: JSX.Element;
  label?: string;
  className?: any;
  type?: any;
  labelClassName?: string;
  htmlType?: string;
}

export const IconLabelButton: React.FC<IButtonProps> = ({
  onClick,
  icon,
  label,
  className,
  type,
  labelClassName = 'px-1',
}) => {
  return (
    <button onClick={onClick} className={className} type={type ?? 'button'}>
      {icon}
      {label && <span className={labelClassName}>{label}</span>}
    </button>
  );
};

//inline-flex items-center px-2 py-2 font-sans font-semibold text-white transition-transform transform bg-blue-600 rounded-md shadow-lg outline-none hover:bg-blue-500 focus:ring-4 active:scale-75
//inline-grid (for only icon)
