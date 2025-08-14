// import { TbBrandMeta } from "react-icons/tb";
// import { IoLogoInstagram } from "react-icons/io5";
// import { RiTwitterXLine } from "react-icons/ri";
// import React from 'react'

// const Topbar = () => {
//   return (
//     <div className="bg-[#111d2c] text-white">
//        <div className="container mx-auto flex justify-between items-center py-2 px-3">
//         {/* Corner most part including social media icons */}
//             <div className="hidden md:flex items-center space-x-4">
//                 <a href='#' className='hover:text-gray-300'>
//                     <TbBrandMeta className="h-5 w-5"/>
//                 </a>
//                 <a href='#' className='hover:text-gray-300'>
//                     <IoLogoInstagram className="h-4 w-4"/>
//                 </a>
//                 <a href='#' className='hover:text-gray-300'>
//                     <RiTwitterXLine className="h-4 w-4"/>
//                 </a>
//             </div>

//             {/* Center part with text */}
//             <div className="text-sm text-center flex-grow">
//                 <span>We ship worldwide - Fast and reliable shipping!</span>
//             </div>

//             {/* Right part with contact information */}
//             <div className="text-sm hidden md:block">
//                 <a href="tel: +1234567897" className="hover:text-gray-300"> 
//                     +1 (234) 567-8976
//                 </a>
//             </div>
//        </div>
//     </div>
//   )
// }

// export default Topbar


// import { TbBrandMeta } from "react-icons/tb";
// import { IoLogoInstagram } from "react-icons/io5";
// import { RiTwitterXLine } from "react-icons/ri";
// import React from "react";

// const Topbar = () => {
//   return (
//     <div className="bg-[#111d2c] text-white">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2 px-3 text-center md:text-left">
//         {/* ---------------- SOCIAL MEDIA ICONS (Left side for desktop, top for mobile) ---------------- */}
//         {/* Hidden on small devices, shown on medium and above */}
//         <div className="hidden md:flex items-center space-x-4">
//           {/* Facebook/Meta Icon */}
//           <a href="#" className="hover:text-gray-300 transition-colors duration-200">
//             <TbBrandMeta className="h-5 w-5" />
//           </a>
//           {/* Instagram Icon */}
//           <a href="#" className="hover:text-gray-300 transition-colors duration-200">
//             <IoLogoInstagram className="h-4 w-4" />
//           </a>
//           {/* Twitter/X Icon */}
//           <a href="#" className="hover:text-gray-300 transition-colors duration-200">
//             <RiTwitterXLine className="h-4 w-4" />
//           </a>
//         </div>

//         {/* ---------------- CENTER TEXT (Always visible, adjusts font size for mobile/desktop) ---------------- */}
//         <div className="text-xs text-center sm:text-sm flex-grow mt-1 md:mt-0">
//           <span>We ship worldwide - Fast and reliable shipping!</span>
//         </div>

//         {/* ---------------- CONTACT INFO (Right side for desktop, bottom for mobile) ---------------- */}
//         {/* Hidden on small devices, shown on medium and above */}
//         <div className="hidden md:block text-sm">
//           <a href="tel:+1234567897" className="hover:text-gray-300 transition-colors duration-200">
//             +1 (234) 567-8976
//           </a>
//         </div>
//       </div>

//       {/* ---------------- MOBILE VIEW SOCIAL ICONS & CONTACT ---------------- */}
//       {/* Shown only on mobile screens below md */}
//       <div className="flex md:hidden flex-col items-center space-y-2 py-2 border-t border-gray-700">
//         {/* Social icons for mobile */}
//         <div className="flex space-x-4">
//           <a href="#" className="hover:text-gray-300 transition-colors duration-200">
//             <TbBrandMeta className="h-5 w-5" />
//           </a>
//           <a href="#" className="hover:text-gray-300 transition-colors duration-200">
//             <IoLogoInstagram className="h-4 w-4" />
//           </a>
//           <a href="#" className="hover:text-gray-300 transition-colors duration-200">
//             <RiTwitterXLine className="h-4 w-4" />
//           </a>
//         </div>
//         {/* Contact number for mobile */}
//         <a href="tel:+1234567897" className="text-xs hover:text-gray-300 transition-colors duration-200">
//           +1 (234) 567-8976
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import React from "react";

const Topbar = () => {
  return (
    <div className="bg-[#111d2c] text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2 px-3 text-center md:text-left">
        
        {/* ---------------- SOCIAL MEDIA ICONS ---------------- */}
        {/* Hidden on small devices, shown on medium and above */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">
            <IoLogoInstagram className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        {/* ---------------- CENTER TEXT (Always visible) ---------------- */}
        <div className="text-xs text-center sm:text-sm flex-grow mt-1 md:mt-0">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>

        {/* ---------------- CONTACT INFO ---------------- */}
        {/* Hidden on small devices, shown on medium and above */}
        <div className="hidden md:block text-sm">
          <a href="tel:+912345678976" className="hover:text-gray-300 transition-colors duration-200">
            +91 2345678976
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
