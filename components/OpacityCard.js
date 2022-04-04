import React from 'react'

export default function OpacityCard({children, className}) {
  return (
    <div className={`bg-backgroundP bg-opacity-80 rounded-xl py-5 px-6 ${className}`}>
      {children}
    </div>
  )
}
