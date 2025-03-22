import React from 'react'
import Radio from './Radio'
import { constants } from '../../data/constants'

function Form({ intervalTime, setIntervalTime, children, sliderDisplay }) {
  let { radioData } = constants
  let formStyles = sliderDisplay ? 'bg-slate-200 w-full h-full md:h-min hidden flex-col items-center justify-center gap-8 md:gap-12 max-w-xl py-12 text-2xl' : 'bg-slate-200 w-full h-full md:h-min flex flex-col items-center justify-center gap-8 md:gap-12 max-w-xl py-12 text-2xl'
  return (
    <form
      className={formStyles}
      onSubmit={(e) => e.preventDefault()}
    >
      {children[0]}
      <fieldset className='w-full max-w-xs'>
        <legend className='text-slate-600 pb-2 text-left'>
          Select Time Per Image
        </legend>
        <div className='grid grid-cols-2 gap-2'>
          {radioData.map((item) => (
            <Radio
              key={item.id}
              radioStr={item.radioStr}
              radioValue={item.radioValue}
              labelID={item.labelID}
              intervalTime={intervalTime}
              setIntervalTime={setIntervalTime}
            />
          ))}
        </div>
      </fieldset>
      {children[1]}
      {children[2]}
    </form>
  )
}

export default Form
