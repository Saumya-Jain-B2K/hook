// import { useState, useEffect } from 'react';
// import hooklogo from '../assets/hooklogo.jpg';
// import register from '../assets/register.webp';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { registerUser } from '../redux/slices/authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { mergeCart } from '../redux/slices/cartSlice';




// const Register = () => {
//     const [ name, setName ] = useState("");
//     const [ email, setEmail ] = useState("");
//     const [ password, setPassword ] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const {user, guestId, loading} = useSelector((state) => state.auth);
//     const {cart} = useSelector((state) => state.cart);

//     //get redirect parameter and check if it's checkout or something
//     const redirect = new URLSearchParams(location.search).get("redirect") || "/";
//     const isCheckoutRedirect = redirect.includes("checkout");

//     useEffect(() => {
//       if (user) {
//         if (cart?.products.length > 0 && guestId) {
//           dispatch(mergeCart({guestId, user})).then(() => {
//             navigate(isCheckoutRedirect ? "/checkout" : "/");
//           });
//         } else {
//           navigate(isCheckoutRedirect ? "/checkout" : "/");
//         }
//       }
//     }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);
    
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(registerUser({name, email, password}));
//     };

//   return (
//     <div className='flex'>
//       <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
//         <form 
//         onSubmit={handleSubmit} 
//         className='w-full max-w-md bg-white p-8 rounded-lg shadow-sm border'>
//             <div className='flex justify-center mb-6'>
//                 <img 
//                 src={hooklogo} 
//                 alt="Hooks" 
//                 className='w-auto h-15'
//                 />
//             </div>
//             <h2 className='text-2xl font-bold text-center mb-6'>Hey there!👋</h2>
//             <p className='text-center mb-6'>
//                 Enter your username and password to Login!
//             </p>
//             {/* div for name */}
//             <div className='mb-4'>
//               <label className='block text-sm font-semibold mb-2'>Name</label>
//                 <input 
//                 type="text" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//                 className='w-full p-2 border rounded'
//                 placeholder='Enter your name here'/>
//             </div>

//             {/* div for email */}
//              <div className='mb-4'>
//               <label className='block text-sm font-semibold mb-2'>Email</label>
//                 <input 
//                 type="email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 className='w-full p-2 border rounded'
//                 placeholder='Enter your email id here'/>
//             </div>
//             {/* div for password */}
//             <div className='mb-4'>
//               <label className='block text-sm font-semibold mb-2'>Password</label>
//                 <input 
//                 type="password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 className='w-full p-2 border rounded'
//                 placeholder='Enter your password here'/>
//             </div>
//             <button 
//             type='submit' 
//             className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition'>
//                 {loading ? "loading..." : "Sign Up"}
//             </button>
//             <p className='mt-6 text-center text-sm'>
//                 Don't have an account? {" "}
//                 <Link 
//                 to={`/login?.redirect=${encodeURIComponent(redirect)}`} 
//                 className="text-blue-500">
//                 Login
//                 </Link> 
//             </p>

//         </form>
//       </div>
//       <div className='hidden md:block w-1/2 bg-gray-800'>
//         <div className='h-full flex justify-center items-center'>
//             <img 
//               src={register} 
//               alt="Login to Account" 
//               className='h-[650px] w-full object-cover'/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register


import { useState, useEffect } from 'react';
import hooklogo from '../assets/hooklogo.jpg';
import register from '../assets/register.webp';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { registerUser } from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { mergeCart } from '../redux/slices/cartSlice';

const Register = () => {
  // Local states for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Extract required values from Redux store
  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  // Get "redirect" query param or default to home
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  // Redirect user after successful registration
  useEffect(() => {
    if (user) {
      if (cart?.products.length > 0 && guestId) {
        // Merge guest cart with user cart
        dispatch(mergeCart({ guestId, user })).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Left side - Registration Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12 bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-sm border"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={hooklogo}
              alt="Hooks"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-center mb-4">Hey there! 👋</h2>
          <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
            Enter your name, email, and password to sign up!
          </p>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>

          {/* Redirect to Login */}
          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              to={`/login?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right side - Illustration (hidden on small screens) */}
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex justify-center items-center">
          <img
            src={register}
            alt="Register Illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
