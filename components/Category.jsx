import React, { useState } from 'react';
import classNames from 'classnames';

export default function Category({ className, name, type = 'checkbox', register, error, required, value }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedOptions, setSelectedOptiones] = useState();

  return (
      <label className={classNames(
        'bg-white',
        'border-[1.6px] border-solid border-white',
        'cursor-pointer',
        'flex justify-center items-center',
        'h-10',
        'rounded-md',
        'text-sm font-medium text-gray-400',
        'w-full',
        'hover:border-pink-500',
        {
          'border-pink-500 bg-gradient-to-br from-pink-300 via-pink-500 to-pink-800 text-white': value
        },
        className
      )}>
        <input className={classNames('appearance-none')}
          placeholder= {name}
          name={name}
          type={type}
          {...register}
        />  
        {name}
      </label>
  )
}