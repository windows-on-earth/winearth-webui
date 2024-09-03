import clsx from 'clsx';

interface SwitchProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  // children: React.ReactNode;
  checkedStatus: boolean
  onToggle: () => void
}

export function Switch({className, checkedStatus, onToggle, ...rest}: SwitchProps) {
  return (
    <label
      {...rest}
      className={clsx(
        "inline-flex cursor-pointer",
        className,
      )}
    >
      <input type="checkbox" value="" className="sr-only peer" id="toggle-switch-checkbox" checked={checkedStatus} onChange={onToggle}/>
      <div 
        className={clsx(
          "relative w-20 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[166%] rtl:peer-checked:after:-translate-x-[150%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
          {
            "flex justify-end content-center" : !checkedStatus,
          },
        )}
      >
        { checkedStatus ? (
          <span className="inline-block ms-3 text-[1.2vmin] font-medium text-gray-900 dark:text-gray-300"
          >Real<br/>Speed</span> ) : (
          <div className="self-center mr-3 inline-block text-[1.2vmin] font-medium text-gray-900 dark:text-gray-300"
          >Fast</div>)
        }
      </div>
    </label>
  )
}