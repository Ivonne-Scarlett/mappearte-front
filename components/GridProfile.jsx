import React from 'react';
import classNames from 'classnames';

export default function GridProfile({ images }) { 
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
          //onClick={isImageClicked}
        >
          <img src={item} style={{width:'100%'}}/>
        </div>
      )
    })}
  </div>
  )
}
