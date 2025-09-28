import { useTasks } from '../../hooks/task-hook'
import Task from '../Task/Task'

const TaskList = () => {
  const { tasks, toggle, remove } = useTasks()
  
  return (
    <ul className="task-list">
      {
        tasks.map((task, index) => (
          <Task key={index} data={task} onComplete={() => toggle(index)} onDelete={() => remove(index)} />
        ))
      }
    </ul>
  )
}

export default TaskList