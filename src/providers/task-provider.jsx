/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // Liste des tâches
  const [editedTask, setEditedTask] = useState(undefined);

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

  // Modification d'une tache
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