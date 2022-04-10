import React from 'react';
import ButtonCamera from '../components/ButtonCamera';
import ButtonEdit from '../components/ButtonEdit';
import ButtonToGo from '../components/ButtonGoTo';
import ButtonSend from '../components/ButtonSend';
import OpacityCard from '../components/OpacityCard';

import Footer from '../components/Footer'
import OpacityCard from '../components/OpacityCard'
          
export default function Home() {
  const sayHi = () => {
    console.log('Hola')
  }
  return (
    <>
        <ButtonToGo 
        color='Aqua'
        route='/' >
          Subir Foto
        </ButtonToGo>
        
        <ButtonSend 
        color='Pink'
        OnClick={sayHi}
        >
          registrarme
        </ButtonSend>
             
        <ButtonEdit
        route='/'
        />

        <ButtonCamera
        route='/'
        />

      <div className='w-full h-screen bg-test relative'>
        <OpacityCard className='w-1/2 mt-5'>
          <h1 className='font-Mali text-4xl mt-3'>Artistas más populares 1</h1> <span className='text-base font-semibold font-Mochiy'>Alicia</span>
          <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores molestiae voluptatibus aliquam vel alias facilis blanditiis dolorum odit molestias ullam animi eos nulla, saepe tenetur voluptate vitae? Odit, ipsum.
          Temporibus labore reiciendis voluptate incidunt, assumenda rem? Aliquam, cumque cum neque provident quia temporibus inventore voluptatibus molestiae quas quis doloremque magni dolorum ab iure aut corporis blanditiis nulla sint ex!</p>
        </OpacityCard>
        <Footer />
      </div>
    </>
    
  )
}
