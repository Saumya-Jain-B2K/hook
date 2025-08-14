// import { useEffect, useState } from 'react';
// import hooklogo from '../assets/hooklogo.jpg';
// import login from '../assets/login.webp';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { loginUser } from '../redux/slices/authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { mergeCart } from '../redux/slices/cartSlice';



// const Login = () => {
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
//         dispatch(loginUser({email, password}));
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
//             {/* div for email */}
//             <div className='mb-4'>
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
//                 {loading ? "Loading..." : "Sign In"}
//             </button>
//             <p className='mt-6 text-center text-sm'>
//                 Don't have an account? {" "}
//                 <Link 
//                 to={`/register?redirect=${encodeURIComponent(redirect)}`} 
//                 className="text-blue-500"
//                 >
//                 Register
//                 </Link> 
//             </p>

//         </form>
//       </div>
//       <div className='hidden md:block w-1/2 bg-gray-800'>
//         <div className='h-full flex justify-center items-center'>
//             <img 
//               src={login} 
//               alt="Login to Account" 
//               className='h-[650px] w-full object-cover'/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login



import { useEffect, useState } from 'react';
import hooklogo from '../assets/hooklogo.jpg';
import login from '../assets/login.webp';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { mergeCart } from '../redux/slices/cartSlice';

const Login = () => {
  // Local state for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hooks for Redux and navigation
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Global state from Redux
  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  // Extract redirect parameter from URL (used for checkout or home redirect after login)
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  // Redirect user after successful login
  useEffect(() => {
    if (user) {
      // If cart has products and we have a guestId, merge guest cart with user cart
      if (cart?.products.length > 0 && guestId) {
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
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* ---------- LEFT SIDE: LOGIN FORM ---------- */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 sm:p-8 md:p-12 bg-gray-50">
        
        {/* LOGIN FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-sm border"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={hooklogo}
              alt="Hooks"
              className="w-auto h-12 sm:h-16"
            />
          </div>

          {/* Welcome text */}
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Hey there! 👋</h2>
          <p className="text-center text-gray-600 text-sm sm:text-base mb-6">
            Enter your username and password to Login!
          </p>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email id here"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password here"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link
              to={`/register?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* ---------- RIGHT SIDE: IMAGE ---------- */}
      <div className="hidden md:flex w-1/2 bg-gray-800">
        <div className="h-full w-full flex justify-center items-center">
          <img
            src={login}
            alt="Login to Account"
            className="h-full max-h-[650px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
