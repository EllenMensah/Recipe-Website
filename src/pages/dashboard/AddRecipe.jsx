import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddRecipe = ({ onAddRecipe }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    
    // Assuming you have a function to convert formData to recipe object
    const newRecipe = {
      id: Math.floor(Math.random() * 1000), // Random ID for the new recipe
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("ingredients"), // Assuming ingredients field is used for description
      image: formData.get("image"), // Image file, this can be handled differently for actual images
    };

    // Call the parent method to add the new recipe
    onAddRecipe(newRecipe);

    setLoading(false);
    navigate("/dashboard/myrecipe"); // Navigate to MyRecipes page
  };

  return (
    <div className="p-6 bg-[#FEF2F2] min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Add New Recipe</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
          {/* Recipe Title */}
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />

          {/* Category */}
          <select name="category" className="w-full p-3 border border-gray-300 rounded-md" required>
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
            {loading ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 animate-[spin_0.8s_linear_infinite] fill-blue-600 block mx-auto"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                  />
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Recipe</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
