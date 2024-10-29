import React from 'react'
import Tooltip from './Tooltip'

function FileInput({ handleImage }) {
  return (
    <div className='relative'>
      <input
        className='w-full max-w-xs bg-slate-200 border border-slate-400 hover:file:bg-emerald-400 hover:scale-105 text-xl file:px-4 file:py-2 file:text-2xl file:bg-slate-300 file:text-slate-800 file:cursor-pointer file:border-0 focus:outline-emerald-700'
        type='file'
        name='file'
        id='file'
        accept='image/*'
        onChange={(event) => handleImage(event)}
        required
        multiple
      />
      <Tooltip />
    </div>
  )
}

export default FileInput
