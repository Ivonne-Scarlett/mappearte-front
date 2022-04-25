import React, { useState, useEffect } from 'react';
import { getArtist } from '../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from '../components/Nav';
import AvatarImg from '../components/AvatarImg';
import SearchByCategory from '../components/SearchByCategory';
import OpacityCard from '../components/OpacityCard';
import Footer from '../components/Footer';


export default function searchbycategory() {
  const messageFail = () => {
    toast.warn('Artista no encontrado', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });  
  }

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
    console.log(categorySelect)
  }

  const handlerButton = () => {
    console.log('EL boton funciona')
    console.log('la categoria seleccioanda es',categorySelect)
    if(categorySelect==='mural'){
      console.log('Mostrar sólo datos de mural')
      const filterResult = allArtist.filter( artistFilter => {
        console.log(artistFilter)
        if (artistFilter.isMural === true){
          return artistFilter
        }      
      })   
      setResultFilterCategory(filterResult)      
    } else if (categorySelect==='graffiti') {
      console.log('Mostrar sólo datos de grafiti')
      const filterResult = allArtist.filter( artistFilter => {
        console.log(artistFilter)
        if (artistFilter.isGraffiti === true){
          return artistFilter
        }      
      })
      setResultFilterCategory(filterResult)    
    } else if (categorySelect==='sticker') {
      console.log('Mostrar sólo datos de sticker')
      const filterResult = allArtist.filter( artistFilter => {
        console.log(artistFilter)
        if (artistFilter.isSticker === true){
          return artistFilter
        }      
      })
      setResultFilterCategory(filterResult)   
    } else {
      console.log('Mostrar todos los artistas')
      setResultFilterCategory(allArtist)
      console.log(allArtist)
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
      <OpacityCard className='bg-[#20184b] mx-6 md:mx-20 my-6 md:my-10'>
        {/* <AvatarImg artists={resultFilterCategory} /> */}
        { resultFilterCategory && <AvatarImg artists={resultFilterCategory} /> }
        { !categorySelect && <AvatarImg artists={allArtist} /> }
      </OpacityCard>
      <Footer />
    </div>
  )
}
