import React from 'react'
import { Link } from 'react-router'
import Banku from '../../assets/images/tz.jpg'

const SingleRecipe = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Back to recipes link */}
      <Link to="/recipes" className="text-red-600 hover:underline mb-4 inline-block">
        ← Back to Recipes
      </Link>

      {/* Title and Image */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Fufu with Light Soup</h1>
      <img
        src={Banku}
        alt="Fufu with Light Soup"
        className="w-full h-[400px] object-cover rounded-lg shadow mb-8"
      />

      {/* Ingredients & Description */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
  {/* Description */}
  <div className="md:col-span-2">
    <h2 className="text-2xl font-bold mb-4">Description</h2>
    <p className="text-gray-600 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat, diam sed semper gravida, 
      dolor arcu luctus lacus, suscipit interdum nibh massa sed massa. Mauris facilisis lectus quis 
      pulvinar congue. Ut at aliquet odio, vel molestie quam ligula condimentum, sit amet consectetur 
      nibh sollicitudin. Nunc ipsum tellus, tristique vel tincidunt ac, finibus blandit ipsum. Nulla 
      bibendum bibendum molestie. In at sollicitudin tortor, sit amet porttitor nisl. Aliquam erat 
      volutpat. Nullam eu velit pretium, eleifend arcu nec, auctor eros. Nulla maximus commodo magna, 
      eu malesuada lorem sollicitudin at.
    </p>
  </div>

  {/* Info Box */}
  <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
    <div className="flex justify-between items-center border-b pb-2">
      <span className="font-semibold text-gray-700 flex items-center gap-2">
        <i className="fas fa-folder-open"></i> Category
      </span>
      <span className="text-gray-600">Burgers</span>
    </div>
    <div className="flex justify-between items-center border-b pb-2">
      <span className="font-semibold text-gray-700 flex items-center gap-2">
        <i className="fas fa-hourglass-half"></i> Total Time
      </span>
      <span className="text-gray-600">60 min</span>
    </div>
    <div className="flex justify-between items-center border-b pb-2">
      <span className="font-semibold text-gray-700 flex items-center gap-2">
        <i className="fas fa-brain"></i> Difficulty
      </span>
      <span className="text-gray-600">Advanced</span>
    </div>
  </div>

  <div className="max-w-4xl mx-auto px-4 py-10">
  <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15l-5-5 1.41-1.41L11 12.17l6.59-6.59L19 7l-8 8z"/>
    </svg>
    Ingredients
  </h2>
  <p className="text-base font-semibold mb-6">
    First of all, check if you have all the necessary ingredients for this recipe. 
    <span className="text-green-800"> Pay attention to the quantities!</span>
  </p>

  <ul className="space-y-4">
    {/* Ingredient item - unchecked */}
    <li className="flex items-center gap-4 text-lg text-gray-700">
      <div className="w-6 h-6 bg-green-700 rounded-sm"></div>
      1/4 cup butter, softened
    </li>
    <li className="flex items-center gap-4 text-lg text-gray-700">
      <div className="w-6 h-6 bg-green-700 rounded-sm"></div>
      2/3 cup butter
    </li>

    {/* Ingredient item - checked */}
    <li className="flex items-center gap-4 text-lg text-gray-400 line-through">
      <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center text-white">
        ✓
      </div>
      3 3/4 cups all-purpose flour
    </li>
    <li className="flex items-center gap-4 text-lg text-gray-400 line-through">
      <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center text-white">
        ✓
      </div>
      1/2 cup warm water (110 degrees F/45 degrees C)
    </li>
    <li className="flex items-center gap-4 text-lg text-gray-400 line-through">
      <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center text-white">
        ✓
      </div>
      1/2 cup warm milk
    </li>
  </ul>
</div>


</div>


    </div>
  )
}

export default SingleRecipe