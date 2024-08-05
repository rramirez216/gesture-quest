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
  background-color: hsl(25deg 100% 97% / 50%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: hsl(130, 55%, 79%);
`

export default Modal
