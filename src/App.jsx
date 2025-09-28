import './App.css'
import TaskProvider, { useTasks } from "./hooks/task-hook";
import Task from './components/Task/Task';

function App() {
  const { current, setCurrent, tasks, add, toggle, remove } = useTasks()

  return (
    <TaskProvider>
      <div className="App">
        <h2>TO-DO List</h2>
        <div className="task-input">
          <input
            type="text"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            placeholder="Ajouter une tâche..."
          />
          <button onClick={add}>+</button>
        </div>
        <ul className="task-list">
          {
            tasks.map((task, index) => (
              <Task key={index} data={task} onComplete={() => toggle(index)} onDelete={() => remove(index)} />
            ))
          }
        </ul>
      </div>
    </TaskProvider>
  );
}

export default App;
