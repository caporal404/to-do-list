import { useState } from "react";
import './App.css'
import Task from './components/Task/Task';

function App() {
  const [tasks, setTasks] = useState([]); // Liste des tâches
  const [newTask, setNewTask] = useState(""); // Tâche en cours d'écriture

  // Ajouter une nouvelle tâche
  const addTask = () => {
    if (newTask.trim() == "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask(""); // Réinitialiser le champ
  };

  // Marquer une tâche comme complétée
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Supprimer une tâche
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>TO-DO List</h2>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une tâche..."
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul className="task-list">
        {
          tasks.map((task, index) => (
            <Task key={index} data={task} onComplete={() => toggleTask(index)} onDelete={() => deleteTask(index)} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
