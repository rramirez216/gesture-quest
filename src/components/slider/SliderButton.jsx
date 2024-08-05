import React from 'react'
import { styled } from '@linaria/react'

function SliderButton({ handleSliderDislplay }) {
  return (
    <>
      <Button onClick={handleSliderDislplay}>End Session</Button>
    </>
  )
}

const Button = styled.button`
  background-color: hsl(70deg, 75%, 65%);
  transform: translateY(-200%);
  padding: 8px 16px 8px;
`

export default SliderButton
