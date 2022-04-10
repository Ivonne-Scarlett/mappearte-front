import React from 'react';
import ButtonCamera from '../components/ButtonCamera';
import ButtonEdit from '../components/ButtonEdit';
import ButtonToGo from '../components/ButtonToGo';
import ButtonSend from '../components/ButtonSend';
import OpacityCard from '../components/OpacityCard';
import Footer from '../components/Footer';
          
export default function Home() {
  const sayHi = () => {
    console.log('Hola')
  }
  return (
    <>
      <div className='w-full h-screen bg-test relative'>
        <OpacityCard className='w-1/2 mt-5 h-[95%] flex flex-col justify-between'>
          <h1 className='font-Mali text-4xl mt-3'>Artistas más populares 1</h1> <span className='text-base font-semibold font-Mochiy'>Alicia</span>
          <p className='text-white my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores molestiae voluptatibus aliquam vel alias facilis blanditiis dolorum odit molestias ullam animi eos nulla, saepe tenetur voluptate vitae? Odit, ipsum.
          Temporibus labore reiciendis voluptate incidunt, assumenda rem? Aliquam, cumque cum neque provident quia temporibus inventore voluptatibus molestiae quas quis doloremque magni dolorum ab iure aut corporis blanditiis nulla sint ex!</p>
          <ButtonToGo 
          bgColor='Cyan'
          borderColor='Cyan'
          route='/test' >
            Subir Foto
          </ButtonToGo>
          
          <ButtonSend 
          color='Pink'
          OnClick={sayHi}
          >
            registrarme
          </ButtonSend>
          <div className='w-full grid grid-cols-2 place-items-center'>
            <ButtonEdit
            route='/'
            />

            <ButtonCamera
            route='/test'
            />
          </div>     
        </OpacityCard>
      </div>  
            
      <Footer />
    </>
  )
}
