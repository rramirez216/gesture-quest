import React from 'react'

function FileInput({ handleImage }) {
  return (
    <>
      <input
        className='w-full max-w-xs bg-slate-200 border border-slate-400 hover:scale-105 text-xl file:px-4 file:py-2 file:text-2xl file:bg-emerald-400 file:text-slate-800 file:cursor-pointer file:border-0'
        type='file'
        name='file'
        id='file'
        accept='image/*'
        onChange={(event) => handleImage(event)}
        required
        multiple
      />
    </>
  )
}

export default FileInput
