import React from 'react';
import classNames from 'classnames';

import RegisterArtistForm from '../components/form/RegisterArtistForm';
import OpacityCard from '../components/OpacityCard';


export default function login() {
  return (
    <div className={classNames(
      'bg-artistRegister bg-no-repeat bg-cover w-full min-h-screen md:max-h-full',
      'flex justify-center'
    )}>
        <OpacityCard className={classNames(
          "w-5/6 md:w-2/3 items-center my-8",
          "flex flex-col justify-between"
        )}>
            <RegisterArtistForm />
        </OpacityCard>
    </div>

  )
}