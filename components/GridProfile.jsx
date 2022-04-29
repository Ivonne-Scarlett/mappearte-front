import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { getArtist } from '../lib/api';

export default function GridProfile({ images }) { 
    const [showModal, setShowModal] = useState(false); 
    const [imgShowData, setImgShowData] = useState('');
    const [murals, setMurals] =  useState([])

    const isImageClicked = (imageData) => {
      console.log('Data de la imagen: ',imageData)
      setImgShowData(imageData);
    } 

    useEffect(() => {
      getArtist()
      .then(response => {
        const countImages = response.artists.length
        const imageInitial = countImages - 12
        const artistData = response.artists.slice(imageInitial, countImages);
        setMurals(artistData);
      })
    }, [])

    return (
    <div className={classNames(
      "columns-2 lg:columns-3",
      /* "px-6 md:px-20",*/
      "py-6 md:py-10", 
      )}>
    {murals.map((mural, index)=> {
      return(
        <div className={classNames(
          "break-inside-avoid-column",        
          "cursor-pointer",
          "mb-3",      
          "hover:opacity-70" 
        )} 
          key={index} 
          onClick={() => {
            setShowModal(true)
            isImageClicked(mural)}}
        >
          <Image src={mural.bgImg} alt="" style={{width:'100%'}}/>
        </div>
      )
    })}
    {showModal ? (
        <>
          <div className={classNames("flex justify-center items-center",
            "overflow-x-hidden overflow-y-auto fixed inset-0 z-50",
            "outline-none focus:outline-none backdrop-blur-md")}
          >
            <div className="relative w-auto max-w-3xl my-6 mx-auto">
              <div className={classNames("relative flex flex-col",
              "bg-backgroundP bg-opacity-70 w-full lg:min-w-5/6 border-0 rounded-lg shadow-lg",
              " outline-none focus:outline-none")}
              >
                <div className="flex items-center justify-end">
                  <button
                    className="background-transparent pt-2 pr-1.5"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Image src='/icons/cancel.png' alt='boton de cerrar' width='15px' height='15px'/>
                  </button>
                </div>
                <div className="relative px-6 flex-auto pb-6">
                  <Image 
                    src={imgShowData.bgImg} 
                    alt=""
                    style={{width:'100%'}} 
                    className="border border-solid border-borange"
                  /> 
                  <div className='bg-orangeP text-sm'>
                    <h3 className='pt-2 px-6'>{imgShowData.artist}</h3> 
                    <p className='pb-2 px-6'>{imgShowData.city}</p>  
                  </div>        
                </div> 
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}    
  </div>
  )
}
