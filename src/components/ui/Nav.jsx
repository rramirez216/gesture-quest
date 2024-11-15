import React from "react";

function Nav() {
  return (
    <nav className='w-full flex justify-center text-slate-800 '>
      <div className='flex flex-col items-center px-6 py-4 bg-emerald-400 rounded-b-xl'>
        <div className=' font-leagueSpartan text-6xl md:text-7xl'>
          Gesture
        </div>
        <div className='font-quicksand -mt-4 text-2xl'>Quest</div>
      </div>
    </nav>
  )
}

export default Nav
