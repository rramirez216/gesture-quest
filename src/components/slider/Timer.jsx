import React from 'react'
import { styled } from '@linaria/react'

function Timer({ intervalTime, sliderDisplay }) {
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)

  let secondsOrMinutes = intervalTime.slice(-3)

  let countdown

  if (secondsOrMinutes == 'min' || secondsOrMinutes == 'ins') {
    countdown = extractNumber(intervalTime) * 60 * 1000
  } else {
    countdown = extractNumber(intervalTime) * 1000
  }

  React.useEffect(() => {
    if (sliderDisplay) {
      const intervalID = setInterval(startCountdown, 1000)
      console.log('its running!')

      return () => {
        if (!minutes && seconds < 0) {
          console.log('all clear!')
          clearInterval(intervalID)
        }
      }
    }
  }, [sliderDisplay])

  function startCountdown() {
    let currentTimer = countdown
    let mins = Math.floor((currentTimer % 360000) / 60000)
    let secs = Math.floor((currentTimer % 60000) / 1000)

    countdown -= 1000
    setMinutes(mins)
    setSeconds(secs)
  }

  return (
    <div>
      <p>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</p>
      {/* <button type='button' onClick={() => handleClick()}>

        click me
      </button> */}
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
