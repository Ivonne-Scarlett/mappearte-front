import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import LoginForm from '../components/form/LoginForm';
import OpacityCard from '../components/OpacityCard';

//const router = useRouter();
//const onClick = () => router.push(route);

export default function login() {  
  return (
    <div className={classNames(
      'bg-loginBlur bg-no-repeat bg-cover w-full min-h-screen max-h-screen',
      'py-20 px-4 sm:px-10 object-cover relative',
      )}>
        <div className="absolute inset-y-20 right-0 w-2-3">
          <img src='/img/login-fondo.jpg' alt='Logotipo' className='w-full h-full' />
        </div>

        <OpacityCard className="w-full sm:w-1/2 min-h-full max-h-full px-2 sm:px-16 absolute">        
          <div className="flex flex-col justify-between items-center ">
            <img src='/icons/logoDesktop.png' alt='Logotipo' className='w-[40px] md:w-[50px] mb-4' />
            <img src='/icons/MappeArteDesktop.png' alt='MappeArte brand' className='pl-1 w-[120px] md:w-[200px]' /> 
          </div>
          <LoginForm />

          <div className="flex flex-col md:flex-row md:justify-center items-center mt-4 text-base">
            ¿Aún no tienes una cuenta?
            <a className="ml-2 text-orangeP hover:text-pinkP cursor-pointer"
              //router.push('/registerartist')
              //onClick={onClick()}
            >
              Registrate aquí
            </a>
          </div>
        </OpacityCard>
        
    </div>

  )
}
