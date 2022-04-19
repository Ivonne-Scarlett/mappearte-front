import React, {useState} from 'react';
import classNames from 'classnames';

export default function Category({className, label, type = 'text',name, placeholder, register, error, required}) {
  const [isActive, setIsActive] = useState([]);
  
  const handleCategorySelected = (value) => {
    if (categorySelected.includes(value)) {
      const newElements = categorySelected.filter((el) => el !== value)
      const newActive = newActive.filter((el) => el !== value)
      setCategorySelected(newElements)
      setIsActive(newActive)
    } else {
      setCategorySelected([...categorySelected, value])
      setIsActive([...isActive, value])
    }
  }

  return (
    <>
      <div className='inline-flex w-full mb-4 group' role='group'>
        <input type='button' className={classNames(
          ' rounded-l-lg',
          'bg-gradient-to-b from-gray-200 to-gray-400 backdrop-blur-md',
          'py-2 px-4 w-screen border border-gray-400',
          'text-sm font-medium text-gray-700',
          'hover:border hover:border-orange-500',
          isActive.includes('murales') ? 'bg-gradient-to-b from-orange-300 to-orange-700 backdrop-blur-md text-gray-200' : '',
          //categorySelected.includes('murales') ? 'bg-gradient-to-b from-orange-300 to-orange-700 backdrop-blur-md text-gray-200' : '',
          )}
          onClick={() => handleCategorySelected('murales')}
          >
          Murales 
          </input>
        <input className={classNames(
          'border-t border-b border-gray-400',
          'py-2 px-4 text-sm w-screen', 
          'font-medium text-gray-700',
          'bg-gradient-to-b from-gray-200 to-gray-400 backdrop-blur-md', 
          'hover:border hover:border-orange-500',
          isActive.includes('graffiti') ? 'bg-gradient-to-b from-orange-300 to-orange-700 backdrop-blur-md text-gray-200' : '',
          //categorySelected.includes('graffiti') ? 'bg-gradient-to-b from-orange-300 to-orange-700 backdrop-blur-md text-gray-200' : '',
        )}
        onClick={() => handleCategorySelected('graffiti')}       >
          Graffiti 
        </input>
        <input className={classNames(
          'rounded-r-md border border-gray-400', 
          'py-2 px-4 text-sm font-medium text-gray-700 w-screen',
          'bg-gradient-to-b from-gray-200 to-gray-400 backdrop-blur-md',
          'hover:border hover:border-orange-500',
          isActive.includes('sticker') ? 'bg-gradient-to-b from-orange-300 to-orange-700 backdrop-blur-md text-gray-200' : '',
          //categorySelected.includes('sticker') ? 'bg-gradient-to-b from-orange-300 to-orange-700 backdrop-blur-md text-gray-200' : '',
        )}
        onClick={() => handleCategorySelected('sticker')}
        >
          Sticker
        </input>
      </div>
    </>
  )
}