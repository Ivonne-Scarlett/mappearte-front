import React, {useState} from 'react';
import classNames from 'classnames';
import Image from 'next/image';

export default function GridProfile({ images }) { 
    const [showModal, setShowModal] = useState(false); 
    const [imgShowData, setImgShowData] = useState('');
    const isImageClicked = (imageData) => {
      console.log('Data de la imagen: ',imageData)
      setImgShowData(imageData);
    } 
    return (
    <div className={classNames(
      "columns-2 lg:columns-3",
      "px-3"
      )}>
    {images.map((item, index)=> {
      return(
        <div className={classNames(
          "break-inside-avoid-column",        
          "cursor-pointer",
          "mb-3",      
          "hover:opacity-70" 
        )} 
          key={index} 
          // onClick={() => isImageClicked(item)}
          onClick={() => {
            setShowModal(true)
            isImageClicked(item)}}
        >
          <img src={item.imageURL} style={{width:'100%'}}/>
        </div>
      )
    })}
    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md"
          >
            <div className="relative w-auto max-w-3xl my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-backgroundP bg-opacity-70 outline-none focus:outline-none">
                {/*body*/}
                <div className="flex items-center justify-end">
                  <button
                    className="background-transparent pt-2 pr-1.5"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Image src='/icons/cancel.png' alt='boton cerrar' width='15px' height='15px'/>
                  </button>
                </div>
                <div className="relative px-6 flex-auto pb-6">
                  <img src={imgShowData.imageURL} style={{width:'100%'}} className="border border-solid border-borange"/> 
                  <div className='bg-orangeP'>
                    <h3 className='pt-2 pl-6'>{imgShowData.nameArtist}</h3> 
                    <p className='pb-2 pl-6'>{imgShowData.adress}</p>  
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
