import React from 'react';
import classNames from 'classnames';
import Link from "next/link";

import CreatedBy from '../config/footer.json';

export default function Footer({className}) {
  return (
    <footer className={classNames('w-100', className)}>
      <div className={classNames(
        'bg-gradient-to-r from-[#043BFF] via-pinkP to-greenP',
        'h-1',
        'w-100'
      )} />
      <div className={classNames(
        'bg-[#161644]',
        'flex flex-col md:flex-row justify-between items-center',
        'px-6 md:px-20 py-1'
      )}>
        <div className={classNames(
          'flex flex-row items-center',
          'mt-6 md:mt-0'
        )}>
          <Link href={"/"}><img src='/icons/logoDesktop.png' alt='Logotipo' className='w-[40px]' /></Link>
          <Link href={"/"}><img src='/icons/MappeArteDesktop.png' alt='MappeArte brand' className='pl-1 w-[120px] hidden md:block' /></Link>
        </div>
        <div className='text-sm mt-4 md:mt-0'>
          <p className='text-center'>Creado por:</p>
          <div className='flex flex-row justify-between mt-2'>
            {
              CreatedBy.map((koder, index) => (
                <a href={koder.linkedIn} key={index} className='pr-2' target="_blank" rel="noopener noreferrer">
                  <img src={koder.img} alt={koder.alt} width={koder.width} height={koder.height} className='hover:bg-white' />
                </a>
              ))
            }
          </div>
        </div>
        <div className={classNames(
          'text-sm',
          'flex flex-col',
          'my-5 md:mt-4'
        )}>
          <a 
            href={"avisoprivacidad"}
            target="_blank" rel="noopener noreferrer"
            className={classNames(
            'text-center md:text-right',
            'my-1 md:mt-3',
            'cursor-pointer',
            'hover:text-neonP' 
          )}>
            Aviso de privacidad
          </a>
          <p className={classNames(
            'text-center md:text-right',
            'my-1 md:mb-3'
          )}>
            © 2022 Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

