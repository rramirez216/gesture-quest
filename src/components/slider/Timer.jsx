import React from 'react'
import { styled } from '@linaria/react'

function Timer({ intervalTime }) {
  const [minutes, setMinutes] = React.useState()
  const [seconds, setSeconds] = React.useState()

  let secondsOrMinutes = intervalTime.slice(-3)
  let countdown

  if (secondsOrMinutes == 'min' || secondsOrMinutes == 'mins') {
    countdown = extractNumber(intervalTime) * 60 * 1000
  } else {
    countdown = extractNumber(intervalTime) * 1000
  }

  //if user only inputs seconds create the countdown so that it only multiplies by 1000 milliseconds

  React.useEffect(() => {
    let count = 0

    const intervalID = setInterval(
      startCountdown,
      1000,
      countdown,
      stopInterval
    )
    console.log(count++)

    function stopInterval() {
      clearInterval(intervalID)
    }
  }, [seconds])

  function startCountdown(duration, stopFunc) {
    let currentTimer = duration
    let mins = Math.floor((currentTimer % 360000) / 60000)
    let secs = Math.floor((currentTimer % 60000) / 1000)

    console.log(currentTimer)

    currentTimer -= 1000
    setMinutes(mins)
    setSeconds(secs)

    if (mins && secs < 0) {
      stopFunc
    }
  }

  return <p>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
}

function extractNumber(params) {
  return params.length < 7
    ? Number(params.slice(0, 1))
    : Number(params.slice(0, 2))
}

export default Timer
