import React from 'react';
import SideBar from '../components/Sidebar';
import { Outlet } from 'react-router';
import DashNav from '../components/DashNav';


const DashboardLayout = () => {
  return (
    <div className="flex font-play-au ">
      <SideBar />
      <div className="ml-60  flex flex-col w-full">
        <DashNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
