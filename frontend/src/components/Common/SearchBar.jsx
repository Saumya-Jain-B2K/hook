// // import { format } from 'express/lib/response';
// import React, { useState } from 'react'
// import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { fetchProductsByFilters, setFilters } from '../../redux/slices/productsSlice';

// const SearchBar = () => {

//     const [searchTerm, setSearchTerm] = useState('');
//     const [isOpen, setIsOpen] = useState(false); 
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
    
//     const handleSearchToggle = () => {
//         setIsOpen(!isOpen);
//     }

//     const handleSearch = (e) => {
//         e.preventDefault();
//         dispatch(setFilters({search: searchTerm}));
//         dispatch(fetchProductsByFilters({search: searchTerm}));
//         navigate(`/collections/all?search=${searchTerm}`);
//         setIsOpen(false);
//     }

//   return (
//     <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-gray-100 h-30 z-50" : "w-auto"}`}>
//       {isOpen ? (
//         <form onSubmit={handleSearch} className='relative flex items-center w-full justify-center'>
//         <div className='relative w-1/2'>
//         <input 
//             type="text" 
//             placeholder='search' 
//             value={searchTerm} 
//             onChange={  (e) => setSearchTerm(e.target.value)}
//             className='bg-gray-200 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700'  
//         />
//         {/* Search Icon */}
//         <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
//             <HiMagnifyingGlass className='h-6 w-6 text-gray-700' /> 
//         </button>
//         </div>
//         {/* Close Button */}
//         <button 
//         type='button' 
//         onClick={handleSearchToggle}
//         className='absolute right-4 top-1/2 transform -translate-y-1/2  text-gray-600 hover:text-gray-800'>
//             <HiMiniXMark className='h-6 w-6' />
//         </button>
//       </form>
//       ) : (
//         <button onClick={handleSearchToggle}>
//             <HiMagnifyingGlass className='h-6 w-6 text-gray-700' />
//         </button>
//       )}
//     </div>
//   )
// }

// export default SearchBar

import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchProductsByFilters, setFilters } from '../../redux/slices/productsSlice'

const SearchBar = () => {
  // Local state for storing search term
  const [searchTerm, setSearchTerm] = useState('')
  // State to track if search bar is open (for mobile toggle)
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Toggle search bar visibility (mobile-friendly)
  const handleSearchToggle = () => {
    setIsOpen(!isOpen)
  }

  // Handle form submit for searching products
  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setFilters({ search: searchTerm }))
    dispatch(fetchProductsByFilters({ search: searchTerm }))
    navigate(`/collections/all?search=${searchTerm}`)
    setIsOpen(false)
  }

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 
        ${isOpen 
          ? 'absolute top-0 left-0 w-full bg-gray-100 p-3 z-50' // Full width bar on mobile when open
          : 'w-auto'
        }`}
    >
      {isOpen ? (
        // Search bar is OPEN
        <form
          onSubmit={handleSearch}
          className="relative flex items-center w-full justify-center"
        >
          {/* Search Input Wrapper */}
          <div className="relative w-[90%] sm:w-2/3 md:w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-200 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 text-sm sm:text-base"
            />

            {/* Search Icon Button */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </button>
          </div>

          {/* Close Search Button */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </form>
      ) : (
        // Search bar is CLOSED — only show search icon
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
        </button>
      )}
    </div>
  )
}

export default SearchBar
