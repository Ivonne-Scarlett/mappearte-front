import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import {registerArtist} from '../../lib/api';

import Input from '../Input';
import ButtonSend from '../ButtonSend';
import Category from '../Category';

export default function RegisterArtistForm() {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async(dataRegister) => {
    console.log(dataRegister)
    const artist = await registerArtist(dataRegister)
    console.log('artist:',artist)
    if (artist.ok) {
      router.push('/Login')
    }
   }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        label='Nombre artístico:'
        placeholder='ejemplo: MexiArt'
        name='artist'
        register= {register("artist")} 
        required
      />
      <label className='pb-4'>
        Categoria:
      </label>
      <div className="flex flex-row">
        <Category 
          className='rounded-l-lg'
          name='Sticker'
          value='isSticker'
          register= {register("isSticker")} 
      
        />
        <Category 
          className=''
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
      <Input 
        label='Nombre:'
        placeholder='ejemplo: Ana Bertha'
        name='name'
        register= {register("name")} 
        required
      />
      <Input 
        label='Apellido:'
        placeholder='ejemplo: Velazco'
        name='lastName'
        register= {register("lastName")} 
        required
      />      
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
      <ButtonSend 
        type='submit' 
        text='Registrar'
        bgColor='Orange'
        borderColor='Orange'
      />
    </form>
  )
}
