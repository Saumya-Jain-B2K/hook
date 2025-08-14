// import { RiDeleteBin3Line } from "react-icons/ri"
// import { useDispatch } from "react-redux"
// import { removeFromCart, updateCartItemQuantity } from "../../redux/slices/cartSlice";


// const CartContent = ({cart, userId, guestId}) => {
//     const dispatch = useDispatch();

//     //handle adding or substracting to cart
//     const handleAddToCart = (productId, delta, quantity, size, color) => {
//         const newQuantity = quantity + delta;
//         if (newQuantity >= 1) {
//             dispatch(
//                 updateCartItemQuantity({
//                     userId,
//                     productId,
//                     quantity: newQuantity,
//                     guestId,
//                     size,
//                     color,
//                 })
//             );
//         }
//     };
 
//     const handleRemoveFromCart = (productId, size, color) => {
//         dispatch(removeFromCart({ productId, guestId, userId, size, color}));
//     }

//   return (
//     <div>
//       {cart.products.map((product, index) => (
//         <div key={index} className='flex items-center justify-between py-4 border-b'>
//             <div className='flex items-start'>
//                 <img 
//                 src={product.image} 
//                 alt={product.name} 
//                 className='w-20 h-24 object-cover mr-4' 
//             />
//             <div>
//                 <h3>{product.name}</h3>
//                 <p className="text-sm text-gray-500">
//                     size: {product.size} | color: {product.color}
//                 </p>
//                 <div className="flex items-center mt-2">
//                     <button 
//                     onClick={() => 
//                         handleAddToCart(
//                             product.productId, 
//                             -1, 
//                             product.quantity, 
//                             product.size,
//                             product.color,
//                         )}
//                     className="border rounded px-2 py-1 text-xl font-medium">
//                         -
//                     </button>
//                     <span className="mx-4">
//                         {product.quantity}
//                     </span>
//                     <button
//                     onClick={() => 
//                         handleAddToCart(
//                             product.productId, 
//                             1, 
//                             product.quantity, 
//                             product.size,
//                             product.color,
//                         )} 
//                     className="border rounded px-2 py-1 text-xl font-medium">
//                         +
//                     </button>
//                 </div>
//             </div>
//             </div>
//             <div>
//                 <p> ${product.price.toLocaleString()}</p>
//                 <button
//                     onClick={() => 
//                         handleRemoveFromCart(
//                             product.productId,
//                             product.size, 
//                             product.color
//                     )}
//                 >
//                     <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600"/>
//                 </button>
//             </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default CartContent


import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../../redux/slices/cartSlice";

const CartContent = ({ cart, userId, guestId }) => {
    const dispatch = useDispatch();

    /**
     * Handles adding or subtracting quantity for a cart item.
     * Ensures quantity never goes below 1.
     */
    const handleAddToCart = (productId, delta, quantity, size, color) => {
        const newQuantity = quantity + delta;
        if (newQuantity >= 1) {
            dispatch(
                updateCartItemQuantity({
                    userId,
                    productId,
                    quantity: newQuantity,
                    guestId,
                    size,
                    color,
                })
            );
        }
    };

    /**
     * Removes a product from the cart entirely.
     */
    const handleRemoveFromCart = (productId, size, color) => {
        dispatch(removeFromCart({ productId, guestId, userId, size, color }));
    };

    return (
        <div className="space-y-4">
            {cart.products.map((product, index) => (
                <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center sm:items-start justify-between py-4 border-b"
                >
                    {/* Product Image + Info */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 w-full sm:w-auto">
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-24 h-28 sm:w-20 sm:h-24 object-cover rounded mb-2 sm:mb-0"
                        />

                        {/* Product Name & Details */}
                        <div className="text-center sm:text-left">
                            <h3 className="font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-sm text-gray-500">
                                Size: {product.size} | Color: {product.color}
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-center sm:justify-start mt-2">
                                <button
                                    onClick={() =>
                                        handleAddToCart(
                                            product.productId,
                                            -1,
                                            product.quantity,
                                            product.size,
                                            product.color
                                        )
                                    }
                                    className="border rounded px-2 py-1 text-lg font-medium hover:bg-gray-100"
                                >
                                    -
                                </button>
                                <span className="mx-4">{product.quantity}</span>
                                <button
                                    onClick={() =>
                                        handleAddToCart(
                                            product.productId,
                                            1,
                                            product.quantity,
                                            product.size,
                                            product.color
                                        )
                                    }
                                    className="border rounded px-2 py-1 text-lg font-medium hover:bg-gray-100"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Price & Delete Button */}
                    <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0 w-full sm:w-auto">
                        <p className="font-semibold text-gray-700">
                            ${product.price.toLocaleString()}
                        </p>
                        <button
                            onClick={() =>
                                handleRemoveFromCart(
                                    product.productId,
                                    product.size,
                                    product.color
                                )
                            }
                            className="mt-2 hover:scale-105 transition-transform"
                        >
                            <RiDeleteBin3Line className="h-6 w-6 text-red-600" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContent;
