import React, { useState } from 'react';
import classNames from 'classnames';

export default function Category({ className, name, type = 'checkbox', register, error, required }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedOptions, setSelectedOptiones] = useState();

  return (
    
    <div className={classNames(
      'bg-gradient-to-b from-gray-200 to-gray-400 backdrop-blur-md',
      'pt-2 px-4 w-full md:h-10 border border-gray-400',
      'text-sm font-medium text-white',
      'hover:border hover:border-orange-500',
      'placeholder: text-white',
      {
        'bg-gradient-to-b from-orange-300 to-orange-700 backdrop-blur-md text-gray-200': isActive
      },
      { className }
      )}>
      
      <input className={classNames('')}
        placeholder= {name}
        name={name}
        type={type}

        {...register}
        onClick={() => {
          setIsActive(!isActive)  
              
        }}      
      />
      <label className='pl-0 md:pl-1'>
        {name}
      </label>
    </div>
      
  )
}