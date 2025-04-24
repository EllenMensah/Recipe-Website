import React, { useState } from "react";  // Add this import statement
import AddRecipe from "../pages/dashboard/AddRecipe";
import MyRecipes from "../pages/dashboard/MyRecipes";
import OverView from "../pages/dashboard/OverView";

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);  // Now this will work

  return (
    <div>
      <OverView recipes={recipes} />
      <AddRecipe setRecipes={setRecipes} />
      <MyRecipes recipes={recipes} />
    </div>
  );
};

export default Dashboard;
