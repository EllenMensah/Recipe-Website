// components/recipe/RecipeGrid.jsx
import React from 'react';
import RecipeCard from './RecipeCard';


function RecipeGrid({ recipes }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeGrid;