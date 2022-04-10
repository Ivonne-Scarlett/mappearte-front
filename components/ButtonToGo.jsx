import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function ButtonToGo({borderColor, bgColor, children, route}) {
  const bgConfig = {
    Blue: 'bg-blueP border-blueP',
    Cyan: 'hover:bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-800',
    Pink: 'hover:bg-gradient-to-br from-[#E217F3] via-[#B108A4] to-[#640B5D]',
    Green: 'bg-greenP border-greenP'
  }; 

  const borderConfig ={
    Blue: 'border-blueP',
    Cyan: 'border-cyan-400',
    Pink: 'border-[#E217F3]',
    Green: 'border-greenP'
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
        'px-6 py-3',
        'w-full',
        'transition duration-500 ease-in-out delay-75',
        bgConfig[bgColor],
    )}
    onClick={onClick}
    >
      {children}
    </a>
  )
}