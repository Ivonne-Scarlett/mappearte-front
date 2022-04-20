import React from 'react';
import classNames from 'classnames';

import Nav from '../components/Nav';
import AvatarImg from '../components/AvatarImg';
import SearchByArtist from '../components/SearchByArtist';
import OpacityCard from '../components/OpacityCard';
import Footer from '../components/Footer';


export default function searchartist() {
  
  return (
    <>   

        <Nav />
        <div className='mt-20 md:mt-44 mx-10 sm:mx-44 md:mx-72'>
            <SearchByArtist />
        </div>
        <OpacityCard className='bg-[#302f56] mx-6 md:mx-20 my-6 md:my-10'>
            <AvatarImg />
        </OpacityCard>
        <Footer />


    </>
  )
}
