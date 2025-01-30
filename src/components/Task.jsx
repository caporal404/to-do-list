import {} from 'react'

// eslint-disable-next-line react/prop-types
const Task = ({ data = {}, onComplete, onDelete}) => {
    return (
        <li style={{ margin: "10px 0", listStyle: "none" }}>
        <input
            type="checkbox"
            checked={data.completed}
            onChange={onComplete}
        />
        <span style={{ textDecoration: data.completed ? "line-through" : "none", margin: "0 10px" }}>
            {data.text}
        </span>
        <button onClick={onDelete}>❌</button>
        </li>
    )
}

export default Task;