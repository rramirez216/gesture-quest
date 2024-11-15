import React from 'react'
import Radio from './Radio'
import { constants } from '../../data/constants'

function Form({ intervalTime, setIntervalTime, children }) {
  let { radioData } = constants
  return (
    <form
      className='bg-slate-200 w-full h-full md:h-min flex flex-col items-center justify-center gap-8 md:gap-12 max-w-xl py-12'
      onSubmit={(e) => e.preventDefault()}
    >
      {children[0]}
      <fieldset className='text-2xl w-full max-w-xs'>
        <legend className='text-slate-600 pb-2 text-left'>
          Select Time Per Image
        </legend>
        <div className='grid grid-cols-2 gap-2'>
          {radioData.map((item) => (
            <Radio
              key={item.id}
              radioStr={item.radioStr}
              radioNum={item.radioNum}
              labelID={item.labelID}
              intervalTime={intervalTime}
              setIntervalTime={setIntervalTime}
            />
          ))}
        </div>
      </fieldset>
      {children[1]}
    </form>
  )
}

export default Form
