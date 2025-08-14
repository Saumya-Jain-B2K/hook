// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addUser, deleteUser, fetchUsers, updateUser } from "../../redux/slices/adminSlice";

// const UserManagement = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {user} = useSelector((state) => state.auth);
//     const {users, loading, error} = useSelector((state) => state.admin);

//     useEffect(() => {
//         if (user && user.role !== "admin") {
//             navigate("/");
//         }
//     }, [user, navigate]);

//     useEffect(() => {
//         if (user && user.role === "admin") {
//             dispatch(fetchUsers());
//         }
//     }, [dispatch, user]);

//     //handle change function
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         })
//     }

//     //handle submit function
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(addUser(formData));

//         //reset the form after submissiom
//         setFormData({
//             name: "",
//             email: "",
//             password: "",
//             role: "customer",
//         });
//     };

//     //handle role change function
//     const handleRoleChange = (userId, newRole) => {
//         dispatch(updateUser({id: userId, role: newRole}));
//     };

//     //handle delete user function
//     const handleDeleteUser = (userId) => {
//         if(window.confirm("Are you sure you want to delete this user?")){
//            dispatch(deleteUser(userId));
//         }
//     }

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         role: "customer", //default role

//     });


//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6">User Management</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {/* Add new user form */}
//       <div className="p-6 rounded-lg mb-6">
//         <h3 className="text-lg font-bold mb-4">Add New User</h3>
//         <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Name</label>
//                     <input 
//                     type="text" 
//                     name="name" 
//                     value={formData.name} 
//                     onChange={handleChange}
//                     className="w-full p-2 border rounded"
//                     required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700">Email</label>
//                     <input 
//                     type="email" 
//                     name="email" 
//                     value={formData.email} 
//                     onChange={handleChange}
//                     className="w-full p-2 border rounded"
//                     required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700">Password</label>
//                     <input 
//                     type="password" 
//                     name="password" 
//                     value={formData.password} 
//                     onChange={handleChange}
//                     className="w-full p-2 border rounded"
//                     required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700">Role</label>
//                     <select 
//                     className="w-full p-2 border rounded" 
//                     name="role" 
//                     value={formData.role} 
//                     onChange={handleChange}>
//                         <option value="customer">Customer</option>
//                         <option value="admin">Admin</option>
//                     </select>
//                 </div>
//                 <button 
//                 type="submit"  
//                 className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
//                     Add User
//                 </button>
//             </form>
//       </div>
      
//     {/* User List Management */}
//     <div className="overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="min-w-full text-left text-gray-500 ">
//             <thead className="bg-gray-100 text-shadow-xs uppercase text-gray-700">
//                 <tr>
//                     <th className="py-3 px-4">Name</th>
//                     <th className="py-3 px-4">Email</th>
//                     <th className="py-3 px-4">Role</th>
//                     <th className="py-3 px-4">Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {users.map((user) => (
//                     <tr key={user._id} className="border-b hover:bg-gray-50">
//                         <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
//                             {user.name}
//                         </td>
//                         <td className="p-4">{user.email}</td>
//                         <td className="p-4">
//                             <select 
//                             value={user.role}
//                             onChange={(e) => handleRoleChange(user._id, e.target.value)}
//                             className="p-2 border rounded">
//                                 <option value="customer">Customer</option>
//                                 <option value="admin">Admin</option>
//                             </select>
//                         </td>
//                         <td className="p-4">
//                             <button 
//                             onClick={() => handleDeleteUser(user._id)}
//                             className="bg-red-500 text-white px-4 py-2 rounded  hover:bg-red-600"
//                             >
//                                 Delete
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>

//     </div>
//   )
// }

// export default UserManagement


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    addUser,
    deleteUser,
    fetchUsers,
    updateUser,
} from "../../redux/slices/adminSlice";

const UserManagement = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get logged-in user data
    const { user } = useSelector((state) => state.auth);
    const { users, loading, error } = useSelector((state) => state.admin);

    // Redirect non-admins to home
    useEffect(() => {
        if (user && user.role !== "admin") {
            navigate("/");
        }
    }, [user, navigate]);

    // Fetch users if admin is logged in
    useEffect(() => {
        if (user && user.role === "admin") {
            dispatch(fetchUsers());
        }
    }, [dispatch, user]);

    // Form state for adding a new user
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer", // Default role
    });

    // Handle input changes for form
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission for adding a new user
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(formData));

        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer",
        });
    };

    // Handle changing user role
    const handleRoleChange = (userId, newRole) => {
        dispatch(updateUser({ id: userId, role: newRole }));
    };

    // Handle deleting a user with confirmation
    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUser(userId));
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            {/* Page Title */}
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
                User Management
            </h2>

            {/* Loading and Error States */}
            {loading && (
                <p className="text-center text-gray-600 text-sm sm:text-base">
                    Loading...
                </p>
            )}
            {error && (
                <p className="text-center text-red-500 text-sm sm:text-base">
                    Error: {error}
                </p>
            )}

            {/* Add New User Form */}
            <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-bold mb-4">Add New User</h3>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded text-sm sm:text-base"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded text-sm sm:text-base"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded text-sm sm:text-base"
                            required
                        />
                    </div>

                    {/* Role Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Role</label>
                        <select
                            className="w-full p-2 border rounded text-sm sm:text-base"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-sm sm:text-base"
                    >
                        Add User
                    </button>
                </form>
            </div>

            {/* User List Table */}
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full text-left text-gray-500 text-sm sm:text-base">
                    <thead className="bg-gray-100 uppercase text-gray-700">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Role</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user._id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                {/* Name */}
                                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                    {user.name}
                                </td>

                                {/* Email */}
                                <td className="p-4">{user.email}</td>

                                {/* Role Dropdown */}
                                <td className="p-4">
                                    <select
                                        value={user.role}
                                        onChange={(e) =>
                                            handleRoleChange(
                                                user._id,
                                                e.target.value
                                            )
                                        }
                                        className="p-2 border rounded text-sm sm:text-base"
                                    >
                                        <option value="customer">
                                            Customer
                                        </option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>

                                {/* Delete Button */}
                                <td className="p-4">
                                    <button
                                        onClick={() =>
                                            handleDeleteUser(user._id)
                                        }
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm sm:text-base"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
