import React from 'react'
import Button from '../ui/Button'

function EndOfSession({ handleSliderDisplay, updateImageIndex }) {
  return <div className='absolute'>
    <Button handleButton={updateImageIndex} buttonStr={'repeat'} />
    <Button handleButton={handleSliderDisplay} buttonStr={'Create New Session'} />
  </div>
}

export default EndOfSession
