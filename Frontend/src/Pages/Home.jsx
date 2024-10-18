import React from 'react'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import CategoryCarousel from '../component/CategoryCarousel'
import LatestJobs from '../component/LatestJobs'
const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection/>
        <CategoryCarousel />
        <LatestJobs/>
        {/*
        <Footer /> */}
    </div>
  )
}

export default Home