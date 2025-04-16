// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router';
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-50 mt-10 px-6 py-8 text-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Site Info & Mission */}
        <div>
          <h2 className="text-xl font-bold text-red-600 mb-2">Ghana Eats</h2>
          <p>Sharing Ghanaian culture and love through delicious recipes.</p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/recipes" className="hover:text-red-500">Explore Recipes</Link></li>
            <li><Link to="/add-recipe" className="hover:text-red-500">Add Recipe</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4 text-2xl text-red-600">
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t pt-4">
        © 2025 Ghana Eats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
