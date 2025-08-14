// import React from 'react';
// import { Link } from 'react-router-dom';
// import hooklogo from '../../assets/hooklogo.jpg'; // Adjust the path as necessary
// import {HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight} from 'react-icons/hi2';
// import SearchBar from './SearchBar';
// import CartDrawer from '../Layout/CartDrawer';
// import { useState } from 'react';
// import { IoMdClose } from 'react-icons/io';
// import { useSelector } from 'react-redux';

// const Navbar = () => {

//   const [drawerOpen, setDrawerOpen] = useState(false);
//   // This funtion is created t handle toggle bar for mobile devices
//   const [navDrawerOpen, setNavDrawerOpen] = useState(false);
//   const {cart} = useSelector((state) => state.cart);
//   const {user} = useSelector((state) => state.auth);

//   const cartItemCount = 
//     cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
//     0;

//   const toggleNavDrawer = () => {
//     setNavDrawerOpen(!navDrawerOpen);
//   };

//   const toggleCartDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };


//   return (
//     <>
//       <nav className='container mx-auto flex items-center justify-between py-2 px-6'>
//         {/* Left Logo Section */}
//         <div>
//             <Link to="/" className='block w-16 h-auto'>
//               <img src={hooklogo} alt="hooks" className='w-full h-auto'/>
//             </Link>
//         </div>
//         {/* Center Navigation Links */}
//         <div className='hidden md:flex space-x-6'>
//             <Link to="collections/all?gender=Men" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
//                 Men
//             </Link>
        

        
//             <Link to="collections/all?gender=Women" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
//                 Women
//             </Link>
        
        
//             <Link to="collections/all?category=Top Wear" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
//                 Top Wear
//             </Link>
        

        
//             <Link to="collections/all?category=Bottom Wear" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
//                 Bottom Wear
//             </Link>

//         </div>    
        

//         {/* Right Section with Cart Icon */}
//         <div className='flex items-center space-x-4'>
//           {/* Admin Link adding */}
//           {user && user.role === "admin" && (
//             <Link 
//                 to="/admin" 
//                 className='block bg-black rounded text-sm w-15 text-center text-white'
//               >
//                 Admin
//               </Link>
//           )}
            
//             <Link to= "/profile" className='hover:text-black'>
//                 <HiOutlineUser className='h-6 w-6 text-gray-700' />
//             </Link>
//             <button 
//             onClick={toggleCartDrawer} 
//             className='relative hover:'>
//               <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
//               {cartItemCount > 0 && (<span className='absolute -top-1 bg-[#111d2c] text-xs text-white rounded-full px-2 py-0.5'>
//                 {cartItemCount}
//                 </span>)}
              
//             </button>
//             {/* Search icon*/}
//             <div className='overflow-hidden'>
//               <SearchBar />
//             </div>
//             <button onClick={toggleNavDrawer} className='md:hidden'>
//               <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
//             </button>
//         </div>
//       </nav>
//       {/*Cart Drawer Component*/}
//       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

//       {/* mobile navigation */}
//       <div className={`fixed top-0 left-0 w-3/5 sm:w-1/2 md-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className='flex justify-end p-4'>
//           <button onClick={toggleNavDrawer} className='text-gray-600 hover:text-gray-800'>
//             <IoMdClose className="h-6 w-6 text-gray-600"/>
//           </button>
//       </div>
//       <div className='p-4'>
//         <h2 className='text-xl font-semibold mb-4'>Menu</h2>
//         <nav className='space-y-4'>
//           <Link 
//           to="collections/all?gender=Men" 
//           onClick={toggleNavDrawer} 
//           className='block text-gray-600 hover:text-black'>
//             Men
//           </Link>

//           <Link 
//           to="collections/all?gender=Women" 
//           onClick={toggleNavDrawer} 
//           className='block text-gray-600 hover:text-black'>
//             Women
//           </Link>

//           <Link 
//           to="collections/all?category=Top Wear" 
//           onClick={toggleNavDrawer} 
//           className='block text-gray-600 hover:text-black'>
//             Top Wear
//           </Link>

//           <Link 
//           to="collections/all?category=Bottom Wear" 
//           onClick={toggleNavDrawer} 
//           className='block text-gray-600 hover:text-black'>
//             Bottom Wear
//           </Link>
//         </nav>
        
//       </div>
//       </div>
//     </>
//   )
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hooklogo from '../../assets/hooklogo.jpg'; // Logo image
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // State for cart drawer toggle
  const [drawerOpen, setDrawerOpen] = useState(false);

  // State for mobile navigation menu toggle
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  // Redux states
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  // Calculate cart items count
  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) || 0;

  // Toggle mobile navigation menu
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  // Toggle cart drawer
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="container mx-auto flex items-center justify-between py-2 px-4 md:px-6">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="block w-16 h-auto">
            <img src={hooklogo} alt="Hook Logo" className="w-full h-auto" />
          </Link>
        </div>

        {/* Center: Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="collections/all?gender=Men"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="collections/all?gender=Women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="collections/all?category=Top Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="collections/all?category=Bottom Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right: Icons and Actions */}
        <div className="flex items-center space-x-4">
          {/* Admin Dashboard Link (visible only for admins) */}
          {user && user.role === 'admin' && (
            <Link
              to="/admin"
              className="block bg-black rounded text-sm px-3 py-1 text-center text-white"
            >
              Admin
            </Link>
          )}

          {/* Profile Icon */}
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          {/* Cart Icon */}
          <button onClick={toggleCartDrawer} className="relative">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 right-0 bg-[#111d2c] text-xs text-white rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Search Bar (hidden overflow for clean layout) */}
          <div className="overflow-hidden hidden sm:block">
            <SearchBar />
          </div>

          {/* Mobile Menu Toggle (hamburger icon) */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer Component */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/5 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleNavDrawer}
            className="text-gray-600 hover:text-gray-800"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="collections/all?gender=Men"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="collections/all?gender=Women"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="collections/all?category=Top Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="collections/all?category=Bottom Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
