import React, {useState} from 'react'
import classNames from 'classnames';

export default function SearchByCategory({onChange}) {
  const [isCategoryOpen, setCategoryOpen] = useState(false)
  const [categoryValue, setCategoryValue] = useState('category')

  const handleCategoryOpen = () => {
    setCategoryOpen=(!isCategoryOpen)
  }
  function logValue() {
    console.log(value);
  }

  return (
    <div>
      <div className={classNames(
        'w-full inline-flex',
        )}
        >
        <button 
        type='button'
        className={classNames(
          'w-screen  rounded-l-lg bg-white text-gray-800'
          )}
          >
          <div className={classNames(
            'border-1 border-solid border-orangeP',
            'flex justify-between pl-2 md:pl-4'
            )}
            >
            <span className={classNames(
              'inline-flex ',
            )}>
              - Categoria - 
            </span>
            <span
            className={classNames(
              'pr-3 md:pr-6',
            )}>
              <img 
              src='../icons/downArrow.png' 
              alt='Flecha hacia abajo'
              
              />
            </span>
          </div>
          
        </button>
        <button className={classNames(
        'hover:bg-white/5 backdrop-blur-md',
        'bg-orangeP font-bold uppercase',
        'border-orange-200  border-t border-b border-r',
        'text-zinc-50 h-10',
        'px-8  rounded-r-lg',
        'transition duration-500 ease-in-out delay-75',
        )}
        onClick={logValue}
        >
        Buscar
        </button>
      </div>
        
      {/* <form>
        <div
        className={classNames(
        ' w-full inline-flex '
        )}
        >
          <div
          className={classNames(
            ' bg-white pr-4 w-screen'
          )}
          >
            <select 
            value={isCategoryOpen}
            onChange={handleCategoryOpen}
            className={classNames(
              'rounded-l-lg text-gray-900', 
              'form-multiselect inline-flex', 
              'w-full h-10 pl-4' 
            )}
            >
              <option 
              value='mural'
              className='p-2 '
              >
                -- Categoria --
              </option>
              <option 
              value='mural'
              className='p-2 mt-3'
              >
                Mural
              </option>
              <option 
              value='graffiti'
              className='p-2 mt-2'
              >
                Graffiti
              </option>
              <option 
              value='sticker'
              className='p-2 mt-2'
              >
                Sticker
              </option>
            </select>
          </div> 
          <button className={classNames(
          'hover:bg-white/5 backdrop-blur-md',
          'bg-orangeP font-bold uppercase',
          'border-orange-200  border-t border-b border-r',
          'text-zinc-50 h-10',
          'px-8 h-10 rounded-r-lg',
          'transition duration-500 ease-in-out delay-75',
          )}
          onClick={logValue}
          >
          Buscar
          </button> 
        </div>
      </form> */}
    </div>
  )
}