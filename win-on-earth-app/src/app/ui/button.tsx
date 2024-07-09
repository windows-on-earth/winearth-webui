import React from "react";
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({children, className, ...rest}: ButtonProps) {
  return (
    <button 
      {...rest}
      className={clsx(
        "flex items-center rounded-full ",
        className,
      )}
    >
      {children}  
    </button>
  )
}