import React from 'react';
import { IoMdHome, IoMdSettings, IoMdPerson, IoMdLogOut } from 'react-icons/io';

const Slidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed top-28 left-0 h-full bg-gray-800 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-[20%]`}>
            {/* Close Button */}
            <button onClick={toggleSidebar} className="p-2 text-white text-2xl">
                ✖️ Close
            </button>
            
            {/* Sidebar Menu */}
            <nav className="mt-5">
                <ul className="flex flex-col space-y-4">
                    <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
                        <IoMdHome className="inline-block mr-3" /> Home
                    </li>
                    <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
                        <IoMdPerson className="inline-block mr-3" /> Profile
                    </li>
                    <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
                        <IoMdSettings className="inline-block mr-3" /> Settings
                    </li>
                    <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
                        <IoMdLogOut className="inline-block mr-3" /> Logout
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Slidebar;
