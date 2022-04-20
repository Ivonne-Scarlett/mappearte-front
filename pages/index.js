import React, {useState} from 'react';
import classNames from 'classnames';
import Nav from "../components/Nav"
import DarkBlueCard from '../components/DarkBlueCard';
import ButtonCamera from '../components/ButtonCamera';
import ButtonEdit from '../components/ButtonEdit';
import ButtonToGo from '../components/ButtonToGo';
import ButtonSend from '../components/ButtonSend';
import OpacityCard from '../components/OpacityCard';
import Footer from '../components/Footer';
import SearchByArtist from '../components/SearchByArtist';
import SearchByCategory from '../components/SearchByCategory';
import Category from '../components/Category';
import Input from '../components/Input';
import InputFile from '../components/InputFile'
import GridIndex from '../components/GridIndex';
import GridProfile from '../components/GridProfile';
import ToggleSwitch from '../components/ToggleSwitch'
import GridAvatar from '../components/GridAvatar';
import AvatarImg from '../components/AvatarImg';
import UploadImg from '../components/UploadImages';

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

  let arrayImgProfile = [
    {
      nameArtist: "Sara",
      adress: "Casa",
      imageURL: "https://img.etimg.com/photo/msid-62395797,quality-100/wall-art-in-delhi.jpg"
    },
    {
      nameArtist: "Rose",
      adress: "CDMX",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfDUyWLYwQpGnyUI4qA_mAr9hjfGpbOKTNw&usqp=CAU"
    },
    {
      nameArtist: "Ivonne",
      adress: "Casa",
      imageURL: "https://www.skillshare.com/blog/wp-content/uploads/2021/04/pasted-image-0-11.png?w=1024"
    },
    {
      nameArtist: "Job",
      adress: "Interlomas",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dvMHYURr8iS8M8hqULYoDzAtYtQB72Ffig&usqp=CAU"
    },
    {
      nameArtist: "Migue",
      adress: "Metepec",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uGZ6K9y2S4N-Gf3MHM8B5daD6PdI0fMj01LeDHCFQLA5FUBIOWIJk9zLLEmvQII7M4M&usqp=CAU"
    },
    {
      nameArtist: "Sara",
      adress: "Casa",
      imageURL: "https://img.etimg.com/photo/msid-62395797,quality-100/wall-art-in-delhi.jpg"
    },
    {
      nameArtist: "Rose",
      adress: "CDMX",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfDUyWLYwQpGnyUI4qA_mAr9hjfGpbOKTNw&usqp=CAU"
    },
    {
      nameArtist: "Nao",
      adress: "Casa",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0oAss7II59jEstKe5sR9E-dNPssndPHwlQ&usqp=CAU"
    },
    {
      nameArtist: "Job",
      adress: "Interlomas",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dvMHYURr8iS8M8hqULYoDzAtYtQB72Ffig&usqp=CAU"
    },
    {
      nameArtist: "Migue",
      adress: "Metepec",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAy6EGV4bG9bF4jc0IADbg2aU0Hw2jyzD6YjCvigB0PmTcqW_xh1Vq1KBYQLkI2mozyU&usqp=CAU"
    },
    {
      nameArtist: "Job",
      adress: "Interlomas",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dvMHYURr8iS8M8hqULYoDzAtYtQB72Ffig&usqp=CAU"
    },
    {
      nameArtist: "Migue",
      adress: "Metepec",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAy6EGV4bG9bF4jc0IADbg2aU0Hw2jyzD6YjCvigB0PmTcqW_xh1Vq1KBYQLkI2mozyU&usqp=CAU"
    },
    {
      nameArtist: "Rose",
      adress: "CDMX",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfDUyWLYwQpGnyUI4qA_mAr9hjfGpbOKTNw&usqp=CAU"
    },
    {
      nameArtist: "Nao",
      adress: "Casa",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0oAss7II59jEstKe5sR9E-dNPssndPHwlQ&usqp=CAU"
    },
    {
      nameArtist: "Job",
      adress: "Interlomas",
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dvMHYURr8iS8M8hqULYoDzAtYtQB72Ffig&usqp=CAU"
    }
  ]
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
        <ToggleSwitch />
        </OpacityCard>

        <DarkBlueCard className='w-100 my-5 mx-6 md:mx-20'>

          <Category
          className='active:focus:border-cyan-300 active:focus:bg-cyan-600'
          />
          
          <Input
          label='Nombre'
          type='text'
          id='name'
          placeholder='Escribe tu nombre'
          className={classNames(
            'valid:border-green-500 invalid:border-red-500',
          )}
          value={name} 
          onChange={handleChange}
          />
          <Input
          label='Usuario'
          type='text'
          id='userName'
          placeholder='Escribe tu nombre de Usuario'
          value={name} 
          onChange={handleChange}
          >
          <p className='mt-2 hidden peer-focus:block text-pinkP text-xs pb-4 pl-4'>
            Tu nombre de usuario no podrá ser modificado una vez registrado
          </p>
          </Input>
          <InputFile
          id='avatar' name='avatar'
          accept='image/png, image/jpeg'
          />
        </DarkBlueCard>  

        <DarkBlueCard className='w-100 my-5 mx-6 md:mx-20'>
          <SearchByArtist
          onChange={handleSearchArtist}
          onClick={sayHi()}
          />
          <SearchByCategory
          onClick={sayHi()}
          />   
        </DarkBlueCard>     
         
        <GridIndex images={arrayImgProfile} />   

        <DarkBlueCard className='mt-5'>
          <GridProfile
            className=''
            images={arrayImgProfile}
          />       
        </DarkBlueCard>

        <GridAvatar avatarsArtists={arrayImgProfile}/>
        
        <AvatarImg dataArtist={arrayImgProfile}/>

        <UploadImg />

      </main>  


            
      <Footer />

    </>
  )
}
