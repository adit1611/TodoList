import React, { memo, useState, useEffect } from 'react'; 
import { RiArrowDropDownFill } from "react-icons/ri"; 
import { FaRegBell } from "react-icons/fa6"; 
import { IoRepeatOutline, IoCalendarClearOutline } from "react-icons/io5"; 
import Inputfield from './Inputfield.jsx'; 
import TodoItem from './Todoadd.jsx'; 
import { TodoProvider } from './TodoContext.jsx'; 

const Content = memo(({ showTodo }) => { // Removed duplicate isList prop
    const [isOpen, setOpen] = useState(false); 
    const [showDiv, setShowDiv] = useState(false); 
    const [todos, setTodos] = useState([]); 
    const [isList, setIsList] = useState(true); // State to toggle between list and block layout

    const toggleDropdown = () => {
        setOpen(!isOpen);
    };

    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };

    const toggleLayout = () => {
        setIsList(prevIsList => !prevIsList); // Toggle between list and block layout
    };

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos((prev) => 
            prev.map((prevTodo) => 
                prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
            )
        );
    };

    // Filter uncompleted and completed tasks
    const uncompletedTasks = todos.filter(todo => !todo.completed);
    const completedTasks = todos.filter(todo => todo.completed);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos && savedTodos.length > 0) {
            setTodos(savedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="w-screen">
            <div className="p-4 relative m-20">
                <button onClick={toggleDropdown} className="mb-4 px-4 py-2 text-black dark:text-green-500 text-xl font-semibold rounded flex justify-center items-center">
                    <p>To Do</p>
                    <RiArrowDropDownFill className="text-3xl" />
                </button>
                <hr className="w-full h-0.5 border-0 bg-black dark:bg-white" />
                
                {isOpen && showTodo && ( // Check if showTodo is true
                    <div className="w-full h-[22vh] bg-gradient-to-b from-[#fbfdfc] to-[#D4EFD7] dark:bg-gradient-to-b dark:from-[#2f3630] dark:to-[#1f261b] my-1 p-4 space-y-16">
                        <div className="text-2xl text-black dark:text-white">Add A Task</div>
                        <div className="flex text-3xl font-extrabold justify-between">
                            <div className="flex space-x-5">
                                <FaRegBell />
                                <IoRepeatOutline />
                                <IoCalendarClearOutline />
                            </div>
                            <div className="-my-5">
                                <button onClick={toggleDiv} className="text-xl font-semibold bg-green-500 rounded p-2 w-40 h-14">Add Task</button>
                            </div>
                        </div>

                        {showDiv && (
                            <div className='h-fit dark:text-white'>
                                <div className='space-y-10 text-black dark:text-white'>
                                    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
                                        <div className="w-full h-32 my-16">
                                            <Inputfield addTodo={addTodo} />
                                        </div>

                                        {/* Toggle button to switch between list and block layout */}
                                        <button onClick={toggleLayout} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
                                            {isList ? 'Switch to Grid' : 'Switch to List'}
                                        </button>
                                        
                                        {/* Display uncompleted tasks with toggle layout */}
                                        <div className={`my-4 ${isList ? 'block' : 'grid grid-cols-2 gap-4'}`}>
                                            {uncompletedTasks.map((todo) => (
                                                <div 
                                                    key={todo.id} 
                                                    className={`w-full h-20 my-10 p-4 text-xl text-black dark:text-white`} 
                                                >
                                                    <TodoItem 
                                                        todo={todo} 
                                                        deleteTodo={deleteTodo} 
                                                        className={`${isList ? 'block' : 'col-span-1'}`} // Conditionally apply class for layout
                                                    /> 
                                                </div>
                                            ))}
                                        </div>
                                    </TodoProvider>
                                </div>
                            </div>
                        )}

                        {/* Display completed tasks */}
                        {showTodo && ( // Check if showTodo is true before rendering completed tasks
                            <div className="completed-tasks mt-5">
                                {completedTasks.length > 0 && (
                                    <div className="h-[20vh] text-black dark:text-white">
                                        <h2 className="font-bold">Completed Tasks</h2>
                                        {completedTasks.map((todo) => (
                                            <div key={todo.id} className='w-full h-20 my-10 p-4 text-xl text-black dark:text-white'>
                                                <TodoItem todo={todo} deleteTodo={deleteTodo} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
});

export default Content;
