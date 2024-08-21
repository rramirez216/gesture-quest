import React from 'react'
import { styled } from '@linaria/react'
import Button from '../ui/Button'
import Timer from './Timer'

function Modal({ sliderDisplay, handleSliderDisplay, intervalTime }) {
  let isSliderOn = sliderDisplay === true ? 'flex' : 'none'
  return (
    <Wrapper display={isSliderOn}>
      <ImageWrapper></ImageWrapper>
      <ButtonWrapper>
        <Button handleButton={handleSliderDisplay} children={'End Session'} />
        {sliderDisplay && <Timer intervalTime={intervalTime} />}
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
  display: flex;
  flex-flow: row nowrap;
  transform: translateY(-200%);
`

export default Modal
