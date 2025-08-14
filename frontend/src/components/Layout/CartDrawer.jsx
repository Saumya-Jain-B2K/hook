
// import { IoMdClose } from 'react-icons/io';
// import CartContent from '../Cart/CartContent';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';


// const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
//   const navigate = useNavigate();
//   const {user, guestId} = useSelector((state) => state.auth);
//   const {cart} = useSelector((state) => state.cart);
//   const userId = user ? user._id : null;
//   const handleCheckout = () => {
//     toggleCartDrawer();
//     if (!user) {
//       navigate('/login?redirect=checkout');
//     } else {
//       navigate('/checkout');
//     }
    
//   };
  

//   return (
//     <div className={`top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} fixed z-50`}>

//       {/* Close Button */}
//       <div className='flex justify-end p-4'>
//         <button onClick={toggleCartDrawer} className='text-gray-600 hover:text-gray-800'>
//           <IoMdClose className='h-6 w-6 text-gray-600'/>
//         </button>
//       </div>

//       {/* Cart content with scrollable area */}
//       <div className='flex-grow p-4 overflow-y-auto'>
//         <h2 className='text-xl font-extrabold mb-4'>Your Cart</h2>
//         {cart && cart?.products?.length > 0 ? (
//           <CartContent cart={cart} userId={userId} 
//           guestId={guestId} />) : (
//           <p>Your cart is empty!</p>
//         )}
        
//       </div>

//       {/* checkout button that is fixed at the bottom in the cart section */}
//       <div className='p-4 bg-white sticky bottom-0'>
//         {cart && cart?.products?.length > 0  && (
//           <>
//           <button onClick={handleCheckout} className='w-full bg-[#13202d] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'>
//           Checkout
//         </button>
//         <p className='text-sm tracking-tighter text-center text-gray-500 mt-2'>
//           Shipping and discount codes calculated at checkout
//         </p>
//           </>
//         )}
        
//       </div>
//     </div>
//   )
// }

// export default CartDrawer


import { IoMdClose } from 'react-icons/io';
import CartContent from '../Cart/CartContent';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

  // Get user & guest info from auth state
  const { user, guestId } = useSelector((state) => state.auth);

  // Get cart data from cart state
  const { cart } = useSelector((state) => state.cart);

  // Determine userId if logged in
  const userId = user ? user._id : null;

  // Navigate to checkout or login (if not authenticated)
  const handleCheckout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate('/login?redirect=checkout');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div
      className={`
        fixed top-0 right-0 h-full bg-white shadow-lg z-50 
        transform transition-transform duration-300 flex flex-col
        ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}
        /* Responsive widths for different screen sizes */
        w-[90%] xs:w-[80%] sm:w-1/2 md:w-[25rem]
      `}
    >
      {/* --- Close Button Section --- */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleCartDrawer}
          aria-label="Close cart drawer"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>

      {/* --- Cart Content Section (scrollable) --- */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-lg sm:text-xl font-extrabold mb-4">Your Cart</h2>
        {cart && cart?.products?.length > 0 ? (
          <CartContent cart={cart} userId={userId} guestId={guestId} />
        ) : (
          <p className="text-sm sm:text-base">Your cart is empty!</p>
        )}
      </div>

      {/* --- Checkout Section (fixed at the bottom) --- */}
      <div className="p-4 bg-white sticky bottom-0 border-t border-gray-200">
        {cart && cart?.products?.length > 0 && (
          <>
            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="
                w-full bg-[#13202d] text-white py-3 rounded-lg font-semibold 
                hover:bg-gray-800 transition
                text-sm sm:text-base
              "
            >
              Checkout
            </button>

            {/* Shipping note */}
            <p className="text-xs sm:text-sm text-center text-gray-500 mt-2 leading-tight">
              Shipping and discount codes calculated at checkout
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
