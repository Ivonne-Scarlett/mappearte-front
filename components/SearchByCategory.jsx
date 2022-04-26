import classNames from 'classnames';
import React, {useState} from 'react';

export default function SelectCategories({onChange, onClick}){

  return(
    <div 
    className={classNames(
      'w-full inline-flex h-10',
      'text-slate-900'
    )}
    >
      <select 
        name='categories' 
        id='category' 
        className={classNames(
          'w-screen bg-white h-10',
          'rounded-l-lg pl-4'
        )}
        onChange={onChange}
      >
        <option 
          value='category' 
          className={classNames(
            'bg-white',
          )}
        >
          -- Todas las categorias --
        </option>
        <option 
          value='mural' 
          className={classNames(
            'bg-white',
          )}
        >
          Murales
        </option>
        <option 
          value='graffiti' 
          className={classNames(
            'bg-white',
          )}
        >
          Graffiti
        </option>
        <option 
          value='sticker' 
          className={classNames(
            'bg-white',
          )}
        >
          Stickers
        </option>
      </select>
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
    </div>
  )
}