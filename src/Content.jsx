import React, { memo, useState, useEffect } from 'react';
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { IoRepeatOutline, IoCalendarClearOutline } from "react-icons/io5";
import Inputfield from './Inputfield.jsx';
import TodoItem from './Todoadd.jsx';
import { TodoProvider } from './TodoContext.jsx';
import Slidebar from './Slidebar.jsx';
import Divbar from './divcount.jsx';

const Content = memo(({ showTodo, isList, isSlidebarOpen }) => {
    
    const [showDiv, setShowDiv] = useState(false);
    const [todos, setTodos] = useState([]);
    const [uncompletedTasks, setUncompletedTasks] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [isEvent, setEvent] = useState(false);
    const [isOpen, setOpen] = useState(false); // Controls dropdown visibility

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setOpen(!isOpen); // Toggle the dropdown open/close state
    };


    console.log("isOpen:", isOpen);
    console.log("showTodo:", showTodo);
    
    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };

    const toggleEvent = () => {
        setEvent((prev) => !prev);
    };

    const addTodo = (todo) => {
        setTodos(prev => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Separate tasks based on completion status
    useEffect(() => {
        const uncompleted = todos.filter(todo => !todo.completed);
        const completed = todos.filter(todo => todo.completed);
        setUncompletedTasks(uncompleted);
        setCompletedTodos(completed);
    }, [todos]);

    // Load todos from localStorage
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos && savedTodos.length > 0) {
            setTodos(savedTodos);
        }
    }, []);

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="w-[1500px]  flex flex-col lg:flex-row">
            <div className={`m-4 md:m-8 lg:m-16 w-full lg:w-[280px] transition-transform transform ${isSlidebarOpen ? 'visible' : 'hidden'}`}>
                <Slidebar uncompletedTasks={uncompletedTasks} completedTodos={completedTodos} toggleEvent={toggleEvent} />
            </div>
            
            {/* Main content area */}
            <div className={`w-[110vw] flex-grow relative m-4 md:m-8 lg:m-20 transition-all duration-300`}>
                
                {/* Dropdown toggle button */}
                <button 
                    onClick={toggleDropdown} 
                    className="mb-4 px-4 py-2 text-black dark:text-green-500 text-xl font-semibold rounded flex justify-center items-center">
                    <p>To Do</p>
                    <RiArrowDropDownFill className={`text-3xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <hr className="w-full h-0.5 border-0 bg-black dark:bg-white" />
                
                {/* Dropdown content - only renders if both isOpen and showTodo are true */}
                {isOpen && (
                    <div className="w-full h-[22vh] bg-gradient-to-b from-[#fbfdfc] to-[#D4EFD7] dark:bg-gradient-to-b dark:from-[#2f3630] dark:to-[#1f261b] my-1 p-4 space-y-4 md:space-y-16">
                        
                        {/* Section for adding a task */}
                        <div className="text-2xl text-black dark:text-white">Add A Task</div>
                        
                        {/* Task control icons and "Add Task" button */}
                        <div className="flex text-3xl font-extrabold justify-between">
                            <div className="flex space-x-5">
                                <FaRegBell />
                                <IoRepeatOutline />
                                <IoCalendarClearOutline />
                            </div>
                            <div>
                                <button onClick={toggleDiv} className="text-xl font-semibold bg-green-500 rounded p-2 w-40 h-14">Add Task</button>
                            </div>
                        </div>

                        {/* Task input field (shown when "Add Task" button is clicked) */}
                       
                            <div className="h-fit dark:text-white">
                                <div className="space-y-1 text-black dark:text-white">
                                    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete }}>
                                    {showDiv && (
                                        <div className="w-full h-32">
                                            <Inputfield addTodo={addTodo} />
                                        </div>
                                    )}
                                            <>
                                              {/* Uncompleted tasks */}
                                              <div className={`${isList ? 'block' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}`}>
                                                {uncompletedTasks.map(todo => (
                                                  <div
                                                    key={todo.id}
                                                    className={`relative w-full h-20 p-4 text-xl text-black dark:text-white 
                                                    ${isList ? 'border-t-2 border-b-2 border-[#2f3630]' : 'border-2 border-[#2f3630]'}`}
                                                  >
                                                    <TodoItem 
                                                      todo={todo} 
                                                      deleteTodo={deleteTodo} 
                                                      className={`${isList ? 'block' : 'col-span-1'}`} 
                                                    />
                                                  </div>
                                                ))}
                                              </div>
                                            </>
                                        
                                    </TodoProvider>                         
                                </div>
                            </div>
                      

                        {/* Completed tasks */}
                        {isOpen && (
                            <div className="h-[20vh] text-black dark:text-white">
                                <h2 className="font-bold">Completed Tasks</h2>
                                {completedTodos.map(todo => (
                                    <div
                                        key={todo.id}
                                        className="w-full h-20 relative top-12 p-4 text-xl text-black dark:text-white border-t-2 border-b-2 border-[#2f3630]"
                                    >
                                        <TodoItem
                                            todo={todo}
                                            deleteTodo={deleteTodo}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Divbar component */}
            <div className={`m-4 md:m-8 lg:m-16 w-[800px] ${isEvent ? 'visible' : 'hidden'}`}>
                <Divbar />
            </div>
        </div>
    );
});

export default Content;
