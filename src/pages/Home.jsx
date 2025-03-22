import React from 'react'
import FileInput from '../components/ui/FileInput'
import Form from '../components/ui/Form'
import Button from '../components/ui/Button'
import Modal from '../components/slider/Modal'
import CustomTimer from '../components/custom-timer-button/CustomTimer'
import { shuffleArray, nextMultipleOfFive, boundaryHandler } from './Home.helpers.js'

function Home() {
  const [imageList, setImageList] = React.useState([])
  const [intervalTime, setIntervalTime] = React.useState({
    radioValue: 30,
    radioStr: 'secs',
  })
  const [sliderDisplay, setSliderDisplay] = React.useState(false)
  const [customTime, setCustomTime] = React.useState({ minutes: 0, seconds: 0 })
  const isRadioValueCustom = intervalTime.radioStr === 'custom' ? 'w-full max-w-xs flex gap-2 block -mt-8' : 'w-full max-w-xs flex gap-2 hidden'

  function convertToMilliseconds() {
    const { radioValue, radioStr } = intervalTime
    if (radioStr == 'min' || radioStr == 'mins') {
      return radioValue * 60 * 1000
    } else {
      return radioValue * 1000
    }
  }

  function setIntervalTimeToCustomOrSelectedRadioValue() {
    const { minutes, seconds } = customTime
    let newIntervalTime = (minutes * 60000) + (seconds * 1000)
    console.log(newIntervalTime)
    setIntervalTime((prev) => {
      if (minutes > 0 || seconds > 0) {

        return { ...prev, radioValue: newIntervalTime }
      } else {
        return { ...prev, radioValue: convertToMilliseconds() }
      }
    })
  }

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
      setIntervalTimeToCustomOrSelectedRadioValue()
    }
  }

  const handleCustomTimeButton = (str) => {
    setCustomTime((prev) => {
      const { minutes, seconds } = prev
      const secondsOrMinutes = {
        '+sec': Math.min(59, seconds % 5 !== 0 ? nextMultipleOfFive(str, seconds) : seconds + 5),
        '-sec': Math.max(0, seconds % 5 !== 0 ? nextMultipleOfFive(str, seconds) : seconds - 5),
        '+min': Math.min(59, minutes + 1),
        '-min': Math.max(0, minutes - 1),
      }
      return str.includes("sec") ? { ...prev, seconds: secondsOrMinutes[str] } : { ...prev, minutes: secondsOrMinutes[str] }
    })
  }

  const handleOnChange = (event, str) => {
    let input = boundaryHandler(0, 59, Number(event))
    setCustomTime((prev) => {
      return str.includes("Sec") ? { ...prev, seconds: input } : { ...prev, minutes: input }
    })
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
        <div className={isRadioValueCustom}>
          <CustomTimer time={customTime.minutes} handleOnChange={handleOnChange} setCustomTime={setCustomTime} handleCustomTimeButton={handleCustomTimeButton} minus={'-min'} plus={'+min'} labelText={'Min'} />
          <CustomTimer time={customTime.seconds} handleOnChange={handleOnChange} setCustomTime={setCustomTime} handleCustomTimeButton={handleCustomTimeButton} minus={'-sec'} plus={'+sec'} labelText={'Sec'} />
        </div>
        <Button handleButton={handleSliderDisplay} buttonStr={'Start'} buttonType={'submit'} />
      </Form>
      {sliderDisplay && (
        <Modal
          sliderDisplay={sliderDisplay}
          handleSliderDisplay={handleSliderDisplay}
          intervalTime={intervalTime.radioValue}
          imageList={imageList}
        />
      )}
    </main>
  )
}

export default Home
