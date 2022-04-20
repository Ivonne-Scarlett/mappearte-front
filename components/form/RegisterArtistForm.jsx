import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import {registerArtist} from '../../lib/api';
import classNames from 'classnames';

import Input from '../Input';
import ButtonSend from '../ButtonSend';
import Category from '../Category';
import ToggleSwitch from '../ToggleSwitch';

export default function RegisterArtistForm() {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async(dataRegister) => {
    console.log(dataRegister)
    const artist = await registerArtist(dataRegister)
    console.log('artist:',artist)
    if (artist.ok) {
      router.push('/Login')
    } else {
      alert('Datos ya registrados, ingresa con tu contraseña.')
    }
   }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-between'
    >
      <div className="flex flex-col justify-between items-center ">
        <img src='/icons/logoDesktop.png' alt='Logotipo' className='w-[40px] md:w-[50px] mb-2' />
        <img src='/icons/MappeArteDesktop.png' alt='MappeArte brand' className='pl-1 w-[120px] md:w-[150px]' /> 
      </div>

      <div>
        <ToggleSwitch />
      </div>

      <div className=''>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-7'>
          <div>
            <Input 
              label='Nombre artístico:'
              placeholder='ejemplo: MexiArt'
              name='artist'
              register= {register("artist")} 
              required
            />
          </div>
          <div className='my-2'>
              <label className=''>
                Categoria:
              </label>
          
              <div className="flex flex-row mt-1 w-full">
                <Category 
                  className='rounded-l-lg'
                  name='Sticker'
                  value='isSticker'
                  register= {register("isSticker")} 
              
                />
                <Category 
                  name='Mural'
                  value='isMural'
                  register= {register("isMural")} 
              
                />
                <Category 
                  className='rounded-r-md'
                  name='Grafitti'
                  value='isGraffiti'
                  register= {register("isGraffiti")}               
                />
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-7">
          <Input 
            label='Nombre(s):'
            placeholder='ejemplo: Ana Bertha'
            name='name'
            register= {register("name")} 
            required
          />
          <Input 
            label='Apellido(s):'
            placeholder='ejemplo: Velazco'
            name='lastName'
            register= {register("lastName")} 
            required
          /> 
        </div> 

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-7 mb-4">     
          <Input 
            label='Correo electrónico:'
            placeholder='ejemplo: demo@gmail.com'
            name='email'
            register= {register("email")} 
            required
          /> 
          <Input 
            label='Contraseña:'
            type='password'
            placeholder='Contraseña'
            name='password'
            register= {register("password")} 
            required
          />
        </div>

      </div>
      <div>
        <ButtonSend
          className='mt-4' 
          type='submit' 
          text='Registrar'
          bgColor='Orange'
          borderColor='Orange'
        />
      </div>
    </form>
  )
}
