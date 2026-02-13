/* eslint-disable react/prop-types */
import { useTasks } from '../../providers/taskProvider';
import './Task.css';

const Task = ({ data : task }) => {
  const { editedTask, setEditedTask, dispatch } = useTasks();

  return (
    <div className="task">
      <label>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => dispatch({type: 'TOGGLE', payload: task.id})}
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
        <button className='btn btn-remove' onClick={() => dispatch({type: 'REMOVE', payload: task.id})}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  )
}

export default Task;