import React from 'react'
import Timer from './Timer'
import ImageContainer from './ImageContainer'
import ButtonWrapper from './ButtonWrapper'
import EndOfSession from './EndOfSession'

function Modal({
  sliderDisplay,
  handleSliderDisplay,
  intervalTime,
  imageList,
}) {

  let timeInMilliseconds = convertToMilliseconds()

  const [imageIndex, setImageIndex] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const [milliseconds, setMilliseconds] = React.useState(timeInMilliseconds)
  const [imageSize, setImageSize] = React.useState(1)
  const [sessionEnd, setSessionEnd] = React.useState(false)
  const isSliderOn = sliderDisplay === true ? 'flex flex-col absolute inset-0 bg-slate-100' : 'hidden flex-col absolute inset-0 bg-slate-100'

  let timer =
    imageList.length > 0 && sliderDisplay == true ? (
      <Timer
        imageIndex={imageIndex}
        imageList={imageList}
        pause={pause}
        milliseconds={milliseconds}
        setMilliseconds={setMilliseconds}
        updateImageIndex={updateImageIndex}
        setSessionEnd={setSessionEnd}
      />
    ) : (
      <Timer imageList={imageList} />
    )

  function convertToMilliseconds() {
    const { radioNum, radioStr } = intervalTime
    if (radioStr == 'min' || radioStr == 'mins') {
      return radioNum * 60 * 1000
    } else {
      return radioNum * 1000
    }
  }

  function updateImageIndex(operator) {
    if (operator === "-") {
      setImageIndex(imageIndex - 1)
    } else if (operator === "+") {
      setImageIndex(imageIndex + 1)
    } else {
      setImageIndex(imageIndex - imageIndex)
      setSessionEnd(false)
    }
    setMilliseconds(timeInMilliseconds)
    setImageSize(1)
  }

  const handlePause = () => {
    setPause(!pause)
  }

  const handleClick = (str) => {
    if (str === 'Next' && imageIndex < imageList.length - 1) {
      updateImageIndex("+")
    } else if (str === 'Prev' && imageIndex > 0) {
      updateImageIndex("-")
    }
  }

  const handleOnWheel = (event) => {
    if (event.deltaY > 0 && imageSize > 0.33) {
      setImageSize(imageSize - 0.05)
    } else if (event.deltaY < 0 && imageSize <= 1.7) {
      setImageSize(imageSize + 0.05)
    }
  }


  return (
    <>
      <div className={isSliderOn} display={isSliderOn} onWheel={(event) => handleOnWheel(event)}>
        <ImageContainer imageList={imageList} imageIndex={imageIndex} imageSize={imageSize} />
        <ButtonWrapper
          handleClick={handleClick}
          handlePause={handlePause}
          timer={timer}
          handleSliderDisplay={handleSliderDisplay}
          pause={pause}
          imageList={imageList}
          imageIndex={imageIndex}
        />
      </div>
      <p className='w-24 text-center text-slate-800 bg-emerald-400 absolute top-0 text-2xl rounded-b-lg'>
        {timer}
      </p>
      <EndOfSession handleSliderDisplay={handleSliderDisplay} imageIndex={imageIndex} updateImageIndex={updateImageIndex} sessionEnd={sessionEnd} />
    </>
  )
}

export default Modal
