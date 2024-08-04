import React from 'react'

function StartButton({ handleSliderDisplay }) {
  return (
    <>
      <button type='submit' onClick={handleSliderDisplay}>
        start
      </button>
    </>
  )
}

export default StartButton
