import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import LoginForm from '../components/form/LoginForm';
import OpacityCard from '../components/OpacityCard';

export default function Login() { 
  const router = useRouter(); 
  return (
    <div className={classNames(
      'bg-loginBlur bg-no-repeat bg-cover w-full min-h-screen max-h-screen',
      'py-20 px-4 sm:px-10 object-cover',
      'flex justify-center'
      )}>  

        <div className="w-full md:w-3/5 xl:w-3/6 min-h-full max-h-full hidden md:block">
          <Image src='/img/login-fondo.jpg' alt='Logotipo' className='w-full h-full rounded-l-xl' />
        </div>

        <OpacityCard className={classNames(
          "w-full md:w-2/5 xl:w-2/6 min-h-full max-h-full md:rounded-l-none",
          'flex flex-col justify-evenly'
        )}>        
          <div className="flex flex-col justify-between items-center ">
            <Image src='/icons/logoDesktop.png' alt='Logotipo' className='w-[40px] md:w-[50px] mb-2' />
            <Image src='/icons/MappeArteDesktop.png' alt='MappeArte brand' className='pl-1 w-[120px] md:w-[150px]' /> 
          </div>
          <LoginForm />

          <div className="flex flex-col lg:flex-row justify-center items-center mt-4 text-sm">
            <a>¿Aún no tienes una cuenta?</a>
            <a className="ml-2 text-orangeP hover:text-pinkP cursor-pointer text-sm"  
              onClick={() => router.push('/register')}              
            >
              Registrate aquí
            </a>
          </div>
        </OpacityCard>       
    </div>
  )
}
