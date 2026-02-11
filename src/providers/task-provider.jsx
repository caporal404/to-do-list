/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const { savedData, save } = useLocalStorage('tasks', []);

  const [tasks, setTasks] = useState(savedData); // Task List
  const [editedTask, setEditedTask] = useState(undefined);
  
  
  // Save tasks
  useEffect(() => save(tasks), [tasks])

  // Add new task
  const add = text => {
    setTasks([
      ...tasks,
      { 
        id: Date.now(), // the Id is the actual date in milliseconds
        value: text, 
        isCompleted: false
      }
    ]);
  };

  // Complete / or not a task
  const toggle = id => {
    setTasks(tasks => tasks.map((task => task.id === id ? { ...task, isCompleted : !(task.isCompleted) } : task)));
  };
  
  // Delete a task
  const remove = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  // Edit a task
  const edit = (id, newValue) => {
    setTasks(tasks => tasks.map((task => task.id === id ? { ...task, value : newValue } : task)));
    setEditedTask(undefined)
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      editedTask,
      setEditedTask,
      add,
      toggle,
      edit,
      remove,
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider