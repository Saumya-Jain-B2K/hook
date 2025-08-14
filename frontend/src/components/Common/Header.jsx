// import React from 'react'
// import Topbar from '../Layout/Topbar'
// import Navbar from './Navbar'

// const Header = () => {
//   return (
//     <header className='border-b border-gray-200'>
//        {/* Topbar */}
//        <Topbar />
//        {/* Navbar */}
//        <Navbar />
//        {/* Cart Drawer */}
//     </header>
//   )
// }

// export default Header


import React from 'react';
import Topbar from '../Layout/Topbar';
import Navbar from './Navbar';

/**
 * Header Component
 * - Displays the top navigation section of the website.
 * - Contains:
 *    1. Topbar (for quick info like offers, support, etc.)
 *    2. Navbar (main navigation links, categories, etc.)
 * - Fully responsive to handle all device screen sizes.
 */
const Header = () => {
  return (
    <header 
      className='border-b border-gray-200 w-full'
    >
      {/* Topbar Section */}
      {/* This typically includes small text like free shipping info, language, or login links */}
      {/* On small devices, Topbar may stack vertically for better readability */}
      <div className="w-full">
        <Topbar />
      </div>

      {/* Navbar Section */}
      {/* Contains main navigation menu and brand logo */}
      {/* Navbar should handle collapsing into a hamburger menu for mobile devices */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Future Cart Drawer Section */}
      {/* This space is kept for adding a cart side panel/drawer in future */}
    </header>
  );
};

export default Header;
