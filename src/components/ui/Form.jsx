import React from 'react'
import Radio from './Radio'
import { constants } from '../../data/constants'

function Form({ intervalTime, setIntervalTime }) {
  let { radioData } = constants
  return (
    <form>
      <fieldset>
        <legend>Interval</legend>
        {radioData.map((item) => (
          <Radio
            key={item.id}
            time={item.value}
            labeValue={item.labelValue}
            intervalTime={intervalTime}
            setIntervalTime={setIntervalTime}
          />
        ))}
      </fieldset>
    </form>
  )
}

export default Form
