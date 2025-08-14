// import React from 'react';
// import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2';

// const FeaturesSection = () => {
//   return (
//     <section className='py-16 px-4 bg-white'>
//         <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
//             {/* Features 1*/}
//             <div className='flex flex-col items-center'>
//                 <div className='p-4 rounded-full mb-4'>
//                     <HiShoppingBag className="text-xl"/>
//                 </div>
//                 <h4 className='tracking-tighter mb-2'>FREE INTERNATIONAL SHIPPING</h4>
//                 <p className='text-gray-600 text-sm tracking-tighter'>
//                     On all orders over $100.00
//                 </p>
//             </div>

//             {/* Features 2*/}
//             <div className='flex flex-col items-center'>
//                 <div className='p-4 rounded-full mb-4'>
//                     <HiArrowPathRoundedSquare className="text-xl"/>
//                 </div>
//                 <h4 className='tracking-tighter mb-2'>45 DAYS RETURN</h4>
//                 <p className='text-gray-600 text-sm tracking-tighter'>
//                     Money back guarantee
//                 </p>
//             </div>

//             {/* Features 3*/}
//             <div className='flex flex-col items-center'>
//                 <div className='p-4 rounded-full mb-4'>
//                     <HiOutlineCreditCard className="text-xl"/>
//                 </div>
//                 <h4 className='tracking-tighter mb-2'>SECURE CHECKOUT</h4>
//                 <p className='text-gray-600 text-sm tracking-tighter'>
//                     100% secured checkout process
//                 </p>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default FeaturesSection


import React from 'react';
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2';

const FeaturesSection = () => {
  return (
    // Main section wrapper with padding and background color
    <section className='py-16 px-4 bg-white'>
      {/* Container to center the content and apply responsive grid layout */}
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center'>

        {/* ===== Feature 1: Free International Shipping ===== */}
        <div className='flex flex-col items-center px-4'>
          {/* Icon container */}
          <div className='p-4 bg-gray-100 rounded-full mb-4'>
            <HiShoppingBag className="text-3xl sm:text-4xl text-gray-800" />
          </div>
          {/* Heading */}
          <h4 className='text-base sm:text-lg font-semibold tracking-tight mb-2'>
            FREE INTERNATIONAL SHIPPING
          </h4>
          {/* Description */}
          <p className='text-gray-600 text-sm sm:text-base tracking-tight'>
            On all orders over $100.00
          </p>
        </div>

        {/* ===== Feature 2: 45 Days Return ===== */}
        <div className='flex flex-col items-center px-4'>
          {/* Icon container */}
          <div className='p-4 bg-gray-100 rounded-full mb-4'>
            <HiArrowPathRoundedSquare className="text-3xl sm:text-4xl text-gray-800" />
          </div>
          {/* Heading */}
          <h4 className='text-base sm:text-lg font-semibold tracking-tight mb-2'>
            45 DAYS RETURN
          </h4>
          {/* Description */}
          <p className='text-gray-600 text-sm sm:text-base tracking-tight'>
            Money back guarantee
          </p>
        </div>

        {/* ===== Feature 3: Secure Checkout ===== */}
        <div className='flex flex-col items-center px-4'>
          {/* Icon container */}
          <div className='p-4 bg-gray-100 rounded-full mb-4'>
            <HiOutlineCreditCard className="text-3xl sm:text-4xl text-gray-800" />
          </div>
          {/* Heading */}
          <h4 className='text-base sm:text-lg font-semibold tracking-tight mb-2'>
            SECURE CHECKOUT
          </h4>
          {/* Description */}
          <p className='text-gray-600 text-sm sm:text-base tracking-tight'>
            100% secured checkout process
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
