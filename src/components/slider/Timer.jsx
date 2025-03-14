import React from 'react'
import TimerDisplay from './TimerDisplay'

function Timer({
  imageIndex,
  imageList,
  pause,
  milliseconds,
  setMilliseconds,
  updateImageIndex,
  setSessionEnd,
}) {
  const [time, setTime] = React.useState({ minutes: 0, seconds: 0 })
  const arrayLength = imageList.length - 1

  function calculateCurrentTime(input) {
    return {
      minutes: Math.floor((input % 3600000) / 60000),
      seconds: Math.floor((input % 60000) / 1000),
    }
  }

  React.useEffect(() => {
    let intervalID
    if (imageList.length > 0) {
      intervalID = setInterval(() => {
        let currentTime = calculateCurrentTime(milliseconds)
        let { minutes, seconds } = currentTime

        setTime({ minutes, seconds })
        if (imageIndex <= arrayLength && minutes + seconds) {
          setMilliseconds((m) => m - 1000)
        }
        if (!minutes && !seconds) {
          if (imageIndex < arrayLength) {
            updateImageIndex("+")
          } else {
            clearInterval(intervalID)
            setSessionEnd(true)
          }
        }
      }, 1000)
    }

    if (pause === true) {
      clearInterval(intervalID)
    }

    return () => clearInterval(intervalID)
  }, [imageIndex, pause, milliseconds])

  return (
    <>
      <TimerDisplay time={time} />
    </>
  )
}

export default Timer
