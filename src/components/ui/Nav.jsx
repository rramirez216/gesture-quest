import React from "react";

function Nav() {
  return (
    <nav className='w-full flex justify-center text-slate-800 '>
      <div className="flex flex-col items-center px-6 py-4">
        {/*        <div className='w-full h-full px-6 py-4 nav-clip bg-emerald-400'></div> */}
        <div className='text-7xl font-leagueSpartan'>
          Gesture
        </div>
        <div className='text-2xl font-quicksand -mt-4 border-b-2 border-b-emerald-400'>Quest</div>
      </div>
    </nav>
  )
}

export default Nav
