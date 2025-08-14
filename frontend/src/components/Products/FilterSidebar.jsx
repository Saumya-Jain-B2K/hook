// import { useEffect, useState } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';

// const FilterSidebar = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const navigate = useNavigate();

//     //functions for all kinds of filters
//     const [filters, setFilters] = useState({
//         category: "",
//         gender: "",
//         color: "",
//         size: [],
//         material: [],
//         brand: [],
//         minPrice: 0,
//         maxPrixe: 120,

//     })
    
//     //function for pirce range filter
//     const [priceRange, setPriceRange] = useState([0, 120]);
    
//     //function for category filter
//     const categories = ["Top Wear", "Bottom Wear"];
 
//     //filter for colors
//     const colors = [
//         "Red", 
//         "Blue", 
//         "Green", 
//         "Yellow", 
//         "Orange", 
//         "Purple",
//         "Black",
//         "Gray",
//         "White",
//         "Pink",
//         "Beige",
//         "Brown",
//         "Navy",
//     ]

//     //filter for sizes
//     const sizes = ["XS" , "S", "M", "L", "XL", "XXL"];

//     //filter for materials
//     const materials = [
//         "Cotton",
//         "Wool",
//         "Denim",
//         "Polyester",
//         "Silk",
//         "Linen",
//         "Viscose",
//         "Leather",
//         "Fleece",
//         "Velvet",
//     ];

//     //filters for brands
//     const brands = [
//         "H&M",
//         "Zara",
//         "Snitch",
//         "Dressberry",
//         "Charles & Kieth",
//         "Mango",
//         "Monte Carlo",
//     ];

//     //filters for gender
//     const genders = ["Men", "Women", "Unisex"];

//     useEffect(() => {
//         const params = Object.fromEntries([...searchParams]);

//         setFilters({
//             category: params.category || "",
//             gender: params.gender || "",
//             color: params.color || "",
//             size: params.size ? params.size.split(",") : [],
//             material: params.material ? params.material.split(",") : [],
//             brand: params.brand ? params.brand.split(",") : [],
//             minPrice: params.minPrice || 0,
//             maxPrice: params.maxPrice || 120,
//         });

//         setPriceRange([0, params.maxPrice || 120]);

//     }, [searchParams]);

//     //function to handle filter chnage
//     const handleFilterChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         let newFilters = { ...filters };

//         if (type === "checkbox") {
//             if (checked) {
//                 newFilters[name] = [...(newFilters[name] || []), value];
//             } else {
//                 newFilters[name] = newFilters[name].filter((item) => item !== value)
//             } 
//         } else {
//                 newFilters[name] = value;
//         }

//         setFilters(newFilters);
//         updateUrlParams(newFilters);
//     };

//     const updateUrlParams = (newFilters) => {
//         const params = new URLSearchParams();
//         Object.keys(newFilters).forEach((key) => {
//             if(Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
//                 params.append(key, newFilters[key].join(","));
//             } else if (newFilters[key]) {
//                 params.append(key, newFilters[key]);
//             }
//         });

//         setSearchParams(params);
//         navigate(`?${params.toString()}`);
//     };

//     const handlePriceChange = (e) => {
//         const newPrice = e.target.value;
//         setPriceRange([0, newPrice]);
//         const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
//         setFilters(filters);
//         updateUrlParams(newFilters);
//     }





//   return (
//     <div className='p-4'>
//       <h3 className='text-xl font-medium mb-4 text-gray-800'>Filter</h3>

//       {/* Category Filter */}
//       <div className='mb-4'>
//         <label className='block text-gray-600 font-medium mb-2'>Category</label>
//         {categories.map((category) => (
//             <div 
//             key={category} 
//             className='flex items-center mb-0.5'>
//                 <input 
//                 type="radio" 
//                 name='category'
//                 value={category}
//                 onChange={handleFilterChange}
//                 checked={filters.category === category}
//                 className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
//                 <span className='text-gray-700'>{category}</span>
//             </div>
//         ))}
//       </div>

//       {/* Gender Filter */}
//       <div className='mb-4'>
//         <label className='block text-gray-600 font-medium mb-2'>Gender</label>
//         {genders.map((gender) => (
//             <div 
//             key={gender} 
//             className='flex items-center mb-0.5'>
//                 <input 
//                 type="radio" 
//                 name='gender' 
//                 value={gender} 
//                 onChange={handleFilterChange}
//                 checked={filters.gender === gender}
//                 className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
//                 <span className='text-gray-700'>{gender}</span>
//             </div>
//         ))}
//       </div>

//       {/* Color Filter */}
//       <div className='mb-4'>
//         <label className='block text-gray-600 font-medium mb-2'>Color</label>
//         <div className='flex flex-wrap gap-2'>
//             {colors.map((color) => (
//                 <button 
//                 key={color}
//                 name='color'
//                 value={color}
//                 onClick={handleFilterChange}
//                 className={`w-6 h-6 rounded-full border border-gray-300 cursor-pointer transition hover:scale-115
//                     ${filters.color === color ? 
//                         "ring-2 ring-blue-500" : ""
//                     }`}
//                 style={{backgroundColor: color.toLowerCase()}}>
//                 </button>
//             ))}
//         </div>
//       </div>

//       {/* Size filter */}
//       <div className='mb-4'>
//         <label className='block text-gray-600 font-medium mb-2'>Size</label>
//         {sizes.map((size) => (
//             <div 
//             key={size} 
//             className='flex items-center mb-0.5'>
//                 <input type="checkbox"
//                 name='size' 
//                 value={size} 
//                 onChange={handleFilterChange}
//                 checked={filters.size.includes(size)}
//                 className='mr-2 h-4 w-4 text-blue-500 focusLring-blue-400 border-gray-300'/>
//                 <span className='text-gray-700'>{size}</span>
//             </div>
//         ))}
//       </div>

//       {/* Material filter */}
//       <div className='mb-4'>
//         <label className='block text-gray-600 font-medium mb-2'>Material</label>
//         {materials.map((material) => (
//             <div 
//             key={material} 
//             className='flex items-center mb-0.5'>
//                 <input type="checkbox"
//                 name='material' 
//                 value={material} 
//                 onChange={handleFilterChange}
//                 checked={filters.material.includes(material)}
//                 className='mr-2 h-4 w-4 text-blue-500 focusLring-blue-400 border-gray-300'/>
//                 <span className='text-gray-700'>{material}</span>
//             </div>
//         ))}
//       </div>

//       {/* Brand filter */}
//       <div className='mb-4'>
//         <label className='block text-gray-600 font-medium mb-2'>Brand</label>
//         {brands.map((brand) => (
//             <div 
//             key={brand} 
//             className='flex items-center mb-0.5'>
//                 <input type="checkbox"
//                 name='brand'
//                 value={brand} 
//                 onChange={handleFilterChange} 
//                 checked={filters.brand.includes(brand)}
//                 className='mr-2 h-4 w-4 text-blue-500 focusLring-blue-400 border-gray-300'/>
//                 <span className='text-gray-700'>{brand}</span>
//             </div>
//         ))}
//       </div>

//       {/* Price Range Filter */}
//       <div className='mb-6'>
//         <label 
//         className='block text-gray-600 font-medium mb-1'>
//             Price Range
//         </label>
//         <input 
//         type="range" 
//         name='priceRange' 
//         min={0} 
//         max={120} 
//         value={priceRange[1]}
//         onChange={handlePriceChange}
//         className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
//         />
//         <div className='flex justify-between text-gray-600 mt-1'>
//             <span>$0</span>
//             <span>${priceRange[1]}</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FilterSidebar


import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // State for all filters
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 120, // fixed typo from "maxPrixe"
  });

  // Price range state for the slider
  const [priceRange, setPriceRange] = useState([0, 120]);

  // Available filter options
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red", "Blue", "Green", "Yellow", "Orange", "Purple",
    "Black", "Gray", "White", "Pink", "Beige", "Brown", "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton", "Wool", "Denim", "Polyester", "Silk",
    "Linen", "Viscose", "Leather", "Fleece", "Velvet",
  ];
  const brands = [
    "H&M", "Zara", "Snitch", "Dressberry",
    "Charles & Kieth", "Mango", "Monte Carlo",
  ];
  const genders = ["Men", "Women", "Unisex"];

  // Load filters from URL params on mount/update
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 120,
    });

    setPriceRange([0, params.maxPrice || 120]);
  }, [searchParams]);

  // Handle any filter change (radio, checkbox, button, etc.)
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateUrlParams(newFilters);
  };

  // Update URL params so filters are shareable and persistent
  const updateUrlParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  // Handle price slider changes
  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(newFilters);
    updateUrlParams(newFilters);
  };

  return (
    // Responsive container with scroll support for small devices
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md max-h-screen overflow-y-auto">
      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
        Filter
      </h3>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={(e) => {
                e.preventDefault();
                handleFilterChange({ target: { name: "color", value: color, type: "button" } });
              }}
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 transition transform hover:scale-110 ${
                filters.color === color ? "ring-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-1">Price Range</label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={120}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-1 text-sm sm:text-base">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
