import React from 'react';
import classNames from 'classnames';

export default function Hero({children, className}) {
  return (
    <div className={classNames(
      'bg-home-hero bg-cover bg-center bg-no-repeat',
      'flex justify-center md:justify-end',
      'h-96',
      'w-full',
      'px-6 md:px-20',
      'pt-28',
      className
    )}
    >
      {children}
    </div>
  )
}