import React from 'react'
import Button from '../ui/Button'

function CustomTimer({ intervalTime: { radioNum }, handleCustomTimeButton }) {
  return (<div className='flex'>
    <Button buttonStr={'-'} handleButton={handleCustomTimeButton} />
    <input type='number' min={0} max={60} />
    <p className='text-2xl'>:</p>
    <input type='number' min={0} max={59} />
    <Button buttonStr={'+'} handleButton={handleCustomTimeButton} />
  </div>)
}

export default CustomTimer
