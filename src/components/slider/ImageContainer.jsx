import React from 'react'
import Image from './Image'

function ImageContainer({ imageList, imageIndex, imageSize }) {
  return (
    <div className={'w-full h-full'} style={{ transform: `scale(${imageSize})` }} >
      {imageList.length > 0 && (
        <Image src={imageList[imageIndex]} alt='file' />
      )}
    </div>

  )
}

export default ImageContainer
