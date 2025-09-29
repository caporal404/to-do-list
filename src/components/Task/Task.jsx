/* eslint-disable react/prop-types */
import { useTasks } from '../../hooks/task-hook';
import './Task.css';

const Task = ({ data : task }) => {
  const { setEditedTask, toggle, remove } = useTasks();

  return (
    <div className="task">
      <label>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => toggle(task.id)}
        />
        <p style={{ textDecoration: task.isCompleted ? "line-through" : "none", margin: "0 10px" }}>
          {task.value}
        </p>
      </label>
      <div className="controls">
        <button className='btn btn-edit' onClick={() => setEditedTask(task)}>
          <i className="fas fa-pencil-alt" />
        </button>
        ||
        <button className='btn btn-remove' onClick={() => remove(task.id)}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  )
}

export default Task;