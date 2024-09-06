import React from 'react'
import { FaFacebookF } from 'react-icons/fa6';
import { ImInstagram } from 'react-icons/im';
import { TfiTwitter } from 'react-icons/tfi';

function Footer() {
  return (
    <>
      <div className="py-10">
        <ul className="grid lg:grid-cols-5 md:grid-cols-3 sm:gap-y-4 sm:grid-cols-2 grid-cols-1 mx-12 gap-y-2">
          <div className="">
            <p className="font-semibold">Company</p>
            <div className="text-sm  text-[#a7a7a7] ">
              <a
                href=""
                className="hover:underline-offset-4 hover:underline hover:decoration-[#a7a7a7]"
              >
                <li>About</li>
              </a>
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                <li>Jobs</li>
              </a>
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                {" "}
                <li>For the Record</li>
              </a>
            </div>
          </div>
          <div className="">
            <p className="font-semibold">Communities</p>
            <div className="text-sm  text-[#a7a7a7]">
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                <li>For Artists</li>
              </a>
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                {" "}
                <li>Developers</li>
              </a>
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                {" "}
                <li>Advertising</li>
              </a>
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                {" "}
                <li>Investors</li>
              </a>

              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                <li>Vendors</li>
              </a>
            </div>
          </div>
          <div className="">
            <p className="font-semibold">Useful links</p>
            <div className="text-sm space-y-3 text-[#a7a7a7]">
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                <li>Support</li>
              </a>
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                <li>Free Mobile App</li>
              </a>
            </div>
          </div>
          <div className="">
            <p className="font-semibold">Spotify Plans</p>
            <div className="text-sm  text-[#a7a7a7] ">
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                <li>Premium Individual</li>
              </a>
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                {" "}
                <li>Premium Duo</li>
              </a>
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                <li>Premium Family</li>
              </a>
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                <li>Premium Student</li>
              </a>
              <a href="" className="hover:underline hover:decoration-[#a7a7a7]">
                <li>Spotify Free</li>
              </a>
            </div>
          </div>
          <div className="flex gap-5">
            <li>
              <a href="">
                <ImInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <TfiTwitter></TfiTwitter>
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebookF />
              </a>
            </li>
          </div>
        </ul>
        <div className="  border-b-[0.8px] border-neutral-500  py-8 mx-10 "></div>
        <div className="py-5 px-8 text-[#a7a7a7]">
            &copy;2024 spotify
        </div>
      </div>
    </>
  );
}

export default Footer