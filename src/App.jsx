import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskProvider from './providers/task-provider';
import './App.css'

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h2>TO-DO List</h2>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
