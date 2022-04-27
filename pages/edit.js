import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import classNames from "classnames";

import { getUserById } from "../lib/api";
import { getArtistById } from "../lib/api";
import {
  DarkBlueCard,
  Input,
  InputFile,
  Category, 
  ButtonSend
} from "../components"; 
import {
  Nav,
  Footer
} from '../components';

import UserEdit from '../components/UserProfile';
import ArtistEdit from '../components/ArtistProfile';

export default function edit() {
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
        setUser(users);
        }, {})
      }
    }, []
  )

  return (
    <>
      <Nav/>
      <div className={classNames(
      'bg-artist bg-cover bg-center bg-no-repeat',
      'flex justify-center md:justify-end',
      'h-96',
      'w-full',
      'px-6 md:px-20',
      'pt-28',
      )}
      >
      </div>
      
      {/* <UserEdit/>
      <Footer/> */}

    </>
  )
}