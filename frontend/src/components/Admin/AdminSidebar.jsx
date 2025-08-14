// import { Link, useNavigate } from "react-router-dom"
// import hooklogo from '../../assets/hooklogo.jpg';
// import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
// import { clearCart } from "../../redux/slices/cartSlice";



// const AdminSidebar = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const handleLogout = () => {
//         dispatch(logout()); 
//         dispatch(clearCart());
//         navigate("/");
//     };
//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <Link to="/admin" className="text-2xl font-medium">
//             <img src={hooklogo} alt="hooks" className='w-20 h-20 shadow-md rounded'/>
//         </Link>
//       </div>
//       <h2 className="text-xl font-medium mb-6 ml-[-20px] text-center">Admin Dashboaed</h2>

//       {/* navbar */}
//       <nav className="flex flex-col space-y-2">
//         {/* users */}
//         <NavLink to="/admin/users" className={({isActive}) => isActive 
//         ? 
//         "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : 
//         "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}
//         >
//             <FaUser />
//             <span>Users</span>
//         </NavLink>

//         {/* products */}
//         <NavLink to="/admin/products" className={({isActive}) => isActive 
//         ? 
//         "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : 
//         "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}
//         >
//             <FaBoxOpen />
//             <span>Products</span>
//         </NavLink>

//         {/* orders */}
//         <NavLink to="/admin/orders" className={({isActive}) => isActive 
//         ? 
//         "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : 
//         "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}
//         >
//             <FaClipboardList />
//             <span>Orders</span>
//         </NavLink>

//         {/* Shop */}
//         <NavLink to="/" className={({isActive}) => isActive 
//         ? 
//         "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : 
//         "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}
//         >
//             <FaStore />
//             <span>Shop</span>
//         </NavLink>
//       </nav>
//       {/* creating logout button */}
//       <div className="mt-6">
//         <button onClick={handleLogout} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2">
//             <FaSignOutAlt />
//             <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default AdminSidebar
// AdminSidebar

import { Link, useNavigate, NavLink } from "react-router-dom";
import hooklogo from "../../assets/hooklogo.jpg";
import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { clearCart } from "../../redux/slices/cartSlice";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ===== Logout Handler =====
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gray-900 text-white">
      {/* ===== Logo Section ===== */}
      <div className="mb-6 flex justify-center">
        <Link to="/admin">
          <img
            src={hooklogo}
            alt="hooks"
            className="w-16 h-16 sm:w-20 sm:h-20 shadow-md rounded"
          />
        </Link>
      </div>

      {/* ===== Sidebar Title ===== */}
      <h2 className="text-lg sm:text-xl font-medium mb-6 text-center">
        Admin Dashboard
      </h2>

      {/* ===== Navigation Menu ===== */}
      <nav className="flex flex-col space-y-2">
        {/* Users Link */}
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-2 px-3 sm:py-3 sm:px-4 rounded flex items-center space-x-2 text-sm sm:text-base"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-3 sm:py-3 sm:px-4 rounded flex items-center space-x-2 text-sm sm:text-base"
          }
        >
          <FaUser className="text-base sm:text-lg" />
          <span>Users</span>
        </NavLink>

        {/* Products Link */}
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-2 px-3 sm:py-3 sm:px-4 rounded flex items-center space-x-2 text-sm sm:text-base"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-3 sm:py-3 sm:px-4 rounded flex items-center space-x-2 text-sm sm:text-base"
          }
        >
          <FaBoxOpen className="text-base sm:text-lg" />
          <span>Products</span>
        </NavLink>

        {/* Orders Link */}
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-2 px-3 sm:py-3 sm:px-4 rounded flex items-center space-x-2 text-sm sm:text-base"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-3 sm:py-3 sm:px-4 rounded flex items-center space-x-2 text-sm sm:text-base"
          }
        >
          <FaClipboardList className="text-base sm:text-lg" />
          <span>Orders</span>
        </NavLink>

        {/* Shop Link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-2 px-3 sm:py-3 sm:px-4 rounded flex items-center space-x-2 text-sm sm:text-base"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-3 sm:py-3 sm:px-4 rounded flex items-center space-x-2 text-sm sm:text-base"
          }
        >
          <FaStore className="text-base sm:text-lg" />
          <span>Shop</span>
        </NavLink>
      </nav>

      {/* ===== Logout Button ===== */}
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 sm:py-3 rounded flex items-center justify-center space-x-2 text-sm sm:text-base"
        >
          <FaSignOutAlt className="text-base sm:text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
