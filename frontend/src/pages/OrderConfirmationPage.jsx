// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { clearCart } from "../redux/slices/cartSlice";

// const OrderConfirmationPage = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const {checkout} = useSelector((state) => state.checkout);

//     //clear the cart when the order is confirmed
//     useEffect(() => {
//         if (checkout && checkout._id) {
//             dispatch(clearCart());
//             localStorage.removeItem("cart");
//         } else {
//             navigate("/my-orders");
//         }
//     }, [checkout, dispatch, navigate]);

//     //creating estimated delivery date function
//     const calculatedEstimatedDelivery = (createdAt) => {
//         const orderDate = new Date(createdAt);
//         orderDate.setDate(orderDate.getDate() + 7); //Add 7 days to the order date
//         return orderDate.toLocaleDateString();
//     }
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white">
//       <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
//         Thank You for Your Order!
//       </h1>

//       {checkout && (
//         <div className="p-6 rounded-lg border">
//             <div className="flex justify-between mb-14">
//                 {/* Order Id and Date */}
//                 <div>
//                     <h2 className="text-xl font-semibold">
//                         Order ID: {checkout._id}
//                     </h2>
//                     <p className="text-gray-500">
//                         Order date: {new Date(checkout.createdAt).toLocaleDateString()}
//                     </p>
//                 </div>
//                 {/* Estimated delivery */}
//                 <div>
//                     <p className="text-emerald-700 text-sm">
//                         Estimated Delivery: {" "}
//                         {calculatedEstimatedDelivery(checkout.createdAt)}
//                     </p>
//                 </div>
//             </div>
//             {/* Ordered Items */}
//             <div className="mb-14">
//                 {checkout.checkoutItems.map((item) => (
//                     <div 
//                     key={item.productId} 
//                     className="flex items-center mb-4">
//                         <img 
//                         src={item.image} 
//                         alt={item.name} 
//                         className="w-16 h-16 object-cover rounded-md mr-4" 
//                         />
//                         <div>
//                             <h4 className="text-md font-semibold">{item.name}</h4>
//                             <p className="text-sm text-gray-500">
//                                 {item.color} | {item.size}
//                             </p>
//                         </div>
//                         <div className="ml-auto text-right">
//                             <p className="text-md">${item.price}</p>
//                             <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {/* Payment and Delivery Info */}
//             <div className="grid grid-cols-2 gap-6">
//                 {/* Payment Info */}
//                 <div>
//                     <h4 className="text-lg font-semibold mb-1">Payment</h4>
//                     <p className="text-gray-600">PayPal</p>
//                 </div>

//                {/* Delivery info */}
//                <div>
//                 <h4 className="text-lg font-semibold mb-1">Delivery</h4>
//                 <p 
//                 className="text-gray-600">
//                     {checkout.shippingAddress.address}
//                 </p>
//                 <p className="text-gray-600">{checkout.shippingAddress.city}, {" "}
//                     {checkout.shippingAddress.country}
//                 </p>
//                </div>
//             </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default OrderConfirmationPage


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";

const OrderConfirmationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout } = useSelector((state) => state.checkout);

  // ✅ Clear the cart after successful order confirmation
  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      // If checkout data is missing, redirect to orders page
      navigate("/my-orders");
    }
  }, [checkout, dispatch, navigate]);

  // ✅ Calculate estimated delivery date (7 days from order date)
  const calculatedEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 7); // Add 7 days
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-emerald-700 mb-6 sm:mb-8">
        Thank You for Your Order!
      </h1>

      {checkout && (
        <div className="p-4 sm:p-6 rounded-lg border shadow-sm">
          {/* Order Details Header */}
          <div className="flex flex-col sm:flex-row justify-between mb-10">
            {/* Order ID & Date */}
            <div className="mb-4 sm:mb-0">
              <h2 className="text-lg sm:text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Order date:{" "}
                {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>

            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 text-sm sm:text-base">
                Estimated Delivery:{" "}
                {calculatedEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* Ordered Items List */}
          <div className="mb-10">
            {checkout.checkoutItems.map((item) => (
              <div
                key={item.productId}
                className="flex flex-col sm:flex-row sm:items-center mb-4 border-b pb-4 sm:pb-0 sm:border-none"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-0 sm:mr-4 mb-3 sm:mb-0"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>

                {/* Price & Quantity */}
                <div className="mt-2 sm:mt-0 sm:ml-auto text-right">
                  <p className="text-md font-medium">${item.price}</p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment & Delivery Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Payment Info */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Payment</h4>
              <p className="text-gray-600 text-sm sm:text-base">PayPal</p>
            </div>

            {/* Delivery Info */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Delivery</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
