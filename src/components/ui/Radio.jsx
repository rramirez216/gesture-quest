import React from 'react'

function Radio({
  radioStr,
  radioNum: num,
  labelID,
  intervalTime,
  setIntervalTime,
}) {
  let checked = intervalTime.radioNum == num ? 'bg-accentHover' : 'bg-accent'
  return (
    <label className={`block ${checked} px-4 py-2 cursor-pointer relative select-none focus:outline-1 focus:outline-focusOutline`} >
      <input
        className='mr-2 absolute h-0 w-0 focus:outline-1 focus:outline-focusOutline'
        type='radio'
        name='interval-times'
        id={labelID}
        value={num}
        checked={intervalTime.radioNum == num}
        onChange={(e) => {
          setIntervalTime({ radioNum: Number(e.target.value), radioStr })
          console.log(num)
        }}
      />
      {num + ' ' + radioStr}
    </label>
  )
}

export default Radio
