import React from 'react'

const LatestJobCards = ({ job }) => {
  return (
    <div className='p-5 bg-mycolor shadow-2xl border-2 border-black rounded-md cursor-pointer'>

      <div className='flex flex-col gap-0 mb-2'>
        <h1 className='text-2xl font-bold text-gray-700 font-font4  capitalize'>{job?.company?.name}</h1>
        <p className='text-sm text-mecolor font-medium'>{job?.location}</p>
      </div>

      <div>
        <h1 className='flex flex-col gap-0 text-[24px] font-bold font-font2 mb-2'>{job?.title}</h1>
        <p className='text-sm text-gray-800'>{job?.description}</p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <span className='text-xs px-2 py-1 rounded-full bg-slate-200 border border-black cursor-pointer font-bold text-blue-900 '>{job?.position} Position</span>
        <span className='text-xs px-2 py-1 rounded-full bg-slate-200 border border-black cursor-pointer font-bold text-orange-900 '>{job?.jobType}</span>
        <span className='text-xs px-2 py-1 rounded-full bg-slate-200 border border-black cursor-pointer font-bold text-purple-900'>{job?.salary} LPA</span>
      </div>
    </div>
  )
}

export default LatestJobCards