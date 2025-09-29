import { useEffect, useState } from 'react';
import { useTasks } from '../../hooks/task-hook'
import './TaskForm.css'

const TaskForm = () => {
  const { editedTask, add, edit } = useTasks()
  const [task, setTask] = useState(""); // Tâche en cours d'écriture

  
  useEffect(() => editedTask && setTask(editedTask.value), [editedTask]) // editedTask : { id, value, isCompleted }

  const handleSubmit = e => {
    e.preventDefault();

    // On créé une tache
    if (!editedTask) add(task)
    else // On modifit une tache
      edit(editedTask.id, task)
    
    setTask("") // Réinitialiser le champ
  }

  return (
    <form className="task-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button onClick={handleSubmit}>+</button>
    </form>
  )
}

export default TaskForm