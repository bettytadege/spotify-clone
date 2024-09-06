import React from 'react'
import Albums from "../Data/Album"
function PopularAlbums() {
  return (
    <>
    <div className="">
        <h1 className='font-semibold text-2xl'>Popular Albums</h1>
    <div className="py-3">
    <a href="" className="text-[#a7a7a7] font-semibold flex justify-end mr-4 hover:underline hover:decoration-[#a7a7a7]">show all</a>
   
    <div className="flex gap-1 py-5">
        
        {Albums.map((album,index)=>(

       
        <div className={`flex flex-col gap-1 w-[50%] md:w-[30%] mx-4 sm:w-[50%]  ${index >= 3 ? 'hidden': 'md:block '}
          ${index >= 5 ? '' :'lg:block'}
          ${ index >= 2 ? 'hidden' : 'sm:block'}`}>
           <img src={album.image} alt="" className='lg:w-[200px] lg:h-[150px] h-[150px] w-[200px] md:w-[220px] md:h-[170px] ' />
           <div className="">
           <span className='font-semibold'>{album.album}</span>
           <p className='text-xs text-[#a7a7a7]'>{album.artist}</p>
           </div>
         
        </div>
         ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default PopularAlbums