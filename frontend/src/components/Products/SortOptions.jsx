// import React from 'react'
// import { useSearchParams } from 'react-router-dom'

// const SortOptions = () => {
//     const [searchParams, setSearchParams] = useSearchParams();

//     const handleSortChange = (e) => {
//         const sortBy = e.target.value;
//         searchParams.set("sortBy", sortBy)
//         setSearchParams(searchParams);
//     } 
//   return (
//     <div className='mb-4 flex items-center justify-end'>
//       <select 
//       id="sort" 
//       onChange={handleSortChange}
//       value={searchParams.get("sortBy") || ""}
//       className='border p-1.5 rounded-md focus:outline-none'>
//         <option value="">Deafult</option>
//         <option value="priceAsc">Price: Low to High</option>
//         <option value="priceDesc">Price: High to Low</option>
//         <option value="popularity">Popularity</option>
//       </select>
//     </div>
//   )
// }

// export default SortOptions


import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SortOptions = () => {
  // React Router hook for getting and updating query parameters
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * Handles sorting changes
   * Updates the "sortBy" query parameter in the URL when the user selects a sorting option
   */
  const handleSortChange = (e) => {
    const sortBy = e.target.value; // Get the selected sorting value
    searchParams.set("sortBy", sortBy); // Update query parameter
    setSearchParams(searchParams); // Push updated params to the URL
  };

  return (
    <div 
      className='mb-4 flex items-center justify-end w-full 
                 sm:justify-end xs:justify-center flex-wrap gap-2'
    >
      {/* Label for accessibility */}
      <label 
        htmlFor="sort" 
        className="text-sm font-medium text-gray-700 hidden sm:block"
      >
        Sort By:
      </label>

      {/* Dropdown for sorting */}
      <select
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
        className='border border-gray-300 p-2 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   text-sm sm:text-base w-full sm:w-auto'
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
