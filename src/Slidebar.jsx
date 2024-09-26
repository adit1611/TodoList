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
        <div className='h-[80vh] md:h-[952px] w-full md:w-[280px]'>
            <div className='flex flex-col items-center justify-center'>
                <img src={Totacan} alt='profile' className='w-24 h-24 rounded-full' />
                <h4 className='text-lg md:text-xl'>Slidebar</h4>
            </div>
            <div className='w-full h-full bg-[#eef6ef] dark:bg-[#2c2c2c] -mt-16 rounded-md'>
                <div className='py-8 md:py-28 px-4 w-full md:w-[275px]'>
                    <div className='h-72 bg-white dark:bg-[#232323] rounded-lg p-4 '>
                        {/* Task 1 */}
                        <div className='h-10 w-full flex gap-4 items-center text-lg md:text-xl mb-4 hover:bg-[#dbe7dc] dark:hover:bg-[#222d23]'>
                            <PiNotebookBold className='text-2xl' />
                            <p>All Task</p>
                        </div>
                        {/* Task 2 */}
                        <div className='h-10 w-full flex gap-4 items-center text-lg md:text-xl mb-4 hover:bg-[#dbe7dc] dark:hover:bg-[#222d23]'>
                            <IoCalendarClearOutline className='text-2xl' />
                            <p>Today</p>
                        </div>
                        {/* Task 3 */}
                        <div className='h-10 w-full flex gap-4 items-center text-lg md:text-xl mb-4 hover:bg-[#dbe7dc] dark:hover:bg-[#222d23]'>
                            <AiOutlineStar className='text-2xl' />
                            <p>Important</p>
                        </div>
                        {/* Task 4 */}
                        <div className='h-10 w-full flex gap-4 items-center text-lg md:text-xl mb-4 hover:bg-[#dbe7dc] dark:hover:bg-[#222d23]'>
                            <IoMapOutline className='text-2xl' />
                            <p>Planned</p>
                        </div>
                        <div className='h-10 w-full flex gap-4 items-center text-lg md:text-xl mb-4 hover:bg-[#dbe7dc] dark:hover:bg-[#222d23]'>
                            <MdOutlineAssignmentInd className='text-2xl' />
                            <p>Assigned to me</p>
                        </div>
                    </div>
                    <div className='py-8 -px-14 w-full'>
                        <div className='h-20 w-full bg-white dark:bg-[#232323] rounded-lg p-4'>
                            {/* Add List */}
                            <div className='flex gap-4 items-center mb-4'>
                                <AiOutlinePlus className='text-4xl' />
                                <p className='text-2xl'>Add List</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-10 -px-14 w-full'>
                        <div className='h-[360px] w-full bg-white dark:bg-[#232323] rounded-lg p-4'>
                            <div className='relative flex justify-between gap-x-20 mb-4'>
                                <div>
                                    <p className='text-lg md:text-xl'>Today Task</p>
                                    <p className='text-4xl font-semibold'>{uniqueUncompletedIds.size + uniqueCompletedIds.size}</p>
                                </div>
                                <div className="absolute top-0 right-0 p-4">
                                    <FaCircleInfo className='text-xl' />
                                </div>
                            </div>
                            <hr className='h-0.5 w-full -mx-4 bg-black border-none' />
                            <div className='h-fit mt-6'>
                                <div style={{ width: 180, height: 180 }}>
                                    <CircularProgressbar
                                        strokeWidth={15}
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
                                <div className='flex h-10 gap-10 my-5'>
                                    <div className='flex gap-2'>
                                        <div className='h-3 w-3 bg-[#3f9142] rounded-full '></div>
                                        <p className='gap-4 -my-1.5'>Pending</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='h-3 w-3 bg-[#142e15] dark:bg-[#a0eda3] rounded-full '></div>
                                        <p className='gap-4 -my-1.5'>Done</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slidebar;