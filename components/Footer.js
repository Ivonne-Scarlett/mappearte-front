import React from 'react';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className='absolute inset-x-0 bottom-0 bg-[#161644] w-100'>
      <div className='bg-gradient-to-r from-[#043BFF] via-pinkP to-greenP w-100 h-1'></div>
      <div className='bg-[#161644] px-6 md:px-20 py-1 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-row items-center mt-6 md:mt-0'>
          <img src='/icons/logoMobile.png' alt='logoMobile.png' className='block md:hidden'/>
          <img src='/icons/MappeArteMobile.png' alt='logoMobile.png' className='block md:hidden pl-2'/>
          <img src='/icons/logoDesktop.png' alt='logoMobile.png' className='hidden md:block'/>
          <img src='/icons/MappeArteDesktop.png' alt='logoMobile.png' className='hidden md:block pl-4'/>
        </div>
        <div className='text-sm mt-4 md:mt-0'>          
          <p className='text-center'>Creado por:</p>
            <div className='flex flex-row justify-between mt-2 '>
            <a href='https://www.linkedin.com/in/ivonne-scarlett/' className='pr-2'><Image src='/icons/linkedIn.png' alt='Logo LinkedIn Ivonne' width='25px' height='25px' className='hover:bg-white'/></a>
            <a href='https://ca.linkedin.com/in/sara-reveles-b9557147' className='pr-2'><Image src='/icons/linkedIn.png' alt="Logo LinkedIn Sara" width='25px' height='25px' className='hover:bg-white'/></a>
            <a href='https://www.linkedin.com/in/job-lopez-arellano'><Image src='/icons/linkedIn.png' alt='Logo LinkedIn Job' width='25px' height='25px' className='hover:bg-white'/></a>
            </div>
        </div>
        <div className='text-sm flex flex-col my-5 md:mt-4'>
          <a className='my-1 md:mt-3 text-center md:text-right'>Aviso de privacidad</a>
          <p className='my-1 md:mb-3 text-center md:text-right'>© 2022 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>    
  )
}

