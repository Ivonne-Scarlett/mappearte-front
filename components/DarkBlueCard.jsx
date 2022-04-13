import React from 'react';

export default function DarkBlueCard({children, className}) {
  return (
    <>
      <div className={`bg-[url('/img/fondoDarkBlue.jpg')] object-contain bg-opacity-60 rounded-xl py-5 px-6 ${className}`}>
        {children}
      </div>
    </>
  )
}
