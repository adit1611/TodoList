import React, { useState } from 'react'
import { useTask } from './TodoContext';

function Inputfield() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTask()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex h-16 text-black  text-lg">
          <input
              type="text"
              placeholder="Write The Task"
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150  py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 text-lg bg-green-600 text-white shrink-0 w-32">
              Click To Add
          </button>
      </form>
  );
}

export default Inputfield;