import React, { useState } from 'react';
import { useTask } from './TodoContext'; // Assuming you use TodoContext
import { FaRegBell } from "react-icons/fa6";
import { AiFillStar, AiOutlineStar, AiOutlinePlus } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { IoRepeatOutline, IoCalendarClearOutline } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";

function Divbar({toggleEvent }) {
    const [isImportant, setIsImportant] = useState(false);

    const toggleImportant = () => {
        // Toggle the `isImportant` state
        setIsImportant((prevState) => !prevState);

      };

    return (
        <div className="h-[100px] md:h-[900px] w-full md:w-[280px] bg-[#eef6ef] dark:bg-[#2c2c2c] mt-6 shadow-md">
            <div className="py-10 px-4 md:px-2 h-full ">
                {/* Todo Item */}
                <div className="flex gap-x-4 md:gap-x-10 items-center p-4 md:p-5 border-t-2 border-[#2c2c2c] dark:border-[#eef6ef] text-2xl">
                    <input
                        type="checkbox"
                        className="cursor-pointer accent-green-500 w-5 h-5 dark:text-white"
                    />
                    <p className="text-xl flex-grow">Hello</p>
                    <button
                        onClick={toggleImportant}
                        className="w-8 h-8 flex justify-center items-center"
                    >
                        {isImportant ? (
                            <AiFillStar className=" text-4xl" />
                        ) : (
                            <AiOutlineStar className="text-black dark:text-white text-4xl" />
                        )}
                    </button>
                </div>

                {/* Add Step */}
                <div className="flex gap-x-4 md:gap-x-6 items-center p-4 md:p-5 border-t-2 border-[#2c2c2c] dark:border-[#eef6ef] text-2xl">
                    <AiOutlinePlus className="text-4xl" />
                    <p className="text-xl">Add Step</p>
                </div>

                {/* Set Reminder */}
                <div className="flex gap-x-4 md:gap-x-6 items-center p-4 md:p-5 border-t-2 border-[#2c2c2c] dark:border-[#eef6ef] text-2xl">
                    <FaRegBell className="text-4xl" />
                    <p className="text-xl">Set Reminder</p>
                </div>

                {/* Add Due Date */}
                <div className="flex gap-x-4 md:gap-x-6 items-center p-4 md:p-5 border-t-2 border-[#2c2c2c] dark:border-[#eef6ef] text-2xl">
                    <IoCalendarClearOutline className="text-4xl" />
                    <p className="text-xl">Add Due Date</p>
                </div>

                {/* Repeat Task */}
                <div className="flex gap-x-4 md:gap-x-6 items-center p-4 md:p-5 border-t-2 border-b-2 border-[#2c2c2c] dark:border-[#eef6ef] text-2xl">
                    <IoRepeatOutline className="text-4xl" />
                    <p className="text-xl">Repeat</p>
                </div>

                {/* Notes Section */}
                <div className="py-10">
                    <textarea
                        className="w-full  md:h-80 p-4 bg-[#eef6ef] dark:bg-[#2c2c2c] border-none resize-none rounded-md"
                        placeholder="Add Notes"
                    />
                </div>
                
            </div>

            {/* Footer: Task Created Date & Delete Button */}
            <div className="h-20 w-full md:w-[280px] border-t-2  flex justify-between items-center px-4 md:px-2 -my-20">
                <IoCloseSharp className="text-3xl" />
                <p className="text-xl">Created Today</p>
                <RiDeleteBinFill className="text-3xl" />
            </div>
        </div>
    );
}

export default Divbar;