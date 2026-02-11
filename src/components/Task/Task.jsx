/* eslint-disable react/prop-types */
import { useTasks } from '../../providers/task-provider';
import './Task.css';

const Task = ({ data : task }) => {
  const { editedTask, setEditedTask, toggle, remove } = useTasks();

  return (
    <div className="task">
      <label>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => toggle(task.id)}
          disabled={ editedTask == task } // Disabled on Edition Mode
        />
        <p style={{ textDecoration: task.isCompleted ? "line-through" : "none", margin: "0 10px" }}>
          {task.value}
        </p>
      </label>
      <div className="controls">
        <button className='btn btn-edit' 
          onClick={() => setEditedTask(task)} 
          disabled={ editedTask == task || task.isCompleted } // Disabled on Edition Mode
        >
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