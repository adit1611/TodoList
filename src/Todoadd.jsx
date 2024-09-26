import React, { useState } from 'react';
import { useTask } from './TodoContext';
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Import star icons

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isImportant, setIsImportant] = useState(todo.isImportant || false); // Track importance
  const { updateTodo, deleteTodo, toggleComplete } = useTask();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const toggleImportant = () => {
    setIsImportant(!isImportant); // Toggle importance
    updateTodo(todo.id, { ...todo, isImportant: !isImportant }); // Update in the context
  };

  return (
    <div className="flex items-center gap-x-5 p-4 text-black dark:text-white transition duration-200  h-20">
      {/* Checkbox to toggle completion */}
      <input
        type="checkbox"
        className="cursor-pointer accent-green-500 w-5 h-5 dark:text-white" // Custom checkbox styling
        checked={todo.completed}
        onChange={toggleCompleted}
        aria-label={`Toggle completion for ${todo.todo}`} // Accessibility label
      />

      {/* Todo text input, with conditional styling based on whether it's editable or completed */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg transition duration-200 ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white"} ${
          isImportant ? "font-bold" : "" // Highlight important todos with bold text
        }`} 
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        aria-label={`Todo item: ${todo.todo}`} // Accessibility label
      />

      {/* Star button to mark as important */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center shrink-0"
        onClick={toggleImportant}
        aria-label={isImportant ? 'Mark as not important' : 'Mark as important'} // Accessibility label
      >
        {isImportant ? <AiFillStar className="text-black dark:text-white text-4xl" /> : <AiOutlineStar  className="text-black dark:text-white text-4xl"/>}
      </button>

      {/* Edit / Save button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        aria-label={isTodoEditable ? 'Save Todo' : 'Edit Todo'} // Accessibility label
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 shrink-0"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete Todo" // Accessibility label
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
