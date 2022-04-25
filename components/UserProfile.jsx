import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

import { getUserById } from "../lib/api";
import { getArtistById } from "../lib/api";

import {
  Nav,
  OpacityCard,
  ButtonEdit,
  GridIndex,
  DarkBlueCard,
  Footer,
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
            "h-64 w-64 lg:h-72 lg:w-72",
            "justify-center",
            " absolute flex flex-col align-middle"
          )}
        >
          <div className="flex justify-center mt-3">
            <img
              src={ user?.imgUser || defaultImage}
              alt="Icono de perfil de usuario"
              className={classNames(
                "bg-backgroundP object-cover cursor-pointer", 
                "rounded-full border-2 border-solid border-orangeP",
                "w-24 h-24 justify-center",
                "md:w-32 md:h-32",
                "lg:w-40 lg:h-40",
                "2xl:w-60 2xl:h-60"
              )}
            />
          </div>
          <div className="flex justify-center mt-3">
            <h3 className="font-bold text-lg mt-4 font-Mali">{ user?.user }</h3>
          </div>
          <div className="flex justify-end mt-3">
            <ButtonEdit
            route="/edit"
            />
          </div>  
        </OpacityCard>
        <div className={classNames("basis-5/12 mt-4")}>
          {/* <ButtonCamera
          onClick={editProfile}
          /> */}
        </div>
      </div>

      <DarkBlueCard className="">
        <h3
          className={classNames(
            "font-Mochiy font-extrabold text-2xl",
            " mb-16"
          )}
        >
          Fotos que he encontrado
        </h3>
        <GridIndex />
      </DarkBlueCard>

      <Footer />
    </>
  );
}