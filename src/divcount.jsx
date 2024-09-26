import React, { useState } from 'react';
import { useTask } from './TodoContext'; // Assuming you use TodoContext
import { FaRegBell } from "react-icons/fa6";
import { AiFillStar, AiOutlineStar,AiOutlinePlus } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {  IoRepeatOutline,IoCalendarClearOutline } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";

function Divbar({showTodo}) {
    const [isImportant, setIsImportant] = useState()
    const toggleImportant = () => {
        // Toggle the `isImportant` state
        setIsImportant(prevState => !prevState);
        
        // Update the todo's importance in the context (or however you're managing state)
        updateTodo(todo.id, { ...todo, isImportant: !isImportant });
    };

    return (
        <div className='h-[952px] md:h-[952px] w-[600px] md:w-[280px] bg-[#eef6ef] dark:bg-[#2c2c2c] mt-6'>
            <div className='py-14 px-2 h-[940px] relative top-1.5 '>
                <div className='flex gap-x-10 p-5 border-t-2 border-[#2c2c2c]  dark:border-[#eef6ef] text-2xl'>
                    <input
                        type="checkbox"
                        className="cursor-pointer accent-green-500 w-5 h-5 dark:text-white"
                        
                    />
                    <p className='text-xl'>hello</p>
                    <button
                        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center shrink-0"
                        
                    >
                        {isImportant ? (
                            <AiFillStar className="text-black dark:text-white text-4xl" />
                        ) : (
                            <AiOutlineStar className="text-black dark:text-white text-4xl" />
                        )}
                    </button>
                </div>
                {/* Add more todo details or editing logic here */}
                <div className='flex gap-x-6 p-5 border-t-2 border-[#2c2c2c]  dark:border-[#eef6ef] text-2xl'>
                <AiOutlinePlus className='text-4xl' />
                    <p className='text-xl'>Add Step</p>
                    
                </div>
                <div className='flex gap-x-6 p-5 border-t-2 border-[#2c2c2c]  dark:border-[#eef6ef] text-2xl'>
                    <FaRegBell  className='text-4xl'/>
                    <p className='text-xl'>Set Reminder</p>
                    
                </div>
                <div className='flex gap-x-6 p-5 border-t-2  border-[#2c2c2c]  dark:border-[#eef6ef] text-2xl'>
                    <IoCalendarClearOutline className='text-4xl' />
                    <p className='text-xl'>Add Due Date</p>
                    
                </div>
                <div className='flex gap-x-6 p-5 border-t-2 border-b-2 border-[#2c2c2c]  dark:border-[#eef6ef] text-2xl'>
                <IoRepeatOutline className='text-4xl' />
                    <p className='text-xl '>Repeat</p>
                    
                </div>
                <div className='py-10 border-[#2c2c2c]  dark:border-[#eef6ef]'>
                        <textarea className='h-72 w-full p-5 bg-[#eef6ef] dark:bg-[#2c2c2c] border-none ' placeholder='Add Notes'/>
                </div>
                
            </div>
            <div className='h-20 w-[280px] -my-14 border-t-2 border-[#2c2c2c] dark:border-[#eef6ef]'>
            <div className='flex justify-between text-3xl p-1'>
              <IoCloseSharp />
              <p className='text-xl'>Created Today</p>
              <RiDeleteBinFill />
            </div>
        </div>
        </div>
    );
}

export default Divbar;
