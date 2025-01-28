import React from 'react'
import Button from '../ui/Button'

function EndOfSession({ handleSliderDisplay, updateImageIndex, sessionEnd }) {
  const sessionEndStyles = sessionEnd ? 'absolute bg-slate-100 inset-0 flex items-center justify-center' : 'absolute bg-slate-100 inset-0 hidden items-center justify-center'
  return <div className={sessionEndStyles}>
    <Button handleButton={updateImageIndex} buttonStr={'repeat'} />
    <Button handleButton={handleSliderDisplay} buttonStr={'Create New Session'} />
  </div>
}

export default EndOfSession
