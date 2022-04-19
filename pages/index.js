import React, {useState} from 'react';
import classNames from 'classnames';

import Nav from "../components/Nav"
import OpacityCard from '../components/OpacityCard';
import DarkBlueCard from '../components/DarkBlueCard';
import GridIndex from '../components/GridIndex';
import GridProfile from '../components/GridProfile';
import GridAvatar from '../components/GridAvatar';
import Footer from '../components/Footer';

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
    nameArtist: "Ivonne",
    adress: "Casa",
    imageURL: "https://www.skillshare.com/blog/wp-content/uploads/2021/04/pasted-image-0-11.png?w=1024",
    avatar: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-atractiva-maquillaje-brillante-manicura-negra-posando_197531-8302.jpg?w=2000"
  },
  {
    nameArtist: "Job",
    adress: "Interlomas",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dvMHYURr8iS8M8hqULYoDzAtYtQB72Ffig&usqp=CAU",
    avatar: "",
  },
  {
    nameArtist: "Migue",
    adress: "Metepec",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uGZ6K9y2S4N-Gf3MHM8B5daD6PdI0fMj01LeDHCFQLA5FUBIOWIJk9zLLEmvQII7M4M&usqp=CAU",
    avatar: "https://previews.123rf.com/images/goodluz/goodluz1511/goodluz151100229/47872805-retrato-de-hombre-guapo-de-30-a%C3%B1os-de-edad-.jpg"
  },
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
    avatar: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-atractiva-maquillaje-brillante-manicura-negra-posando_197531-8302.jpg?w=2000"
  },
  {
    nameArtist: "Nao",
    adress: "Casa",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0oAss7II59jEstKe5sR9E-dNPssndPHwlQ&usqp=CAU",
    avatar: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-atractiva-maquillaje-brillante-manicura-negra-posando_197531-8302.jpg?w=2000"
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
  ,
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
  const [searchArtist, setSearchArtist] = useState('')
  const [name, setName] = useState('');

  const sayHi = () => {
    console.log('Hola')
  }
  
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSearchArtist(event) {
    setSearchArtist(event.target.value)
  }
  
  return (
    <>
      <Nav /> 
      <main className='w-full bg-backgroundP bg-contain py-20 min-h-screen'>
        <OpacityCard className='w-1/2 mt-5 h-[95%] flex flex-col justify-between'>
          <h1 className='font-Mali text-4xl mt-3'>Artistas más populares 1</h1> 
          <span className='text-base font-semibold font-Mochiy'>Alicia</span>
          <p className='text-white my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores molestiae voluptatibus aliquam vel alias!
          </p> 
        </OpacityCard>

        <GridIndex images={arrayImgProfile} />   

        <DarkBlueCard className='mt-5'>
          <GridProfile
            className=''
            images={arrayImgProfile}
          />       
        </DarkBlueCard>

        <GridAvatar avatarsArtists={arrayImgProfile}/>

      </main>  

      <Footer />

    </>
  )
}
