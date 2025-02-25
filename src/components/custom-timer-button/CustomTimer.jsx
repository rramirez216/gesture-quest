import React from 'react'
import Button from '../ui/Button'

function CustomTimer({ time, handleOnChange, handleCustomTimeButton, minus, plus, labelText }) {
  return (
    <div className='flex flex-col w-full gap-2'>
      <label className='text-slate-600' htmlFor="number-input">{labelText}</label>
      <div className='flex w-full'>
        <Button buttonStr={minus} handleButton={handleCustomTimeButton} />
        <input className='w-full h-full text-center' type='number' min={0} max={59} value={time} onChange={handleOnChange} id='number-input' />
        <Button buttonStr={plus} handleButton={handleCustomTimeButton} />
      </div>
    </div>
  )
}

export default CustomTimer
