import React, { useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing the left chevron icon
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

const NewArrivals = () => {

    // Writing functions for forward and previous button
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Declaring some new arrivals as data
    const newArrivals = [
        {
            _id: 1,
            name: 'Stylish Jacket',
            price: 200,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    alt: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: 2,
            name: 'Stylish Jacket',
            price: 300,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    alt: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: 3,
            name: 'Stylish Jacket',
            price: 250,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    alt: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: 4,
            name: 'Stylish Jacket',
            price: 200,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    alt: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: 5,
            name: 'Stylish Jacket',
            price: 100,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    alt: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: 6,
            name: 'Stylish Jacket',
            price: 500,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    alt: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: 7,
            name: 'Stylish Jacket',
            price: 200,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    alt: "Stylish Jacket Image"
                },
            ],
        },

        {
            _id: 8,
            name: 'Stylish Jacket',
            price: 150,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    alt: "Stylish Jacket Image"
                },
            ],
        },
    ];

    //Mouse handling functions for dragging
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX);
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
        // setStartX(0);
        // setScrollLeft(0);
    };
    const scroll = (direction) => {
        const scrollAmount = direction ==="left" ? -300 : 300;
        scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
    };


    //update scroll buttons visibility based on scroll position
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


    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons);
            updateScrollButtons();
            return () => {
                container.removeEventListener("scroll", updateScrollButtons);
            };
        }
    }, []);
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto text-center mb-10 relative'>
            <h2 className='text-3xl font-bold mb-4'>
                Explore New Arrivals
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
                Discover the latest trends in fashion and style, 
                freshly added to elevate your wardrobe and keep you trendy from others
            </p>

            {/* Scroll buttons */}
            {/* Left side */}
            <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
                <button 
                onClick={() => scroll("left")} 
                disabled={!canScrollLeft}
                className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                    <FiChevronLeft className='text-2xl'/>
                </button>
                
                {/* Right Side */}
                <button 
                onClick={() => scroll("right")} 
                className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                    <FiChevronRight className='text-2xl'/>
                </button>
            </div>
        </div>
        {/* Scrollable Content */}
        <div ref={scrollRef}
         className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUpOrLeave}
         onMouseLeave={handleMouseUpOrLeave}
         >
            {newArrivals.map((product) => (
                <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                    <img src={product.images[0].url} 
                    alt={product.images[0]?.altText || product.name} 
                    className='w-full h-[400px] object-cover rounded-lg'
                    draggable="false"
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent backdrop-blur-md text-white p-4 rounded-2xl-b-lg'>
                        <Link to={`/product/${product._id}`} className="block">
                            <h4 className='font-medium'>{product.name}</h4>
                            <p className='mt-1'>${product.price}</p>
                        </Link>
                    </div>
                </div>                
            ))}
        </div>
    </section>
  )
}


export default NewArrivals
