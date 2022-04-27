import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { getUserById } from "../lib/api";
import { getArtistById } from "../lib/api";

import {
  DarkBlueCard,
  Input,
  InputFile,
  Category, 
  ButtonSend
} from "../components"; 

export default function Profile () {
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
      <DarkBlueCard className="">
        <div className="flex justify-center mt-2">
          <h3 className="font-bold text-lg mt-2 font-Mali">{ user?.user }</h3>
        </div>
        <div className="flex justify-center mt-3">
            <img
              src={ user?.imgUser || defaultImage}
              alt="Icono de perfil de usuario"
              className={classNames(
                "bg-backgroundP object-cover", 
                "rounded-full border-2 border-solid border-orangeP",
                "w-24 h-24 justify-center",
                "md:w-32 md:h-32",
                "lg:w-40 lg:h-40",
                "2xl:w-60 2xl:h-60"
              )}
            />
        </div>
        <div className="flex flex-row mt-1 w-full">
          <Category 
            className='rounded-l-lg'
            name='Sticker'
            value='isSticker'
            register= {register("isSticker")} 
        
          />
          <Category 
            name='Mural'
            value='isMural'
            register= {register("isMural")} 
        
          />
          <Category 
            className='rounded-r-md'
            name='Grafitti'
            value='isGraffiti'
            register= {register("isGraffiti")}               
          />
        </div>
        <ButtonSend/>
      </DarkBlueCard>
    </>
  );
}