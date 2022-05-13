import classNames from 'classnames'
import React from 'react'

export default function Input({ label, type = 'text',name, placeholder, className,register, error, required }) {
  console.log(className)
  return (
    <div className='my-2'>
      <label
        className={classNames(
          'mr-4 mb-4',
        )}
      >
        <span>{label}</span>
      </label>
      <input
        className={classNames(
          'cursor-text h-10',
          'mt-1 pl-4 py-1 peer',
          'outline-2 outline-sky-600',
          'text-gray-900',
          'rounded-md w-full',
          'placeholder-shown:border-gray-500',
          'valid:border-green-500 invalid:border-red-600',
          className
        )}
        placeholder={placeholder}
        name={name}
        type={type}
        required={required}
        {...register}
      />
      {error && <p>{error}</p>}
    </div>
  )
}
