import React from 'react';
import { Link } from 'react-router';


const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-end bg-[url(assets/images/pandp.jpg)] bg-cover bg-center px-4 w-screen overflow-hidden ">
      <div className="min-w-[60%] max-w-md  p-8 rounded-lg shadow-md bg-black/60  ">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Create an Account</h2>

        <form method="POST" action="/api/signup" className=''> {/* replace action as needed */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
  {/* Password */}
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
    <p className="text-xs text-white font-light mt-1">Password must be at least 8 characters long and contain a number or symbol.</p>

  </div>

  {/* Confirm Password */}
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
