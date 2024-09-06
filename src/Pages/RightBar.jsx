import React from 'react'
import Logo from '../Components/Logo'
import YourLibrary from '../Components/YourLibrary'

function RightBar() {
  return (
    <div className=" lg:w-[25%]  ml-3  ">
      <Logo />
      <YourLibrary />
    </div>
  );
}

export default RightBar