import React from "react";

function TimerDisplay({ time }) {
  const { minutes, seconds } = time
  return (
    <>
      <span>
        {minutes || seconds
          ? `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
          : '0:00'}
      </span>
    </>
  )
}

export default TimerDisplay
