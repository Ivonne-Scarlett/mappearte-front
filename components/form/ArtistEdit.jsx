import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

import { getUserById } from "../../lib/api";
import { getArtistById } from "../../lib/api";

import {
  Nav, 
  DarkBlueCard,
  Input,
  InputFile,
  Category, 
  ButtonSend,
  Footer
} from ".."; 

export default function ArtistEdit () {
  const [role, setRole] = useState()
  const [artist, setArtist] = useState();
  const [isArtist, setIsArtist] = useState(false)
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect( () => {
    const id = localStorage.getItem("id");
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/Login")
    } 
      setRole(role);
      if (role === 'artist') {
        getArtistById(id).then( ({artists}) => {
          setArtist(artists);
          setIsArtist(true);
        }, {})
      } else if (role === "user"){
        getUserById(id).then( ({users})  =>{
          console.log('Antes del set: ',users);
        setUser(users);
        }, {})
      }
    }, []
  )

  const defaultImage = "/icons/noavatar.png";

  return (
    <>
    <Nav/>
    <div
        className={classNames(
          "bg-artist bg-cover bg-center bg-no-repeat",
          "flex justify-center items-center",
          "h-96",
          "w-full",
          "px-6 md:px-20",
          "mt-24"
        )}
      ></div>
      <DarkBlueCard className="w-screen">
      <div className="flex justify-center mt-2 mx-28">
          <h3 className="font-bold text-lg mt-2 font-Mali">hola{ artist?.user }</h3>
        </div>
        <div className="flex justify-center">
            <img
              src={ artist?.imgUser || defaultImage}
              alt="Icono de perfil de usuario"
              className={classNames(
                "bg-backgroundP object-cover", 
                "rounded-full border-2 border-solid border-orangeP",
                "w-24 h-24 justify-center",
                "md:w-32 md:h-32",
                "lg:w-40 lg:h-40 my-6",
                "2xl:w-60 2xl:h-60"
              )}
            />
        </div>
        <div className="flex flex-row w-full">
          <Category 
            className='rounded-l-lg'
            name='Sticker'
            value='isSticker'
        
          />
          <Category 
            name='Mural'
            value='isMural'
        
          />
          <Category 
            className='rounded-r-md'
            name='Grafitti'
            value='isGraffiti'            
          />
        </div>
        <ButtonSend
        className='mt-4' 
        type='submit' 
        text='Registrar'
        bgColor='Orange'
        borderColor='Orange'
        />
      </DarkBlueCard>
      <Footer/>
    </>
  )
}