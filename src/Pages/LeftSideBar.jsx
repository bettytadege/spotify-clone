import React from 'react'
import UpperBar from '../Components/UpperBar'
import PopularArtists from '../Components/PopularArtists'
import PopularAlbums from '../Components/PopularAlbums'
import PopularRadio from '../Components/PopularRadio'
import FeaturedChart from '../Components/FeaturedChart'
import Footer from './Footer'

function LeftSideBar() {
  return (
    <div className=' lg:w-[75%]  bg-[#121212]'>
      <UpperBar/>
        <div className="overflow-y-scroll scroll-smooth sm:h-[400px] lg:h-[450px] h-[350px] hide-bar mx-3">
      <PopularArtists/>
      <PopularAlbums/>
      <PopularRadio/>
      <FeaturedChart/>
      <Footer/>
      </div>
    </div>
  )
}

export default LeftSideBar
