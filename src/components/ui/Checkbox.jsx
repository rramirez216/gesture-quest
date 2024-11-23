import React from 'react'

function Checkbox({ randomizeImageList, handleImageOrder }) {
  return (
    <>
      <label className='w-full text-slate-600 text-center flex justify-center' >
        <input className='' type='checkbox' checked={randomizeImageList} onChange={(event) => handleImageOrder(event)} />
        <svg width={64} height={64} viewBox='-4 -4 39 39' >
          <rect className='bg-slate-400' width={35} height={35} x='-2' y='-2' stroke='#cbd5e1' fill='#34d399' strokeWidth={3} rx='6' ry='6' ></rect>
          <polyline className='' points='4, 14, 12, 23, 28, 5' stroke='#1e293b' strokeWidth={4} fill='none' ></polyline>
        </svg>
        <span>Randomize Image Order</span>
      </label>
    </>
  )
}

export default Checkbox
