// import React, { useEffect, useState } from 'react'
// import Hero from '../components/Layout/Hero'
// import GenderCollectionSection from '../components/Products/GenderCollectionSection'
// import NewArrivals from '../components/Products/NewArrivals'
// import ProductDetails from '../components/Products/ProductDetails'
// import ProductGrid from '../components/Products/ProductGrid'
// import FeaturedCollection from '../components/Products/FeaturedCollection'
// import FeaturesSection from '../components/Products/FeaturesSection'
// import {useDispatch} from "react-redux"
// import { fetchProductsByFilters } from '../redux/slices/productsSlice'
// import { useSelector } from 'react-redux'
// import axios from 'axios'



// const Home = () => {
//   const dispatch = useDispatch();
//   const {products, loading, error} = useSelector((state) => state.products)
//   const [bestSellerProduct, setBestSellerProduct] = useState(null);

//   useEffect(() => {
//     //fetch products for a specific collection
//     dispatch(
//       fetchProductsByFilters({
//         gender: "Women",
//         category: "Bottom Wear",
//         limit: 8,
//       })
//     );

//     //fetch best seller product
//     const fetchBestSeller = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
//         );
//         setBestSellerProduct(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchBestSeller();
//   }, [dispatch]);
//   return (
//     <div>
//       <Hero />
//       <GenderCollectionSection />
//       <NewArrivals />

//       {/* best sellers section */}
//       <h2 className='text-3xl text-center font-bold mb-4'>
//         Best Seller
//       </h2>
//       {bestSellerProduct ? (
//         <ProductDetails productId={bestSellerProduct._id} />
//       ) : (
//         <p className='text-center'>Loading best seller product ....</p>
//       )}

//       <div className='container mx-auto'>
//         <h2 className='text-3xl text-center font-bold mb-4'>
//           Top Wear's for Women
//         </h2>
//         <ProductGrid products={products} loading={loading} error={error} />
//       </div>
//       <FeaturedCollection />
//       <FeaturesSection />

//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import Hero from '../components/Layout/Hero';
import GenderCollectionSection from '../components/Products/GenderCollectionSection';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import ProductGrid from '../components/Products/ProductGrid';
import FeaturedCollection from '../components/Products/FeaturedCollection';
import FeaturesSection from '../components/Products/FeaturesSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from '../redux/slices/productsSlice';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();

  // Extract products state from Redux store
  const { products, loading, error } = useSelector((state) => state.products);

  // Local state for best-selling product
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    // Fetch products for a specific collection (Women → Bottom Wear)
    dispatch(
      fetchProductsByFilters({
        gender: 'Women',
        category: 'Bottom Wear',
        limit: 8,
      })
    );

    // Fetch best-selling product from backend
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Banner Section - Full width responsive */}
      <Hero />

      {/* Gender-based Collection Section */}
      <GenderCollectionSection />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Best Seller Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-4">
          Best Seller
        </h2>
        {bestSellerProduct ? (
          // Product details display
          <ProductDetails productId={bestSellerProduct._id} />
        ) : (
          <p className="text-center text-sm sm:text-base">
            Loading best seller product ...
          </p>
        )}
      </section>

      {/* Top Wear's for Women Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-4">
          Top Wear&apos;s for Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </section>

      {/* Featured Collection Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <FeaturedCollection />
      </section>

      {/* Features / Services Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <FeaturesSection />
      </section>
    </div>
  );
};

export default Home;
