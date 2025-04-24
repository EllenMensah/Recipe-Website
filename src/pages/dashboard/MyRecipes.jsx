import React from "react";
import { Link } from "react-router";

const MyRecipes = ({ recipes }) => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">My Recipes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white p-4 rounded-md shadow">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{recipe.category}</p>
              <p className="text-gray-600 text-sm">{recipe.description}</p>

              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/singlerecipe/${recipe.id}`}
                  className="text-red-600 hover:underline text-sm"
                >
                  View
                </Link>
                <Link
                  to={`/dashboard/updaterecipe/${recipe.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Edit
                </Link>
              </div>

              {/* Delete button */}
              <button
                onClick={() => handleDelete(recipe.id)}
                className="bg-red-600 text-white text-sm px-3 py-1 rounded-md hover:bg-red-700 transition mt-3"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRecipes;
