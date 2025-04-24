import React from 'react'
import { Link } from 'react-router';
import { FacebookIcon, Instagram, Star, Twitter, } from 'lucide-react';



const ChefProfile = () => {
  const chef = {
    name: "Chef Akos",
    bio: "Lover of traditional Ghanaian dishes and modern twists. I enjoy sharing my kitchen experiments.",
    email: "chefakos@example.com",
    phone: "+233 24 000 0000",
    profileImage: "/assets/images/chef.jpg", // Replace with actual path
    rating: 4.5,
    socialLinks: {
      facebook: "https://facebook.com/chefakos",
      instagram: "https://instagram.com/chefakos",
      twitter: "https://twitter.com/chefakos",
    },
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} />
        ))}
        {halfStar && <Star className="opacity-50" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-xl p-6 md:flex gap-6">
        <img
          src={chef.profileImage}
          alt="Chef Profile"
          className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-red-600">{chef.name}</h2>
          <p className="text-gray-700 mt-2">{chef.bio}</p>

          <div className="mt-3">{renderStars(chef.rating)}</div>

          <div className="mt-4 text-sm text-gray-600 space-y-1">
            <p><strong>Email:</strong> {chef.email}</p>
            <p><strong>Phone:</strong> {chef.phone}</p>
          </div>

          <Link
            to="/edit-profile"
            className="inline-block mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Edit Profile
          </Link>

          <div className="flex items-center gap-4 mt-6 text-xl text-gray-600">
            <a href={FacebookIcon} target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="hover:text-red-600" />
            </a>
            <a href={Instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-red-600" />
            </a>
            <a href={Twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;
