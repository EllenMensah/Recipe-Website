import React from "react";
import {Link, useNavigate} from 'react-router';



const Login = () => {

 
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[url(assets/images/red.jpg)] bg-cover bg-no-repeat">
      <div className="max-w-md w-full bg-black/60 shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-red-600">Login to Ghana Eats</h2>
        
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
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
