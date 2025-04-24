// components/profile/ProfileTabs.jsx
import React from 'react';


function ProfileTabs({ activeTab, setActiveTab }) {
    return (
        <div className="border-b border-gray-200 mb-6">
            <div className="flex">
                <button
                    className={`px-4 py-2 text-center ${activeTab === 'downloaded'
                        ? 'border-b-2 border-[#E7000B] text-[#E7000B]'
                        : 'text-gray-500'
                        }`}
                    onClick={() => setActiveTab('downloaded')}
                >
                    Downloaded Recipes
                </button>
                <button
                    className={`px-4 py-2 text-center ${activeTab === 'favorite'
                        ? 'border-b-2 border-[#E7000B] text-[#E7000B]'
                        : 'text-gray-500'
                        }`}
                    onClick={() => setActiveTab('favorite')}
                >
                    Favorite Recipes
                </button>
            </div>
        </div>
    );
}

export default ProfileTabs;