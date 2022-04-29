import React from 'react'
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Image from 'next/image';

export default function ButtonEdit({route}) {
  const router = useRouter();
  const onClick = () => router.push(route);
  return (
    <a 
    className={classNames(
      'cursor-pointer',
      'transition duration-500 ease-in-out delay-75',
      'rounded-full w-10',
      'hover:bg-backgroundP/30 hover:invert'
    )}
    onClick={onClick}
    >
        <Image 
        src='/icons/edit.png' 
        alt='Icono de editar foto' 
        className={classNames(
          'bg-white mx-auto my-auto rounded-full' ,
          'p-1',
          'border border-gray-500',
        )}
        />
    </a>
  )
}
