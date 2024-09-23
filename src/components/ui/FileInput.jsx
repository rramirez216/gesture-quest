import React from 'react'
import { styled } from '@linaria/react'


function FileInput({ handleImage }) {
  return (
    <>
      <Input
        type='file'
        name='file'
        id='file'
        accept='image/*'
        onChange={(event) => handleImage(event)}
        multiple
      />
    </>
  )
}

const Input = styled.input`
&::file-selector-button {
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
}
`

export default FileInput
