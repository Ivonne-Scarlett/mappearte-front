import React from 'react'

export default function ButtonToGo({color, nameButton, onClick}) {
    const colorConfig = {
      orange: "bg-orangeP hover:border-orangeP",
      pink: "bg-rosaP hover:border-rosaP",
      aqua: "bg-aquaP hover:border-aquaP",
    };
    return (
    <button 
    className={`${colorConfig[color]} bg-aquaP border-2 border-aquaP 
    rounded font-semibold  
    opacity-6 px-2 py-2 w-auto text-sm`} 
    onClick={onClick}
    >
      {nameButton}
    </button>

  )
}