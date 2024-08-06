import React from 'react'
import { styled } from '@linaria/react'
import Button from '../ui/Button'

function Modal({ sliderDisplay, handleSliderDisplay }) {
  let isSliderOn = sliderDisplay === true ? 'flex' : 'none'
  return (
    <Wrapper display={isSliderOn}>
      <ImageWrapper></ImageWrapper>
      <ButtonWrapper>
        <Button handleSliderDisplay={handleSliderDisplay} />
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: ${(props) => props.display};
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
const ButtonWrapper = styled.div`
  transform: translateY(-200%);
`

export default Modal
