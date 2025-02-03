import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};