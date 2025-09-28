/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // Liste des tâches
  const [current, setCurrent] = useState(""); // Tâche en cours d'écriture

  // Ajouter une nouvelle tâche
  const add = () => {
    if (current.trim() == "") return;
    setTasks([
      ...tasks,
      { 
        value: current, 
        isCompleted: false
      }
    ]);
    setCurrent(""); // Réinitialiser le champ
  };

  // Compléter une tâche
  const toggle = (index) => {
    setTasks(tasks => tasks[index].isCompleted = !tasks[index].isCompleted);
  };

  // Supprimer une tâche
  const remove = (index) => {
    setTasks(tasks => tasks.splice(index, 1));
  };

  return (
    <TaskContext.Provider value={{
      current,
      setCurrent,
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