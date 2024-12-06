import React from 'react'
import Image from './Image'

function ImageContainer({ imageList, imageIndex }) {
  return (
    <div className='w-full h-full flex justify-center items-center transform scale-[0.2]' onWheel={(e) => { console.log(e.deltaY, e.deltaX) }}>
      {imageList.length > 0 && (
        <Image src={imageList[imageIndex]} alt='file' />
      )}
    </div>

  )
}

export default ImageContainer
