import React from 'react';
import { HelpCircle } from 'react-feather'

function Tooltip() {
  return (
    <div className='absolute -top-7 right-0 group cursor-pointer focus:outline-emerald-900' aria-describedby='file upload info' tabIndex={'0'}>
      <HelpCircle className='group-hover:stroke-amber-500 group-focus:stroke-amber-500' color='#94a3b8' size={24} id='file upload info' role='tooltip' />
      <div className='invisible group-hover:visible absolute group-focus:visible -top-[450%] -right-8 bg-slate-100 w-72 border-2 border-slate-400 p-2 after:absolute after:bottom-2 after:right-7 after:content-[""] after:w-6 after:h-6 after:translate-y-full after:bg-slate-100 after:triangle'>
        <p>
          The images selected stay local to the user's machine and are not uploaded to a server.
        </p>
      </div>
    </div>
  )
}

export default Tooltip;
