
import { IoMdClose } from 'react-icons/io';
import CartContent from '../Cart/CartContent';
import { useNavigate } from 'react-router-dom';


const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    toggleCartDrawer();
    navigate('/checkout');
  };
  

  return (
    <div className={`top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} fixed z-50`}>

      {/* Close Button */}
      <div className='flex justify-end p-4'>
        <button onClick={toggleCartDrawer} className='text-gray-600 hover:text-gray-800'>
          <IoMdClose className='h-6 w-6 text-gray-600'/>
        </button>
      </div>

      {/* Cart content with scroll bar area */}
      <div className='flex-grow p-4 overflow-y-auto'>
        <h2 className='text-xl font-extrabold mb-4'>Your Cart</h2>

        {/* Component for cart contents */}
        <CartContent />
      </div>

      {/* checkout button that is fixed at the bottom in the cart section */}
      <div className='p-4 bg-white sticky bottom-0'>
        <button onClick={handleCheckout} className='w-full bg-[#13202d] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'>
          Checkout
        </button>
        <p className='text-sm tracking-tighter text-center text-gray-500 mt-2'>
          Shipping and discount codes calculated at checkout
        </p>
      </div>
    </div>
  )
}

export default CartDrawer
