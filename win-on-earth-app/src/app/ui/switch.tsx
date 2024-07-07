'use client'
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { InputHTMLAttributes } from 'react';

interface SwitchProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  // children: React.ReactNode;
}

export function Switch({className, ...rest}: SwitchProps) {
  const [isChecked, setChecked] = useState(false);

  const checkHandler = () => {
    setChecked(!isChecked)
  }

  return (
    <label
      {...rest}
      className={clsx(
        "inline-flex cursor-pointer",
        className,
      )}
    >
      <input type="checkbox" value="" className="sr-only peer" id="toggle-switch-checkbox" checked={isChecked} onChange={checkHandler}/>
      <div 
        className={clsx(
          "relative w-20 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[166%] rtl:peer-checked:after:-translate-x-[150%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
          {
            "flex justify-end content-center" : !isChecked,
          },
        )}
      >
        { isChecked ? (
          <span className="inline-block ms-3 text-[1.2vmin] font-medium text-gray-900 dark:text-gray-300"
          >Time<br/>Lapse</span> ) : (
          <div className="self-center mr-2 inline-block text-[1.2vmin] font-medium text-gray-900 dark:text-gray-300"
          >Real<br/>Time</div>)
        }
      </div>
    </label>
  )
}