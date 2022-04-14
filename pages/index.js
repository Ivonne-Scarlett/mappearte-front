import React from 'react';
import ButtonCamera from '../components/ButtonCamera';
import ButtonEdit from '../components/ButtonEdit';
import ButtonToGo from '../components/ButtonToGo';
import ButtonSend from '../components/ButtonSend';
import OpacityCard from '../components/OpacityCard';
import Footer from '../components/Footer';
import GridProfile from '../components/GridProfile';
import DarkBlueCard from '../components/DarkBlueCard';
          
let arrayImgProfile = [
  "https://picsum.photos/id/237/200/300",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0RU4LzhHoM_OQa-hO5sPRX30bdTNFHgfgA&usqp=CAU",
  "https://visitpuertovallarta.com/uploads/11.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBy8Gqgq7-yH1FBgqZtXvcvL10t-KXWjcbaQ&usqp=CAU",
  "https://picsum.photos/id/237/200/300",
  "https://visitpuertovallarta.com/uploads/11.png",
  "https://visitpuertovallarta.com/uploads/11.png",
  "https://visitpuertovallarta.com/uploads/11.png",
  "https://picsum.photos/id/237/200/300",
  "https://visitpuertovallarta.com/uploads/11.png",
  "https://visitpuertovallarta.com/uploads/11.png",
  "https://mxcity.mx/wp-content/uploads/2016/09/murales-3.jpg",
  "https://visitpuertovallarta.com/uploads/11.png",
]


export default function Home() {
  const sayHi = () => {
    console.log('Hola')
  }
  return (
    <>
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

        <DarkBlueCard className='mt-5'>
          <GridProfile
            className=''
            images={arrayImgProfile}
          />       
        </DarkBlueCard>

      </main>  
            
      <Footer />
    </>
  )
}
