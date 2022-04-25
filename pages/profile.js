import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

import { getUserById } from "../lib/api";
import { getArtistById } from "../lib/api";

/* import {
  Nav,
  OpacityCard,
  ButtonEdit,
  GridIndex,
  GridProfile,
  DarkBlueCard,
  Footer,
} from "../components";  */
import ArtistProfile from "../components/ArtistProfile"
import UserProfile from "../components/UserProfile"
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
          setIsArtist(true); /* <-- desde aqui puuedo decir que si y que no rederizar? */
        }, {})
      } else if (role === "user"){
        getUserById(id).then( ({users})  =>{
          console.log('Antes del set: ',users);
        setUser(users);
        }, {})
      }
    }, []
  )

  return (
    <>
      
      {isArtist && <ArtistProfile/>}
      {!isArtist && <UserProfile/>}
      
    </>
  );
}