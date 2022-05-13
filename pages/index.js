import React, {useState} from 'react';
import classNames from 'classnames';
import Nav from "../components/Nav"
import Hero from '../components/Hero';
import OpacityCard from '../components/OpacityCard';
import GridIndex from '../components/GridIndex';
import GridAvatar from '../components/GridAvatar';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Link from "next/link";


export default function Home() {

  return (
    <>
      <Nav/>

      <Hero>
        <OpacityCard 
          className={classNames(
            "w-4/5 md:w-2/5 h-fit md:mt-8 lg:mt-16 lg:w-2/5", 
          )}
        >
            <h1
            className={classNames(
              "text-lg",
              "font-extrabold font-Mali"
            )}
            >
              Únete a la comunidad Mappearte y ayúdanos en nuestra misión de difundir el arte urbano en México.
            </h1>
            <Link href={"/register"}>
            <p className='cursor-pointer pt-4 text-center text-lg font-bold tracking-wider text-greenP hover:text-pinkP'>Registrate aquí</p></Link>
            
        </OpacityCard> 
      </Hero>

      <h1 
      className={classNames(
        'font-Mochiy font-semibold',
        'mt-28', 
        'py-2 px-6 md:px-20',
        'text-2xl text-gray-200',
        'tracking-wider'
        )}
      >
        Encuentra arte cerca de ti:
      </h1>     
      <div 
      className={classNames(
        'flex justify-center',)}
      >
        <div 
          className={classNames(
            'flex justify-center',
            'h-[32rem]',
            'w-full',
            'mx-6 md:mx-20 my-6 md:my-10',
          )}
        >
          <Map/>          
        </div>
      </div>
      
        <OpacityCard className='mt-16 px-6 md:px-20 py-6 md:py-10'>
          <h2 
          className={classNames(
              'font-Mochiy font-semibold',
              'text-2xl text-gray-100',
              'tracking-wider',
            )}
          >
            Lo Nuevo
          </h2>
          <GridIndex/>

        </OpacityCard>
          
        <div 
        className='mb-20'>
          <h2 
          className={classNames(
              'font-Mochiy font-semibold',
              'text-2xl text-gray-100',
              'py-2 px-6 md:px-20 mt-16',
              'tracking-wider',
              'relative'
            )}
          >
            Conoce a los artistas
          </h2>
          <GridAvatar />
        </div>

      <Footer />

    </>
  )
}
