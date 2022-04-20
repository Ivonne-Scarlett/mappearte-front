import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import LoginForm from '../components/form/LoginForm';
import OpacityCard from '../components/OpacityCard';


export default function login() { 
  const router = useRouter(); 
  return (
    <div className={classNames(
      'bg-loginBlur bg-no-repeat bg-cover w-full min-h-screen max-h-screen',
      'py-20 px-4 sm:px-10 object-cover',
      'flex flex-col md:flex-row justify-evenly'
      )}>        
        <div className="w-full sm:w-3/5 min-h-full max-h-full hidden md:block">
          <img src='/img/login-fondo.jpg' alt='Logotipo' className='w-full h-full rounded-l-xl' />
        </div>
        <OpacityCard className={classNames(
          "w-full sm:w-2/5 min-h-full max-h-full px-2 sm:px-12 rounded-l md:rounded-l-none",
          'flex flex-col justify-evenly'
        )}>        
          <div className="flex flex-col justify-between items-center ">
            <img src='/icons/logoDesktop.png' alt='Logotipo' className='w-[40px] md:w-[50px] mb-2' />
            <img src='/icons/MappeArteDesktop.png' alt='MappeArte brand' className='pl-1 w-[120px] md:w-[150px]' /> 
          </div>
          <LoginForm />

          <div className="flex flex-col sm:flex-row justify-center items-center mt-4 text-sm">
            <a>¿Aún no tienes una cuenta?</a>
            <a className="ml-2 text-orangeP hover:text-pinkP cursor-pointer text-sm"  
              onClick={() => router.push('/registerartist')}              
            >
              Registrate aquí
            </a>
          </div>
        </OpacityCard>       
    </div>
  )
}
