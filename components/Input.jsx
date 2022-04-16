import classNames from 'classnames'
import React from 'react'

export default function Input({label, type='text', id, value, placeholder, className, onChange, children}) {
  onChange
  return (
    <>
      <label 
      className={classNames(
        'mr-4 mb-4'
      )}
      >
        <span>{label}</span>
      
        <input 
        className={classNames(
          'cursor-text',
          'mt-1 pl-4 py-1 peer',
          'outline-2 outline-sky-600',
          'text-gray-900',
          'rounded-md w-full', 
          'placeholder-shown:border-gray-500',
          'valid:border-green-500 required:border-red-500',
          'invalid:border-red-600',
          {className}
        )}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value} 
        onChange={onChange}
        />
        {children}
      </label>
    </>
  )
}
