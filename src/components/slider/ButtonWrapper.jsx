import React from "react"
import Button from "../ui/Button"

function ButtonWrapper({ handleClick, handlePause, timer, handleSliderDisplay, pause }) {
  return (
    <div className='flex flex-row transform -translate-y-[200%]'>
      <Button handleButton={handleClick} buttonStr={'Prev'} />
      <Button handleButton={handleClick} buttonStr={'Next'} />
      <Button
        handleButton={handlePause}
        buttonStr={pause ? 'Play' : 'Pause'}
      />
      {timer}
      <Button handleButton={handleSliderDisplay} buttonStr={'End Session'} />
    </div>

  )
}

export default ButtonWrapper
