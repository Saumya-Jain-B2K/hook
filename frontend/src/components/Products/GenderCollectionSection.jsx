// import React from 'react'
// import mensCollectionImg from '../../assets/mens-collection.webp'; // Assuming you have an image in this path
// import womensCollectionImg from '../../assets/womens-collection.webp'; // Assuming you have an image in this path
// import { Link } from 'react-router-dom';

// const GenderCollectionSection = () => {
//   return (
//     <section className='py-16 px-4 lg:px-0'>
//         <div className='container mx-auto flex flex-col md:flex-row gap-8'>
//             {/* Women's Collection */}
//             <div className='relative flex-1'>
//                 <img 
//                 src={womensCollectionImg} 
//                 alt="Women's Collection" 
//                 className='w-full h-[600px] object-cover' />
//                 <div className='absolute bottom-8 left-8 bg-white/90 p-4 '>
//                     <h2 className='text-2xl font-bold text-gray-900 mb-2'>
//                         Women's Collection
//                     </h2>
//                     <Link 
//                     to="/collections/all?gender=Women" 
//                     className="text-gray-900 underline">
//                         Shop Now
//                     </Link>
//                 </div>
//             </div>

//             {/* Men's Section */}
//             <div className='relative flex-1'>
//                 <img 
//                 src={mensCollectionImg} 
//                 alt="Men's Collection" 
//                 className='w-full h-[600px] object-cover' />
//                 <div className='absolute bottom-8 left-8 bg-white/90 p-4 '>
//                     <h2 className='text-2xl font-bold text-gray-900 mb-2'>
//                         Men's Collection
//                     </h2>
//                     <Link 
//                     to="/collections/all?gender=Men" 
//                     className="text-gray-900 underline">
//                         Shop Now
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default GenderCollectionSection


import React from 'react';
import mensCollectionImg from '../../assets/mens-collection.webp'; // Men's collection image
import womensCollectionImg from '../../assets/womens-collection.webp'; // Women's collection image
import { Link } from 'react-router-dom';

const GenderCollectionSection = () => {
  return (
    <section className="py-12 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        
        {/* Women's Collection Card */}
        <div className="relative flex-1">
          {/* Collection Image - Fully responsive */}
          <img
            src={womensCollectionImg}
            alt="Women's Collection"
            className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover"
          />

          {/* Overlay Text Box */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 bg-white/90 p-3 sm:p-4 rounded-md shadow-md">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline text-sm sm:text-base"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection Card */}
        <div className="relative flex-1">
          {/* Collection Image - Fully responsive */}
          <img
            src={mensCollectionImg}
            alt="Men's Collection"
            className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover"
          />

          {/* Overlay Text Box */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 bg-white/90 p-3 sm:p-4 rounded-md shadow-md">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline text-sm sm:text-base"
            >
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GenderCollectionSection;
