import { useEffect } from 'react'
import { useTasks } from '../../providers/taskProvider';
import Task from '../Task/Task'

const TaskList = () => {
  const { filteredTasks } = useTasks()
  useEffect(() => console.log(filteredTasks), [filteredTasks])

  return (
    <div className="task-list mt-4">
      {filteredTasks.map(task => (
        <Task key={task.id} data={task} />
      ))}
    </div>
  )
}

export default TaskList