import React, { useState, useEffect } from 'react';
import { getArtist } from '../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from '../components/Nav';
import AvatarImg from '../components/AvatarImg';
import SearchByCategory from '../components/SearchByCategory';
import Footer from '../components/Footer';
import DarkBlueCard from '../components/DarkBlueCard';


export default function Searchbycategory() {
  const [allArtist, setAllArtist] = useState([]);
  const[resultFilterCategory, setResultFilterCategory] = useState([]);
  const [categorySelect, setCategorySelect]= useState('')

  useEffect(() => {
    getArtist()
      .then(response => {
        const avatars = response.artists
        setAllArtist(avatars);
      })
  }, [])

  const handleSelect = event => {
    setCategorySelect(event.target.value)
  }

  const messageOk = () => {
    toast.success('Artistas encontrados.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  }

  const handlerButton = () => {
    if(categorySelect==='mural'){
      const filterResult = allArtist.filter( artistFilter => artistFilter.isMural === true ) 
      messageOk() 
      setResultFilterCategory(filterResult)     
    } else if (categorySelect==='graffiti') {
      const filterResult = allArtist.filter( artistFilter => artistFilter.isGraffiti === true ) 
      messageOk()  
      setResultFilterCategory(filterResult)    
    } else if (categorySelect==='sticker') {
      const filterResult = allArtist.filter( artistFilter => artistFilter.isSticker === true ) 
      messageOk() 
      setResultFilterCategory(filterResult)   
    } else {
      messageOk() 
      setResultFilterCategory(allArtist)
    }
  }

  return (
    <div>
      <Nav />
      <div className='mt-20 md:mt-44 mx-10 sm:mx-44 md:mx-72'>
        <SearchByCategory 
          onChange={handleSelect}
          onClick={handlerButton}
        />
      </div>
      <DarkBlueCard className='min-h-screen'>
        { resultFilterCategory && <AvatarImg artists={resultFilterCategory} /> }
        { !categorySelect && <AvatarImg artists={allArtist} /> }
      </DarkBlueCard>
      <Footer className='inset-x-0 bottom-0'/>
    </div>
  )
}
