import React from 'react'
import Navbar from "../component/Navbar"
import JobCard from '../component/JobCard';
const Browse = () => {
  const randomeJobs = [1,2,3];
  return (
    <div>
        <Navbar />
      <div className='mx-auto my-10 px-4 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl'>
        <h1 className='font-bold text-xl mb-5'>Search Result ({randomeJobs.length}) </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 justify-center'>
          {randomeJobs.map((job,index) => {
            return (
              <div key={index}>
                <JobCard />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Browse