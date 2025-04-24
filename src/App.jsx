import React, { Profiler, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import './App.css';
import RootsLayout from './layouts/RootsLayout';
import Landing from './pages/user/Landing';
import SingleRecipe from './pages/user/SingleRecipe';
import AllRecipe from './pages/user/AllRecipe';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

import OverView from './pages/dashboard/OverView';
import MyRecipes from './pages/dashboard/MyRecipes';
import AddRecipe from './pages/dashboard/AddRecipe';
import UpdateRecipe from './pages/dashboard/UpdateRecipe';
import Profile from './pages/dashboard/Profile';
import DashboardLayout from './layouts/DashboardLayout';
import FoodLoverProfile from './pages/user/FoodLoverProfile';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootsLayout />}>
          <Route index element={<Landing />} />
          <Route path='singlerecipe/:id' element={<SingleRecipe />} />
          <Route path='allrecipes' element={<AllRecipe />} />
          <Route path="foodlover/:userId" element={<FoodLoverProfile />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<OverView recipes={recipes} />} />
          <Route path='addrecipe' element={<AddRecipe onAddRecipe={handleAddRecipe} />} />
          <Route path='myrecipes' element={<MyRecipes />} />
          <Route path='updaterecipe/:id' element={<UpdateRecipe />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
