import { useTasks } from '../../hooks/task-hook'

const TaskForm = () => {
  const { current, setCurrent, add } = useTasks()

  return (
    <form className="task-input">
      <input
        type="text"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button onClick={e => {
        e.preventDefault();
        add()
      }}>+</button>
    </form>
  )
}

export default TaskForm