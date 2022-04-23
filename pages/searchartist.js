import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { getArtist } from '../lib/api';

import Nav from '../components/Nav';
import AvatarImg from '../components/AvatarImg';
import SearchByArtist from '../components/SearchByArtist';
import OpacityCard from '../components/OpacityCard';
import Footer from '../components/Footer';


export default function searchartist() {

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

  console.log('inputvalue',inputValue)

  // const handlerChangeInput= (event) => {
  //   const valueInput = event.target.value
  //   setInputValue(valueInput)
  //   const filterResult = allArtist.filter( artistFilter => {
  //     const valueName= artistFilter.artist
  //     return valueName.toLowerCase().includes(inputValue.toLowerCase())
  //   })   
  //   setFiltered(filterResult)
  // //   !valueInput ? setFiltered(null) : setFiltered(filterResult)
  // }
  // console.log('filterResult',filtered)

  const handlerChangeInput = event => {
    const valueInput = event.target.value
    setInputValue(valueInput)  
    
    !valueInput && setFiltered(null)
  }
  console.log('filterResult',filtered)


  const handlerClick = event => {
    const filterResult = allArtist.filter( artistFilter => {
      const valueName= artistFilter.artist
      return valueName.toLowerCase().includes(inputValue.toLowerCase())
    })  
    setFiltered(filterResult)
  }


  return (
    <>
      <Nav />
      <div className='mt-20 md:mt-44 mx-10 sm:mx-44 md:mx-72'>
        <SearchByArtist
          value={inputValue}
          onChange={handlerChangeInput}  
          onClick={handlerClick}       
        />
      </div>
      <OpacityCard className='bg-[#1c1545] mx-6 md:mx-20 my-6 md:my-10'>
        {/* <AvatarImg /> */}
        {/* { filtered &&  <AvatarImg artists={filtered} />}
        { !filtered && <AvatarImg artists={allArtist} /> } */}
        { filtered &&   <p>datos filtrados</p> }
        { !filtered && <p>Todos los artistas</p>}
      </OpacityCard>
      <Footer />
    </>
  )
}
