import React from 'react'

function Radio({
  radioStr,
  radioNum: num,
  labelID,
  intervalTime,
  setIntervalTime,
}) {
  let checked = intervalTime.radioNum == num ? 'bg-emerald-400' : 'bg-slate-300'
  return (
    <label className={`block   text-slate-800 cursor-pointer relative select-none hover:scale-105`} >
      <input
        className='absolute h-[1em] w-[1em] peer opacity-0'
        type='radio'
        name='interval-times'
        id={labelID}
        value={num}
        checked={intervalTime.radioNum == num}
        onChange={(e) => {
          setIntervalTime({ radioNum: Number(e.target.value), radioStr })
        }}
      />
      <span className={`block ${checked} px-4 py-2 w-full h-full rounded-lg peer-focus-visible:radio-box-shadow`}>{num + ' ' + radioStr}</span>
    </label>
  )
}

export default Radio
