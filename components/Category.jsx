import React, { useState } from 'react';
import classNames from 'classnames';

export default function Category({ className, name, type = 'button', register, error, required }) {
  const [isActive, setIsActive] = useState(false);

  return (
    < input className={classNames(
      'bg-gradient-to-b from-gray-200 to-gray-400 backdrop-blur-md',
      'py-2 px-4 w-screen border border-gray-400',
      'text-sm font-medium text-gray-700',
      'hover:border hover:border-orange-500',
      {
        'bg-gradient-to-b from-orange-300 to-orange-700 backdrop-blur-md text-gray-200': isActive
      },
      { className }
    )}
      value={isActive ? name : ''}
      name={name}
      type={type}
      required={required}
      {...register}
      onClick={() => setIsActive(!isActive)}
    />
  )
}