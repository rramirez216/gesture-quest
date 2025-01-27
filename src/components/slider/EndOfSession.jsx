import React from 'react'
import Button from '../ui/Button'

function EndOfSession({ handleSliderDisplay, updateImageIndex }) {
  return <div className='absolute bg-slate-100 inset-0 flex items-center justify-center'>
    <Button handleButton={updateImageIndex} buttonStr={'repeat'} />
    <Button handleButton={handleSliderDisplay} buttonStr={'Create New Session'} />
  </div>
}

export default EndOfSession
