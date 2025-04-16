import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  const isLoggedIn = false; // Replace with actual auth logic
  return (
    <div>
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-red-600">
        <Link to="/">Ghana Eats</Link>
      </div>

      <ul className="flex items-center space-x-6 text-gray-700">
        <li>
          <Link to="/" className="hover:text-red-500">Home</Link>
        </li>
        <li>
          <Link to="/recipes" className="hover:text-red-500">Explore Recipes</Link>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link to="/add-recipe" className="hover:text-red-500">Add Recipe</Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-red-500">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-red-500">Profile</Link>
            </li>
            <li>
              <button className="hover:text-red-500">Log Out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup" className="hover:text-red-500">Sign Up</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-red-500">Log In</Link>
            </li>
          </>
        )}
      </ul>
    </nav>

    </div>
  )
}

export default Navbar