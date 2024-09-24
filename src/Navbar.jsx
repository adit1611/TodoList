import React from 'react';
import logoImage from '../assets/Icons.png';
import { IoMenu } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiMoonClearLine , RiSearch2Line } from "react-icons/ri";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";
import { useTheme } from './Theme'; 
const Navbar = ({ toggleLayout, isList }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="navbar flex justify-between items-center w-screen h-[10vh]">
            <div className="left flex items-center w-1/2 space-x-1">
                <IoMenu className="text-6xl mx-20 " />
                <img src={logoImage} alt='logoimage' className='h-14' />
            </div>
            <div className="right flex items-center justify-end w-1/2 space-x-5 mr-10">
            <button className='Search relative top-3 p-2'>
            <RiSearch2Line  className='text-4xl font-extrabold '/>
            </button>
             <button
          onClick={toggleLayout}
          className="relative top-3 p-2 rounded"
        >
          {isList ? <HiOutlineViewGrid className='text-4xl'/> : <HiListBullet  className='text-4xl'/>}
        </button>
            <button
            onClick={toggleTheme}
            className="relative top-3 p-2"
          >
            {theme === 'light' ? <RiMoonClearLine className='text-black text-4xl font-extrabold'/> : <MdOutlineWbSunny className='text-4xl font-extrabold'/>}
            
          </button>
            </div>
        </div>
    );
};

export default Navbar;
