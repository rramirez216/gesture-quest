import React from 'react'

function Image({ src, alt }) {
  return (
    <>
      <img className='w-full h-full object-contain' src={src} alt={alt} />
    </>
  )
}

export default Image
