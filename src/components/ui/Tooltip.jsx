import React from 'react';
import { Info } from 'react-feather'

function Tooltip() {
  return (
    <div className='absolute -top-7 right-0 group cursor-pointer'>
      <Info className='group-hover:stroke-amber-500' color='#94a3b8' size={24} />
      <div className='invisible group-hover:visible absolute -top-[450%] -right-8 bg-slate-100 w-72 border-2 border-amber-500 p-2 after:absolute after:bottom-2 after:right-7 after:content-[""] after:w-6 after:h-6 after:translate-y-full after:bg-slate-100 after:triangle'>
        <p>
          The images selected stay local to the user's machine and do not get uploaded to a server.
        </p>
      </div>
    </div>
  )
}

export default Tooltip;
