// import React, { useEffect } from 'react';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing the left chevron icon
// import { Link } from 'react-router-dom';
// import { useRef, useState } from 'react';
// import axios from 'axios';

// const NewArrivals = () => {

//     // Writing functions for forward and previous button
//     const scrollRef = useRef(null);
//     const [isDragging, setIsDragging] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(false);
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(true);

//     //implementing backend
//     const [newArrivals, setNewArrivals] = useState([]);

//     useEffect(() => {
//         const fetchNewArrivals = async () => {
//             try {
//                 const response = await axios.get(
//                     `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
//                 );
//                 setNewArrivals(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchNewArrivals();
//     }, []);
   

//     //Mouse handling functions for dragging
//     const handleMouseDown = (e) => {
//         setIsDragging(true);
//         setStartX(e.pageX - scrollRef.current.offsetLeft);
//         setScrollLeft(scrollRef.current.scrollLeft);
//     };

//     const handleMouseMove = (e) => {
//         if (!isDragging) return;
//         const x = e.pageX - scrollRef.current.offsetLeft;
//         const walk = (x - startX);
//         scrollRef.current.scrollLeft = scrollLeft - walk;
//     };

//     const handleMouseUpOrLeave = () => {
//         setIsDragging(false);
//         // setStartX(0);
//         // setScrollLeft(0);
//     };
//     const scroll = (direction) => {
//         const scrollAmount = direction ==="left" ? -300 : 300;
//         scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
//     };


//     //update scroll buttons visibility based on scroll position
//     const updateScrollButtons = () => {
//         const container = scrollRef.current;

//         if (container) {
//             const leftScroll = container.scrollLeft;
//             const rightScrollable = 
//             container.scrollWidth > leftScroll + container.clientWidth;

//             setCanScrollLeft(leftScroll > 0);
//             setCanScrollRight(rightScrollable);
//         }
        
//     };


//     useEffect(() => {
//         const container = scrollRef.current;
//         if (container) {
//             container.addEventListener("scroll", updateScrollButtons);
//             updateScrollButtons();
//             return () => {
//                 container.removeEventListener("scroll", updateScrollButtons);
//             };
//         }
//     }, [newArrivals]);
//   return (
//     <section className='py-16 px-4 lg:px-0'>
//         <div className='container mx-auto text-center mb-10 relative'>
//             <h2 className='text-3xl font-bold mb-4'>
//                 Explore New Arrivals
//             </h2>
//             <p className='text-lg text-gray-600 mb-8'>
//                 Discover the latest trends in fashion and style, 
//                 freshly added to elevate your wardrobe and keep you trendy from others
//             </p>

//             {/* Scroll buttons */}
//             {/* Left side */}
//             <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
//                 <button 
//                 onClick={() => scroll("left")} 
//                 disabled={!canScrollLeft}
//                 className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
//                     <FiChevronLeft className='text-2xl'/>
//                 </button>
                
//                 {/* Right Side */}
//                 <button 
//                 onClick={() => scroll("right")} 
//                 className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
//                     <FiChevronRight className='text-2xl'/>
//                 </button>
//             </div>
//         </div>
//         {/* Scrollable Content */}
//         <div ref={scrollRef}
//          className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
//          onMouseDown={handleMouseDown}
//          onMouseMove={handleMouseMove}
//          onMouseUp={handleMouseUpOrLeave}
//          onMouseLeave={handleMouseUpOrLeave}
//          >
//             {newArrivals.map((product) => (
//                 <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
//                     <img src={product.images[0].url} 
//                     alt={product.images[0]?.altText || product.name} 
//                     className='w-full h-[400px] object-cover rounded-lg'
//                     draggable="false"
//                     />
//                     <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent backdrop-blur-md text-white p-4 rounded-2xl-b-lg'>
//                         <Link to={`/product/${product._id}`} className="block">
//                             <h4 className='font-medium'>{product.name}</h4>
//                             <p className='mt-1'>${product.price}</p>
//                         </Link>
//                     </div>
//                 </div>                
//             ))}
//         </div>
//     </section>
//   )
// }


// export default NewArrivals


import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Icons for scroll navigation
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewArrivals = () => {
  // Scroll reference
  const scrollRef = useRef(null);

  // States for drag scrolling
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // States for button enable/disable
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Products state
  const [newArrivals, setNewArrivals] = useState([]);

  // Fetch new arrivals from backend API
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewArrivals();
  }, []);

  // Mouse drag start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Mouse drag move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX; // How far the mouse has moved
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Mouse drag end or leave
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Scroll function for buttons
  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Check scroll boundaries to enable/disable buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  // Add scroll listener
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => {
        container.removeEventListener('scroll', updateScrollButtons);
      };
    }
  }, [newArrivals]);

  return (
    <section className="py-12 px-4 lg:px-0">
      {/* Section Header */}
      <div className="container mx-auto text-center mb-8 relative">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Explore New Arrivals
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the latest trends in fashion and style, freshly added to elevate your wardrobe and keep you ahead of the trends.
        </p>

        {/* Scroll navigation buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          {/* Left Button */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-2 rounded border transition ${
              canScrollLeft
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-2 rounded border transition ${
              canScrollRight
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Product Cards */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-4 sm:space-x-6 relative ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[85%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            {/* Product Image */}
            <img
              src={product.images[0].url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg"
              draggable="false"
            />

            {/* Product Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-3 sm:p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium text-sm sm:text-base">
                  {product.name}
                </h4>
                <p className="mt-1 text-sm sm:text-base">
                  ₹{product.price}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
