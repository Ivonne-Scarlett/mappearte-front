import classNames from 'classnames'
import React from 'react'

export default function Input({name, id, value, accept, className, onChange, children}) {
  return (
    <>
      <label 
      className={classNames(
        ''
      )}
      >
        <span>Sube una imagen</span>
      
        <input 
        className={classNames(
          'bg-gradient-to-br from-white to-sky-50',
          'h-10 w-full', 
          'pr-4 rounded-md',
          'text-gray-900',
          'file:bg-gradient-to-b file:from-gray-200 file:to-gray-400 file:backdrop-blur-md',
          'file:border-slate-300',
          'file:px-6 file:mr-4 file:h-10', 
          'file:text-slate-900 file:cursor-pointer',
          'file:focus:bg-gradient-to-b file:focus:from-cyan-300 file:focus:to-cyan-600 file:focus:backdrop-blur-md',
          'file:focus:border-cyan-200',
          'placeholder-shown:border-white',
          {className}
        )}
        type='file'
        id={id}
        value={value} 
        name={name}
        accept={accept}
        placeholder='Selecciona tu Imagen'
        onChange={onChange}
        />
        {children}
      </label>
    </>
  )
}
