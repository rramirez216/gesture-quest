import React from 'react'

function Radio({
  radioStr,
  radioNum: num,
  labelID,
  intervalTime,
  setIntervalTime,
}) {
  return (
    <div>
      <input
        className='mr-2'
        type='radio'
        name='interval-times'
        id={labelID}
        value={num}
        checked={intervalTime.radioNum == num}
        onChange={(e) => {
          setIntervalTime({ radioNum: Number(e.target.value), radioStr })
        }}
      />
      <label htmlFor={labelID}>{num + ' ' + radioStr}</label>
    </div>
  )
}

export default Radio
