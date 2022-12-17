import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from 'react-icons/ri';

import Logo from '../../src/assets/logo1.png';
import {links} from '../assets/constants';

const NavLinks = ({handleClick}) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink key={link.name} to={link.to} onClick={() => handleClick && handleClick()} className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-yellow-500">
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  
  return (
  <>
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#20201f]">
      <img src={Logo} alt="logo" className="w-full h-44 object-contain" />
      <NavLinks />
    </div>
  </>
)
};

export default Sidebar;
