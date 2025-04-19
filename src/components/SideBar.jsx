import React from 'react';
import K from '../constants';
import { Link, NavLink } from 'react-router';
import { LogOutIcon } from 'lucide-react';
import Fufu2 from '../assets/images/fufu2.jpg'





const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 gap-y-6 bg-white shadow h-screen px-2 py-4 fixed left-0 top-0">
      <span>
        <img src={Fufu2} alt="Fufu Dish" className="w-50 h-auto drop-shadow-md" />
      </span>
      <div className="flex flex-col gap-y-6">
        {K.NAVLINKS.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:bg-[#FEF2F2] hover:text-black px-3 py-2 w-full rounded-md flex items-center gap-x-2 ${
                  isActive ? "bg-[#FEF2F2] text-black font-bold shadow-md" : ""
                }`
              }
              title={link.name}
              end
            >
              <link.icon className="text-[#E7000B]" />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div>
      <Link
        className="flex gap-2 mt-auto hover:bg-white hover:text-black px-3 py-2 w-full rounded-md items-center"
        to="/"
      >
        <LogOutIcon className="text-[#2563eb]" />
        <button className="mt-auto">Logout</button>
      </Link>
    </div>
  );
};

export default Sidebar;
