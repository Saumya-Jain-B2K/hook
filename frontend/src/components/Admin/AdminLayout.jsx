// import { useState } from "react"
// import { FaBars } from "react-icons/fa";
// import AdminSidebar from "./AdminSidebar";
// import { Outlet } from "react-router-dom";


// const AdminLayout = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };


//   return (
//     <div className="min-h-screen flex flex-col md:flex-row relative">
//       {/* Mobile toggle button */}
//       <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
//         <button onClick={toggleSidebar}>
//             <FaBars size={24}/>
//         </button>
//         <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
//       </div>

//       {/* Overlay foe mobile sidebar */}
//       {isSidebarOpen && (
//         <div 
//         onClick={toggleSidebar} 
//         className="fixed inset-0 z-10 bg-black/5- md:hidden ">
//         </div>
//       )}

//       {/* Sidebar */}
//       <div className={`bg-gray-900 w-60 min-h-screen text-white absolute md:relative transform 
//         ${isSidebarOpen ? "translate-x-0 " : "-translate-x-full"}
//         trasition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
//         >
//             {/* Sidebar */}
//             <AdminSidebar />
//         </div>

//         {/* Main Content */}
//         <div className="flex-grow p-6 overflow-auto">
//             <Outlet />
//         </div>
//     </div>
//   )
// }

// export default AdminLayout


import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  // State for toggling sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      
      {/* ====== MOBILE HEADER (Visible only on small devices) ====== */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20 items-center">
        {/* Sidebar toggle button for mobile */}
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <FaBars size={24} />
        </button>
        {/* Dashboard title */}
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* ====== OVERLAY FOR MOBILE SIDEBAR ====== */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-10 bg-black/50 md:hidden"
        ></div>
      )}

      {/* ====== SIDEBAR ====== */}
      <div
        className={`bg-gray-900 w-60 min-h-screen text-white absolute md:relative transform
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:block z-20`}
      >
        {/* Sidebar content */}
        <AdminSidebar />
      </div>

      {/* ====== MAIN CONTENT AREA ====== */}
      <div className="flex-grow p-4 sm:p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
