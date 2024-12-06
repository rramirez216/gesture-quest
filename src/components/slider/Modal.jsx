import React from 'react'
import Timer from './Timer'
import ImageContainer from './ImageContainer'
import ButtonWrapper from './ButtonWrapper'

function Modal({
  sliderDisplay,
  handleSliderDisplay,
  intervalTime,
  imageList,
}) {
  function convertToMilliseconds() {
    const { radioNum, radioStr } = intervalTime
    if (radioStr == 'min' || radioStr == 'mins') {
      return radioNum * 60 * 1000
    } else {
      return radioNum * 1000
    }
  }

  let timeInMilliseconds = convertToMilliseconds()

  const [imageIndex, setImageIndex] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const [milliseconds, setMilliseconds] = React.useState(timeInMilliseconds)
  const isSliderOn = sliderDisplay === true ? 'block' : 'hidden'

  let timer =
    imageList.length > 0 && sliderDisplay == true ? (
      <Timer
        timeInMilliseconds={timeInMilliseconds}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        imageList={imageList}
        pause={pause}
        milliseconds={milliseconds}
        setMilliseconds={setMilliseconds}
      />
    ) : (
      <Timer timeInMilliseconds={timeInMilliseconds} imageList={imageList} />
    )

  const handlePause = () => {
    setPause(!pause)
  }

  const handleClick = (str) => {
    if (str === 'Next' && imageIndex < imageList.length - 1) {
      setImageIndex(imageIndex + 1)
      setMilliseconds(timeInMilliseconds)
      console.log('+1')
    } else if (str === 'Prev' && imageIndex > 0) {
      setImageIndex(imageIndex - 1)
      setMilliseconds(timeInMilliseconds)
      console.log('-1')
    }
  }

  return (
    <>
      <div className={`${isSliderOn} absolute inset-0 bg-slate-100`} display={isSliderOn}>
        <ImageContainer imageList={imageList} imageIndex={imageIndex} />
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
    </>
  )
}

export default Modal
