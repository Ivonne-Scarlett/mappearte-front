import React from 'react';

import Nav from '../components/Nav';
import AvatarImg from '../components/AvatarImg';
import SearchByArtist from '../components/SearchByArtist';
import OpacityCard from '../components/OpacityCard';


export default function searchartist() {
  
  return (
    <div>   

        <Nav />
        <div>
            <SearchByArtist />
        </div>
        <OpacityCard>
            <AvatarImg />
        </OpacityCard>

    </div>
  )
}
