import React, {useState} from 'react';
import classNames from 'classnames';
import Image from 'next/image';

export default function GridIndex({ images }) { 
    
    let countImages = images.length
    let imageInitial = (countImages - '14')
    let imagesObject = images.slice(imageInitial,countImages)
    console.log(imagesObject)
    

    const [showModal, setShowModal] = useState(false); 
    const [imgShowData, setImgShowData] = useState('');
    const isImageClicked = (imageData) => {
      console.log('Data de la imagen: ',imageData)
      setImgShowData(imageData);
    } 


  return (
    <>
      <div className="bg-orangeP flex flex-row px-6 md:px-20 py-1">

        <div className="bg-aquaP">
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
                      <img 
                        src={imgShowData.imageURL} 
                        style={{width:'100%'}} 
                        className="border border-solid border-borange"
                      /> 
                      <div className='bg-orangeP text-sm'>
                        <h3 className='pt-2 px-6'>{imgShowData.nameArtist}</h3> 
                        <p className='pb-2 px-6'>{imgShowData.adress}</p>  
                      </div>        
                    </div> 
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}   
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:grid-row-5 bg-pinkP max-w-1/2 max-h-3/4 ">
          {imagesObject.map((image, index) => (
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
                  setShowModal(true)
                  isImageClicked(image)
                }}
              >
                <img src={image.imageURL} className={classNames('w-full h-full object-cover')}/>
            </div>
          ))}              
        </div>
        
      </div>
    </>
  )
}
