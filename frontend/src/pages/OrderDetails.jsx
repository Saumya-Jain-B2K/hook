// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { fetchOrderDetails } from "../redux/slices/orderSlice";


// const OrderDetails = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const {orderDetails, loading, error} = useSelector((state) => state.orders);

//     useEffect(() => {
//         dispatch((fetchOrderDetails(id)));
//     }, [dispatch, id]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-5">
//       <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
//       {!orderDetails ? (
//         <p>No Order details found</p>
//       ) : (
//         <div className="p-4 sm:p-4 rounded-lg border">
//             {/* Order Info */}
//             <div className="flex flex-col sm:flex-row justify-between mb-8">
//                 <div>
//                     <h3 className="text-lg md:text-xl font-semibold">
//                         Order ID: #{orderDetails._id}
//                     </h3>
//                     <p className="text-gray-600">
//                         {new Date(orderDetails.createdAt).toLocaleDateString()}
//                     </p>
//                 </div>
//                 <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
//                     <span 
//                     className={`${
//                         orderDetails.isPaid 
//                         ? "bg-green-100 text-green-700"
//                         : "bg-red-100 text-red-700"} 
//                         px-3 py-1 rounded-full text-sm font-medium mb-2`}
//                     >
//                     {orderDetails.isPaid ? "Approved" : "Pending"} 
//                     </span>
//                     <span 
//                     className={`${
//                         orderDetails.isDelivered
//                         ? "bg-green-100 text-green-700"
//                         : "bg-yellow-100 text-yellow-700"} 
//                         px-3 py-1 rounded-full text-sm font-medium mb-2`}
//                     >
//                     {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"} 
//                     </span>    
//                 </div>
//             </div>
//             {/* Customer, Payment, Shipping Info */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
//                 <div>
//                     <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
//                     <p>Payment Method: {orderDetails.paymentMethod}</p>
//                     <p>Status: {orderDetails.isPaid ? "Paid" : "UnPaid"}</p>
//                 </div>

//                 <div>
//                     <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
//                     <p>Shipping Method: {orderDetails.shippingMethod}</p>
//                     <p>Address:{" "} 
//                         {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
//                     </p>
//                 </div>
//             </div>
//             {/* Product List */}
//             <div className="overflow-x-auto">
//                 <h4 className="text-lg font-semibold mb-4">Products</h4>
//                 <table className="min-w-full text-gray-600 mb-4">
//                     <thead className="bg-gray-100">
//                         <tr>
//                             <th className="py-2 px-4">Name</th>
//                             <th className="py-2 px-4">Unit Price</th>
//                             <th className="py-2 px-4">Quantity</th>
//                             <th className="py-2 px-4">Total</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orderDetails.orderItems.map((item) => (
//                             <tr 
//                             key={item.productId} 
//                             className="border-b"
//                             >
//                                 <td className="py-2 px-4 flex items-center">
//                                     <img 
//                                     src={item.image} 
//                                     alt={item.name} 
//                                     className="w-12 h-12 object-cover rounded-lg mr-4"
//                                     />
//                                     <Link 
//                                     to={`/product/${item.productId}`} 
//                                     className="text-blue-500 hover:underline"
//                                     >
//                                         {item.name}
//                                     </Link>
//                                 </td>
//                                 <td className="py-2 px-4">${item.price}</td>
//                                 <td className="py-2 px-4">{item.quantity}</td>
//                                 <td className="py-2 px-4">${item.price * item.quantity}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {/* Back to Orders Link */}
//             <Link to="my-orders" className="text-blue-500 hover:underline">
//                 Back to My Orders
//             </Link>
//         </div>
      
//       )}
//     </div>
//   )
// }

// export default OrderDetails


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchOrderDetails } from "../redux/slices/orderSlice";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // ✅ Extracting order data from Redux store
  const { orderDetails, loading, error } = useSelector((state) => state.orders);

  // ✅ Fetch the order details when component mounts or ID changes
  useEffect(() => {
    dispatch(fetchOrderDetails(id));
  }, [dispatch, id]);

  // ✅ Loading and error handling
  if (loading) return <p className="text-center py-6">Loading...</p>;
  if (error) return <p className="text-center py-6 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-5">
      {/* Page Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>

      {/* If no order found */}
      {!orderDetails ? (
        <p>No Order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border shadow-sm bg-white">
          
          {/* -------------------- ORDER HEADER -------------------- */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            {/* Order ID and Date */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>

            {/* Payment and Delivery Status Badges */}
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>

              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
              </span>
            </div>
          </div>

          {/* -------------------- PAYMENT & SHIPPING INFO -------------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
            {/* Payment Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p className="text-sm sm:text-base">
                Payment Method: {orderDetails.paymentMethod}
              </p>
              <p className="text-sm sm:text-base">
                Status: {orderDetails.isPaid ? "Paid" : "UnPaid"}
              </p>
            </div>

            {/* Shipping Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p className="text-sm sm:text-base">
                Shipping Method: {orderDetails.shippingMethod}
              </p>
              <p className="text-sm sm:text-base">
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>

          {/* -------------------- PRODUCT LIST -------------------- */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4 border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Unit Price</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr
                    key={item.productId}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {/* Product Name & Image */}
                    <td className="py-2 px-4 flex items-center min-w-[200px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4 flex-shrink-0"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:underline text-sm sm:text-base"
                      >
                        {item.name}
                      </Link>
                    </td>

                    {/* Unit Price */}
                    <td className="py-2 px-4 text-sm sm:text-base">
                      ${item.price}
                    </td>

                    {/* Quantity */}
                    <td className="py-2 px-4 text-sm sm:text-base">
                      {item.quantity}
                    </td>

                    {/* Total Price */}
                    <td className="py-2 px-4 text-sm sm:text-base">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* -------------------- BACK TO ORDERS LINK -------------------- */}
          <Link
            to="/my-orders"
            className="text-blue-500 hover:underline text-sm sm:text-base"
          >
            Back to My Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
