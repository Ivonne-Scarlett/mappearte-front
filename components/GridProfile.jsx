import React from 'react';
import classNames from 'classnames';
import cameraPhoto from '../public/img/cameraPhoto.png'
// Solo deberia recibir un array en lugar de todos los img
export default function GridProfile({ className, images }) {
 
  // va la logica para el array siempre tenga 14 imagenes.
  /*
  saber de que tamaño de images 4 solo faltarian 10
  for(i=0; i<10 ;i++){
    images.push('mi imagen )
  }
  */
  let countImages = images.length
  if (countImages < 14){
    for (let i=countImages;  i<=13; i++){
      images.push(cameraPhoto)
    }
  } else if(countImages < 0){

  }
  console.log(countImages)


  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:grid-row-5">
      {images.map((image, index) => (
        <div className={classNames(
          'h-36',
          'md:h-auto',
          {
            'col-span-2': index === 1 || index === 2 || index === 5 || index === 6 || index === 9 || index === 10 ||index === 13,
            'md:col-span-2 md:row-span-2': index === 0 || index === 4,
            'md:col-span-1': index === 2 || index === 5 || index === 6 || index === 9 || index === 10,
            'md:row-span-2': index === 7 || index === 8,
            'md:col-span-3': index === 13,
          }
        )}
          key={index}
        >
          <img src={image} className={classNames('w-full h-full object-cover')}/>
        </div>
      ))
      }
    </div>
  )
}
