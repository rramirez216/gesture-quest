import React from 'react'

function Image({ src, alt, handleMouseDown, handleMouseUp, offset }) {
  const { offsetX, offsetY } = offset
  return (
    <>
      <img className='h-full object-contain select-none' style={{ transform: `translateX(${offsetX}px) translateY(${offsetY}px)` }} src={src} alt={alt} onMouseDown={(event) => handleMouseDown(event)} onMouseUp={(event) => handleMouseUp(event)} />
    </>
  )
}

export default Image
