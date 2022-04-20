import React from 'react';
import classNames from 'classnames';

import RegisterArtistForm from '../components/form/RegisterArtistForm';
import OpacityCard from '../components/OpacityCard';
import ToggleSwitch from '../components/ToggleSwitch';


export default function login() {
  return (
    <div className={classNames(
      'bg-artistRegister bg-no-repeat bg-cover',
      'w-full min-h-screen md:max-h-full',
      'flex justify-center'
    )}>
        <OpacityCard className={classNames(
          "w-5/6 md:w-2/3 items-center my-8",
          "flex flex-col justify-evenly"
        )}>
          <div className="flex flex-col justify-between items-center ">
            <img src='/icons/logoDesktop.png' alt='Logotipo' className='w-[40px] md:w-[50px] mb-2' />
            <img src='/icons/MappeArteDesktop.png' alt='MappeArte brand' className='pl-1 w-[120px] md:w-[150px]' /> 
          </div>
          <div>
            <ToggleSwitch />
          </div>
          <RegisterArtistForm />
        </OpacityCard>
    </div>
  )
}