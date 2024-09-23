import React from 'react'
import { styled } from '@linaria/react'
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
      <Wrapper type='button' onClick={() => buttonStr === 'Next' || buttonStr === 'Prev' ? handleButton(buttonStr) : handleButton()}>
        {icon}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.button`
  padding: 4px 16px 4px;
  cursor: pointer;
  background-color: hsl(133deg 47% 88%);
  border: 2px solid hsl(133deg 50% 82%);
  color: hsl(195deg 72% 22%);
  font-size: 1.5rem;

  &:hover {
    background-color: hsl(133deg 47% 80%);
    border: 2px solid hsl(133deg 50% 80%);
  }
`

export default Button
