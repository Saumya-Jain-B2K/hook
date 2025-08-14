// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { toast } from 'sonner';
// import ProductGrid from './ProductGrid';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProductDetails, fetchSimilarProducts } from '../../redux/slices/productsSlice';
// import { addToCart } from '../../redux/slices/cartSlice';


// const ProductDetails = ({ productId }) => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const {selectedProduct, loading, error, similarProducts} = useSelector(
//         (state) => state.products
//     );
//     const {user, guestId} = useSelector((state) => state.auth);
//     //function to handle the main image
//     const [mainImage, setMainImage] = useState("");
//     const [selectedSize, setSelectedSize] = useState("");
//     const [selectedColor, setSelectedColor] = useState("");
//     const [quantity, setQuantity] = useState(1);
//     const [isButtonDisabled, setIsButtonDisabled] = useState(false);

//     const productFetchId = productId || id;

//     useEffect(() => {
//         if (productFetchId) {
//             dispatch(fetchProductDetails(productFetchId));
//             dispatch(fetchSimilarProducts({id: productFetchId}));
//         }
//     }, [dispatch, productFetchId])

//     //implementinh handleQuantityChange function
//     const handleQuantityChange = (action) => {
//         if (action === "plus") setQuantity((prev) => prev + 1);
//         if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
//     };

//     //add to cart function
//     const handleAddToCart = () => {
//         if(!selectedSize || !selectedColor) {
//             toast.error("Please select a size and color before adding to cart", {
//                 duration: 1000,
//             });
//             return;
//         }

//         setIsButtonDisabled(true);
        

//         dispatch(
//             addToCart({
//                 productId: productFetchId,
//                 quantity,
//                 size: selectedSize,
//                 color: selectedColor,
//                 guestId,
//                 userId: user?._id,
//             })
//         )
//          .then(() => {
//             toast.success("Product added to cart!", {
//                 duration: 1000,
//             });
//          })   
//          .finally(() => {
//             setIsButtonDisabled(false);
//          });
//     };
    
    
//     //creating a useEffect function for such tha other image can be selected
//     useEffect(() => {
//         if(selectedProduct?.images?.length > 0) {
//             setMainImage(selectedProduct.images[0].url);
//         }
//     }, [selectedProduct]);

//     //check loading and error
//     if (loading) {
//         return <p>Loading...</p>
//     }

//     if (error) {
//         return <p>Error: {error}</p>
//     }


//   return (
//     <div className='p-6'>
//         {selectedProduct && (
//       <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
//         <div className='flex flex-col md:flex-row'>
//             {/* Left Thumbnails */}
//             <div className='hidden md:flex flex-col space-y-4 mr-6'>
//                 {selectedProduct?.images?.map((image, index) => (
//                     <img 
//                     key={index} 
//                     src={image.url} 
//                     alt={image.altText || `Thumbnail ${index}`} 
//                     className={`w-20 h-20 object-cover rounded-lg cursor-pointer border
//                         ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
//                     onClick={() => setMainImage(image.url)}
//                     />
//                 ))}
//             </div>
//             {/* Main Image */}
//             <div className='md:w-1/2'>
//                 <div className='mb-4'>
//                     <img 
//                     src={mainImage} 
//                     alt="Main Product" 
//                     className='w-[90%] h-auto object-cover rounded-lg'
//                     />
//                 </div>
//             </div>
//             {/* Mobile Thumbnail */}
//             <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
//                 {selectedProduct?.images?.map((image, index) => (
//                     <img 
//                     key={index} 
//                     src={image.url} 
//                     alt={image.altText || `Thumbnail ${index}`} 
//                     className={`w-20 h-20 object-cover rounded-lg cursor-pointer border
//                         ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
//                     onClick={() => setMainImage(image.url)}
//                     />
//                 ))}
//             </div>
//             {/* Right Section */}
//             <div className='md:w-1/2 md:ml-10'>
//             {/* set name */}
//                 <h1 className='text-2xl font-semibold mb-2 md:text-3xl'>
//                     {selectedProduct.name}
//                 </h1>

//                 {/* set original price */}
//                 <p className='text-lg text-gray-600 mb-1 line-through'>
//                     {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
//                 </p>

//                 {/* set price */}
//                 <p className='text-xl text-gray-500 mb-2'>
//                     ${selectedProduct.price}
//                 </p>

//                 {/* set description */}
//                 <p className='text-gray-600 mb-4'>
//                     {selectedProduct.description}
//                 </p>

//                 {/* set color */}
//                 <div className='mb-4'>
//                     <p className='text-gray-700'>Color:</p>
//                     <div className='flex gap-2 mt-2'>
//                         {selectedProduct?.colors?.map((color) => (
//                             <button 
//                                 key={color} 
//                                 onClick={() => setSelectedColor(color)}
//                                 className={`w-8 h-8 rounded-full border 
//                                     ${selectedColor === color ? 
//                                         'border-4 border-black' : 
//                                         'border-gray-300'
//                                     }`
//                                 }
//                                 style={{
//                                     backgroundColor: color.toLowerCase(),
//                                     filter: 'brightness(0.5)',
//                                 }}
//                                 ></button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* set size */}
//                 <div className='mb-4'>
//                     <p className='text-gray-700 '>Size:</p>
//                     <div className='flex gap-2 mt-2'>
//                         {selectedProduct?.sizes?.map((size) => (
//                             <button 
//                                 key={size} 
//                                 onClick={() => setSelectedSize(size)}
//                                 className={`px-4 py-2 rounded border 
//                                 ${selectedSize === size ? 
//                                 'bg-black text-white' : ""}
//                                 `}>
//                                 {size}
//                                 </button>
//                         ))}

//                     </div>
//                 </div>

//                 {/* set quantity */}
//                 <div className='mb-6'>
//                     <p className='text-gray-700'>Quantity:</p>
//                     <div className='flex items-center space-x-4 mt-2'>
//                         {/* previous button */}
//                         <button 
//                         onClick={() => handleQuantityChange("minus")} 
//                         className='px-2 py-1 bg-gray-200 rounded text-lg'>
//                             -
//                         </button>
//                         <span className='text-lg'>{quantity}</span>

//                         {/* next button */}
//                         <button 
//                         onClick={() => handleQuantityChange("plus")}
//                         className='px-2 py-1 bg-gray-200 rounded text-lg'>
//                             +
//                         </button>
//                     </div>
//                 </div>

//                 {/* add to cart button */}

//                 <button
//                 onClick={handleAddToCart} 
//                 disabled={isButtonDisabled}
//                 className={`bg-black text-white py-2 px-6 rounded w-full mb-4 
//                 ${isButtonDisabled ? 
//                 "cursor-not-allowed opacity-50" : 
//                 "hover:bg-gray-900"
//                 }`}
//                 >
//                     {isButtonDisabled ? "Adding to cart..." : "ADD TO CART"}
//                 </button>

//                 {/* characteristics component */}

//                 <div className='mt-10 text-gray-700'>
//                     <h3 className='text-xl font-bold mb-4'>
//                         Characteristics:
//                     </h3>
//                     <table className='w-full text-left text-sm text-gray-600'>
//                         <tbody>
//                             <tr>
//                                 <td className='py-1'>Brand</td>
//                                 <td className='py-1'>{selectedProduct.brand}</td>
//                             </tr>

//                             <tr>
//                                 <td className='py-1'>Material</td>
//                                 <td className='py-1'>{selectedProduct.material}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
                
//             </div>
//         </div>

//         {/* you may also like section */}
//         <div className='mt-20'>
//             <h2 className='text-2xl text-center font-medium mb-4'>
//                 You May Also Like
//             </h2>
//             <ProductGrid 
//             products={similarProducts}
//             loading={loading}
//             error={error}
//             />
//         </div>
//       </div>
//       )}

//     </div>
//   )
// }

// export default ProductDetails


import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails, fetchSimilarProducts } from '../../redux/slices/productsSlice';
import { addToCart } from '../../redux/slices/cartSlice';

const ProductDetails = ({ productId }) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    // Get product details & similar products from Redux store
    const { selectedProduct, loading, error, similarProducts } = useSelector((state) => state.products);
    const { user, guestId } = useSelector((state) => state.auth);

    // Local state for product selections
    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const productFetchId = productId || id;

    // Fetch product & similar products when component mounts or product ID changes
    useEffect(() => {
        if (productFetchId) {
            dispatch(fetchProductDetails(productFetchId));
            dispatch(fetchSimilarProducts({ id: productFetchId }));
        }
    }, [dispatch, productFetchId]);

    // Handle quantity increment/decrement
    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
    };

    // Add product to cart
    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color before adding to cart", { duration: 1000 });
            return;
        }

        setIsButtonDisabled(true);

        dispatch(
            addToCart({
                productId: productFetchId,
                quantity,
                size: selectedSize,
                color: selectedColor,
                guestId,
                userId: user?._id,
            })
        )
            .then(() => {
                toast.success("Product added to cart!", { duration: 1000 });
            })
            .finally(() => {
                setIsButtonDisabled(false);
            });
    };

    // Set default main image when product data is loaded
    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);

    // Show loading state
    if (loading) {
        return <p className="text-center p-6">Loading...</p>;
    }

    // Show error state
    if (error) {
        return <p className="text-center p-6 text-red-500">Error: {error}</p>;
    }

    return (
        <div className="p-4 sm:p-6">
            {selectedProduct && (
                <div className="max-w-6xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row">
                        {/* Left Thumbnails for Desktop */}
                        <div className="hidden md:flex flex-col space-y-4 mr-6">
                            {selectedProduct?.images?.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.url}
                                    alt={image.altText || `Thumbnail ${index}`}
                                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition 
                                        ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
                                    onClick={() => setMainImage(image.url)}
                                />
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <div className="mb-4">
                                <img
                                    src={mainImage}
                                    alt="Main Product"
                                    className="w-full max-w-md h-auto object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Mobile Thumbnails (Horizontal scroll) */}
                        <div className="md:hidden flex overflow-x-auto space-x-4 mb-4 py-2">
                            {selectedProduct?.images?.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.url}
                                    alt={image.altText || `Thumbnail ${index}`}
                                    className={`w-20 h-20 flex-shrink-0 object-cover rounded-lg cursor-pointer border 
                                        ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
                                    onClick={() => setMainImage(image.url)}
                                />
                            ))}
                        </div>

                        {/* Right Section (Product Info) */}
                        <div className="md:w-1/2 md:ml-10">
                            {/* Product Name */}
                            <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
                                {selectedProduct.name}
                            </h1>

                            {/* Original Price (Strikethrough) */}
                            {selectedProduct.originalPrice && (
                                <p className="text-lg text-gray-600 mb-1 line-through">
                                    ₹{selectedProduct.originalPrice}
                                </p>
                            )}

                            {/* Current Price */}
                            <p className="text-xl text-gray-800 mb-2">
                                ₹{selectedProduct.price}
                            </p>

                            {/* Description */}
                            <p className="text-gray-600 mb-4">
                                {selectedProduct.description}
                            </p>

                            {/* Color Selection */}
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium">Color:</p>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    {selectedProduct?.colors?.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-8 h-8 rounded-full border transition 
                                                ${selectedColor === color ? 'border-4 border-black' : 'border-gray-300'}`}
                                            style={{ backgroundColor: color.toLowerCase() }}
                                        ></button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium">Size:</p>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    {selectedProduct?.sizes?.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded border transition 
                                                ${selectedSize === size ? 'bg-black text-white' : 'border-gray-300'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mb-6">
                                <p className="text-gray-700 font-medium">Quantity:</p>
                                <div className="flex items-center space-x-4 mt-2">
                                    <button
                                        onClick={() => handleQuantityChange("minus")}
                                        className="px-3 py-1 bg-gray-200 rounded text-lg"
                                    >
                                        -
                                    </button>
                                    <span className="text-lg">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange("plus")}
                                        className="px-3 py-1 bg-gray-200 rounded text-lg"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={handleAddToCart}
                                disabled={isButtonDisabled}
                                className={`bg-black text-white py-2 px-6 rounded w-full mb-4 transition 
                                    ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-900'}`}
                            >
                                {isButtonDisabled ? "Adding to cart..." : "ADD TO CART"}
                            </button>

                            {/* Characteristics Table */}
                            <div className="mt-10 text-gray-700">
                                <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                                <table className="w-full text-left text-sm text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td className="py-1">Brand</td>
                                            <td className="py-1">{selectedProduct.brand}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Material</td>
                                            <td className="py-1">{selectedProduct.material}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Similar Products Section */}
                    <div className="mt-20">
                        <h2 className="text-2xl text-center font-medium mb-4">
                            You May Also Like
                        </h2>
                        <ProductGrid
                            products={similarProducts}
                            loading={loading}
                            error={error}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
