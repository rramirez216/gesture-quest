import React from 'react'

function Image({ src, alt }) {
  return (
    <>
      <img className='w-1/2' src={src} alt={alt} />
    </>
  )
}

export default Image
