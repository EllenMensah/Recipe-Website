import React from 'react'

const DashNav = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600">Chef Dashboard</div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex gap-6 items-center text-gray-700">
          <a href="/dashboard" className="hover:text-red-600">Home</a>
          <a href="/add-recipe" className="hover:text-red-600">Add Recipe</a>
          <a href="/my-recipes" className="hover:text-red-600">My Recipes</a>
        </div>

        {/* User Area */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-gray-700 text-sm font-medium">Chef Ama</div>
          <form action="/logout" method="POST">
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <div className="peer-checked:flex hidden flex-col mt-4 md:hidden text-gray-700 gap-3">
        <a href="/dashboard" className="hover:text-red-600">Home</a>
        <a href="/add-recipe" className="hover:text-red-600">Add Recipe</a>
        <a href="/my-recipes" className="hover:text-red-600">My Recipes</a>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-medium">Chef Ama</span>
          <form action="/logout" method="POST">
            <button
              type="submit"
              className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default DashNav