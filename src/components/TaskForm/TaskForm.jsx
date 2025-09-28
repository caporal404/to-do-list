import { useState } from 'react';
import { useTasks } from '../../hooks/task-hook'

const TaskForm = () => {
  const { add } = useTasks()
  const [task, setTask] = useState(""); // Tâche en cours d'écriture


  return (
    <form className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button onClick={e => {
        e.preventDefault();
        add(task)
        setTask("") // Réinitialiser le champ
      }}>+</button>
    </form>
  )
}

export default TaskForm