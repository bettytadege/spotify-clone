import React from 'react'
import Radio from '../Data/Radio'
function PopularRadio() {
  return (
    <>
      <div className="">
      <h1 className='font-semibold text-2xl'>Popular Radio</h1>
        <div className="py-3">
          <a
            href=""
            className="text-[#a7a7a7] font-semibold flex justify-end mr-4 hover:underline hover:decoration-[#a7a7a7]"
          >
            show all
          </a>

          <div className="flex gap-1 py-5">
            {Radio.map((radio, index) => (
              <div
                className={`flex flex-col gap-1  md:w-[25%] sm:w-[50%] w-[50%] lg:w-[20%] mx-4 
                   ${index >= 3 ? "hidden" : "md:block "}
                  ${index >= 5 ? "" : "lg:block"}
                  ${index >= 2 ? "hidden" : "sm:block"}`}
              >
                <img
                  src={radio.image}
                  alt=""
                  className="w-[200px] h[150px] lg:w-[200px] lg:h-[150px] h-[150px]  md:w-[220px] md:h-[170px] "
                />
                <div className="">
                  <span className="font-semibold">{radio.name}</span>
                  <p className="text-xs text-[#a7a7a7]">{radio.artists}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularRadio