// components/profile/ProfileHeader.jsx
import React from 'react';


function ProfileHeader({ profile }) {
  return (
    <div className="flex items-center gap-6 mb-8">
      <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
        <img 
          src={profile.profileImage || "/assets/profile-placeholder.jpg"} 
          alt={profile.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm">
            Edit Profile
          </button>
        </div>
        <p className="text-gray-700 my-1">{profile.bio}</p>
        <div className="flex gap-4 text-sm text-gray-500 mt-2">
          <span>{profile.location}</span>
          <span>Member since {profile.memberSince}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;