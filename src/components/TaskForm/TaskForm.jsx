import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTasks } from '../../hooks/task-hook'
import './TaskForm.css'

const TaskForm = () => {
  const { editedTask, add, edit } = useTasks()
  const [task, setTask] = useState(""); // Tâche en cours d'écriture

  // La tache en cours d'ecriture est remplacée par
  // la tache a modifié si cette derniiere existe
  useEffect(() => editedTask && setTask(editedTask.value), [editedTask]) // editedTask : { id, value, isCompleted }

  // On focus sur le champ à l'affichage du composant
  const inputRef = useRef()
  useLayoutEffect(() => inputRef.current.focus())

  const handleSubmit = e => {
    e.preventDefault();

    // On créé une tache
    if (!editedTask) add(task)
    else // On modifit une tache
      edit(editedTask.id, task)

    setTask("") // Réinitialiser le champ
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche..."
        ref={inputRef}
      />
    </form>
  )
}

export default TaskForm