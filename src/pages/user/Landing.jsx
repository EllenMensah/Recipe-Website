import React from 'react'
import { Link } from 'react-router'
import Waakye from '../../assets/images/waakye.jpg'
import Jollof from '../../assets/images/jollof.jpg'
import Fufu from '../../assets/images/image.png'



const Landing = () => {
  return (
 <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[url(assets/images/bg3.jpeg)] bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl text-center text-white max-w-2xl h-[60%] ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Taste the Heart of Ghana</h1>
          <p className="text-lg mb-6">Discover authentic Ghanaian recipes, cook with local ingredients, and share your food stories.</p>
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
    <input 
      type="text" 
      placeholder="Search for Ghanaian recipes..." 
      className="flex-grow px-5 py-3 focus:outline-none text-gray-700"
    />
    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold">
      Search
    </button>
  </div>
          <Link to="/recipes" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">Explore Recipes</Link>
        </div>
      </section>

      {/* Why Ghanaian Food */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Ghanaian Food?</h2>
        <p className="mb-6">Ghanaian cuisine is rich with history, flavor, and culture. From jollof rice to kelewele, each dish tells a story.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold">Flavorful & Spicy</h3>
            <p>Every dish is a perfect blend of spices and ingredients.</p>
          </div>
          <div className="p-4 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold">Locally Sourced</h3>
            <p>We use ingredients that are grown in Ghana and across Africa.</p>
          </div>
          <div className="p-4 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold">Culturally Rich</h3>
            <p>Each meal is more than food - it's a piece of tradition.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-red-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Cook?</h2>
        <p className="mb-6">Sign up and start exploring your favorite Ghanaian meals today.</p>
        <Link to="/signup" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">Join Us</Link>
      </section>

      {/* Category Section */}
<section className="py-12 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-8 text-black">🍛 Browse by Category</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
    
    {/* Category Card */}
    <div className="bg-red-50 p-4 rounded-xl hover:shadow-md transition">
      <span className="text-xl font-semibold text-red-700">Soups</span>
    </div>

    <div className="bg-red-50 p-4 rounded-xl hover:shadow-md transition">
      <span className="text-xl font-semibold text-red-700">Rice Dishes</span>
    </div>

    <div className="bg-red-50 p-4 rounded-xl hover:shadow-md transition">
      <span className="text-xl font-semibold text-red-700">Snacks</span>
    </div>

    <div className="bg-red-50 p-4 rounded-xl hover:shadow-md transition">
      <span className="text-xl font-semibold text-red-700">Street Food</span>
    </div>

    <div className="bg-red-50 p-4 rounded-xl hover:shadow-md transition">
      <span className="text-xl font-semibold text-red-700">Swallows</span>
    </div>

    <div className="bg-red-50 p-4 rounded-xl hover:shadow-md transition">
      <span className="text-xl font-semibold text-red-700">Stews & Sauces</span>
    </div>

    <div className="bg-red-50 p-4 rounded-xl hover:shadow-md transition">
      <span className="text-xl font-semibold text-red-700">Breakfast</span>
    </div>

    <div className="bg-red-50 p-4 rounded-xl hover:shadow-md transition">
      <span className="text-xl font-semibold text-red-700">Drinks</span>
    </div>
    
  </div>
</section>


      {/* Trending Recipes */}
<section className="py-12 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-8 text-red-600">🔥 Trending Recipes</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Recipe Card 1 */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={Jollof} alt="Jollof Rice" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Jollof Rice</h3>
        <p className="text-sm text-gray-600 mt-2">A classic West African rice dish with spicy tomato sauce.</p>
      </div>
    </div>

    {/* Recipe Card 2 */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={Waakye} alt="Waakye" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Waakye</h3>
        <p className="text-sm text-gray-600 mt-2">Rice and beans cooked together with millet leaves, served with sides.</p>
      </div>
    </div>

    {/* Recipe Card 3 */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={Fufu} alt="Fufu" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Fufu And Light Soup</h3>
        <p className="text-sm text-gray-600 mt-2">A hearty traditional dish made with pounded cassava and plantain, served in a spicy tomato-based soup with meat or fish.</p>
      </div>
    </div>
  </div>
</section>

    </main>
  )
}

export default Landing