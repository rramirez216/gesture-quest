import React from 'react'
import { Pause, SkipBack, SkipForward, Play, X } from 'react-feather'

function Button({ handleButton, buttonStr }) {
  let icon

  switch (buttonStr) {
    case 'Next':
      icon = <SkipForward />;
      break;
    case 'Prev':
      icon = <SkipBack />;
      break;
    case 'Pause':
      icon = <Pause />;
      break;
    case 'Play':
      icon = <Play />;
      break;
    case 'End Session':
      icon = <X />;
      break;
    default:
      icon = 'Start';
  }

  return (
    <>
      <button className='cursor-pointer px-4 py-2 bg-accent hover:bg-accentHover text-2xl text-secondary' type='button' onClick={() => buttonStr === 'Next' || buttonStr === 'Prev' ? handleButton(buttonStr) : handleButton()}>
        {icon}
      </button>
    </>
  )
}

export default Button
