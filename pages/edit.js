import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import { useRouter } from 'next/router';


export default function Edit() {
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
        <h1>Edit</h1>     
    </>
  )
}