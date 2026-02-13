/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useReducer } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import taskReducer from '../reducers/taskReducer'

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const { savedData, save } = useLocalStorage('tasks', []);

  const [tasks, dispatch] = useReducer(taskReducer, savedData); // Task List
  const [editedTask, setEditedTask] = useState(undefined);
  // const [filteredTasks, setFilteredTasks] = useState(tasks);

  // Task reducer
  
  
  // Save tasks
  useEffect(() => save(tasks), [tasks])
  
  // Initialy display all tasks
  // useEffect(() => setFilteredTasks(tasks), [tasks])


  // // Display only active (non-completed) task
  // const showActive = () => {
  //   setFilteredTasks(tasks.filter(task => !task.isCompleted ))
  // }
  
  // // Display only completed task
  // const showCompleted = () => {
  //   setFilteredTasks(tasks.filter(task => task.isCompleted ))
  // }

  return (
    <TaskContext.Provider value={{
      tasks,
      dispatch,
      editedTask,
      setEditedTask,
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider