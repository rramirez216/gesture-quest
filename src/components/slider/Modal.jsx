import React from 'react'
import Timer from './Timer'
import Image from './Image'
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
    <div className={`${isSliderOn} absolute inset-0 `} display={isSliderOn}>
      <div className='w-full h-full flex justify-center items-center border-2 bg-slate-200'>
        {imageList.length > 0 && (
          <Image src={imageList[imageIndex]} alt='file' />
        )}
      </div>
      <ButtonWrapper handleClick={handleClick} handlePause={handlePause} timer={timer} handleSliderDisplay={handleSliderDisplay} pause={pause} imageList={imageList} imageIndex={imageIndex} />
    </div>
  )
}

export default Modal
