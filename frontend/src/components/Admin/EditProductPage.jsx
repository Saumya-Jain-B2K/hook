// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchProductDetails } from "../../redux/slices/productsSlice";
// import axios from "axios";
// import { updateProduct } from "../../redux/slices/adminProductSlice";

// const EditProductPage = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const {id} = useParams();
//     const {selectedProduct, loading, error} = useSelector((state) => state.products);
//     const [productData, setProductData] = useState({
//         name: "",
//         description: "",
//         price: 0,
//         countInStock: 0,
//         sku: "",
//         category: "",
//         brand: "",
//         sizes: [],
//         colors: [],
//         collections: "",
//         material:"",
//         gender: "",
//         images: [],
//     });

//     const [uploading, setUploading] = useState(false); //image uploading state

//     useEffect(() => {
//         if (id) {
//             dispatch(fetchProductDetails(id));
//         }
//     }, [dispatch, id]);

//     useEffect(() => {
//         if (selectedProduct) {
//             setProductData(selectedProduct);
//         }
//     }, [selectedProduct]);
    
//     //handle change function
//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setProductData((prevData) => ({...prevData, [name]: value }));
//     }

//     //handle image function
//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
//         const formData = new FormData();
//         formData.append("image", file);

//         try {
//             setUploading(true);
//             const {data} = await axios.post(
//                 `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
//                 formData,
//                 {
//                     header: {
//                         "Content-Type": "multipart/form-data"
//                     },
//                 }
//             );
//             setProductData((prevData) => ({
//                 ...prevData,
//                 images: [...prevData.images, {url: data.imageUrl, altText: ""}],
//             }));
//             setUploading(false);
//         } catch (error) {
//             console.error(error);
//             setUploading(false);
//         }
//     }

//     //handle submit function
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(updateProduct({id, productData}));
//         navigate("/admin/products");
//     }

//     if (loading) return <p>Loading....</p>;
//     if (error) return <p>Error: {error}</p>;


//   return (
//     <div className="max-w-full mx-auto p-6 shadow-md rounded-md">
//       <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Name */}
//         <div className="mb-6">
//             <label className="block font-semibold mb-2">Product Name</label>
//             <input 
//                 type="text" 
//                 name="name"
//                 value={productData.name}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-md"
//                 required
//             />
//         </div>

//         {/* Description */}
//         <div className="mb-6">
//             <label className="block font-semibold mb-2">Description</label>
//            <textarea 
//            name="description"
//            value={productData.description}
//            onChange={handleChange}
//            className="w-full border border-gray-300 rounded-md p-2"
//            rows={4}
//            required
//            />
//         </div>

//         {/* Price */}
//         <div className="mb-6">
//             <label className="block font-semibold mb-2">Price</label>
//             <input 
//             type="number" 
//             name="price" 
//             value={productData.price}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md p-2"/>
//         </div>

//         {/* Count in stock */}
//         <div className="mb-6">
//             <label className="block font-semibold mb-2">Count in Stock</label>
//             <input 
//             type="number" 
//             name="countInStock" 
//             value={productData.countInStock}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md p-2"/>
//         </div>

//         {/* SKU */}
//         <div className="mb-6">
//             <label className="block font-semibold mb-2">SKU</label>
//             <input 
//             type="text" 
//             name="sku" 
//             value={productData.sku}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md p-2"/>
//         </div>

//         {/* Sizes */}
//         <div className="mb-6">
//             <label className="block font-semibold mb-2">Sizes (comma-seperated)</label>
//             <input 
//             type="text" 
//             name="price" 
//             value={productData.sizes.join(",")}
//             onChange={(e) => 
//                 setProductData({
//                     ...productData,
//                     sizes: e.target.value.split(",").map((size) => size.trim()),
//                 })
//             }
//             className="w-full border border-gray-300 rounded-md p-2"/>
//         </div>

//         {/* Colors */}
//         <div className="mb-6">
//             <label className="block font-semibold mb-2">Colors (comma-seperated)</label>
//             <input 
//             type="text" 
//             name="price" 
//             value={productData.colors.join(",")}
//             onChange={(e) => 
//                 setProductData({
//                     ...productData,
//                     colors: e.target.value.split(",").map((color) => color.trim()),
//                 })
//             }
//             className="w-full border border-gray-300 rounded-md p-2"/>
//         </div>

//         {/* Image Upload */}
//         <div className="mb-6">
//             <label className="block font-semibold mb-2">Upload Image</label>
//             <input 
//             type="file" 
//             onChange={handleImageUpload}
//             className="file:bg-gray-400 file:text-sm file:text-white file:px-2 file:py-1 file:rounded-md file:border-0 file:cursor-pointer"/>
//             {uploading && <p>Uploading image...</p>}
//             <div className="flex gap-4 mt-4">
//                 {productData.images.map((image, index) => (
//                     <div key={index}>
//                         <img 
//                         src={image.url} 
//                         alt={image.altText || "Product Image"} 
//                         className="w-20 h-20 object-cover rounded-md shadow-md"/>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         <button 
//         type="submit" 
//         className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">
//             Upload Product
//         </button>
//       </form>
//     </div>
//   )
// }

// export default EditProductPage
// EditProductPage

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "../../redux/slices/productsSlice";
import axios from "axios";
import { updateProduct } from "../../redux/slices/adminProductSlice";

const EditProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );

  // Local state for storing product form data
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [],
  });

  // State to track image uploading
  const [uploading, setUploading] = useState(false);

  // Fetch product details when component mounts or ID changes
  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);

  // Populate form fields when product data is loaded
  useEffect(() => {
    if (selectedProduct) {
      setProductData(selectedProduct);
    }
  }, [selectedProduct]);

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
        formData,
        {
          header: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Append the new image to existing images
      setProductData((prevData) => ({
        ...prevData,
        images: [...prevData.images, { url: data.imageUrl, altText: "" }],
      }));
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, productData }));
    navigate("/admin/products");
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 shadow-md rounded-md bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Edit Product
      </h2>

      {/* Product Edit Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
            rows={4}
            required
          />
        </div>

        {/* Price & Count in Stock (responsive side-by-side on larger screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Count in Stock</label>
            <input
              type="number"
              name="countInStock"
              value={productData.countInStock}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* SKU */}
        <div>
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Sizes */}
        <div>
          <label className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value
                  .split(",")
                  .map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Colors */}
        <div>
          <label className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value
                  .split(",")
                  .map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="file:bg-blue-500 file:text-white file:px-3 file:py-1 file:rounded-md file:border-0 file:cursor-pointer"
          />
          {uploading && <p className="text-blue-500 mt-2">Uploading image...</p>}

          {/* Preview Uploaded Images */}
          <div className="flex flex-wrap gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
