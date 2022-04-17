import React from 'react';
import Nav from "../components/Nav"
import DarkBlueCard from '../components/DarkBlueCard';
import ButtonCamera from '../components/ButtonCamera';
import ButtonEdit from '../components/ButtonEdit';
import ButtonToGo from '../components/ButtonToGo';
import ButtonSend from '../components/ButtonSend';
import OpacityCard from '../components/OpacityCard';
import Footer from '../components/Footer';
import GridProfile from '../components/GridProfile';
import AvatarImg from '../components/AvatarImg';

          
let arrayImgProfile = [
  {
    nameArtist: "Sara",
    adress: "Casa",
    imageURL: "https://img.etimg.com/photo/msid-62395797,quality-100/wall-art-in-delhi.jpg",
    avatar: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-atractiva-maquillaje-brillante-manicura-negra-posando_197531-8302.jpg?w=2000"
  },
  {
    nameArtist: "Rose",
    adress: "CDMX",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfDUyWLYwQpGnyUI4qA_mAr9hjfGpbOKTNw&usqp=CAU",
    avatar: "",
  },
  {
    nameArtist: "Nao",
    adress: "Casa",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7LXkDaV-aEIDr-Kh1vFthTgJT1EKOgVMvHgplKZ1ljj5htXmwVzxGyb08LS9z-jBkVs&usqp=CAU",
    avatar: "https://i0.wp.com/thehappening.com/wp-content/uploads/2017/07/foto-perfil-6.jpg?fit=1024%2C694&ssl=1"
  },
  {
    nameArtist: "Job",
    adress: "Interlomas",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dvMHYURr8iS8M8hqULYoDzAtYtQB72Ffig&usqp=CAU",
    avatar: "https://previews.123rf.com/images/goodluz/goodluz1511/goodluz151100229/47872805-retrato-de-hombre-guapo-de-30-a%C3%B1os-de-edad-.jpg",
  },
  {
    nameArtist: "Migue",
    adress: "Metepec",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAy6EGV4bG9bF4jc0IADbg2aU0Hw2jyzD6YjCvigB0PmTcqW_xh1Vq1KBYQLkI2mozyU&usqp=CAU",
    avatar: "https://previews.123rf.com/images/goodluz/goodluz1511/goodluz151100229/47872805-retrato-de-hombre-guapo-de-30-a%C3%B1os-de-edad-.jpg"
  }
]


export default function Home() {
  const sayHi = () => {
    console.log('Hola')
  }
  return (
    <>
      <Nav />
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

        <AvatarImg dataArtist={arrayImgProfile}/>

      </main>  


            
      <Footer />
    </>
  )
}
