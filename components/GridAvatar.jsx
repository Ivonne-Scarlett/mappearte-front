import React from 'react';
import classNames from 'classnames';


export default function GridAvatar( {avatars}) {  
  return (
    <>
       
      <div className={classNames(
        "px-6 md:px-20 py-6 md:py-10 bg-backgroundP",
        "grid grid-cols-3 md:grid-cols-6 gap-2 md:grid-row-5 max-w-1/2 max-h-3/4"
      )}>
       
        {avatars.map((avatar, index) => {
          console.log(avatar.avatarURL)
          return(  
            <div className={classNames(
              "bg-pink-200",
              {
                'col-span-2': index === 1 || index === 2 || index === 5 || index === 6 || index === 9 || index === 10,
                'md:col-span-2 md:row-span-2 md:h-[296px]': index === 0 || index === 4,
                'md:col-span-1': index === 2 || index === 5 || index === 6 || index === 9 || index === 10,
                'md:row-span-2 md:h-[296px]': index === 7 || index === 8,
                "md:self-end": index === 0,
                'md:self-end': index === 11 
              }
              )}
              key={index}
            >     
                <img src={avatar.avatarURL}
                  alt="imagen de artista" 
                  className={classNames(
                    "object-cover cursor-pointer",
                    "rounded-full border-2 border-solid border-white",
                    "w-24 h-24 md:w-20 md:h-20 lg:w-40 lg:h-40 2xl:w-60 2xl:h-60",
                    "my-3 md:my-5 lg:my-8"
                  )}/> 
            </div>             
          )
        })}        

      </div>
    </>
  )
}
