import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export default function AvatarImg({artists}) { 
  const router = useRouter();

  return (
    <div className={classNames(
      "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7",
      "",
      )}>
      {artists.map((artists, index)=> {
        console.log('artistas',artists)
        let avatarArtist = artists.imgArtist
        let idArtist = artists._id
        return(
          <div className={classNames(
            "rounded mb-3 border-2 border-solid border-[#302f56]",      
            "hover:opacity-70 hover:border-2 hover:border-solid hover:border-borange" 
          )} 
            key={index} 
          >
            <div className="flex flex-row justify-center">
              {avatarArtist && <img src={avatarArtist}
                alt="imagen de artista" 
                className={classNames(
                  "object-cover cursor-pointer",
                  "rounded-full border-2 border-solid border-borange",
                  "w-24 h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 2xl:w-60 2xl:h-60",
                  "my-3 md:my-5 lg:my-8"
                )}                
                onClick={() => router.push(`/artist/${idArtist}`)}
              />}
               {!avatarArtist && <img src="/icons/noavatar.png"
                alt="imagen de artista" 
                className={classNames(
                  "object-cover cursor-pointer",
                  "rounded-full border-2 border-solid border-borange",
                  "w-24 h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 2xl:w-60 2xl:h-60",
                  "my-3 md:my-5 lg:my-8"
                )}                
                onClick={() => router.push(`/artist/${idArtist}`)}
              />}
            </div>
            <div className="flex flex-row justify-center">
              <h2 className={classNames(
                "mb-3 md:mb-5 lg:mb-8",
                "text-sm md:text-base lg:text-lg 2xl:text-xl"
              )}>{artists.artist}</h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}
