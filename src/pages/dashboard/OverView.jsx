import React from "react";

const OverView = ({ recipes }) => {
  // Get the total number of recipes and recent recipes
  const totalRecipes = recipes.length;
  const recentRecipes = recipes.slice(0, 3); // Show the most recent 3 recipes

  return (
    <div className="min-h-screen bg-[#FEF2F2]">
      {/* Main Content */}
      <main className="flex-1 px-4 py-6 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Welcome, Chef!</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold">Total Recipes</h2>
            <p className="text-xl sm:text-2xl font-bold mt-2">{totalRecipes}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold">Pending Approval</h2>
            <p className="text-xl sm:text-2xl font-bold mt-2">3</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold">Total Views</h2>
            <p className="text-xl sm:text-2xl font-bold mt-2">1,250</p>
          </div>
        </div>

        {/* Recent Recipes */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Recent Recipes</h2>
          {recentRecipes.length > 0 ? (
            <div className="space-y-4">
              {recentRecipes.map((recipe) => (
                <div key={recipe.id} className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">{recipe.title}</h3>
                  <p className="text-sm text-gray-500">{recipe.category}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600">No recent activity yet.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default OverView;
