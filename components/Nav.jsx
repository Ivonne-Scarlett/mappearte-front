import React, {useState} from 'react';
import Link from "next/link";
import classNames from 'classnames';

const menuItems = require('../config/nav.json');

export default function div () {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = ()=> {
    setMenuOpen(!isMenuOpen)
  }
  const menuCloseHandler = ()=> {
    setMenuClose(false)
  }

  const handleToggle = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <div className={` ${isMenuOpen ? 'h-20' :'h-auto' } w-full fixed top-0 left-0 bg-backgroundP bg-opacity-80  md:h-24 `}>
      <div className='flex justify-between items-start py-4 px-6 md:px-20  '>
        <div className='flex '>
          <img src='/icons/logoMobile.png' alt="logoMobile.png" className='block md:hidden justify-center items-center absolute'/>
          <img src='/icons/MappeArteMobile.png' alt="logoMobile.png" className='block md:hidden pl-12 justify-center items-center min-w-fit h-6 mt-2'/>
          <img src='/icons/logoDesktop.png' alt="logoMobile.png" className='hidden md:block justify-center items-center absolute'/>
          <img src='/icons/MappeArteDesktop.png' alt="logoMobile.png" className='hidden md:block pl-16 justify-center items-center absolute min-w-fit h-12 md:mt-2' />
        </div>   
        <div className='flex flex-col md:flex-row items-center md:mt-4'>
          <button className='' onClick={() => setMenuOpen(!isMenuOpen)}>
            <img src="/icons/menu.png" alt="" className='right-8  top-6 cursor-pointer md:hidden justify-center absolute '/>
          </button>
          <div className={`${isMenuOpen ? 'max-h-full pt-4 md:pt-0 divide-y-2 divide-slate-400/25 bg-backgroundP bg-opacity-80 mt-16 w-64 h-auto ' : 'h-8'}  flex flex-col md:flex-row `}>
            <button className={` bg-aquaP border-2 border-aquaP hover:bg-backgroundP text-backgroundP hover:text-white rounded-sm px-1 mr-16 md:mt-0 md:mr-4 hidden md:block`} >SUBIR FOTO</button>
            <img src="/icons/nofotocolor.png" alt="" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden object-none w-[5.5rem] h-[5.5rem] p-2`}/>               
            <ul className={`${isMenuOpen ? 'block md:hidden' : 'hidden md:block '}  md:flex flex-col md:flex-row items-start md:items-center  list-none`}>
              {menuItems.map(({ link, linkColor, label }, index) => (
                <li
                  className={`hover:underline hover:underline-offset-8 px-2 py-3`}
                  key={`menuItem-${index}`}
                >
                  <Link href={link}>
                    <a className={`${linkColor}  duration-500`}>{label}</a>
                  </Link>
                </li>
              ))}
              <button className={` bg-aquaP border-2 border-aquaP hover:bg-backgroundP text-backgroundP hover:text-white rounded-sm px-1 mr-16 md:mt-0 md:mr-4 block md:hidden mx-4 mt-4`} >SUBIR FOTO</button>
            </ul>
          <img src="/icons/nofotocolor.png" alt="" className='ml-4 invisible md:visible h-12 '/>      
          </div>
        </div>  
      </div>
    </div>
  )
}