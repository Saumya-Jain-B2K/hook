// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { Link } from "react-router-dom"
// import { fetchAdminProducts } from "../redux/slices/adminProductSlice";
// import { fetchAllOrders } from "../redux/slices/adminOrderSlice";

// const AdminHomePage = () => {
//     const dispatch = useDispatch();
//     const {
//         products,
//         loading: productsLoading,
//         error: productsError,
//     } = useSelector((state) => state.adminProducts);
//     const {
//         orders, 
//         totalOrders, 
//         totalSales, 
//         loading: orderLoading, 
//         error: ordersError
//     } = useSelector((state) => state.adminOrders);

//     useEffect(() => {
//         dispatch(fetchAdminProducts());
//         dispatch(fetchAllOrders());
//     }), [dispatch];

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//        {productsLoading || orderLoading ? (
//         <p>Loading...</p>
//        ) : productsError ? (
//         <p className="text-red-500">Error fetching products: {productsError}</p>
//        ) : ordersError ? (
//         <p className="text-red-500">Error fetching orders: {ordersError}</p>
//        ) :(
//        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//         {/* revenue */}
//         <div className="p-4 shadow-md rounded-lg">
//             <h2 className="text-xl font-semibold">Revenue</h2>
//             <p className="text-2xl">${totalSales.toFixed(2)}</p>
//         </div>

//         {/* total orders */}
//         <div className="p-4 shadow-md rounded-lg">
//             <h2 className="text-xl font-semibold">Total Orders</h2>
//             <p className="text-2xl">{totalOrders}</p>
//             <Link to="/admin/orders" className="text-blue-500 hover:underline">
//                 Manage Orders
//             </Link>
//         </div>

//         {/* total products */}
//         <div className="p-4 shadow-md rounded-lg">
//             <h2 className="text-xl font-semibold">Total Products</h2>
//             <p className="text-2xl">{products.length}</p>
//             <Link to="/admin/products" className="text-blue-500 hover:underline">
//                 Manage Products
//             </Link>
//         </div>
//        </div>
//     )}
//        <div className="mt-6">
//         <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
//         <div className="overflow-x-auto">
//             <table className="min-w-full text-left text-gray-500">
//                 <thead className="bg-gray-100 text-xs uppercase text-gray-700">
//                     <tr>
//                         <th className="py-3 px-4">Order ID</th>
//                         <th className="py-3 px-4">User</th>
//                         <th className="py-3 px-4">Total Price</th>
//                         <th className="py-3 px-4">Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.length > 0 ? (
//                         orders.map((order) => (
//                             <tr 
//                             key={order._id} 
//                             className="border-b hover:bg-gray-50 cursor-pointer">
//                                 <td className="p-4">{order._id}</td>
//                                 <td className="p-4">{order.user.name}</td>
//                                 <td className="p-4">{order.totalPrice.toFixed(2)}</td>
//                                 <td className="p-4">{order.status}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan={4} className="p-4 text-center text-gray-500">
//                                 No recent orders found.
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default AdminHomePage


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Redux thunks to fetch admin data
import { fetchAdminProducts } from "../redux/slices/adminProductSlice";
import { fetchAllOrders } from "../redux/slices/adminOrderSlice";

const AdminHomePage = () => {
  const dispatch = useDispatch();

  // Extract products data from Redux store
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useSelector((state) => state.adminProducts);

  // Extract orders data from Redux store
  const {
    orders,
    totalOrders,
    totalSales,
    loading: orderLoading,
    error: ordersError,
  } = useSelector((state) => state.adminOrders);

  // Fetch products & orders on component mount
  useEffect(() => {
    dispatch(fetchAdminProducts());
    dispatch(fetchAllOrders());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Page Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Admin Dashboard
      </h1>

      {/* Loader / Error Handling */}
      {productsLoading || orderLoading ? (
        <p className="text-center">Loading...</p>
      ) : productsError ? (
        <p className="text-red-500 text-center">
          Error fetching products: {productsError}
        </p>
      ) : ordersError ? (
        <p className="text-red-500 text-center">
          Error fetching orders: {ordersError}
        </p>
      ) : (
        // Stats Section (Revenue / Orders / Products)
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Revenue Card */}
          <div className="p-4 shadow-md rounded-lg bg-white">
            <h2 className="text-lg sm:text-xl font-semibold">Revenue</h2>
            <p className="text-xl sm:text-2xl font-bold text-green-600">
              ${totalSales.toFixed(2)}
            </p>
          </div>

          {/* Total Orders Card */}
          <div className="p-4 shadow-md rounded-lg bg-white">
            <h2 className="text-lg sm:text-xl font-semibold">Total Orders</h2>
            <p className="text-xl sm:text-2xl font-bold">{totalOrders}</p>
            <Link
              to="/admin/orders"
              className="text-blue-500 hover:underline text-sm sm:text-base"
            >
              Manage Orders
            </Link>
          </div>

          {/* Total Products Card */}
          <div className="p-4 shadow-md rounded-lg bg-white">
            <h2 className="text-lg sm:text-xl font-semibold">Total Products</h2>
            <p className="text-xl sm:text-2xl font-bold">{products.length}</p>
            <Link
              to="/admin/products"
              className="text-blue-500 hover:underline text-sm sm:text-base"
            >
              Manage Products
            </Link>
          </div>
        </div>
      )}

      {/* Recent Orders Table */}
      <div className="mt-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
          Recent Orders
        </h2>

        {/* Table Wrapper for Horizontal Scroll on Small Screens */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            {/* Table Head */}
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-4 text-sm sm:text-base">{order._id}</td>
                    <td className="p-4 text-sm sm:text-base">
                      {order.user.name}
                    </td>
                    <td className="p-4 text-sm sm:text-base">
                      ${order.totalPrice.toFixed(2)}
                    </td>
                    <td className="p-4 text-sm sm:text-base">{order.status}</td>
                  </tr>
                ))
              ) : (
                // No Orders Message
                <tr>
                  <td
                    colSpan={4}
                    className="p-4 text-center text-gray-500 text-sm sm:text-base"
                  >
                    No recent orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
