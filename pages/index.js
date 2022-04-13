<<<<<<< HEAD
import GridProfile from '../components/GridProfile';
import OpacityCard from '../components/OpacityCard';
import Footer from '../components/Footer';

let arrayImgProfile = [
  "https://visitpuertovallarta.com/uploads/11.png",
  "https://visitpuertovallarta.com/uploads/11.png",
  "https://visitpuertovallarta.com/uploads/11.png",
  "https://visitpuertovallarta.com/uploads/11.png",
  "https://mxcity.mx/wp-content/uploads/2016/09/murales-3.jpg",
  "https://visitpuertovallarta.com/uploads/11.png",

]

=======
import React from 'react';
import DarkBlueCard from '../components/DarkBlueCard';
import ButtonCamera from '../components/ButtonCamera';
import ButtonEdit from '../components/ButtonEdit';
import ButtonToGo from '../components/ButtonToGo';
import ButtonSend from '../components/ButtonSend';
import OpacityCard from '../components/OpacityCard';
import Footer from '../components/Footer';
          
>>>>>>> develop
export default function Home() {
  const sayHi = () => {
    console.log('Hola')
  }
  return (
    <>
<<<<<<< HEAD
      <div>
        <GridProfile
          className=''
          images={arrayImgProfile}
        >
        </GridProfile>
      </div>

      <div className='w-full h-screen bg-test relative '>
        <OpacityCard className='w-1/2 mt-5'>
          <h1 className='font-Mali text-4xl mt-3'>Artistas más populares 1</h1> <span className='text-base font-semibold font-Mochiy'>Alicia</span>
          <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores molestiae voluptatibus aliquam vel alias facilis blanditiis dolorum odit molestias ullam animi eos nulla, saepe tenetur voluptate vitae? Odit, ipsum.
            Temporibus labore reiciendis voluptate incidunt, assumenda rem? Aliquam, cumque cum neque provident quia temporibus inventore voluptatibus molestiae quas quis doloremque magni dolorum ab iure aut corporis blanditiis nulla sint ex!</p>
        </OpacityCard>
        <Footer />
      </div>
=======
      <main className='w-full bg-test bg-contain py-20 min-h-screen'>
        <OpacityCard className='w-1/2 mt-5 h-[95%] flex flex-col justify-between'>
          <h1 className='font-Mali text-4xl mt-3'>Artistas más populares 1</h1> <span className='text-base font-semibold font-Mochiy'>Alicia</span>
          <p className='text-white my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores molestiae voluptatibus aliquam vel alias!</p>
          <ButtonToGo 
          bgColor='Green'
          borderColor='Green'
          route='/test' >
            Subir Foto
          </ButtonToGo>
          
          <ButtonSend 
          bgColor='Orange'
          borderColor='Orange'
          OnClick={sayHi}
          >
            guardar
          </ButtonSend>
          <div className='w-full grid grid-cols-2 place-items-center'>
            <ButtonEdit
            route='/test'
            />

            <ButtonCamera
            route='/test'
            />
          </div>     
        </OpacityCard>
        <DarkBlueCard className='w-100 my-5 mx-6 md:mx-20'>
          <label>Test</label>
          <input/>
        </DarkBlueCard>     
      </main>  
            
      <Footer />
>>>>>>> develop
    </>
  )
}
