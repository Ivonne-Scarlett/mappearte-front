import React, {useState, useEffect} from 'react';
import classNames from 'classnames';

import { getArtistById, getStreetart } from '../lib/api';

export default function GridIndex() {
  const [murals, setMurals] =  useState([])
  const [streetArt, setStreetArt] =  useState([])
  const [showModal, setShowModal] = useState(false); 
  const [imgShowData, setImgShowData] = useState('');
  
  const isImageClicked = (imageData) => {   
    getArtistById(imageData.artistId[0]).then(response => {
      setImgShowData({...imageData, artist:response.artists})
      setShowModal(true)
    })
  } 

  useEffect(() => {
    getStreetart()
    .then(response => {
      const streetArt = response.data.streetart.slice(0, 14);
      setStreetArt(streetArt);
    })
  }, [])

  return (
    <>
      <div className="flex flex-row mt-16 mb-8">
        <div className="md:flex md:flex-col md:justify-center ">
          {showModal ? (
            <>
              <div className="block md:hidden">
                <div className={classNames(
                  "flex justify-center items-center",
                  "overflow-x-hidden overflow-y-auto fixed inset-0 z-50",
                  "outline-none focus:outline-none backdrop-blur-md")}
                >
                  <div className="relative w-auto max-w-3xl my-6 mx-auto">
                    <div className={classNames(
                      "relative flex flex-col",
                      "bg-backgroundP bg-opacity-70 w-full lg:min-w-5/6 border-0 rounded-lg shadow-lg",
                      "outline-none focus:outline-none")}
                    >
                      <div className="flex items-center justify-end">
                        <button
                          className="background-transparent pt-2 pr-1.5"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          <img 
                          src='/icons/cancel.png' 
                          alt='boton de cerrar' 
                          width='15px' 
                          height='15px'
                          className='p-4'/>
                        </button>
                      </div>
                      <div className="relative px-6 flex-auto pb-6">
                        <img 
                          src={imgShowData.muralImg} 
                          alt=""
                          style={{width:'100%'}} 
                          className="border border-solid border-borange"
                        /> 
                        <div className='bg-[#17c7c7] text-sm'>
                          <h3 className='pt-2 px-6'>{imgShowData.artist.artist}</h3> 
                          <p className='pb-2 px-6'>{imgShowData.address}</p>  
                        </div>        
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </div>
              <div className="hidden md:block w-80">
                <div className={classNames(
                  "bg-white bg-opacity-70 w-full lg:min-w-5/6",
                  "border-0 rounded-lg shadow-lg",
                  "flex flex-col",
                  "outline-none focus:outline-none")}
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
                  <div className="px-6 pb-6">
                    <img 
                      src={imgShowData.muralImg} 
                      alt=""
                      style={{width:'100%'}} 
                      className="border border-solid border-white"
                    /> 
                      <div className='bg-[#17c7c7] text-sm border border-solid border-white'>
                        <h3 className='pt-2 px-6'>{imgShowData.artist.artist}</h3> 
                        <p className='pb-2 px-6'>{imgShowData.address}</p>  
                      </div>        
                  </div> 
                </div>
              </div>
            </>
          ) : null}   
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:grid-row-5 max-w-1/2 max-h-3/4">
          {streetArt.map((image, index) => (
            <div className={classNames(
                'h-36',
                "cursor-pointer",
                "hover:opacity-75",
                {
                  'col-span-2': index === 1 || index === 2 || index === 5 || index === 6 || index === 9 || index === 10 ||index === 13,
                  'md:col-span-2 md:row-span-2 md:h-[296px]': index === 0 || index === 4,
                  'md:col-span-1': index === 2 || index === 5 || index === 6 || index === 9 || index === 10,
                  'md:row-span-2 md:h-[296px]': index === 7 || index === 8,
                  'md:col-span-3': index === 13,
                }
              )}
                key={index}
                onClick={()=>{
                  isImageClicked(image)
                }}
              >
                <img src={image.muralImg} alt="" className={classNames('w-full h-full object-cover')}/>
            </div>
          ))}              
        </div>        
      </div>
    </>
  )
}
