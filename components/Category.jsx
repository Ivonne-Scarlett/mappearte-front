import classNames from 'classnames';
import React from 'react';

export default function Category({type='button', className, onClick}) {
  return (
    <>
      <div className={'group'}>
        <button type={type} className={classNames(
          'bg-white py-2 rounded-l-lg',
          'border border-gray-200',
          'py-2 px-4',
          'text-sm font-medium text-gray-900', 
          'focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700',
          'hover:bg-gray-100 hover:text-blue-700', 
          'dark:bg-gray-700 dark:border-gray-600 dark:text-white',
          'dark:hover:text-white dark:hover:bg-gray-600',
          'dark:focus:ring-blue-500 dark:focus:text-white">',
          {className}
        )}
        onClick={onClick}
        >
          Muralista 
        </button>
        <button className={classNames(
          'py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white',
          {className}
          
        )}
        onClick={onClick}
        >
          Graffiti 
        </button>
        <button className={classNames(
          'py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white',
          {className}
        )}
        onClick={onClick}
        >
          Sticker
        </button>
      </div>
    </>
  )
}