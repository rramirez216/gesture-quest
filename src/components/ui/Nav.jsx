import React from "react";

function Nav() {
  return (
    <nav className='w-full flex justify-center text-slate-800 '>
      <div className='flex flex-col items-center px-6 py-4 relative z-0 before:content-[""] before:absolute before:inset-0 before:-z-10 before:bg-emerald-400'>
        <div className='text-7xl font-leagueSpartan'>
          Gesture
        </div>
        <div className='text-2xl font-quicksand -mt-4'>Quest</div>
      </div>
    </nav>
  )
}

export default Nav
