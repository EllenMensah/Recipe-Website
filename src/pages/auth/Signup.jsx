import React from 'react';
import { Link, useNavigate} from 'react-router';
import { apiSignup } from '../../services/auth';


const Signup = () => {
  const navigate = useNavigate(); // ✅ make sure this is not commented

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const payload = {
      fullName: form.fullName.value,
      email: form.email.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
      role: form.role.value,
      country: form.country.value,
    };

    if (!payload.role) {
      alert("Please select a role");
      return;
    }

    try {
      const response = await apiSignup(payload);
      const { user } = response.data;
      localStorage.setItem("user", JSON.stringify(user.role));

      if (user.role === "chef" || user.role === "food_lover") {
        navigate("/login");
      } else {
        navigate("/");
      }

      console.log(response);
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-end bg-[url(assets/images/pandp.jpg)] bg-cover bg-center px-4 w-screen overflow-hidden ">
      <div className="min-w-[60%] max-w-md p-8 rounded-lg shadow-md bg-black/60">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Create an Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="fullName"
              required
              className="w-full px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <p className="text-xs text-white font-light mt-1">
                Password must be at least 8 characters long and contain a number or symbol.
              </p>
            </div>

            <div className="flex-1">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                className="w-full px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-white">
              Role
            </label>
            <select
              id="role"
              name="role"
              required
              defaultValue=""
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              <option value="" disabled className="text-white">Select your role</option>
              <option value="user" className="text-black">User</option>
              <option value="chef" className="text-black">Chef</option>
              <option value="food_lover" className="text-black">Food Lover</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-white mb-1">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" name="terms" required className="mr-2" />
            <label htmlFor="terms" className="text-sm text-white">
              I agree to the <a href="/terms" className="text-red-600 underline">Terms & Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-white font-light mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-red-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
















// import React from 'react';
// import { Link, useNavigate } from 'react-router';
// import { apiSignup } from '../../services/auth';


// const Signup = () => {

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const form = event.target;
//     const payload = {
//       fullName: form.fullName.value,
//       email: form.email.value,
//       password: form.password.value,
//       confirmPassword: form.confirmPassword.value,
//       role: form.role.value,
//       country: form.country.value,
//     };
  
//     if (!payload.role) {
//       alert("Please select a role");
//       return;
//     }
  
//     try {
//       const response = await apiSignup(payload);
//       const { user } = response.data;
//       localStorage.setItem("user", JSON.stringify(user.role));
  
//       if (user.role === "chef") {
//         navigate("/login");
//       } else {
//         navigate("/");
//       }
  
//       console.log(response);
//     } catch (error) {
//       console.error("Signup failed:", error.response?.data || error.message);
//     }
//   };
  

//   // const navigate = useNavigate();
//   // const handleSubmit = async (event) => {

//   //   event.preventDefault();
//   //   const data = new FormData(event.target);
//   //   const role = data.get("role");
//   //   if (!role) {
//   //     alert("please select a role");
//   //     return;
//   //   }

//   //   try {
//   //     const response = await apiSignup(data);
//   //     const { user } = response.data;
//   //     localStorage.setItem("user", JSON.stringify(user.role));

//   //     if (user.role === "chef") {
//   //       navigate("/login");
//   //     } else {
//   //       nagivate("/");
//   //     }


//   //     console.log(response);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }




//   }
//   return (
//     <div className="min-h-screen flex items-center justify-end bg-[url(assets/images/pandp.jpg)] bg-cover bg-center px-4 w-screen overflow-hidden ">
//       <div className="min-w-[60%] max-w-md  p-8 rounded-lg shadow-md bg-black/60  ">
//         <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Create an Account</h2>

//         <form className="space-y-4" onSubmit={handleSubmit} > {/* replace action as needed */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="fullName"
//               required
//               className="w-full px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="w-full px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           <div className="flex flex-col md:flex-row gap-4 mb-6">
//             {/* Password */}
//             <div className="flex-1">
//               <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 required
//                 className="w-full px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//               />
//               <p className="text-xs text-white font-light mt-1">Password must be at least 8 characters long and contain a number or symbol.</p>

//             </div>

//             {/* Confirm Password */}
//             <div className="flex-1">
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-1">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 required
//                 className="w-full px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//               />
//             </div>
//           </div>

//           <div className='mb-4'>
//             <label
//               htmlFor="role"
//               className="block text-sm font-medium text-white"
//             >
//               Role
//             </label>
//             <select
//               type="role"
//               id="role"
//               name="role"
//               placeholder="Enter your role"
//               required
//               defaultValue={" "}
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
//             >
//               <option value="" disabled className="text-white">
//                 Select your role
//               </option>
//               <option value="user" className="text-black" >User</option>
//               <option value="vendor" className="text-black" >Chef</option>
//               <option value="superadmin" className="text-black" >Food Lover</option>
//             </select>
//           </div>


//           <div className="mb-4">
//             <label htmlFor="country" className="block text-sm font-medium text-white mb-1">
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               className="w-full px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           <div className="flex items-center mb-6">
//             <input type="checkbox" id="terms" name="terms" required className="mr-2" />
//             <label htmlFor="terms" className="text-sm text-white">
//               I agree to the <a href="/terms" className="text-red-600 underline">Terms & Conditions</a>
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-sm text-white font-light mt-4 text-center">
//           Already have an account?{' '}
//           <Link to="/login" className="text-red-600 hover:underline">
//             Log In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
