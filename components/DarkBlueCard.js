import React from 'react'

export default function DarkBlueCard({children, className}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`bg-[#363558] rounded-xl py-5 px-6 `}>
        Prueba
        {children}
      </div>
    </div>
  )
}
