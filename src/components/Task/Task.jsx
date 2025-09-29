import { useTasks } from '../../hooks/task-hook';
import './Task.css';

// eslint-disable-next-line react/prop-types
const Task = ({ id, value, isCompleted }) => {
  const { toggle, remove } = useTasks();

  return (
    <div className="task">
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggle(id)}
        />
        <p style={{ textDecoration: isCompleted ? "line-through" : "none", margin: "0 10px" }}>
          {value}
        </p>
      </label>
      <button onClick={() => remove(id)}>
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  )
}

export default Task;