import React from 'react'
import { PiGreaterThanThin } from 'react-icons/pi'
import Button from './Button';

function UpperBar() {
  return (
    <>
      <div className="mx-3 flex justify-between py-5">
        <div className="fill-white  flex  gap-4 cursor-pointer">
            <div className="bg-black rounded-full h-8 w-8  flex justify-center items-center">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            class="Svg-sc-ytk21e-0 cAMMLk IYDlXmBmmUKHveMzIPCF"
            viewBox="0 0 16 16"
            className='w-4'
          >
            <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
          </svg>
          </div>
          <div className="bg-black rounded-full h-8 w-8 flex justify-center items-center">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            class="Svg-sc-ytk21e-0 cAMMLk IYDlXmBmmUKHveMzIPCF"
            viewBox="0 0 16 16"
            className='w-4'
          >
            <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
          </svg>
          </div>
        </div>
        <div className="flex gap-4 items-center">
            <a href="" className='text-[#a7a7a7] hover:text-white hover:font-semibold  font-semibold'>Sign up</a>
            <Button className={`bg-white sm:py-3 py-1 px-8 w-max text-black font-bold rounded-full hover:scale-105`}>Login</Button>
        </div>
      </div>
    </>
  );
}

export default UpperBar