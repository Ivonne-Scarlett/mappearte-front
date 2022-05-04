import React from 'react';
import classNames from 'classnames';

export default function OpacityCard({children, className}) {
  return (
    <div 
    className={classNames(
      'bg-backgroundP bg-opacity-80',
      'px-6 py-5', 
      'rounded-xl',
      className
    )}>
      {children}
    </div>
  )
}