import React from 'react'
import classNames from 'classnames';

export default function SearchByArtist({onChange, value, onClick}) {
  return (
    <div>
      <form 
      className={classNames(
      'flex w-full'
      )}
      >
        <input 
        type='text'
        placeholder='Buscar por nombre'
        className={classNames(
        'bg-white h-10 w-full',
        'border-t border-b border-l border-gray-200',
        'rounded-l-lg p-4 px-4', 
        'text-gray-800' 
        )}
        onChange={onChange}
        value={value}
        />
        <button className={classNames(
        'hover:bg-white/5 backdrop-blur-md',
        'bg-orangeP font-bold uppercase',
        'border-orange-200  border-t border-b border-r',
        'text-zinc-50 h-10',
        'px-8  rounded-r-lg',
        'transition duration-500 ease-in-out delay-75',
        )}
        onClick={onClick}
        >
        Buscar
        </button>
      </form>
    </div>
  )
}
