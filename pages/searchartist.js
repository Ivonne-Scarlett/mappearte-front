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

  const handlerChangeInput= (event) => {
    const valueInput = event.target.value
    const datavalueInput = valueInput.toLowerCase()
    setInputValue(datavalueInput)
    const filterResult = allArtist.filter( artistFilter => {
      const valueName= artistFilter.artist
      //dataValueInput = inputValue.toLowerCase()
      console.log('inputValue',inputValue)
      return valueName.toLowerCase().includes(inputValue)
    })   
    setFiltered(filterResult)
    !valueInput ? setFiltered(null) : setFiltered(filterResult)
  }
  console.log('filterResult',filtered)

  return (
    <>
      <Nav />
      <div className='mt-20 md:mt-44 mx-10 sm:mx-44 md:mx-72'>
        <SearchByArtist
          value={inputValue}
          onChange={handlerChangeInput}       
        />
      </div>
      <OpacityCard className='bg-[#20184d] mx-6 md:mx-20 my-6 md:my-10'>
        { filtered && <AvatarImg artists={filtered} />}
        { !filtered && <AvatarImg artists={allArtist} /> }
      </OpacityCard>
      <Footer />
    </>
  )
}
