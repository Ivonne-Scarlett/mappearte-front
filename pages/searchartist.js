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
  //console.log('allArtis',allArtist)

  const [inputValue, setInputValue]= useState([]);

  const handlerChangeInput= (event) => {
    setInputValue(event.target.value)
    
    const filterResult = allArtist.filter( artistFilter => {
      //console.log('artist',artistFilter)
      const valueName= artistFilter.artist
      return valueName.includes(inputValue)
    })
    console.log('filterResult',filterResult)
  }

  // const [searchByArtist, setSearchByArtist] = useState([]);
  // const filterArtist = (inputValue) => {
  //   //
  //   let resultSearch = allArtist.filter((items) => {
  //     if(items.artist.toString().toLowerCase().includes(inputValue)){
  //       return items;
  //     }
  //   })
  //   setSearchByArtist(resultSearch)
  //   console.log('SearchByArtist', searchByArtist)
  // }

  // let resultSearch = allArtist.filter((items) => {
  //       if(items.artist.toString().toLowerCase().includes(inputValue)){
  //         return items;
  //       }
  //     })
  
    
  //     console.log('resultSearch',resultSearch)

  





  return (
    <>
      <Nav />
      <div className='mt-20 md:mt-44 mx-10 sm:mx-44 md:mx-72'>
        <SearchByArtist
          value={inputValue}
          onChange={handlerChangeInput}         
        />
      </div>
      <OpacityCard className='bg-[#1c1545] mx-6 md:mx-20 my-6 md:my-10'>
        <AvatarImg />
      </OpacityCard>
      <Footer />
    </>
  )
}
