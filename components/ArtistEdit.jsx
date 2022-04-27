import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useQRCode } from 'next-qrcode';

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
  const { Canvas } = useQRCode();

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
      
        <OpacityCard
          className={classNames(
            "h-64 w-64 lg:h-72 lg:w-72",
            "justify-center",
            " absolute flex flex-col align-middle"
          )}
        >
           
         
          
        </OpacityCard>
       
        
      <DarkBlueCard 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-stretch mt-20"
      >
        <div className="md:span-1 h-50 w-100 flex justify-center">
          <div className="h-25 w-25 flex place-content-center">
            
          </div>
        </div>
        <div className="w-100 md:col-span-2 align-center h-40"> 
          <h3 
            className="text-2xl text-center"
          >
            {artist?.resume}
          </h3>
        </div>
      </DarkBlueCard>

      

      <DarkBlueCard className="">
        
      </DarkBlueCard>
    </>
  );
}