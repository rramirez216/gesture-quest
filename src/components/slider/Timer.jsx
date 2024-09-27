import React from 'react'

function Timer({
  timeInMilliseconds,
  imageIndex,
  setImageIndex,
  imageList,
  pause,
  milliseconds,
  setMilliseconds,
}) {
  const [time, setTime] = React.useState({ minutes: 0, seconds: 0 })

  const arrayLength = imageList.length - 1

  function calculateCurrentTime(input) {
    return {
      minutes: Math.floor((input % 3600000) / 60000),
      seconds: Math.floor((input % 60000) / 1000),
    }
  }
  function updateImageIndex() {
    setImageIndex(imageIndex + 1)
    setMilliseconds(timeInMilliseconds)
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
            updateImageIndex()
          } else {
            clearInterval(intervalID)
          }
        }
      }, 1000)
    }

    if (pause === true) {
      clearInterval(intervalID)
    }

    return () => clearInterval(intervalID)
  }, [imageIndex, pause, milliseconds])

  const { minutes, seconds } = time

  return (
    <p>
      {minutes || seconds
        ? `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
        : '0:00'}
    </p>
  )
}

export default Timer
