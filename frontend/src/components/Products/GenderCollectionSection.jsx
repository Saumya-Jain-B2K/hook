import React from 'react'
import mensCollectionImg from '../../assets/mens-collection.webp'; // Assuming you have an image in this path
import womensCollectionImg from '../../assets/womens-collection.webp'; // Assuming you have an image in this path
import { Link } from 'react-router-dom';

const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8'>
            {/* Women's Collection */}
            <div className='relative flex-1'>
                <img 
                src={womensCollectionImg} 
                alt="Women's Collection" 
                className='w-full h-[600px] object-cover' />
                <div className='absolute bottom-8 left-8 bg-white/90 p-4 '>
                    <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                        Women's Collection
                    </h2>
                    <Link 
                    to="/collections/all?gender=Women" 
                    className="text-gray-900 underline">
                        Shop Now
                    </Link>
                </div>
            </div>

            {/* Men's Section */}
            <div className='relative flex-1'>
                <img 
                src={mensCollectionImg} 
                alt="Men's Collection" 
                className='w-full h-[600px] object-cover' />
                <div className='absolute bottom-8 left-8 bg-white/90 p-4 '>
                    <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                        Men's Collection
                    </h2>
                    <Link 
                    to="/collections/all?gender=Men" 
                    className="text-gray-900 underline">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection
