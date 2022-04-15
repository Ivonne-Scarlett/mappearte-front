import React from 'react'

export default function OpacityCard({children, className}) {
  return (
    <div className={`bg-backgroundP bg-opacity-80 rounded-xl py-10 px-6 ${className}`}>
      {children}
    </div>
  )
}
