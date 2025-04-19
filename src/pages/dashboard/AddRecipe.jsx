import React from 'react'

const AddRecipe = () => {
  return (
    <div className="p-6 bg-[#FEF2F2] min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Add New Recipe</h1>
        <form action="/your-backend-endpoint" method="POST" encType="multipart/form-data" className="space-y-4">
          {/* Recipe Title */}
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />

          {/* Category */}
          <select
            name="category"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Category</option>
            <option value="Traditional">Traditional</option>
            <option value="Soups">Soups</option>
            <option value="Street Food">Street Food</option>
            <option value="Desserts">Desserts</option>
          </select>

          {/* Image Upload */}
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />

          {/* Ingredients */}
          <textarea
            name="ingredients"
            placeholder="List ingredients (e.g., tomatoes, pepper, onion)"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="4"
            required
          ></textarea>

          {/* Instructions */}
          <textarea
            name="instructions"
            placeholder="Cooking Instructions"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="6"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddRecipe