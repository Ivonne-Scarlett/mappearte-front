import React from 'react';
import classNames from 'classnames';
import Link from "next/link";

import OpacityCard from '../components/OpacityCard';

export default function avisoprivacidad() {
  return (
    <div className={classNames(
        'bg-privacidad bg-no-repeat bg-cover',
        'w-full min-h-screen md:max-h-full',
        'flex justify-center'
      )}>
          <OpacityCard className={classNames(
            "w-5/6 md:w-2/3 items-center my-8",
            "flex flex-col"
          )}>
            <div className="flex flex-col justify-evenly">
  
              <div className="flex flex-row justify-center">
                <div>
                  <Link href={"/"} >
                    <img
                        src="/icons/logo.png"
                        alt="Logotipo mappearte"
                        className={classNames("w-32 md:w-60 lg:w-60", "md:mt-2", "cursor-pointer")}
                    />
                  </Link>
                </div>
              </div>

              <div className="my-10 text-center">
                <h1 className="my-10 text-4xl md:text-9xl ">404</h1>
                <h1 className="my-10 text-xl md:text-5xl ">Página no encontrada</h1>                  
              </div>           
                
            </div>      

          </OpacityCard>
    </div>
  )
}
