import React from 'react';

export default function DarkBlueCard({children, className}) {
  return (
    <>
      <div className={`bg-[#363558] rounded-xl py-5 px-6 ${className}`}>
        {children}
      </div>
    </>
  )
}
