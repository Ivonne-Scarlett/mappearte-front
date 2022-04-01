import React from 'react';
import { useRouter } from 'next/router'

export default function ButtonToGo({color, nameButton, route}) {
  const buttonConfig = {
    Blue: "bg-blueP border-blueP",
    Aqua: "bg-aquaP border-aquaP",
    Pink: "bg-rosaP border-rosaP",
    Green: "bg-greenP border-greenP",
  };
  
  const router = useRouter();
  const onClick = () => router.push(route);
  return (
    <div>
      <button 
      className={`${buttonConfig[color]}  border-2
      rounded font-semibold hover:bg-backgroundP 
      px-2 py-2 w-auto text-sm uppercase`} 
      onClick={onClick}
      >
        {nameButton}
      </button>
    </div>
  )
}