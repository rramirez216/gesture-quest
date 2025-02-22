import React from 'react'
import FileInput from '../components/ui/FileInput'
import Form from '../components/ui/Form'
import Button from '../components/ui/Button'
import Modal from '../components/slider/Modal'
import CustomTimer from '../components/custom-timer-button/CustomTimer'
import { shuffleArray, roundToNearestTen } from './Home.helpers.js'

function Home() {
  const [imageList, setImageList] = React.useState([])
  const [intervalTime, setIntervalTime] = React.useState({
    radioNum: 30,
    radioStr: 'secs',
  })
  const [sliderDisplay, setSliderDisplay] = React.useState(false)
  const [customTime, setCustomTime] = React.useState({ minutes: 0, seconds: 0 })

  const handleImage = (event) => {
    let arr = []

    for (const obj of event.target.files) {
      let url = URL.createObjectURL(obj)
      arr = [...arr, url]
    }

    setImageList(shuffleArray(arr))

    console.log(arr)
  }

  const handleSliderDisplay = () => {
    if (imageList.length > 0) {
      setSliderDisplay(!sliderDisplay)
    }
  }

  const handleCustomTimeButton = (str) => {
    const { minutes, seconds } = customTime
    if (str === '+sec' && (seconds == 59 || seconds >= 55)) {
      setCustomTime((prev) => ({ ...prev, seconds: 59 }))
      return
    }
    if (str === '+sec' && seconds % 5 !== 0) {
      setCustomTime((prev) => ({ ...prev, seconds: roundToNearestTen(str, seconds) }))
      return
    }
    if (str === '+sec') {
      setCustomTime((prev) => ({ ...prev, seconds: prev.seconds + 5 }))
      return
    }
    if (str === '-sec' && seconds > 55) {
      setCustomTime((prev) => ({ ...prev, seconds: 55 }))
      return
    }
    if (str === '-sec' && seconds - 5 < 0) {
      setCustomTime((prev) => ({ ...prev, seconds: 0 }))
      return
    }
    if (str === '-sec' && seconds % 5 !== 0) {
      setCustomTime((prev) => ({ ...prev, seconds: roundToNearestTen(str, seconds) }))
      return
    }
    if (str === '-sec') {
      setCustomTime((prev) => ({ ...prev, seconds: prev.seconds - 5 }))
      return
    }
    if (str === '+min' && (minutes == 59)) {
      setCustomTime((prev) => ({ ...prev, minutes: 59 }))
      return
    }
    if (str === '+min') {
      setCustomTime((prev) => ({ ...prev, minutes: prev.minutes + 1 }))
      return
    }
    if (str === '-min' && minutes == 0) {
      setCustomTime((prev) => ({ ...prev, minutes: 0 }))
      return
    }
    if (str === '-min') {
      setCustomTime((prev) => ({ ...prev, minutes: prev.minutes - 1 }))
      return
    }
  }

  const handleOnChange = (event) => {
    let strToNum = Number(event.target.value)

    if (event.target.value < 0) {
      setCustomTime((prev) => ({ ...prev, seconds: 0 }))
      return
    }

    if (event.target.value > 59) {
      setCustomTime((prev) => ({ ...prev, seconds: 59 }))
      return
    }

    setCustomTime((prev) => ({ ...prev, seconds: strToNum }))
  }


  React.useEffect(() => {
    return () => {
      if (imageList.length > 0) {
        URL.revokeObjectURL(imageList)
        console.log('cleared!')
      }
    }
  }, [imageList])

  return (
    <main className='w-full h-full flex flex-col items-center justify-center md:px-8'>
      <Form intervalTime={intervalTime} setIntervalTime={setIntervalTime} sliderDisplay={sliderDisplay}>
        <FileInput handleImage={handleImage} />
        <CustomTimer time={customTime.minutes} handleOnChange={handleOnChange} setCustomTime={setCustomTime} handleCustomTimeButton={handleCustomTimeButton} minus={'-min'} plus={'+min'} />
        <CustomTimer time={customTime.seconds} handleOnChange={handleOnChange} setCustomTime={setCustomTime} handleCustomTimeButton={handleCustomTimeButton} minus={'-sec'} plus={'+sec'} />
        <Button handleButton={handleSliderDisplay} buttonStr={'Start'} buttonType={'submit'} />
      </Form>
      {sliderDisplay && (
        <Modal
          sliderDisplay={sliderDisplay}
          handleSliderDisplay={handleSliderDisplay}
          intervalTime={intervalTime}
          imageList={imageList}
        />
      )}
    </main>
  )
}

export default Home
