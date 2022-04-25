import React, { useState, useEffect } from 'react';
import { getArtist } from '../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from '../components/Nav';
import AvatarImg from '../components/AvatarImg';
import SearchByArtist from '../components/SearchByArtist';
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
  useEffect(() => {
    getArtist()
      .then(response => {
        const avatars = response.artists
        setAllArtist(avatars);
      })
  }, [])

  const [inputValue, setInputValue]= useState([]);
  const [filtered, setFiltered] = useState(null);

  const handlerChangeInput= (event) => {
    const valueInput = event.target.value
    const datavalueInput = valueInput.toLowerCase()
    setInputValue(datavalueInput)
    const filterResult = allArtist.filter( artistFilter => {
      const valueName= artistFilter.artist
      //dataValueInput = inputValue.toLowerCase()
      return valueName.toLowerCase().includes(inputValue)
    })   
    setFiltered(filterResult)
    // // //!valueInput ? setFiltered(null) : setFiltered(filterResult)
  }




  const [categorySelect, setCategorySelect]= useState('')
  const handleSelect = (e) =>{
    setCategorySelect(e.target.value)
    console.log(categorySelect)
  }

  const handlerButton = () => {
    console.log('EL boton funciona')
    console.log('la categoria seleccioanda es',categorySelect)
    if(categorySelect==='mural'){
      console.log('Mostrar sólo datos de mural')
    } else if (categorySelect==='graffiti') {
      console.log('Mostrar sólo datos de grafiti')
    } else if (categorySelect==='sticker') {
      console.log('Mostrar sólo datos de sticker')
    } else {
      console.log('Mostrar todos los artistas')
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
        <AvatarImg artists={allArtist} />
        {/* { categorySelect && <p>filtadro por categoria</p>}
        { !categorySelect && <AvatarImg artists={allArtist} /> } */}
      </OpacityCard>
      <Footer />
    </div>
  )
}
