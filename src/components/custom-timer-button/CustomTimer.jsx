import React from 'react'
import Button from '../ui/Button'

function CustomTimer({ intervalTime: { radioNum }, handleCustomTimeButton }) {
  return (<div className='flex'>
    <Button buttonStr={'-'} handleButton={handleCustomTimeButton} />
    <p className=''>{radioNum}</p>
    <Button buttonStr={'+'} handleButton={handleCustomTimeButton} />
  </div>)
}

export default CustomTimer
