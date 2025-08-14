// // import { useState, useEffect, useRef } from 'react';
// // import { FaFilter } from 'react-icons/fa';
// // import FilterSidebar from '../components/Products/FilterSidebar';
// // import SortOptions from '../components/Products/SortOptions';
// // import ProductGrid from '../components/Products/ProductGrid';
// // import { useParams, useSearchParams } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchProductsByFilters } from '../redux/slices/productsSlice';




// // const CollectionPage = () => {
// //     const {collection} = useParams();
// //     const [searchParams] = useSearchParams();
// //     const dispatch = useDispatch();
// //     const {products, loading, error} =useSelector((state) => state.products)
// //     const queryParams = Object.fromEntries([...searchParams]);

// //     // creating function to implement filter sidebar on mobile view
// //     const sidebarRef = useRef(null);
// //     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //     useEffect(() => {
// //         dispatch(fetchProductsByFilters({collection, ...queryParams}));
// //     }, [dispatch, collection, searchParams]);

// //     const toggleSidebar = () => {
// //         setIsSidebarOpen(!isSidebarOpen);
// //     };

// //     const handleClickOutside = (e) => {
// //         //close sidebar if clicked outside
// //         if(sidebarRef.current && !sidebarRef.current.contains(e.target)) {
// //             setIsSidebarOpen(false);
// //         }
// //     };
    
// //     useEffect(() => {
// //         //adding an event listener for clicking of mouse
// //         document.addEventListener("mousedown", handleClickOutside);

// //         //clean event listener
// //         return () => {
// //             document.removeEventListener("mousedown", handleClickOutside);
// //         }
// //     }, []);


// //   return (
// //     <div className='flex flex-col lg:flex-row'>
// //       {/* Mobile filter button */}
// //       <button 
// //       onClick={toggleSidebar} 
// //       className='lg:hidden border p-2 flex justify-center items-center'>
// //         <FaFilter className='mr-2'/>
// //       </button>

// //       {/* Filter sidebar section */}
// //       <div 
// //       ref={sidebarRef} 
// //       className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
// //       fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
// //         <FilterSidebar />
// //       </div>
// //       <div className='flex-grow p-4'>
// //         <h2 className='text-2xl uppercase mb-4'>All Collection</h2>

// //         {/* Sort Options */}
// //         <SortOptions />

// //         {/* Product Grid */}
// //         <ProductGrid products={products} 
// //         loading={loading} 
// //         error={error}
// //         />
// //       </div>
// //     </div>
// //   )
// // }

// // export default CollectionPage


// import { useState, useEffect, useRef } from 'react';
// import { FaFilter } from 'react-icons/fa';
// import FilterSidebar from '../components/Products/FilterSidebar';
// import SortOptions from '../components/Products/SortOptions';
// import ProductGrid from '../components/Products/ProductGrid';
// import { useParams, useSearchParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProductsByFilters } from '../redux/slices/productsSlice';

// const CollectionPage = () => {
//     const { collection } = useParams();
//     const [searchParams] = useSearchParams();
//     const dispatch = useDispatch();
//     const { products, loading, error } = useSelector((state) => state.products);
//     const queryParams = Object.fromEntries([...searchParams]);

//     // Sidebar reference for detecting clicks outside
//     const sidebarRef = useRef(null);

//     // Sidebar visibility state for mobile devices
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     // Fetch products whenever collection or search parameters change
//     useEffect(() => {
//         dispatch(fetchProductsByFilters({ collection, ...queryParams }));
//     }, [dispatch, collection, searchParams]);

//     // Toggle sidebar open/close (for mobile)
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     // Close sidebar when clicked outside (only for mobile)
//     const handleClickOutside = (e) => {
//         if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//             setIsSidebarOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className="flex flex-col lg:flex-row">
//             {/* ================= MOBILE FILTER BUTTON ================= */}
//             {/* Only visible on mobile screens to toggle filter sidebar */}
//             <button
//                 onClick={toggleSidebar}
//                 className="lg:hidden border p-2 flex justify-center items-center bg-white shadow-sm fixed top-16 left-4 z-50 rounded-md"
//             >
//                 <FaFilter className="mr-2" />
//                 Filters
//             </button>

//             {/* ================= FILTER SIDEBAR ================= */}
//             {/* Mobile: Sliding sidebar with transition */}
//             {/* Desktop: Always visible on the left */}
//             <div
//                 ref={sidebarRef}
//                 className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//                 fixed inset-y-0 z-40 left-0 w-64 bg-white overflow-y-auto shadow-md 
//                 transition-transform duration-300 ease-in-out 
//                 lg:static lg:translate-x-0 lg:shadow-none`}
//             >
//                 <FilterSidebar />
//             </div>

//             {/* ================= MAIN CONTENT AREA ================= */}
//             <div className="flex-grow p-4 mt-14 lg:mt-0">
//                 {/* Page Title */}
//                 <h2 className="text-xl sm:text-2xl font-semibold uppercase mb-4">
//                     All Collection
//                 </h2>

//                 {/* Sort Options (dropdown) */}
//                 <SortOptions />

//                 {/* Product Grid Display */}
//                 <ProductGrid
//                     products={products}
//                     loading={loading}
//                     error={error}
//                 />
//             </div>
//         </div>
//     );
// };

// export default CollectionPage;


import { useState, useEffect, useRef } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByFilters } from '../redux/slices/productsSlice';

const CollectionPage = () => {
    const { collection } = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    const queryParams = Object.fromEntries([...searchParams]);

    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchProductsByFilters({ collection, ...queryParams }));
    }, [dispatch, collection, searchParams]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row">
            {/* ================= MOBILE FILTER BUTTON ================= */}
            {/* Keeping the button exactly as it was before */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden border p-2 flex justify-center items-center"
            >
                <FaFilter className="mr-2" />
                Filters
            </button>

            {/* ================= FILTER SIDEBAR ================= */}
            <div
                ref={sidebarRef}
                className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto
                transition-transform duration-300 ease-in-out
                lg:static lg:translate-x-0`}
            >
                <FilterSidebar />
            </div>

            {/* ================= MAIN CONTENT AREA ================= */}
            <div className="flex-grow p-4 mt-4 lg:mt-0">
                <h2 className="text-2xl sm:text-3xl font-semibold uppercase mb-4">
                    All Collection
                </h2>

                <SortOptions />

                <ProductGrid
                    products={products}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default CollectionPage;
