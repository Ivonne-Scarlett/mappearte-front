import React from 'react';
import { useRouter } from 'next/router'

export default function ButtonToGo({color, nameButton, route}) {
  const buttonConfig = {
    Blue: "bg-blueP hover:border-blueP",
    Aqua: "bg-aquaP hover:border-aquaP",
    Pink: "bg-rosaP hover:border-rosaP",
    Green: "bg-greenP hover:border-greenP",
  };
  
  const router = useRouter();
  const OnClick = () => router.push(route);
  return (
    <div>
      <button 
      className={`${colorConfig[color]} bg-aquaP border-2 border-aquaP 
      rounded font-semibold  
      opacity-6 px-2 py-2 w-auto text-sm`} 
      OnClick={() => router.reload(OnClick)}
      >
        {nameButton}
      </button>
    </div>
    
  )
}