import React from 'react'

export default function ButtonSend({color, nameButton, OnClick}) {
  const buttonConfig = {
    Blue: "bg-blueP border-blueP",
    Aqua: "bg-aquaP border-aquaP",
    Pink: "bg-rosaP border-rosaP",
    Green: "bg-greenP border-greenP",
  };

  return (
    <button 
    className={`${buttonConfig[color]} border-2 
    rounded font-semibold uppercase
    opacity-6 px-2 py-2 w-auto text-sm`} 
    onClick={OnClick}
    >
      {nameButton}
    </button>
  )
}