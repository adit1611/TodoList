import {createContext, useContext} from "react"

export const TaskContext = createContext({
    tasks: [
        {
            id: 1,
            todo: " Todo msg",
            done: false,
        }
    ],
    addTask: (work) => {},
    updateTask: (id, work) => {},
    deleteTask: (id) => {},
    toggleDone: (id) => {}
})


export const useTask = () => {
    return useContext(TaskContext)
}

export const TodoProvider = TaskContext.Provider;