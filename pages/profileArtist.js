import React, {useState} from 'react';
import classNames from 'classnames';
import Link from "next/link";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GridIndex from '../components/GridIndex';
import GridProfile from '../components/GridProfile';
import DarkBlueCard from '../components/DarkBlueCard';
import OpacityCard from '../components/OpacityCard';
import ButtonEdit from '../components/ButtonEdit';
import ButtonCamera from '../components/ButtonCamera';

export default function Test() {
  const [name, setName] = useState('');
  const [searchArtist, setSearchArtist] = useState('')

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
      <div className={classNames(
      'bg-artist bg-cover bg-center bg-no-repeat',
      'flex justify-start',
      'h-96',
      'w-full',
      'px-6 md:px-20',
      'mt-24',
    )}
    >
        <OpacityCard className={classNames(
            "h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80", 
            "mt-32 md:mt-24 lg:mt-16", 
            "pb-16 absolute flex flex-col align-middle",
          )}
        >
          <Link href={"/test"}>
            <img src="/icons/noavatar.png"
            alt="Icono de perfil de usuario"
            className={classNames(
              "bg-backgroundP object-cover cursor-pointer ml-12 md:ml-16 mb-2",
              "rounded-full border-2 border-solid border-orangeP",
              "w-24 h-24", 
              "md:w-32 md:h-32",
              "lg:w-40 lg:h-40",
              "2xl:w-60 2xl:h-60", 
              )}
            />
          </Link>
            <div className="flex justify-end">
              <h3 className="font-bold font-Mali">Artista</h3>
            </div>
          <ButtonEdit
          onClick={sayHi}
          /> 
          
        </OpacityCard>
        <div
        className={classNames(
          "basis-11/12 mt-4"
        )}
        >
          {/* <ButtonCamera
          onClick={sayHi}
          /> */}
        </div> 
        
      </div>

      <DarkBlueCard className='mt-20 mb-20'>
        <h3 
        className={classNames(
          "font-Mochiy font-extrabold text-2xl", 
          "ml-4 mb-16"
        )}>
          Mis Fotos 
        </h3>
        <GridIndex />
      </DarkBlueCard>
      
      <DarkBlueCard className='mt-20 mb-20'>
        <h3 
        className={classNames(
          "font-Mochiy font-extrabold text-2xl", 
          "ml-4 mb-16"
        )}>He sido etiquetado </h3>
        <GridProfile
          className=''
        />       
      </DarkBlueCard>

      <Footer />
    </>
  )
}