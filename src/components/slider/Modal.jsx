import React from 'react'
import { styled } from '@linaria/react'

function Modal() {
  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: hsla(25, 100%, 97% / 25%);
`
const ImageWrapper = styled.div`
  height: 100%;
  background-color: hsl(130, 55%, 79%);
`

export default Modal
