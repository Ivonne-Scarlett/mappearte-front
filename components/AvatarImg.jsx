import React, {useState} from 'react';
import classNames from 'classnames';


export default function AvatarImg({ dataArtist }) { 

  return (
    <div className={classNames(
      "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7",
      "px-6 md:px-20 py-6 md:py-10 bg-backgroundP",
      )}>
        
      {dataArtist.map((artists, index)=> {
        let avatarArtist = artists.avatar
        return(
          <div className={classNames(
            "rounded mb-3 border-2 border-solid border-bbackground",      
            "hover:opacity-70 hover:border-2 hover:border-solid hover:border-borange" 
          )} 
            key={index} 
            route='/test'
          >
            <div className="flex flex-row justify-center">
              <img src={`${avatarArtist} ? ${artists.avatar}" : "/icons/nofotocolor.png"`}
                alt="imagen de artista" 
                className={classNames(
                  "w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 2xl:w-60 2xl:h-60",
                  "my-3 md:my-5 lg:my-8",
                  "rounded-full border-2 border-solid border-borange",
                  "object-cover"
                )}
              />
            </div>
            <div className="flex flex-row justify-center">
              <h2 className={classNames(
                "text-sm md:text-base lg:text-lg 2xl:text-xl",
                "mb-3 md:mb-5 lg:mb-8"
              )}>{artists.nameArtist}</h2>
            </div>
          </div>
        )
      })}  
    </div>
  )
}
