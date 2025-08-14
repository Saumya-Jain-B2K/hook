// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { fetchUserOrders } from '../redux/slices/orderSlice';


// const MyOrderPage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {orders, loading, error} = useSelector((state) => state.orders);

//   useEffect(() => {
//     dispatch(fetchUserOrders());
//   }, [dispatch]);

//   const handleRowClick = (orderId) => {
//     navigate(`/order/${orderId}`)
//   };

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error: {error}</p>


//   return (
//     <div className='max-w-7xl mx-auto p-4 sm:p-6'>
//       <h2 className='text-xl sm:text-2xl font-bold mb-6'>My Orders</h2>
//       <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
//         <table className='min-w-full text-left text-gray-500'>
//           <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
//             <tr>
//               <th className='py-2 px-4 sm:py-3'>Image</th>
//               <th className='py-2 px-4 sm:py-3'>Order Id</th>
//               <th className='py-2 px-4 sm:py-3'>Created</th>
//               <th className='py-2 px-4 sm:py-3'>Shipping Addredd</th>
//               <th className='py-2 px-4 sm:py-3'>Items</th>
//               <th className='py-2 px-4 sm:py-3'>Price</th>
//               <th className='py-2 px-4 sm:py-3'>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length > 0 ? (
//               orders.map((order) => (
//                 <tr
//                   key={order._id}
//                   onClick={() => handleRowClick(order._id)}
//                   className='border-b hover:border-gray-50 cursor-pointer'
//                 >
//                   {/* tag for order items */}
//                   <td className='py-2 px-2 sm:py-4 sm:px-4'>
//                     <img 
//                     src={order.orderItems[0].image} 
//                     alt={order.orderItems[0].name} 
//                     className='w-10 h-10 sm:h-12 object-cover rounded-lg'/>
//                   </td>

//                   {/* tag for order id */}
//                   <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>
//                     #{order._id}
//                   </td>

//                   {/* tag for date and time and location */}
//                   <td className='py-2 px-2 sm:py-4 sm:px-4'>
//                     {new Date(order.createdAt).toLocaleDateString()}{" "}
//                     {new Date(order.createdAt).toLocaleTimeString()}
//                   </td>

//                   {/* tag for shipping address */}
//                   <td className='py-2 px-2 sm:py-4 sm:px-4'>
//                     {order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` : "N/A"}
//                   </td>

//                   {/* tag for order items length */}
//                   <td className='py-2 px-2 sm:py-4 sm:px-4'>
//                     {order.orderItems.length}
//                   </td>
                  
//                   {/* tag for total price */}
//                   <td className='py-2 px-2 sm:py-4 sm:px-4'>
//                     ${order.totalPrice}
//                   </td>
                  
//                   {/* tag for paid and unpaid order */}
//                   <td className='py-2 px-2 sm:py-4 sm:px-4'>
//                     <span className={`${
//                       order.isPaid ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                     } px-2 py-1 rounded-full text-sm sm:text-sm font-medium`}>
//                       {order.isPaid ? "Paid" : "Not Paid"}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td 
//                 colSpan={7}
//                 className='py-4 px-4 text-center text-gray-500'>
//                   You have no orders
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default MyOrderPage


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserOrders } from '../redux/slices/orderSlice';

const MyOrderPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Extracting orders, loading state, and error state from Redux store
  const { orders, loading, error } = useSelector((state) => state.orders);

  // Fetch orders when component mounts
  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  // Handle row click to navigate to order details page
  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  // Loading and error states
  if (loading) return <p className="text-center p-4">Loading...</p>;
  if (error) return <p className="text-center p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Page Heading */}
      <h2 className="text-lg sm:text-2xl font-bold mb-6 text-center sm:text-left">
        My Orders
      </h2>

      {/* Responsive Table Wrapper with Horizontal Scroll on Small Screens */}
      <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
        <table className="min-w-full text-left text-gray-500 text-sm sm:text-base">
          <thead className="bg-gray-100 text-xs sm:text-sm uppercase text-gray-700">
            <tr>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Image</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Order Id</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Created</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Shipping Address</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Items</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Price</th>
              <th className="py-2 px-3 sm:py-3 sm:px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b hover:bg-gray-50 cursor-pointer transition"
                >
                  {/* Product Image */}
                  <td className="py-2 px-3 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>

                  {/* Order ID */}
                  <td className="py-2 px-3 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>

                  {/* Created Date & Time */}
                  <td className="py-2 px-3 sm:py-4 sm:px-4 whitespace-nowrap">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>

                  {/* Shipping Address */}
                  <td className="py-2 px-3 sm:py-4 sm:px-4 whitespace-nowrap">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>

                  {/* Number of Items */}
                  <td className="py-2 px-3 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>

                  {/* Total Price */}
                  <td className="py-2 px-3 sm:py-4 sm:px-4">
                    ₹{order.totalPrice}
                  </td>

                  {/* Payment Status */}
                  <td className="py-2 px-3 sm:py-4 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Not Paid"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              // No Orders Found
              <tr>
                <td
                  colSpan={7}
                  className="py-4 px-4 text-center text-gray-500"
                >
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
