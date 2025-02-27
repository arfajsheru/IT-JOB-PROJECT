import React from 'react'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import CategoryCarousel from '../component/CategoryCarousel'
import LatestJobs from '../component/LatestJobs'
import Footer from '../component/Footer'
import UseGetAllJobs from '../hooks/UseGetAllJobs'
const Home = () => {
       UseGetAllJobs();
  return (
    <div>
        <Navbar />
        <HeroSection/>
        <CategoryCarousel />
        <LatestJobs/>  
        <Footer />
    </div>
  )
}

export default Home