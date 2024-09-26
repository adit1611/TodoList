import React, { memo } from 'react';
import logoImage from './assets/Icons.png';
import { IoMenu } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiMoonClearLine, RiSearch2Line } from "react-icons/ri";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";
import { useTheme } from './Theme';

const Navbar = memo(({ toggleLayout, isList, toggleSlidebar }) => { // Ensure toggleSidebar is passed as a prop
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="navbar flex justify-between items-center w-full h-[56px] px-4 md:px-10 lg:px-20">
            <div className="left flex items-center w-1/2 space-x-2 md:space-x-3">
            <IoMenu 
            className="text-4xl md:text-6xl cursor-pointer" 
            onClick={toggleSlidebar} // Toggle sidebar on icon click
        />
                <img src={logoImage} alt='logoimage' className='h-10 md:h-14' />
            </div>
            <div className="right flex items-center justify-end w-1/2 space-x-2 md:space-x-5 mr-2 md:mr-10">
                <button className='Search relative top-0 p-1 md:p-2'>
                    <RiSearch2Line className='text-2xl md:text-4xl font-extrabold' />
                </button>
                <button onClick={toggleLayout} className="relative top-0 p-1 md:p-2">
                    {isList ? <HiOutlineViewGrid className='text-2xl md:text-4xl font-extrabold' /> : <HiListBullet className='text-2xl md:text-4xl font-extrabold' />}
                </button>
                <button onClick={toggleTheme} className="relative top-0 p-1 md:p-2">
                    {theme === 'light' ? <RiMoonClearLine className='text-black text-2xl md:text-4xl font-extrabold' /> : <MdOutlineWbSunny className='text-2xl md:text-4xl font-extrabold' />}
                </button>
            </div>
        </div>
    );
});

export default Navbar;