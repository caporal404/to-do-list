/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // Liste des tâches

  // Ajouter une nouvelle tâche
  const add = text => {
    if (text.trim() == "") return;
    setTasks([
      ...tasks,
      { 
        id: Date.now(), // l'id represente la date d'aujourd'hui en millisecondes
        value: text, 
        isCompleted: false
      }
    ]);
  };

  // Compléter une tâche
  const toggle = id => {
    setTasks(tasks => tasks.map((task => task.id === id ? { ...task, isCompleted : !(task.isCompleted) } : task)));
  };
  
  // Supprimer une tâche
  const remove = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      add,
      toggle,
      remove,
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider