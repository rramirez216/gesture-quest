import React from "react"
import Button from "../ui/Button"

function ButtonWrapper({ handleClick, handlePause, handleSliderDisplay, pause, imageList, imageIndex, sessionEnd }) {
  const totalNumberOfImages = `${imageIndex + 1} of ${imageList.length}`
  const wrapperStyles = sessionEnd ? 'absolute inset-x-0 bottom-0 m-auto max-w-min hidden justify-center gap-1 md:gap-2 text-xl md:text-2xl text-slate-800 border border-slate-300 rounded-t-lg bg-slate-200 p-2 md:p-4' : 'absolute inset-x-0 bottom-0 m-auto max-w-min flex justify-center gap-1 md:gap-2 text-xl md:text-2xl text-slate-800 border border-slate-300 rounded-t-lg bg-slate-200 p-2 md:p-4'

  return (
    <div className={wrapperStyles}>
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
