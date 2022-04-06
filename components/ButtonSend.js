import React from 'react'

export default function ButtonSend({color, children, OnClick}) {
  const  buttonConfig = {
    Blue: 'bg-blueP border-blueP',
    Aqua: 'bg-aquaP border-aquaP',
    Pink: 'bg-pinkP border-pinkP',
    Green: 'bg-greenP border-greenP',
    White: 'bg-white border-white',
  };

  return (
    <button 
    className={`${buttonConfig[color]} w-full border-2 
    rounded font-semibold uppercase hover:bg-backgroundP 
    px-2 py-2 text-sm`} 
    onClick={OnClick}
    >
      {children}
    </button>
  )
}