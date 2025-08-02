import React from 'react';
import heroImg from '../../assets/rabbit-hero.webp'; // Assuming you have an image in this path
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative'>
        {/* Hero section main image */}
        <img src={heroImg} alt="Hero" className='w-full h-[400px] md:h-[600px] lg:h-[670px] object-cover '/>
        {/* Hero section content */}
        <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
            <div className='text-center text-white p-6'>
                <h1 className='text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-3'>
                    Vacation <br /> Ready
                </h1>
                <p className='text-sm tracking-tighter md:text-lg mt-7 mb-6'>
                    Explore our vacation-ready outfits with fast worldwide shipping!
                </p>
                <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">
                    Shop Now!
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero
