import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import {registerArtist} from '../../lib/api';

import Input from '../Input';
import ButtonSend from '../ButtonSend';
import Category from '../Category';

export default function RegisterArtistForm() {
  const router = useRouter();
  const [categorySelected, setCategorySelected] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async(dataRegister) => {
    console.log('category', categorySelected)
    const artist = await registerArtist(dataRegister)
    console.log('artist:',artist)
    if (artist.ok) {
      router.push('/Login')
    }
   }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        label='Nombre artistico'
        placeholder='ejemplo: MexiArt'
        name='artist'
        register= {register("artist")} 
        required
      />
      <Category 
        categorySelect={categorySelected}
        setCategorySelected={setCategorySelected}
      />
      <Input 
        label='Nombre'
        placeholder='ejemplo: Ana Bertha'
        name='name'
        register= {register("name")} 
        required
      />
      <Input 
        label='Apellido'
        placeholder='ejemplo: Velazco'
        name='lastName'
        register= {register("lastName")} 
        required
      />
      <Input 
        label='Correo electrónico'
        placeholder='ejemplo: demo@gmail.com'
        name='email'
        register= {register("email")} 
        required
      />
       <Input 
        label='Contraseña'
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
