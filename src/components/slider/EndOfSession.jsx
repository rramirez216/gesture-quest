import React from 'react'
import Button from '../ui/Button'

function EndOfSession({ handleSliderDisplay, updateImageIndex, sessionEnd }) {
  const sessionEndStyles = sessionEnd ? 'absolute bg-slate-100 inset-0 flex flex-col items-center justify-center gap-4' : 'hidden'
  return <div className={sessionEndStyles}>
    <div>
      <p className='text-5xl'>All Done!</p>
    </div>
    <div className='flex'>
      <Button handleButton={updateImageIndex} buttonStr={'Repeat'} buttonType='submit' />
      <Button handleButton={handleSliderDisplay} buttonStr={'Create New Session'} />
    </div>
  </div>
}

export default EndOfSession
