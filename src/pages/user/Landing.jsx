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
      <div className="bg-black/50 backdrop-blur-md p-4 md:p-6 rounded-xl text-center text-white w-[90%] max-w-2xl h-fit md:h-[60%]">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Taste the Heart of Ghana</h1>
        <p className="text-base md:text-lg mb-6">Discover authentic Ghanaian recipes, cook with local ingredients, and share your food stories.</p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-gray-300 rounded-full overflow-hidden shadow-sm mb-4">
          <input 
            type="text" 
            placeholder="Search for Ghanaian recipes..." 
            className="flex-grow px-4 py-2 sm:py-3 focus:outline-none text-white"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 font-semibold">
            Search
          </button>
        </div>
  
        <Link to="/signup" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
          Explore Recipes
        </Link>
      </div>
    </section>
  
    {/* Why Ghanaian Food */}
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Why Ghanaian Food?</h2>
      <p className="mb-6 text-sm sm:text-base">Ghanaian cuisine is rich with history, flavor, and culture. From jollof rice to kelewele, each dish tells a story.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["Flavorful & Spicy", "Locally Sourced", "Culturally Rich"].map((title, idx) => (
          <div key={idx} className="p-4 shadow-md rounded-xl bg-white">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm mt-2">{
              idx === 0 ? "Every dish is a perfect blend of spices and ingredients." :
              idx === 1 ? "We use ingredients that are grown in Ghana and across Africa." :
              "Each meal is more than food - it's a piece of tradition."
            }</p>
          </div>
        ))}
      </div>
    </section>
  
    {/* Call to Action */}
    <section className="py-12 bg-red-50 text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to Cook?</h2>
      <p className="mb-6 text-sm sm:text-base">Sign up and start exploring your favorite Ghanaian meals today.</p>
      <Link to="/signup" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
        Join Us
      </Link>
    </section>
  
    {/* Category Section */}
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">🍛 Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        {[
          "Soups", "Rice Dishes", "Snacks", "Street Food",
          "Swallows", "Stews & Sauces", "Breakfast", "Drinks"
        ].map((category, i) => (
          <div key={i} className="bg-red-50 p-4 rounded-xl hover:shadow-md transition">
            <span className="text-lg sm:text-xl font-semibold text-red-700">{category}</span>
          </div>
        ))}
      </div>
    </section>
  
    {/* Trending Recipes */}
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-600">🔥 Trending Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[{
          src: Jollof, title: "Jollof Rice", desc: "A classic West African rice dish with spicy tomato sauce."
        }, {
          src: Waakye, title: "Waakye", desc: "Rice and beans cooked together with millet leaves, served with sides."
        }, {
          src: Fufu, title: "Fufu And Light Soup", desc: "A hearty traditional dish made with pounded cassava and plantain, served in a spicy tomato-based soup."
        }].map((recipe, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={recipe.src} alt={recipe.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{recipe.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
  
  )
}

export default Landing