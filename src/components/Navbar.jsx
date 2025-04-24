import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react';



const Navbar = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <nav className="px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-red-600">
          <Link to="/">Ghana Eats</Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700">
          <li>
            <Link to="/" className="hover:text-red-500">Home</Link>
          </li>
          <li>
            <Link to="/recipes" className="hover:text-red-500">Explore Recipes</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/" className="hover:text-red-500">Add Recipe</Link>
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

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-start px-6 pb-4 space-y-3 text-gray-700 bg-white border-t">
          <li>
            <Link to="/" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/recipes" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>Explore Recipes</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/add-recipe" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>Add Recipe</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>Profile</Link>
              </li>
              <li>
                <button className="hover:text-red-500" onClick={() => setMenuOpen(false)}>Log Out</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>Sign Up</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>Log In</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default Navbar;


// const Navbar = () => {
//   const isLoggedIn = false; // Replace with actual auth logic
//   return (
//     <div>
//     <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
//       <div className="text-2xl font-bold text-red-600">
//         <Link to="/">Ghana Eats</Link>
//       </div>

//       <ul className="flex items-center space-x-6 text-gray-700">
//         <li>
//           <Link to="/" className="hover:text-red-500">Home</Link>
//         </li>
//         <li>
//           <Link to="/recipes" className="hover:text-red-500">Explore Recipes</Link>
//         </li>

//         {isLoggedIn ? (
//           <>
//             <li>
//               <Link to="/add-recipe" className="hover:text-red-500">Add Recipe</Link>
//             </li>
//             <li>
//               <Link to="/dashboard" className="hover:text-red-500">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/profile" className="hover:text-red-500">Profile</Link>
//             </li>
//             <li>
//               <button className="hover:text-red-500">Log Out</button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/signup" className="hover:text-red-500">Sign Up</Link>
//             </li>
//             <li>
//               <Link to="/login" className="hover:text-red-500">Log In</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>

//     </div>
//   )
// }

// export default Navbar