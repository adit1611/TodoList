import React, { memo } from 'react';
import logoImage from './assets/Icons.png';
import { IoMenu } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiMoonClearLine, RiSearch2Line } from "react-icons/ri";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";
import { useTheme } from './Theme';

const Navbar = memo(({ toggleLayout, isList, toggleSlidebar }) => { 
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar flex justify-between items-center w-full h-[56px] px-4 md:px-10 lg:px-20 bg-white dark:bg-gray-800 shadow-md">
            {/* Left section */}
            <div className="left flex items-center w-1/2 space-x-3 md:space-x-5">
                <IoMenu 
                    className="text-3xl md:text-4xl lg:text-5xl cursor-pointer"
                    onClick={toggleSlidebar} 
                />
                <img src={logoImage} alt="logoimage" className="h-8 md:h-10 lg:h-12" />
            </div>

            {/* Right section */}
            <div className="right flex items-center justify-end w-1/2 space-x-3 md:space-x-6 lg:space-x-8">
                {/* Search Button */}
                <button className="relative p-1 md:p-2">
                    <RiSearch2Line className="text-xl md:text-2xl lg:text-3xl" />
                </button>

                {/* Layout Toggle Button */}
                <button onClick={toggleLayout} className="relative p-1 md:p-2">
                    {isList ? (
                        <HiOutlineViewGrid className="text-xl md:text-2xl lg:text-3xl" />
                    ) : (
                        <HiListBullet className="text-xl md:text-2xl lg:text-3xl" />
                    )}
                </button>

                {/* Theme Toggle Button */}
                <button onClick={toggleTheme} className="relative p-1 md:p-2">
                    {theme === 'light' ? (
                        <RiMoonClearLine className="text-black text-xl md:text-2xl lg:text-3xl" />
                    ) : (
                        <MdOutlineWbSunny className="text-yellow-400 text-xl md:text-2xl lg:text-3xl" />
                    )}
                </button>
            </div>
        </nav>
    );
});

export default Navbar;
