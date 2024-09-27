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
