// import React, { useEffect } from 'react'
// import MyOrderPage from './MyOrderPage'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../redux/slices/authSlice';
// import { clearCart } from '../redux/slices/cartSlice';

// const Profile = () => {
//     const {user} = useSelector((state) => state.auth);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (!user) {
//             navigate("/login");
//         }
//     }, [user, navigate]);

//     const handleLogout = () => {
//         dispatch(logout());
//         dispatch(clearCart());
//         navigate("/login");
//     };

    
//   return (
//     <div className='min-h-screen flex flex-col'>
//         <div className='flex-grow container mx-auto p-4 md:p-6'>
//             <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
//             {/* Left section */}
//             <div className='w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6'>
//                 <h1 className='text-2xl md:text-3xl font-bold mb-4'>
//                     {user?.name}
//                 </h1>
//                 <p className='text-lg text-gray-600 mb-4'>
//                     {user?.email}
//                 </p>
//                 <button 
//                 onClick={handleLogout}
//                 className='w-full bg-[#111d2c] text-white py-2 px-4 rounded hover:bg-[#1e2a35]'>
//                     Logout
//                 </button>
//             </div>
//             {/* Right Section: Orders table */}
//             <div className='w-full md:w-2/3 lg:w-3/4'>
//                 <MyOrderPage />
//             </div>
//             </div>
//         </div>
        
      
//     </div>
//   )
// }

// export default Profile


import React, { useEffect } from 'react';
import MyOrderPage from './MyOrderPage';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';
import { clearCart } from '../redux/slices/cartSlice';

const Profile = () => {
    const { user } = useSelector((state) => state.auth); // Get logged-in user data from Redux store
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Redirect to login page if user is not logged in
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    // Handle user logout
    const handleLogout = () => {
        dispatch(logout());     // Clear user authentication
        dispatch(clearCart());  // Clear cart items
        navigate("/login");     // Redirect to login page
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Main container */}
            <div className="flex-grow container mx-auto p-4 sm:p-6">
                {/* Responsive layout: Stack vertically on mobile, side-by-side on medium+ screens */}
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

                    {/* LEFT SECTION - User Profile Info */}
                    <div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-lg p-4 sm:p-6">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                            {user?.name}
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 break-words">
                            {user?.email}
                        </p>
                        <button
                            onClick={handleLogout}
                            className="w-full bg-[#111d2c] text-white py-2 px-4 rounded hover:bg-[#1e2a35] transition duration-200"
                        >
                            Logout
                        </button>
                    </div>

                    {/* RIGHT SECTION - Orders Table */}
                    <div className="w-full md:w-2/3 lg:w-3/4">
                        <MyOrderPage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
