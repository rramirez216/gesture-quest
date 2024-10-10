import React from 'react'
import { Pause, SkipBack, SkipForward, Play, X } from 'react-feather'

function Button({ handleButton, buttonStr }) {
  let icon

  switch (buttonStr) {
    case 'Next':
      icon = <SkipForward size={40} />;
      break;
    case 'Prev':
      icon = <SkipBack size={40} />;
      break;
    case 'Pause':
      icon = <Pause size={40} />;
      break;
    case 'Play':
      icon = <Play size={40} />;
      break;
    case 'End Session':
      icon = <X size={40} />;
      break;
    default:
      icon = 'Start';
  }

  return (
    <>
      <button className='w-full max-w-xs cursor-pointer px-4 py-2 bg-emerald-400 hover:scale-105 text-2xl text-slate-800' type='button' onClick={() => buttonStr === 'Next' || buttonStr === 'Prev' ? handleButton(buttonStr) : handleButton()}>
        {icon}
      </button>
    </>
  )
}

export default Button
