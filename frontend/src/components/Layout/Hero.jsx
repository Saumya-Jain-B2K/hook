// import React from 'react';
// import heroImg from '../../assets/rabbit-hero.webp'; // Assuming you have an image in this path
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className='relative'>
//         {/* Hero section main image */}
//         <img src={heroImg} alt="Hero" className='w-full h-[400px] md:h-[600px] lg:h-[670px] object-cover '/>
//         {/* Hero section content */}
//         <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
//             <div className='text-center text-white p-6'>
//                 <h1 className='text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-3'>
//                     Vacation <br /> Ready
//                 </h1>
//                 <p className='text-sm tracking-tighter md:text-lg mt-7 mb-6'>
//                     Explore our vacation-ready outfits with fast worldwide shipping!
//                 </p>
//                 <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">
//                     Shop Now!
//                 </Link>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Hero


import React from 'react';
import heroImg from '../../assets/rabbit-hero.webp'; // Hero section background image
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative w-full'>
      {/* Hero section background image */}
      <img 
        src={heroImg} 
        alt="Hero" 
        className='w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[670px] object-cover' 
      />

      {/* Overlay layer to darken image for better text visibility */}
      <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
        {/* Hero text container */}
        <div className='text-center text-white p-4 sm:p-6 max-w-[90%] sm:max-w-[80%]'>
          
          {/* Main headline */}
          <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-3'>
            Vacation <br /> Ready
          </h1>

          {/* Subtitle / description */}
          <p className='text-xs sm:text-sm md:text-lg mt-4 sm:mt-7 mb-4 sm:mb-6 leading-snug sm:leading-normal'>
            Explore our vacation-ready outfits with fast worldwide shipping!
          </p>

          {/* Call-to-action button */}
          <Link 
            to="#" 
            className="bg-white text-gray-950 px-4 sm:px-6 py-2 sm:py-3 rounded-sm text-sm sm:text-lg font-medium hover:bg-gray-200 transition"
          >
            Shop Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
