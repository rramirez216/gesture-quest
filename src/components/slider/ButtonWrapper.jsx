import React from "react"
import Button from "../ui/Button"

function ButtonWrapper({ handleClick, handlePause, timer, handleSliderDisplay, pause, imageList, imageIndex }) {
  const currentImage = imageIndex + 1
  const totalNumberOfImages = imageList.length
  return (
    <div className='max-w-min mx-auto flex items-center gap-2 text-2xl transform -translate-y-[120%] text-secondary p-2 border border-secondary bg-slate-200'>
      <Button handleButton={handleClick} buttonStr={'Prev'} />
      <p className='min-w-max'>
        {`${currentImage} of ${totalNumberOfImages}`}
      </p>
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
