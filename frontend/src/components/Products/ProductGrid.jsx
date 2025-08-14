// import { Link } from "react-router-dom";


// const ProductGrid = ({ products, loading, error }) => {
//   if (loading) {
//     return <p>Loading.....</p>
//   }

//   if (error) {
//     return <p>Error: {error}</p>
//   }
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {products.map((product, index) => (
//         <Link key = {index} to={`/product/${product._id}`} className="block">
//             <div className="bg-white p-4 mb-4">
//                 <div className="w-full h-96 mb-4">
//                     <img 
//                     src={product.images[0].url} 
//                     alt={product.images[0].alText || product.name}
//                     className="w-full h-full object-cover rounded-lg"
//                     />
//                 </div>
//                 <h3 className="tex-sm mb-2">{product.name}</h3>
//                 <p className="text-gray-500 font-medium text-sm tracking-tighter">
//                     ${product.price}
//                 </p>
//             </div>
//         </Link>   
//       ))}
//     </div>
//   )
// }

// export default ProductGrid


import { Link } from "react-router-dom";

const ProductGrid = ({ products, loading, error }) => {
  // Show loading state
  if (loading) {
    return <p>Loading.....</p>;
  }

  // Show error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    // Responsive grid layout:
    // - 1 column on mobile
    // - 2 columns on tablets (sm breakpoint)
    // - 4 columns on large devices (lg breakpoint)
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
      {products.map((product, index) => (
        <Link
          key={index}
          to={`/product/${product._id}`}
          className="block hover:shadow-lg transition-shadow duration-300"
        >
          <div className="bg-white p-4 mb-4 rounded-lg border border-gray-200">
            {/* Product image container */}
            <div className="w-full h-64 sm:h-72 lg:h-96 mb-4">
              <img
                src={product.images[0].url}
                alt={product.images[0].alText || product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product name */}
            <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2 line-clamp-2">
              {product.name}
            </h3>

            {/* Product price */}
            <p className="text-gray-500 font-medium text-sm sm:text-base tracking-tight">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
