import React from 'react'
import logo from "../../assets/Logo.png";

export default function Navbar({ onButtonClick }) {
  return (
    <div className='navbar flex justify-between items-center h-[90px] shadow-lg font-Poppins ' >
        <div className="logo ml-4 ">
            <img className="w-[88px] rounded-full" src={logo} alt="" />
        </div>

        <div className="more">
        <a onClick={onButtonClick} class="relative inline-block float-right border-2 border-black bg-transparent text-white font-bold tracking-wider m-0 outline-none overflow-visible py-2 px-6 text-center transition-all duration-300 ease-in-out select-none text-[13px] hover:bg-black hover:text-white group mr-10 " >
  <span class="absolute h-0.5 w-[1.5625rem] top-1/2 left-6 transform -translate-y-1/2 bg-black transition-all duration-300 ease-linear group-hover:w-[0.9375rem] group-hover:bg-white"></span>
  <span class="block pl-8 text-left text-[1em] leading-[1.33333em] uppercase transition-all duration-300 ease-in-out text-black group-hover:text-white group-hover:pl-6">About us</span>
  <span class="absolute h-0.5 w-[1.5625rem] top-[-2px] left-[0.625rem] bg-[#ffffff] transition-all duration-500 ease-out group-hover:left-[-2px] group-hover:w-0"></span>
  <span class="absolute h-0.5 w-[1.5625rem] bottom-[-2px] right-[1.875rem] bg-[#e8e8e8] transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
  <span class="absolute h-0.5 w-[0.625rem] bottom-[-2px] right-[0.625rem] bg-[#000000] transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
</a>


        </div>

    </div>
  )
}
