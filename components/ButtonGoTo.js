import React from 'react';
import { useRouter } from 'next/router'

export default function ButtonToGo({color, children, route}) {
  const buttonConfig = {
    Blue: 'bg-blueP border-blueP ',
    Aqua: 'bg-aquaP border-aquaP opacity-6',
    Pink: 'bg-pinkP border-pinkP',
    Green: 'bg-greenP border-greenP',
    White: 'bg-white border-white',
  }; 
   
  const router = useRouter();
  const onClick = () => router.push(route);
  return (
    <div>
      <button 
      className={`${buttonConfig[color]} w-full border-2
      rounded font-semibold hover:bg-backgroundP 
      px-2 py-2 text-sm uppercase`} 
      onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}