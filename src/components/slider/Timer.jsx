import React from 'react'
import { styled } from '@linaria/react'

function Timer({ intervalTime, sliderDisplay }) {
  const [time, setTime] = React.useState({ minutes: 0, seconds: 0 })

  const secondsOrMinutes = intervalTime.slice(-3)

  let countdown
  let intervalID

  if (secondsOrMinutes == 'min' || secondsOrMinutes == 'ins') {
    countdown = extractNumber(intervalTime) * 60 * 1000
  } else {
    countdown = extractNumber(intervalTime) * 1000
  }
  React.useEffect(() => {
    intervalID = setInterval(() => {
      const currentTimer = countdown
      const minutes = Math.floor((currentTimer % 3600000) / 60000)
      const seconds = Math.floor((currentTimer % 60000) / 1000)
      console.log('tick')

      countdown -= 1000
      setTime({ minutes, seconds })

      if (!minutes && !seconds) {
        clearInterval(intervalID)
      }
    }, 1000)

    return () => clearInterval(intervalID)
  }, [])

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

function extractNumber(params) {
  return params.length < 7
    ? Number(params.slice(0, 1))
    : Number(params.slice(0, 2))
}

const TimerWrapper = styled.div`
  padding: 4px;
  background-color: aliceblue;
`

export default Timer
