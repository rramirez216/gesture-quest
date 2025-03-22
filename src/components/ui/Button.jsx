import React from 'react'
import { Pause, SkipBack, SkipForward, Play, X } from 'react-feather'

function Button({ handleButton, buttonStr, buttonType = 'button' }) {
  const listOfActionStrings = ['Next', 'Prev', '+sec', '-sec', '+min', '-min']
  let maxWidth = 'max-w-min'
  let icon

  switch (buttonStr) {
    case 'Next':
      icon = <SkipForward size={32} />;
      break;
    case 'Prev':
      icon = <SkipBack size={32} />;
      break;
    case 'Pause':
      icon = <Pause size={32} />;
      break;
    case 'Play':
      icon = <Play size={32} />;
      break;
    case 'End Session':
      icon = <X size={32} />;
      break;
    case '+sec':
      icon = '+'
      break
    case '-sec':
      icon = '-'
      break
    case '+min':
      icon = '+'
      break
    case '-min':
      icon = '-'
      break
    default:
      icon = buttonStr
      maxWidth = 'max-w-xs'
  }

  return (
    <>
      <button className={`w-full ${maxWidth} cursor-pointer px-4 py-2 rounded-lg bg-slate-300 hover:bg-emerald-400 hover:scale-105 text-2xl text-slate-800 focus:outline-emerald-700`} type={buttonType} onClick={() => listOfActionStrings.includes(buttonStr) ? handleButton(buttonStr) : handleButton()}>
        {icon}
      </button>
    </>
  )
}

export default Button
