import React from 'react'
import Songs from "../Data/Songs"
function PopularArtists() {
  return (
    <>
    <div className="">
    <h1 className='font-semibold text-2xl'>Popular Artists</h1>
    
    <div className="py-3">
    <a href="" className="text-[#a7a7a7] font-semibold flex justify-end mr-4 hover:underline hover:decoration-[#a7a7a7]">show all</a>
   
    <div className="flex gap-1 py-5">
        
        {Songs.map((song,index)=>(

       
        <div className={`flex flex-col gap-1 md:w-[30%] sm:w[100%] lg:w-[20%] w-[50%] mx-4 
          ${index >= 3 ? 'hidden': 'md:block '}
          ${index >= 5 ? '' :'lg:block'}
          ${ index >= 2 ? 'hidden' : 'sm:block'}
            `}>
           <img src={song.image} alt="" className='rounded-full object-center
            sm:h-[65%] sm:w-[200px]
            md:h-[65%] md:w-[200px] 
             lg:h-[140px] lg:w-[200px] 
             w-[200px] h-[60%]' />
           <div className="">
           <span className='font-semibold'>{song.artist}</span>
           <p className='text-xs text-[#a7a7a7]'>Artist</p>
           </div>
         
        </div>
         ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default PopularArtists