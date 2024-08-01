import React from 'react'

function Radio({ key, time, labelValue, intervalTime, setIntervalTime }) {
  return (
    <div key={key}>
      <input
        type='radio'
        name='interval-times'
        id={labelValue}
        value={time}
        checked={intervalTime === time}
        onChange={(e) => setIntervalTime(e.target.value)}
      />
      <label htmlFor={labelValue}>{time}</label>
    </div>
  )
}

export default Radio
