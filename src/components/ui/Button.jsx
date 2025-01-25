import React from 'react'
import { Pause, SkipBack, SkipForward, Play, X } from 'react-feather'

function Button({ handleButton, buttonStr, buttonType = 'button' }) {
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
    default:
      icon = buttonStr
  }

  let maxWidth = icon === 'Start' ? 'max-w-xs' : 'max-w-min'

  return (
    <>
      <button className={`w-full ${maxWidth} cursor-pointer px-4 py-2 rounded-lg bg-slate-300 hover:bg-emerald-400 hover:scale-105 text-2xl text-slate-800 focus:outline-emerald-700`} type={buttonType} onClick={() => buttonStr === 'Next' || buttonStr === 'Prev' ? handleButton(buttonStr) : handleButton()}>
        {icon}
      </button>
    </>
  )
}

export default Button
