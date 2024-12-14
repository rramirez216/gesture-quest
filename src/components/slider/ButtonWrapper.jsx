import React from "react"
import Button from "../ui/Button"

function ButtonWrapper({ handleClick, handlePause, handleSliderDisplay, pause, imageList, imageIndex }) {
  const totalNumberOfImages = `${imageIndex + 1} of ${imageList.length}`
  return (
    <div className='max-w-min mx-auto flex justify-center gap-1 md:gap-2 text-xl md:text-2xl transform -translate-y-[100%] text-slate-800 border border-slate-300 rounded-t-lg bg-slate-200 p-2 md:p-4'>
      <Button handleButton={handleClick} buttonStr={'Prev'} />
      <p className='min-w-max bg-slate-200 flex flex-col justify-center px-2'>
        <span className="inline-block">{totalNumberOfImages}</span>
      </p>
      <Button handleButton={handleClick} buttonStr={'Next'} />
      <div className=' md:block'>
        <Button
          handleButton={handlePause}
          buttonStr={pause ? 'Play' : 'Pause'}
        />
      </div>
      <div className="block">
        <Button handleButton={handleSliderDisplay} buttonStr={'End Session'} />
      </div>
    </div>

  )
}

export default ButtonWrapper
