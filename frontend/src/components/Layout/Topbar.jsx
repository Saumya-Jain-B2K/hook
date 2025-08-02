import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import React from 'react'

const Topbar = () => {
  return (
    <div className="bg-[#111d2c] text-white">
       <div className="container mx-auto flex justify-between items-center py-2 px-3">
        {/* Corner most part including social media icons */}
            <div className="hidden md:flex items-center space-x-4">
                <a href='#' className='hover:text-gray-300'>
                    <TbBrandMeta className="h-5 w-5"/>
                </a>
                <a href='#' className='hover:text-gray-300'>
                    <IoLogoInstagram className="h-4 w-4"/>
                </a>
                <a href='#' className='hover:text-gray-300'>
                    <RiTwitterXLine className="h-4 w-4"/>
                </a>
            </div>

            {/* Center part with text */}
            <div className="text-sm text-center flex-grow">
                <span>We ship worldwide - Fast and reliable shipping!</span>
            </div>

            {/* Right part with contact information */}
            <div className="text-sm hidden md:block">
                <a href="tel: +1234567897" className="hover:text-gray-300"> 
                    +1 (234) 567-8976
                </a>
            </div>
       </div>
    </div>
  )
}

export default Topbar
