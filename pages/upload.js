import React from 'react';
import Nav from '../components/Nav';
import UploadImages from '../components/UserProfile'
import classNames from 'classnames';
import {
  Input,
  InputFile,
  OpacityCard,
  ButtonSend,
  Category
} from '../components'

export default function Test() {
  return (
    <>
      <Nav/>
      <div className={classNames(
      'bg-artist bg-no-repeat bg-cover',
      'w-full min-h-screen md:max-h-full',
      'flex justify-center'
    )}>
        <OpacityCard className={classNames(
          "w-5/6 md:w-4/5 items-center my-8 ",
          "grid gird-cols-1 md:grid-cols-2 gap-4 mt-20 mb-20 md:mt-40 md:mb-20"
        )}>
          <div className='md:col-span-1'>
            <Input 
            label='Nombre artístico:'
            placeholder='ejemplo: MexiArt'
            name='artist'
            className='mb-4 mt-0'
            />
            <div className="flex flex-row mt-1 w-full my-2">
              <Category 
                className='rounded-l-lg my-4'
                name='Sticker'
                value='isSticker'
              />
              <Category 
                name='Mural'
                value='isMural'
              />
              <Category 
                className='rounded-r-md  my-4'
                name='Grafitti'
                value='isGraffiti'             
              />
            </div>
            <InputFile
            className='my-4'
            />
            <Input 
            label='Direccion:'
            placeholder='ejemplo: Col. #'
            name='address'
            className='my-4'
            />
          </div>
          <div 
          className='md:col-span-1 align-center '>
            <div className='bg-white w-100 text-black h-56'>Mapa</div>
            <ButtonSend 
            className='mt-4' 
            type='submit' 
            text='Registrar'
            bgColor='Orange'
            borderColor='Orange'
            className='mt-6'/>
          </div>
        </OpacityCard>
      </div>
    </>
  )
}