import { useEffect } from 'react'
import { useTasks } from '../../providers/task-provider';
import Task from '../Task/Task'

const TaskList = () => {
  const { tasks } = useTasks()
  useEffect(() => console.log(tasks), [tasks])

  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} data={task} />
      ))}
    </div>
  )
}

export default TaskList