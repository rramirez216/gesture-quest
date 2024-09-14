import React from 'react'
import { styled } from '@linaria/react'

function Image({ src, alt }) {
  return (
    <>
      <Img src={src} alt={alt} />
    </>
  )
}

const Img = styled.img`
  width: 50%;
`
export default Image

//try to pass image index and load an image
// useeffect to clear url
// when image changes change state that would cause timer to mount or unmount
