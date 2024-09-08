import React from 'react'
import { styled } from '@linaria/react'

function Timer({
  timeInMilliseconds,
  imageIndex,
  setImageIndex,
  imageList,
  pause,
}) {
  const [time, setTime] = React.useState({ minutes: 0, seconds: 0 })
  const [milliseconds, setMilliseconds] = React.useState(timeInMilliseconds)

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
        console.log(milliseconds)

        let currentTime = calculateCurrentTime(milliseconds)
        console.log(currentTime)

        let { minutes, seconds } = currentTime
        setMilliseconds((m) => m - 1000)
        setTime({ minutes, seconds })

        if (!minutes && !seconds) {
          if (imageIndex < imageList.length - 1) {
            setImageIndex(imageIndex + 1)
            setMilliseconds(timeInMilliseconds)
          }
          clearInterval(intervalID)
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
    <TimerWrapper>
      <p>
        {minutes || seconds
          ? `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
          : '0:00'}
      </p>
    </TimerWrapper>
  )
}

const TimerWrapper = styled.div`
  padding: 4px;
  background-color: aliceblue;
`
export default Timer
