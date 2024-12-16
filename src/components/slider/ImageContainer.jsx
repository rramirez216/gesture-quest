import React from 'react'
import Image from './Image'
import useMouseMove from '../../hooks/useMouseMove'
import useMouseDownUp from '../../hooks/useMouseDownUp'

function ImageContainer({ imageList, imageIndex, imageSize }) {
  const { coordinates, handleMouseMove } = useMouseMove()
  const { handleMouseDown, handleMouseUp, offset } = useMouseDownUp(coordinates)
  return (
    <div className='flex justify-center h-full' style={{ transform: `scale(${imageSize})` }} onMouseMove={(event) => handleMouseMove(event)} >
      {imageList.length > 0 && (
        <Image src={imageList[imageIndex]} alt='file' offset={offset} handleMouseDown={handleMouseDown} handleMouseUp={handleMouseUp} />
      )}
    </div>

  )
}

export default ImageContainer
