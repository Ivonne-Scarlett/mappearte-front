import React from 'react'

export default function AvatarImg(imgUser, classImg, nickname) {
  const imgSize = {
    s1: ''
  }

  const altDescription = `Foto del usuario ${nickname}`
  return (
    <img src={imgUser} alt={altDescription} className={`${classImg} `} />
  )
}
