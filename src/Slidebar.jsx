import { React, useState, useEffect } from 'react';
import Totacan from './assets/Blue-throat totacan.jpg';
import { PiNotebookBold } from "react-icons/pi";
import { AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { IoCalendarClearOutline, IoMapOutline } from "react-icons/io5";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Slidebar({ uncompletedTasks, completedTodos }) {
    const [isLightMode, setIsLightMode] = useState(true);

    useEffect(() => {
        document.body.style.backgroundColor = isLightMode ? '#ffffff' : '#1a1a1a';
        document.body.style.color = isLightMode ? '#000000' : '#ffffff';
    }, [isLightMode]);

    const uniqueUncompletedIds = new Set(uncompletedTasks.map(todo => todo.id));
    const uniqueCompletedIds = new Set(completedTodos.map(todo => todo.id));
    const Total = (uniqueUncompletedIds.size + uniqueCompletedIds.size);
    const percent = Total - uniqueUncompletedIds.size;

    return (
        <div className="h-[80vh] md:h-[90vh] w-full md:w-[280px] bg-[#eef6ef] dark:bg-[#2c2c2c] rounded-lg shadow-lg">
            {/* Profile Section */}
            <div className="flex flex-col items-center justify-center mt-6 md:mt-12">
                <img src={Totacan} alt="profile" className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-2" />
                <h4 className="text-base md:text-xl font-semibold">Slidebar</h4>
            </div>

            {/* Task List Section */}
            <div className="w-full h-full px-4 md:px-2 py-6 md:py-10">
                <div className="bg-white dark:bg-[#232323] rounded-lg p-4 mb-6">
                    {/* Task 1 */}
                    <div className="flex items-center gap-3 md:gap-4 py-2 hover:bg-[#dbe7dc] dark:hover:bg-[#222d23] rounded-md cursor-pointer">
                        <PiNotebookBold className="text-xl md:text-2xl" />
                        <p className="text-base md:text-lg">All Task</p>
                    </div>
                    {/* Task 2 */}
                    <div className="flex items-center gap-3 md:gap-4 py-2 hover:bg-[#dbe7dc] dark:hover:bg-[#222d23] rounded-md cursor-pointer">
                        <IoCalendarClearOutline className="text-xl md:text-2xl" />
                        <p className="text-base md:text-lg">Today</p>
                    </div>
                    {/* Task 3 */}
                    <div className="flex items-center gap-3 md:gap-4 py-2 hover:bg-[#dbe7dc] dark:hover:bg-[#222d23] rounded-md cursor-pointer">
                        <AiOutlineStar className="text-xl md:text-2xl" />
                        <p className="text-base md:text-lg">Important</p>
                    </div>
                    {/* Task 4 */}
                    <div className="flex items-center gap-3 md:gap-4 py-2 hover:bg-[#dbe7dc] dark:hover:bg-[#222d23] rounded-md cursor-pointer">
                        <IoMapOutline className="text-xl md:text-2xl" />
                        <p className="text-base md:text-lg">Planned</p>
                    </div>
                    {/* Task 5 */}
                    <div className="flex items-center gap-3 md:gap-4 py-2 hover:bg-[#dbe7dc] dark:hover:bg-[#222d23] rounded-md cursor-pointer">
                        <MdOutlineAssignmentInd className="text-xl md:text-2xl" />
                        <p className="text-base md:text-lg">Assigned to me</p>
                    </div>
                </div>

                {/* Add List Section */}
                <div className="bg-white dark:bg-[#232323] rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-3 md:gap-4">
                        <AiOutlinePlus className="text-3xl md:text-4xl" />
                        <p className="text-lg md:text-2xl">Add List</p>
                    </div>
                </div>

                {/* Progress Section */}
                <div className="bg-white dark:bg-[#232323] rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-lg md:text-xl">Today Task</p>
                            <p className="text-3xl md:text-4xl font-semibold">{uniqueUncompletedIds.size + uniqueCompletedIds.size}</p>
                        </div>
                        <FaCircleInfo className="text-xl md:text-2xl" />
                    </div>
                    <hr className="h-0.5 w-full bg-black dark:bg-gray-600 border-none mb-4" />
                    <div className="flex flex-col items-center">
                        <div style={{ width: 120, height: 120 }}>
                            <CircularProgressbar
                                strokeWidth={12}
                                maxValue={Total}
                                value={percent}
                                styles={{
                                    path: {
                                        stroke: isLightMode ? 'rgb(63,145,66)' : 'rgb(63,145,66)',
                                    },
                                    trail: {
                                        stroke: isLightMode ? 'rgb(20,46,21)' : 'rgb(160,237,163)',
                                    },
                                    text: {
                                        fill: '#142e15',
                                        fontSize: '16px',
                                    },
                                }}
                            />
                        </div>
                        <div className="flex justify-between w-full mt-4">
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 bg-[#3f9142] rounded-full"></div>
                                <p className="text-sm">Pending</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 bg-[#142e15] dark:bg-[#a0eda3] rounded-full"></div>
                                <p className="text-sm">Done</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slidebar;
