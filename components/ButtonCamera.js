import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function ButtonCamera({route}) {
  const router = useRouter();
  const onClick = () => router.push(route);
  return (
    <a 
    className={classNames(
      'bg-white',
      'border border-gray-500',
      'cursor-pointer',
      'p-2',
      'transition duration-500 ease-in-out delay-75',
      'rounded-full',
      'hover:bg-backgroundP/30 hover:invert'
    )}
    onClick={onClick}
    >
      <img 
      src='/icons/camera.png' 
      alt='Icono de editar' 
      className='mx-auto my-auto' 
      />
    </a>
  )
}
