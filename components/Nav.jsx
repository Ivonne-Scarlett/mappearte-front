import React, {useState} from 'react';
import Menu from './Menu';

export default function div ({children }) {
  const [isMenuOpen, setMenuOpen] = useState(false)

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
    <div className='w-full fixed top-0 left-0'>
      <div className='flex justify-between items-start  py-4 px-7 mdpx-10'>
        <div className='flex '>
          <img src='/icons/logoMobile.png' alt="logoMobile.png" className='block md:hidden justify-center items-center absolute'/>
          <img src='/icons/MappeArteMobile.png' alt="logoMobile.png" className='block md:hidden pl-12 justify-center items-center min-w-fit h-11 '/>
          <img src='/icons/logoDesktop.png' alt="logoMobile.png" className='hidden md:block justify-center items-center absolute'/>
          <img src='/icons/MappeArteDesktop.png' alt="logoMobile.png" className='hidden md:block pl-16 justify-center items-center absolute min-w-fit h-16' />
        </div>   
        <div className='flex flex-col md:flex-row'>
          <button className='' onClick={() => setMenuOpen(!isMenuOpen)}>
            <img src="/icons/menu.png" alt="" className='right-8 top-6 cursor-pointer md:hidden justify-center absolute '/>
          </button>
          <div className={`${isMenuOpen ? 'max-h-full pt-8 divide-y-2 divide-slate-400/25 md:bg-backgroundP mt-4 w-64' : 'h-8'}  flex flex-col md:flex-row `}>
            <img src="/icons/nofotocolor.png" alt="" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden object-none w-[5.5rem] h-[5.5rem] p-4`}/>      
            <Menu classChange={`${isMenuOpen ? 'block' : 'hidden'} md:flex`}/>
            <img src="/icons/nofotocolor.png" alt="" className='ml-8 invisible md:visible'/>      
          </div>
        </div>  
      </div>
    </div>
  )
}