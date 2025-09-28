import './Task.css';

// eslint-disable-next-line react/prop-types
const Task = ({ data = {}, onComplete, onDelete}) => {
    return (
        <li className="Task">
            <label>
                <input
                    type="checkbox"
                    checked={data.completed}
                    onChange={onComplete}
                />
                <p style={{ textDecoration: data.completed ? "line-through" : "none", margin: "0 10px" }}>
                    {data.text}
                </p>
            </label>
            <button onClick={onDelete}>❌</button>
        </li>
    )
}

export default Task;