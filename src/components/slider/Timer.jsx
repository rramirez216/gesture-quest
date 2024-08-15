import React from 'react'
import { styled } from '@linaria/react'
import Button from '../ui/Button'

function Timer({ intervalTime, sliderDisplay }) {
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)

  let secondsOrMinutes = intervalTime.slice(-3)

  let countdown
  let intervalID

  if (secondsOrMinutes == 'min' || secondsOrMinutes == 'ins') {
    countdown = extractNumber(intervalTime) * 60 * 1000
  } else {
    countdown = extractNumber(intervalTime) * 1000
  }

  // React.useEffect(() => {
  //   if (sliderDisplay) {

  //     return () => clearInterval(intervalID)
  //   }
  // }, [sliderDisplay])

  function clearId() {
    clearInterval(intervalID)
  }

  function handleClick() {
    intervalID = setInterval(startCountdown, 1000)
  }

  function startCountdown() {
    let currentTimer = countdown
    let mins = Math.floor((currentTimer % 3600000) / 60000)
    let secs = Math.floor((currentTimer % 60000) / 1000)

    countdown -= 1000
    setMinutes(mins)
    setSeconds(secs)
    if (!mins && !secs) {
      clearId()
    }
  }

  return (
    <div>
      <p>
        {minutes || seconds
          ? `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
          : ''}
      </p>
      <Button handleButton={handleClick} />
    </div>
  )
}

function extractNumber(params) {
  return params.length < 7
    ? Number(params.slice(0, 1))
    : Number(params.slice(0, 2))
}

export default Timer

// TODO: what is a cleanup function? why and when is it needed?
// TODO: what are effects? why and when to use them?
