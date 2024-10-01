import React from 'react'

function FileInput({ handleImage }) {
  return (
    <>
      <input
        className='w-full max-w-xs bg-accent hover:bg-accentHover file:px-4 file:py-2 file:text-2xl file:bg-accent file:text-secondary file:cursor-pointer file:border-0 hover:file:bg-accentHover'
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
