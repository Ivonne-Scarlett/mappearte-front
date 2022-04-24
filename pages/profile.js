import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

import { getUserById } from "../lib/api";
import { getArtistById } from "../lib/api";

import {
  Nav,
  Footer,
  GridIndex,
  GridProfile,
  DarkBlueCard,
  OpacityCard,
} from "../components"; 

export default function Profile () {
  const [role, setRole] = useState()
  const [artist, setArtist] = useState();
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
        }, {})
      } else if (role === "user"){
        getUserById(id).then( ({users})  =>{
          console.log('Antes del set: ',users);
        setUser(users);
        }, {})
      }
    }, []
  )
 /*  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserById(id).then(({ user }) => {
      setUser(user);
    });
  }, []); */
  
  const defaultImage = "/icons/noavatar.png";
   console.log("user: ", user)
   console.log("artist: ", artist)
   console.log("role: ", role)
  return (
    <>
      <Nav />
      <div
        className={classNames(
          "bg-artist bg-cover bg-center bg-no-repeat",
          "flex justify-center items-center",
          "h-96",
          "w-full",
          "px-6 md:px-20",
          "mt-24"
        )}
      >
        <OpacityCard
          className={classNames(
            "h-64 w-64  lg:h-80 lg:w-80",
            /* "mt-32 md:mt-24 lg:mt-16", */ 
            "justify-center items-center",
            "pb-16 absolute flex flex-col align-middle"
          )}
        >
          <Link href={"/"}>
            <img
              src={ artist?.imgArtist || user?.imgUser || defaultImage}
              alt="Icono de perfil de usuario"
              className={classNames(
                "bg-backgroundP object-cover cursor-pointer", 
                "rounded-full border-2 border-solid border-orangeP",
                "w-24 h-24",
                "md:w-32 md:h-32",
                "lg:w-40 lg:h-40",
                "2xl:w-60 2xl:h-60"
              )}
            />
          </Link>
          <div className="flex justify-end">
            <h3 className="font-bold text-lg mt-4 font-Mali">{ artist?.artist || user?.user }</h3>
          </div>
          {/* <ButtonEdit
          onClick={sayHi}
          /> */}
        </OpacityCard>
        <div className={classNames("basis-5/12 mt-4")}>
          {/* <ButtonCamera
          onClick={sayHi}
          /> */}
        </div>
      </div>
        
      <DarkBlueCard className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mt-20">
          <div className="bg-pink-400 w-100 items-center md:span-1 h-40">
            qr
          </div>
          <div className="bg-pink-200 w-100 md:col-span-2 items-center h-40">
            <h3 
              className="text-2xl text-center "
            >
              {artist?.resume}
            </h3>
          </div>
      </DarkBlueCard>

      <OpacityCard className="mt-16 px-6 md:px-20 py-6 md:py-10">
        <h3
          className={classNames(
            "font-Mochiy font-extrabold text-2xl",
            "ml-4 mb-16"
          )}
        >
          Mi portafolio
        </h3>
        <GridProfile className="" />
      </OpacityCard>

      <DarkBlueCard className="">
        <h3
          className={classNames(
            "font-Mochiy font-extrabold text-2xl",
            " mb-16"
          )}
        >
          Me han etiquetado
        </h3>
        <GridIndex />
      </DarkBlueCard>

      <Footer />
    </>
  );
}