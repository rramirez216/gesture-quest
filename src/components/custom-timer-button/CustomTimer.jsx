import React from 'react'
import Button from '../ui/Button'

function CustomTimer({ time, handleOnChange, setCustomTime, handleCustomTimeButton, minus, plus }) {
  return (<div className='flex'>
    <Button buttonStr={minus} handleButton={handleCustomTimeButton} />
    <input type='number' min={0} max={59} value={time} onChange={handleOnChange} />
    <Button buttonStr={plus} handleButton={handleCustomTimeButton} />
  </div>)
}

export default CustomTimer
