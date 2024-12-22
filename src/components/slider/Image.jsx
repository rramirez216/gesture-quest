import React from 'react'

function Image({ src, alt, handleMouseDown, handleMouseUp, offset, imageSize }) {
  const { offsetX, offsetY } = offset
  return (
    <>
      <img className='h-full object-contain select-none' style={{ transform: `translate(${offsetX}px, ${offsetY}px) scale(${imageSize})` }} src={src} alt={alt} onMouseDown={(event) => handleMouseDown(event)} onMouseUp={(event) => handleMouseUp(event)} />
    </>
  )
}

export default Image
