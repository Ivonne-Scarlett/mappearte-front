import React from 'react'



export default function Footer() {
  return (
    <footer className='footer bg-[#161644] w-100 h-72 md:h-36'>
      <div className='bg-gradient-to-r from-[#043BFF] via-pinkP to-greenP w-100 h-1'></div>
      <div className='bg-[#161644] px-6 md:px-20 py-1 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-row items-center mt-6 md:mt-0'>
          <img src='/icons/logoMobile.png' alt="logoMobile.png" className='sm:block md:hidden'/>
          <img src='/icons/MappeArteMobile.png' alt="logoMobile.png" className='sm:block md:hidden pl-4'/>
          <img src='/icons/logoDesktop.png' alt="logoMobile.png" className='sm:hidden md:block'/>
          <img src='/icons/MappeArteDesktop.png' alt="logoMobile.png" className='sm:hidden md:block pl-4'/>
        </div>
        <div className='text-base mt-6 md:mt-0'>
          <p>© Todos los derechos reservados</p>
        </div>
        <div className='text-base flex flex-col mb-4 mt-6 md:mt-0'>
          <a className='my-0 md:my-3'>Aviso de privacidad</a>
          <div>
            <p className='mt-6 md:mt-0'>Creado por:</p>
            <div className='flex flex-row justify-between mt-1 mb-3 md:mb-1'>
              <a href="https://www.linkedin.com/in/ivonne-scarlett/"><img src="/icons/linkedIn.png" alt="" width="30" className='hover:bg-white'/></a>
              <a href="https://ca.linkedin.com/in/sara-reveles-b9557147"><img src="/icons/linkedIn.png" alt="" width="30" className='hover:bg-white'/></a>
              <a href="https://www.linkedin.com/in/job-l%C3%B3pez-arellano/"><img src="/icons/linkedIn.png" alt="" width="30" className='hover:bg-white'/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>    
  )
}
