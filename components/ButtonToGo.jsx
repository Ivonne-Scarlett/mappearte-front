import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function ButtonToGo({borderColor, bgColor, children, className, route}) {
  const bgConfig = {
    Blue: 'hover:bg-gradient-to-br from-[#043BF3] via-[#009aff] to-[#031788]',
    Cyan: 'hover:bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-800',
    Pink: 'hover:bg-gradient-to-br from-[#E217F3] via-[#B108A4] to-[#640B5D]',
    Green: 'hover:bg-gradient-to-br from-[#D4D809] via-[#9CE866] to-[#056D02]',
    Orange: 'hover:bg-gradient-to-br from-[#F39B17] via-[#FFAE30] to-[#DFE0DF]'
  }; 

  const borderConfig ={
    Blue: 'border-[#043BF3]',
    Cyan: 'border-cyan-400',
    Pink: 'border-[#E217F3]',
    Green: 'border-greenP',
    Orange: 'border-orangeP'
  }
   
  const router = useRouter();
  const onClick = () => router.push(route);
  return (
    <a 
      className={classNames(
        'bg-white/5 backdrop-blur-md', 
        borderConfig[borderColor],   
        'border-2 rounded-full',
        'cursor-pointer',
        'font-bold text-base text-center uppercase', 
        'px-6 py-2',
        'w-full',
        'transition duration-500 ease-in-out delay-75',
        bgConfig[bgColor],
        className
    )}
    onClick={onClick}
    >
      {children}
    </a>
  )
}