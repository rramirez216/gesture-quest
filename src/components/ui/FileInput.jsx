import React from 'react'
import { styled } from '@linaria/react'

function FileInput({ handleImage }) {
  return (
    <>
      <input
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

export default FileInput
