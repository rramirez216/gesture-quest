import React from 'react'

function Radio({
  radioStr,
  radioValue: val,
  labelID,
  intervalTime,
  setIntervalTime,
}) {
  let checked = intervalTime.radioValue == val ? 'bg-emerald-400' : 'bg-slate-300'
  let isRadioValueCustomOrNumber = radioStr == 'custom' ? 'custom' : val + ' ' + radioStr
  return (
    <label className={`block   text-slate-800 cursor-pointer relative select-none hover:scale-105`} >
      <input
        className='absolute h-[1em] w-[1em] peer opacity-0'
        type='radio'
        name='interval-times'
        id={labelID}
        value={val}
        checked={intervalTime.radioValue == val}
        onChange={(e) => {
          setIntervalTime({ radioValue: Number(e.target.value), radioStr })
        }}
      />
      <span className={`block ${checked} px-4 py-2 w-full h-full rounded-lg peer-focus-visible:radio-box-shadow`}>{isRadioValueCustomOrNumber}</span>
    </label>
  )
}

export default Radio
