import React, {useState} from 'react';
import DarkBlueCard from '../components/DarkBlueCard';
import ButtonCamera from '../components/ButtonCamera';
import ButtonEdit from '../components/ButtonEdit';
import ButtonToGo from '../components/ButtonToGo';
import ButtonSend from '../components/ButtonSend';
import OpacityCard from '../components/OpacityCard';
import Footer from '../components/Footer';
import Input from '../components/Input'
import classNames from 'classnames';
          
export default function Home() {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  const sayHi = () => {
    console.log('Hola')
  }
  return (
    <>
      <main className='w-full bg-test bg-contain py-20 min-h-screen'>
        <OpacityCard className='w-1/2 mt-5 h-[95%] flex flex-col justify-between'>
          <h1 className='font-Mali text-4xl mt-3'>Artistas más populares 1</h1> <span className='text-base font-semibold font-Mochiy'>Alicia</span>
          <p className='text-white my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores molestiae voluptatibus aliquam vel alias!</p>
          <ButtonToGo 
          bgColor='Green'
          borderColor='Green'
          route='/test' >
            Subir Foto
          </ButtonToGo>
          
          <ButtonSend 
          bgColor='Orange'
          borderColor='Orange'
          OnClick={sayHi}
          >
            guardar
          </ButtonSend>
          <div className='w-full grid grid-cols-2 place-items-center'>
            <ButtonEdit
            route='/test'
            />

            <ButtonCamera
            route='/test'
            />
          </div>     
        </OpacityCard>
        <DarkBlueCard className='w-100 my-5 mx-6 md:mx-20'>
          <Input
          label='Nombre'
          type='text'
          id='name'
          placeholder='Escribe tu nombre'
          className={classNames(
            'valid:border-green-500 invalid:border-red-500',
          )}
          value={name} 
          onChange={handleChange}
          />
        </DarkBlueCard>     
      </main>  
            
      <Footer />
    </>
  )
}
