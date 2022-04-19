import React from 'react'

export default function OpacityCard({children, className}) {
  return (
    <div className={className(
      'bg-backgroundP bg-opacity-80',
      'px-6 py-5',
      'rounded-xl',
      className
    )}>
      {children}
    </div>
  )
}