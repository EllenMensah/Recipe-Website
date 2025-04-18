import React, { Profiler } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import RootsLayout from './layouts/RootsLayout'
import Landing from './pages/user/Landing'
import SingleRecipe from './pages/user/SingleRecipe'
import AllRecipe from './pages/user/AllRecipe'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'


import OverView from './pages/dashboard/OverView';
import MyRecipes from './pages/dashboard/MyRecipes';
import AddRecipe from './pages/dashboard/AddRecipe';
import UpdateRecipe from './pages/dashboard/UpdateRecipe';
import Profile from './pages/dashboard/Profile';
import DashboardLayout from './layouts/DashboardLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootsLayout />}>
            <Route index={true} element={<Landing />} />
            <Route path='singlerecipe' element={<SingleRecipe />} />
            <Route path='allrecipes' element={<AllRecipe />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index={true} element={<OverView />} />
            <Route path='addrecipe' element={<AddRecipe />} />
            <Route path='myrecipes' element={<MyRecipes />} />
            <Route path='updaterecipe' element={<UpdateRecipe />} />
            <Route path='profile' element={<Profile />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
