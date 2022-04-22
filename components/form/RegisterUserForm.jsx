import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import {registerUser} from '../../lib/api';

import Input from '../Input';
import ButtonSend from '../ButtonSend';
import Category from '../Category';

export default function RegisterUserForm() {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async(dataRegister) => {
    const user = await registerUser(dataRegister)
    console.log('dataregister', dataRegister)
    console.log('user',user)
    if (user.ok) {
      router.push('/Login')
    } else {
      alert('Datos ya registrados, ingresa con tu contraseña.')
    }
   }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-between'
    >   

      <div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-7'>
          <div>
            <Input 
              label='Usuario:'
              placeholder='ejemplo: Sar457'
              name='user'
              register= {register("user")} 
              required
            />
          </div>
          <div className='my-2'>
              <label className=''>
                Categoria de interés:
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
            placeholder='ejemplo: Sara Ivonne'
            name='name'
            register= {register("name")} 
            required
          />
          <Input 
            label='Apellido(s):'
            placeholder='ejemplo: López'
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
