import React from 'react'

const LatestJobCards = () => {
  return (
    <div className='p-5 bg-mycolor shadow-2xl border-2 border-black rounded-md cursor-pointer'>

      <div>
        <h1 className='text-lg font-medium font-title'>company Name</h1>
        <p className='text-sm text-mecolor font-medium'>India</p>
      </div>

      <div>
        <h1 className='text-xl font-bold font-font2'>Job Title</h1>
        <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sed.</p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <span className='text-xs px-2 py-1 rounded-full bg-slate-200 border border-black cursor-pointer font-bold text-blue-900 '>12 Position</span>
        <span className='text-xs px-2 py-1 rounded-full bg-slate-200 border border-black cursor-pointer font-bold text-orange-900 '>Part Time</span>
        <span className='text-xs px-2 py-1 rounded-full bg-slate-200 border border-black cursor-pointer font-bold text-purple-900'>24 LPA</span>
      </div>
    </div>
  )
}

export default LatestJobCards