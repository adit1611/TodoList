import React, { useState } from 'react';
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { IoRepeatOutline, IoCalendarClearOutline } from "react-icons/io5";
const Content = ({ isList, toggleExpand, isExpanded }) => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // Sample items
  const [isOpen, setOpen] = useState(false); // Dropdown open/close state

  // Toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='w-screen'>
    <div className="p-4 relative m-20">
      {/* Dropdown Menu */}
      <button
        onClick={toggleDropdown}
        className="mb-4 px-4 py-2  text-black dark:text-green-500 text-xl font-semibold rounded  flex justify-center items-center"
      >
        <p>To Do</p> <RiArrowDropDownFill className='text-3xl' />
      </button>
        <hr className='w-full h-0.5 border-0 bg-black dark:bg-white '/>
      {/* Dropdown content for expanding/collapsing */}
      {isOpen && (
        <div 
  onClick={toggleExpand} 
  className="w-full h-[22vh] bg-gradient-to-b from-[#fbfdfc] to-[#D4EFD7] dark:bg-gradient-to-b dark:from-[#2f3630] dark:to-[#1f261b] my-1 p-4 space-y-16"
>
          <div className='text-2xl text-black dark:text-white '>To Do</div>
         

          <div className='flex text-3xl font-extrabold justify-between'>
          <div className='flex space-x-5'>
          <FaRegBell />
          <IoRepeatOutline />
          <IoCalendarClearOutline/>
          </div> 
          <div className='-my-5'><button className='text-xl font-semibold bg-green-500 rounded p-2 w-40 h-14 '>+ Add Todo</button> </div>    
          </div>
          
          </div>
      )}

      {/* Expandable/collapsible content */}
      
      <div className={`grid ${isList ? 'grid-cols-1 gap-4' : 'grid-cols-3 gap-4'} my-10`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-gray-300 rounded shadow-md flex justify-center items-center"
        >
          {item}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Content;
