import React from 'react';
import classNames from 'classnames';

import RegisterArtistForm from '../components/form/RegisterArtistForm';
import OpacityCard from '../components/OpacityCard';


export default function login() {
  return (
    <div className={classNames(
      'bg-artistRegister bg-no-repeat bg-cover w-full min-h-screen max-h-screen',
      'flex justify-center'
    )}>
        <OpacityCard className={classNames(
          "w-2/3 items-center my-8"
        )}>
            <RegisterArtistForm />
        </OpacityCard>
    </div>

  )
}