import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';

import { getUserById } from "../lib/api";
import { getArtistById } from "../lib/api";

import ArtistEdit from "../components/form/ArtistEdit";
import UserEdit from "../components/form/UserEdit"; 

export default function Edit() {
  const [role, setRole] = useState()
  const [artist, setArtist] = useState();
  const [user, setUser] = useState();
  const [isArtist, setIsArtist] = useState(false)
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
          setIsArtist(artists);
        }, {})
      } else if (role === "user"){
        getUserById(id).then( ({users})  =>{
        setUser(users);
        }, {})
      }
    }, [router]
  )

  return (
    <>

      {isArtist && <ArtistEdit/>}
      {!isArtist && <UserEdit/>}
           
    </>
  )
}