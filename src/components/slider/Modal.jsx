import React from 'react'
import { styled } from '@linaria/react'
import Button from '../ui/Button'
import Timer from './Timer'
import Image from './Image'

function Modal({
  sliderDisplay,
  handleSliderDisplay,
  intervalTime,
  imageList,
}) {
  const [imageIndex, setImageIndex] = React.useState(0)

  const isSliderOn = sliderDisplay === true ? 'flex' : 'none'

  let timer =
    imageList.length > 0 && sliderDisplay == true ? (
      <Timer
        intervalTime={intervalTime}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        imageList={imageList}
      />
    ) : (
      <Timer intervalTime={intervalTime} imageList={imageList} />
    )

  console.log(timer)

  return (
    <Wrapper display={isSliderOn}>
      <ImageWrapper>
        {imageList.length > 0 && (
          <Image src={imageList[imageIndex]} alt='file' />
        )}
      </ImageWrapper>
      <ButtonWrapper>
        <Button handleButton={handleSliderDisplay} children={'End Session'} />
        {timer}
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
  padding: 24px 48px;
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: hsl(130, 55%, 79%);
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  transform: translateY(-200%);
`

export default Modal
