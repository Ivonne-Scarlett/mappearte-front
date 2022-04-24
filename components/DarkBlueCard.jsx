import React from 'react';

export default function DarkBlueCard({children, className}) {
  return (
    <>
      <div className=
      {`
      bg-[#20184b] mx-6 md:mx-20 my-6 md:my-10 
      object-contain bg-opacity-60 rounded-xl py-10 px-6 ${className}`}>
        {children}
      </div>
    </>
  )
}

