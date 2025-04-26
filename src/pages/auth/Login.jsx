import React from "react";
import { apiLogin } from "../../services/auth";
import { Link, useNavigate } from 'react-router';


const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await apiLogin(formData);

      // Log the full response to check its structure
      console.log("API Response:", response);

      // Check if user data is present in the response
      const accessToken = response.data.accessToken;
      const message = response.data.message;

      // Check if message indicates a successful login (optional)
      if (message === "User logged in successfully!") {
        localStorage.setItem("accessToken", accessToken); // Store token in local storage

        // Check if user role is available in the response or fetch from another source
        // Since the response does not include a 'user' object, you may need to fetch the user data separately or assume the role
        // If you have the role available, store it like this
        const user = response.data.user;
        const userRole = user.role;  // For now, assume a default role or fetch user data based on access token

        localStorage.setItem("user", userRole); // Store role in local storage

        // Navigate based on role
        if (userRole === "chef") {
          console.log("Navigating to dashboard");
          navigate("/dashboard");
        } else {
          console.log("Navigating to allrecipes");
          navigate("/allrecipes");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[url(assets/images/red.jpg)] bg-cover bg-no-repeat overflow-hidden">
      <div className="max-w-md w-full bg-black/60 shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-red-600">Login to Ghana Eats</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
            />
            <div className="text-right mt-1">
              <Link to="/forgot-password" className="text-sm text-red-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>

        {/* Sign-up Redirect */}
        <p className="text-center text-sm text-white">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;




// import React from "react";
// import { apiLogin } from "../../services/auth"
// import { Link, useNavigate } from 'react-router';



// const Login = () => {
//   const navigate = useNavigate();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     try {
//       const response = await apiLogin(formData);
//       const { user } = response.data;
//       localStorage.setItem("accessToken", response.data.accessToken); //fetch token from backend
//       localStorage.setItem("user", JSON.stringify(user.role));

//       //nagigate user to their role
//       if (user.role === "chef") {
//         navigate("/dashboard"); // Navigate to Chef Dashboard
//       } else {
//         navigate("/allrecipes"); // Navigate to Home (for FoodLovers or other users)
//       }
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 bg-[url(assets/images/red.jpg)] bg-cover bg-no-repeat overflow-hidden">
//       <div className="max-w-md w-full bg-black/60 shadow-lg rounded-xl p-8 space-y-6">
//         <h2 className="text-3xl font-bold text-center text-red-600">Login to Ghana Eats</h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
//             />
//             <div className="text-right mt-1">
//               <Link to="/forgot-password" className="text-sm text-red-600 hover:underline">
//                 Forgot password?
//               </Link>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         {/* Sign-up Redirect */}
//         <p className="text-center text-sm text-white">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-red-600 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
