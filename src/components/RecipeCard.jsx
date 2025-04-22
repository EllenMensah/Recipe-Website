// components/recipe/RecipeCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router';

// If you don't have Heroicons installed, you can use simple text or other icons

function RecipeCard({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);
  
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
      <div className="relative">
        <div className="h-48 bg-gray-200">
          <img 
            src={recipe.image || "/assets/recipe-placeholder.jpg"} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>
        <button 
          className="absolute top-2 right-2 text-red-500"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <span className="text-xl">❤️</span>
          ) : (
            <span className="text-xl">🤍</span>
          )}
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
        
        <div className="flex flex-wrap gap-1 mb-2">
          {recipe.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-200 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{recipe.time}</span>
          <span>{recipe.difficulty}</span>
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
          <span className="text-sm">By {recipe.chef}</span>
          <Link 
            to={`/recipe/${recipe.id}`} 
            className="text-blue-500"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;