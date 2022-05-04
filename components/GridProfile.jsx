import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import { getArtist } from '../lib/api';

export default function GridProfile({ streetArtbyArtist}) { 
    const [showModal, setShowModal] = useState(false); 
    const [imgShowData, setImgShowData] = useState('');

    const isImageClicked = (imageData) => {
      console.log('Data de la imagen: ',imageData)
      setImgShowData(imageData);
    } 

    return (
      <div className={classNames(
        "columns-2 lg:columns-3",
        "py-6 md:py-10", 
        )}>
        {streetArtbyArtist?.map((mural, index)=> {
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
              <img src={mural.muralImg} alt="" style={{width:'100%'}}/>
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
                        <img src='/icons/cancel.png' alt='boton de cerrar' width='15px' height='15px'/>
                      </button>
                    </div>
                    <div className="relative px-6 flex-auto pb-6">
                      <img 
                        src={imgShowData.muralImg} 
                        alt=""
                        style={{width:'100%'}} 
                        className="border border-solid border-borange"
                      /> 
                      <div className='bg-orangeP text-sm'>
                        <p className='py-2 px-6'>Ubicación: {imgShowData.address}</p>  
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
