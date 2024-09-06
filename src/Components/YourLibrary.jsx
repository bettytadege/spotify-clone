import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Card from "../Components/Card"
import Button from "../Components/Button"
import { GrLanguage } from 'react-icons/gr';

function YourLibrary() {
  return (
    <>
      <div className="bg-[#121212] mt-2 rounded-lg h-[70%]">
        <div className="flex items-center justify-between mx-4 py-3 ">
          <div className="group">
            <div className="text-[#a7a7a7] flex items-center text-lg gap-3  group-hover:text-white group-hover:fill-white">
              <span>
                <svg
                  fill="#a7a7a7"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 group-hover:fill-white"
                >
                  <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                </svg>
              </span>
              <p>Your Library</p>
            </div>
          </div>
          <div className="text-[#a7a7a7] hover:text-white hover:bg-slate-800 rounded-full w-7 h-7 flex items-center justify-center">
            <FiPlus />
          </div>
        </div>
        <div className="h-[85px] scroll-smooth overflow-y-auto hide-bar">
          <div className="pb-2 cursor-pointer">
            <Card
              className={`bg-[#242424] text-white rounded-lg mx-3 py-4 px-3 space-y-3`}
            >
              <p className="font-semibold ">Create your first playlist</p>
              <span className="text-sm">it's easy, we'll help you</span>
              <Button
                className={`bg-white text-black rounded-full py-1 px-3 w-max text-sm font-semibold hover:scale-105`}
              >
                Create playlist
              </Button>
            </Card>
          </div>
          <div className="cursor-pointer">
            <Card
              className={`bg-[#242424] text-white rounded-lg mx-3 py-4 px-3 space-y-3`}
            >
              <p className="font-semibold ">Create your first playlist</p>
              <span className="text-sm">
                we'll keep you updates on new episodes
              </span>
              <Button className="bg-white text-black rounded-full py-1 px-3 w-max text-sm font-semibold  hover:scale-105">
                Browse podcasts
              </Button>
            </Card>
          </div>
        </div>
        <div className="mx-7 py-8">
          <ul className="text-xs text-[#a7a7a7] space-y-3">
            <div className="flex gap-4">
              <a href="">
                <li>Legal</li>
              </a>
              <a href="">
                <li>Safety & Privacy Center</li>
              </a>
            </div>
            <div className="flex gap-5">
              <a href="">
                <li>privacypolicy</li>
              </a>
              <a href="">
                <li>Cookies</li>
              </a>
              <a href="">
                {" "}
                <li>About Ads</li>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="">
                {" "}
                <li>Accessibility</li>
              </a>
              <a href="">
                <li>Cookies</li>
              </a>
            </div>
          </ul>
        </div>
        <div className="relative left-4 cursor-pointer">
          <Button
            className={`flex items-center gap-2  rounded-full px-3  border py-1 
        text-sm max-w-fit hover:outline outline-offset-1 hover:border-none hover:font-semibold`}
          >
            <GrLanguage />
            <span>English</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default YourLibrary;
