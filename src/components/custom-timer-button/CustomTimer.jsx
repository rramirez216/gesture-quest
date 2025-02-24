import React from 'react'
import Button from '../ui/Button'

function CustomTimer({ time, handleOnChange, handleCustomTimeButton, minus, plus }) {
  return (<div className='flex flex-col'>
    <label htmlFor='number-input'>Min</label>
    <div className='flex'>
      <Button buttonStr={minus} handleButton={handleCustomTimeButton} />
      <input type='number' min={0} max={59} value={time} onChange={handleOnChange} id='number-input' />
      <Button buttonStr={plus} handleButton={handleCustomTimeButton} />
    </div>
  </div>)
}

export default CustomTimer
