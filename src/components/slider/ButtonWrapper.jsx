import React from "react"
import Button from "../ui/Button"

function ButtonWrapper({ handleClick, handlePause, timer, handleSliderDisplay, pause, imageList, imageIndex }) {
  const currentImage = imageIndex + 1
  const totalNumberOfImages = imageList.length
  return (
    <div className='max-w-min mx-auto flex gap-2 text-2xl transform -translate-y-[120%] text-slate-800 p-4 border border-slate-300 bg-slate-100'>
      <Button handleButton={handleClick} buttonStr={'Prev'} />
      <p className='min-w-max bg-slate-200 flex flex-col justify-center px-2'>
        <span className="inline-block">{`${currentImage} of ${totalNumberOfImages}`}</span>
      </p>
      <Button handleButton={handleClick} buttonStr={'Next'} />
      <Button
        handleButton={handlePause}
        buttonStr={pause ? 'Play' : 'Pause'}
      />
      <p className='bg-slate-200 flex flex-col justify-center px-2'>
        {timer}
      </p>
      <Button handleButton={handleSliderDisplay} buttonStr={'End Session'} />
    </div>

  )
}

export default ButtonWrapper
