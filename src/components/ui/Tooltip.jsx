import React from 'react';
import { HelpCircle } from 'react-feather'

function Tooltip() {
  return (
    <div className='absolute top-0 right-0 group cursor-pointer transform -translate-y-full focus:outline-emerald-700' aria-describedby='file upload info' tabIndex={'0'}>
      <HelpCircle className='group-hover:stroke-amber-500 group-focus:stroke-amber-500' color='#94a3b8' size={24} id='file upload info' role='tooltip' />
      <div className='invisible group-hover:visible absolute group-focus:visible top-0 right-0 transform -translate-y-full translate-x-full bg-slate-100 w-72 border-2 border-slate-400 p-2 rounded-lg'>
        <p>
          Files selected remain on your computer and are not uploaded to a server.
        </p>
      </div>
    </div>
  )
}

export default Tooltip;
