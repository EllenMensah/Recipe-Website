import React from "react";
import { Link } from "react-router";



const MyRecipes = () => {
  const dummyRecipes = [
    {
      id: 1,
      title: 'Jollof Rice',
      category: 'Traditional',
      description: 'A classic West African rice dish made with tomatoes, onions, and spices.',
      image: '/images/jollof.jpg',
    },
    {
      id: 2,
      title: 'Kelewele',
      category: 'Street Food',
      description: 'Spicy fried plantains seasoned with ginger, cayenne, and garlic.',
      image: '/images/kelewele.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">My Recipes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyRecipes.map((recipe) => (
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
    to={`/recipes/${recipe.id}`}
    className="text-red-600 hover:underline text-sm"
  >
    View
  </Link>
  <Link
    to={`/updaterecipe/${recipe.id}`}
    className="text-blue-600 hover:underline text-sm"
  >
    Edit
  </Link>
</div>

              {/* Delete form */}
              <form
                method="POST"
                action={`/delete-recipe/${recipe.id}`}
                className="mt-3"
              >
                <button
                  type="submit"
                  className="bg-red-600 text-white text-sm px-3 py-1 rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRecipes;
