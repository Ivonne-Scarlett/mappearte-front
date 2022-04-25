import React from 'react';
import classNames from 'classnames';

export default function DarkBlueCard({children, className}) {
  return (
    <>
      <div className={classNames(
        'bg-[#20184b] bg-opacity-60',
        'mx-6 md:mx-20 my-6 md:my-10',
        'rounded-xl py-10 px-6',
        className
      )}
      >
        {children}
      </div>
    </>
  )
}

