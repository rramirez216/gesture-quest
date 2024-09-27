import React from 'react'
import Button from '../ui/Button'
import Timer from './Timer'
import Image from './Image'

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
  const isSliderOn = sliderDisplay === true ? 'flex' : 'hidden'



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
    <div className={`${isSliderOn} flex-col justify-center items-center absolute inset-0 px-12 py-6`} display={isSliderOn}>
      <div className='w-full h-full flex justify-center items-center border-2 border-secondary'>
        {imageList.length > 0 && (
          <Image src={imageList[imageIndex]} alt='file' />
        )}
      </div>
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
    </div>
  )
}

export default Modal
