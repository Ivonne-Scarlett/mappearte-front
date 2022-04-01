import React from 'react'

export default function ButtonSend({color, nameButton, OnClick}) {
  const buttonConfig = {
    Blue: "bg-blueP hover:border-blueP",
    Aqua: "bg-aquaP hover:border-aquaP",
    Pink: "bg-rosaP hover:border-rosaP",
    Green: "bg-greenP hover:border-greenP",
  };

  return (
    <button 
    className={`${colorConfig[color]} bg-aquaP border-2 border-aquaP 
    rounded font-semibold  
    opacity-6 px-2 py-2 w-auto text-sm`} 
    onClick={OnClick}
    >
      {nameButton}
    </button>
  )
}