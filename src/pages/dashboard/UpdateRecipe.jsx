import React from 'react'

const UpdateRecipe = () => {

  const recipe = {
    id: 1,
    title: 'Jollof Rice',
    category: 'Traditional',
    description: 'A classic West African rice dish made with tomatoes, onions, and spices.',
    ingredients: 'Rice, Tomatoes, Onions, Spices, Oil, Pepper',
    image: '/images/jollof.jpg',
  };
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Recipe</h2>
        <form method="POST" action={`/updaterecipe/${recipe.id}`} encType="multipart/form-data" className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={recipe.title}
              className="w-full border px-4 py-2 rounded-md text-gray-700"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              name="category"
              defaultValue={recipe.category}
              className="w-full border px-4 py-2 rounded-md text-gray-700"
              required
            >
              <option value="Traditional">Traditional</option>
              <option value="Street Food">Street Food</option>
              <option value="Soups">Soups</option>
              <option value="Desserts">Desserts</option>
            </select>
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-medium mb-1">Ingredients</label>
            <textarea
              name="ingredients"
              defaultValue={recipe.ingredients}
              rows="3"
              className="w-full border px-4 py-2 rounded-md text-gray-700"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              defaultValue={recipe.description}
              rows="4"
              className="w-full border px-4 py-2 rounded-md text-gray-700"
              required
            /><textarea/>
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium mb-1">Change Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full border px-4 py-2 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">Leave empty to keep current image</p>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Update Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateRecipe