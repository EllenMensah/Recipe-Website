// pages/user/Profile.jsx
import React, { useState, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileTabs from '../../components/ProfileTabs';
import RecipeGrid from '../../components/RecipeGrid';

// Import your services if needed
// import { fetchUserProfile, fetchUserRecipes } from '../../services/auth';

function FoodLoverProfile() {
  const [activeTab, setActiveTab] = useState('favorite');
  const [profileData, setProfileData] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for demonstration
    // In a real app, you would fetch this from your API
    const fetchData = async () => {
      try {
        // Simulate API call
        // const profileData = await fetchUserProfile();
        // const recipesData = await fetchUserRecipes(activeTab);

        // Mock data
        setProfileData({
          name: 'Sarah Johnson',
          bio: 'Food enthusiast and home cook. I love trying new recipes and sharing my cooking adventures!',
          location: 'San Francisco, CA',
          memberSince: 'January 2023',
          profileImage: '/assets/profile.jpg'
        });

        setRecipes([
          {
            id: 1,
            title: 'Creamy Garlic Parmesan Pasta',
            image: '/assets/pasta.jpg',
            description: 'A rich and creamy pasta dish with garlic and parmesan cheese that\'s ready in just 20 minutes.',
            time: '20 mins',
            difficulty: 'Easy',
            chef: 'Chef Maria',
            tags: ['Pasta', 'Quick', 'Vegetarian'],
            isFavorite: true
          },
          {
            id: 2,
            title: 'Homemade Margherita Pizza',
            image: '/assets/pizza.jpg',
            description: 'A simple yet delicious pizza with fresh tomatoes, mozzarella, and basil on a homemade crust.',
            time: '45 mins',
            difficulty: 'Medium',
            chef: 'Chef Marco',
            tags: ['Italian', 'Pizza', 'Vegetarian'],
            isFavorite: true
          },
          {
            id: 3,
            title: 'Chocolate Lava Cake',
            image: '/assets/cake.jpg',
            description: 'Decadent individual chocolate cakes with a molten chocolate center, served warm.',
            time: '30 mins',
            difficulty: 'Medium',
            chef: 'Chef Amelia',
            tags: ['Dessert', 'Chocolate', 'Baking'],
            isFavorite: true
          }
        ]);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  if (loading) return <div className="p-6">Loading profile...</div>;
  if (!profileData) return <div className="p-6">Profile not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#FEF2F2]">
      <ProfileHeader profile={profileData} />
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <h2 className="text-xl font-bold mb-4">
        Your {activeTab === 'favorite' ? 'Favorite' : 'Downloaded'} Recipes
      </h2>
      <RecipeGrid recipes={recipes} />
    </div>
  );
}

export default FoodLoverProfile;