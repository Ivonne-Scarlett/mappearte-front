import React from 'react';
import {useState} from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import RegisterArtistForm from '../components/form/RegisterArtistForm';
import RegisterUserForm from '../components/form/RegisterUserForm';
import OpacityCard from '../components/OpacityCard';
import ToggleSwitch from '../components/ToggleSwitch';

export default function Login() {
  const [isUser, setIsUser] = useState(true);
  const [isActiveToogle, setIsActiveToogle] = useState(false);

  const isChangeToogle = () => {      
    setIsActiveToogle(!isActiveToogle) 
    setIsUser(!isUser) 
  }

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
            <Image src='/icons/logoDesktop.png' alt='Logotipo' className='w-[40px] md:w-[50px] mb-2' />
            <Image src='/icons/MappeArteDesktop.png' alt='MappeArte brand' className='pl-1 w-[120px] md:w-[150px]' /> 
          </div>
          <div>
            <ToggleSwitch onClick={isChangeToogle}/>
          </div>

          { isUser && <RegisterUserForm/> }
          { !isUser && <RegisterArtistForm /> }
          
        </OpacityCard>
    </div>
  )
}