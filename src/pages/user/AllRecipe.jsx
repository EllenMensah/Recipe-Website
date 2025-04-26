import React, { useState, useEffect} from 'react';
import { Link } from 'react-router';
import cooking from '../../assets/images/cooking.mp4';
import { apiGetAllRecipes } from '../../services/recipes';


const imageURL = "https://res.cloudinary.com/dibkmj074/image/upload/v1745341081/recipe-api/recipes/"; // Image URL

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedFilterType, setSelectedFilterType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all recipes
  const getRecipes = async () => {
    try {
      let response;
      if (selectedFilterType === "" || searchQuery.trim() === "") {
        response = await apiGetAllRecipes({ limit: 1000 });
      } else {
        response = await apiGetAllRecipes(selectedFilterType, searchQuery);
      }
      setRecipes(response.data.recipes || []);
    } catch (error) {
      console.log("Error fetching recipes:", error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch recipes on page load or when filter/search changes
  useEffect(() => {
    getRecipes();
  }, [selectedFilterType, searchQuery]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center px-4">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src={cooking} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        {/* Text & Search on Top */}
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold pb-4">All Recipes</h1>
          <p className="text-lg md:text-2xl mb-6">Discover Ghanaian Delights</p>

          {/* Search & Filter */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getRecipes();
            }}
            className="flex flex-wrap items-center justify-center gap-4 bg-white/90 p-4 rounded-lg shadow-md text-gray-700"
          >
            <select
              name="category"
              value={selectedFilterType}
              onChange={(e) => setSelectedFilterType(e.target.value)}
              className="h-10 px-4 border rounded-md text-sm"
            >
              <option value="">All Categories</option>
              <option value="traditional">Soups</option>
              <option value="street-food">Street Food</option>
              <option value="soups">Rice Dishes</option>
              <option value="desserts">Snack</option>
              <option value="swallows">Swallows</option>
              <option value="stews">Stews and Sauces</option>
              <option value="breakfast">Breakfast</option>
              <option value="drinks">Drinks</option>
            </select>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes..."
              className="h-10 w-full sm:w-72 md:w-96 px-4 border rounded-md text-sm"
            />

            <button
              type="submit"
              className="h-10 bg-red-600 text-white px-6 rounded-md hover:bg-red-700 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="max-w-7xl mx-auto p-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white border rounded-lg shadow-md p-4 flex flex-col gap-1 items-center">
                <div className="w-[150px] h-40 bg-gray-200 rounded-md">
                  <img
                    src={`${imageURL}${recipe.image}`} // ✅ Corrected here
                    alt={recipe.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h4 className="text-sm text-gray-500">{recipe.category}</h4>
                <h2 className="text-lg font-semibold mt-1">{recipe.title}</h2>
                <p className="text-gray-600 text-sm text-center">{recipe.description}</p>
                <Link to={`singlerecipe/${recipe.id}`}>
                  <button className="mt-3 w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition">
                    View Recipe
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-red-700 mt-6 text-xl font-semibold">
            No recipes found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllRecipes;








// import React from 'react'
// import { Link } from 'react-router';
// import cooking from '../../assets/images/cooking.mp4'

// // Dummy recipe data (replace with your real recipe list)
// const recipes = [
//   {
//     id: 1,
//     title: "Fufu & Light Soup",
//     category: "Traditional",
//     description: "Cassava and plantain pounded and served with light soup.",
//     image: "fufu-light", // without file extension
//     price: "Free", // Optional if needed
//   },
//   {
//     id: 2,
//     title: "Waakye",
//     category: "Street Food",
//     description: "Rice and beans served with spaghetti, boiled egg, and stew.",
//     image: "waakye",
//     price: "Free",
//   },
// ];

// const AllRecipes = () => {
//   const imageURL = "/images/"; // Path to your images

//   return (
//     <div className="relative">
//   {/* Hero Section */}
//   <div className="relative min-h-[70vh] flex flex-col items-center justify-center px-4">
//     {/* Video Background */}
//     <video
//       autoPlay
//       loop
//       muted
//       className="absolute top-0 left-0 w-full h-full object-cover z-0"
//     >
//       <source src={cooking} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>

//     {/* Overlay */}
//     <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

//     {/* Text & Search on Top */}
//     <div className="relative z-20 text-center text-white">
//       <h1 className="text-4xl md:text-6xl font-bold pb-4">All Recipes</h1>
//       <p className="text-lg md:text-2xl mb-6">Discover Ghanaian Delights</p>

//       {/* Search & Filter */}
//       <form
//         method="GET"
//         action="/allrecipes"
//         className="flex flex-wrap items-center justify-center gap-4 bg-white/90 p-4 rounded-lg shadow-md text-gray-700"
//       >
//         <select
//           name="category"
//           className="h-10 px-4 border rounded-md text-sm"
//         >
//           <option value="">All Categories</option>
//           <option value="traditional">Soups</option>
//           <option value="street-food">Street Food</option>
//           <option value="soups">Rice Dishes</option>
//           <option value="desserts">Snack</option>
//           <option value="desserts">Swallows</option>
//           <option value="desserts">Stews and Sauces</option>
//           <option value="desserts">Breakfast</option>
//           <option value="desserts">Drinks</option>
//         </select>

//         <input
//           type="text"
//           name="q"
//           placeholder="Search recipes..."
//           className="h-10 w-full sm:w-72 md:w-96 px-4 border rounded-md text-sm"
//         />

//         <button
//           type="submit"
//           className="h-10 bg-red-600 text-white px-6 rounded-md hover:bg-red-700 transition"
//         >
//           Search
//         </button>
//       </form>
//     </div>
//   </div>

//   {/* Recipes Grid */}
//   <div className="max-w-7xl mx-auto p-4">
//     {recipes.length > 0 ? (
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
//         {recipes.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="bg-white border rounded-lg shadow-md p-4 flex flex-col gap-1 items-center"
//           >
//             <div className="w-[150px] h-40 bg-gray-200 rounded-md">
//               <img
//                 src={`${imageURL}${recipe.image}.jpg`}
//                 alt={recipe.title}
//                 className="w-full h-full object-cover rounded-md"
//               />
//             </div>
//             <h4 className="text-sm text-gray-500">{recipe.category}</h4>
//             <h2 className="text-lg font-semibold mt-1">{recipe.title}</h2>
//             <p className="text-gray-600 text-sm text-center">
//               {recipe.description}
//             </p>
//             <Link to={`singlerecipe/${recipe.id}`}>
//               <button className="mt-3 w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition">
//                 View Recipe
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     ) : (
//       <p className="text-center text-red-700 mt-6 text-xl font-semibold">
//         No recipes found.
//       </p>
//     )}
//   </div>
// </div>

//   );
// };

// export default AllRecipes;
