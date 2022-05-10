import React from 'react';
import classNames from 'classnames';
import Link from "next/link";

import OpacityCard from '../components/OpacityCard';

export default function avisoprivacidad() {
  return (
    <div className={classNames(
        'bg-artistRegister bg-no-repeat bg-cover',
        'w-full min-h-screen md:max-h-full',
        'flex justify-center'
      )}>
          <OpacityCard className={classNames(
            "w-5/6 md:w-2/3 items-center my-8",
            "flex flex-col"
          )}>
            <div className="flex flex-col">
              {/* <img src='/icons/logoDesktop.png' alt='Logotipo' className='w-[40px] md:w-[50px] mb-2 mt-12' />
              <img src='/icons/MappeArteDesktop.png' alt='MappeArte brand' className='pl-1 w-[120px] md:w-[150px]' />  */}
              <div className="flex flex-row justify-between">
                <div>
                  <Link href={"/"} >
                    <img
                        src="/icons/logo.png"
                        alt="Logotipo mappearte"
                        className={classNames("w-32 md:w-40 lg:w-44", "md:mt-2", "cursor-pointer")}
                    />
                  </Link>
                </div>

                <div>
                  <Link href={"/"} >
                    <img 
                      src='/icons/cancel.png' 
                      alt='boton de cerrar' 
                      width='30px' 
                      height='30px'
                      className='p-4'/>
                  </Link>
                </div>
              </div>

              <div className="my-10 text-center">
                <h1>AVISO DE PRIVACIDAD</h1>
              </div>

              <div className="mb-5 text-justify">
                <p>Mappearte mejor conocido como Mappearte, con domicilio en Colonia centro, Cuauhtémoc, CDMX y portal de internet https://mappearte.vercel.app, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente: <br></br><br></br>
                ¿Para qué fines utilizaremos sus datos personales? <br></br><br></br>
                Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita: <br></br><br></br>
                </p>
              </div>



            
                
            </div>
         
  
            
            
          </OpacityCard>
    </div>
  )
}
