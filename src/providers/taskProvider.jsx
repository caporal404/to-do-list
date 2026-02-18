/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useReducer, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import taskReducer from '../reducers/taskReducer'

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const { savedData, save } = useLocalStorage('tasks', []);

  const [tasks, dispatch] = useReducer(taskReducer, savedData); // Task List
  const [editedTask, setEditedTask] = useState(undefined);
  const [filter, setFilter] = useState('ALL'); // ALL | ACTIVE | COMPLETED
  
  // Filtered tasks according to the current filter
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'ALL': 
        return tasks
      case 'ACTIVE': 
        return tasks.filter(task => !task.isCompleted)
      case 'COMPLETED': 
        return tasks.filter(task => task.isCompleted)
      default:
        console.error(`Unknown filter type: ${filter}`);
    }
  }, [tasks, filter]);
  
  
  // Save tasks
  useEffect(() => save(tasks), [tasks])

  return (
    <TaskContext.Provider value={{
      tasks,
      dispatch,
      editedTask,
      setEditedTask,
      filteredTasks,
      filter,
      setFilter
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider