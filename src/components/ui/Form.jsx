import React from 'react'
import Radio from './Radio'
import { constants } from '../../data/constants'

function Form({ intervalTime, setIntervalTime }) {
  let { radioData } = constants
  return (
    <form className='w-80 text-2xl text-secondary'>
      <fieldset className=''>
        <legend className='opacity-75 pb-2 text-left' >Select Time Per Image</legend>
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
    </form>
  )
}

export default Form
