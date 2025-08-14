// import React from 'react'
// import Header from '../Common/Header'
// import Footer from '../Common/Footer'
// import { Outlet } from 'react-router-dom'

// const UserLayout = () => {
//   return (
//     <>
//        {/* Header */}
//        <Header />
//        {/* Main Content */}
//        <main>
//         <Outlet />
//        </main>
//        {/* Footer */}  
//        <Footer /> 
//     </>
//   )
// }

// export default UserLayout

import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <>
      {/* 
        HEADER SECTION 
        - Contains site navigation and branding
        - Header itself should be responsive internally (handled in Header component)
      */}
      <Header />

      {/* 
        MAIN CONTENT SECTION
        - Uses <Outlet /> to dynamically render nested routes
        - "min-h-screen" ensures the content takes up available space for better layout on all devices
        - Padding added for consistent spacing across breakpoints
      */}
      <main className="min-h-screen px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* 
        FOOTER SECTION 
        - Footer should also be responsive internally (handled in Footer component)
      */}
      <Footer /> 
    </>
  );
};

export default UserLayout;
