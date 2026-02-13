import TaskProvider from './providers/taskProvider';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import FilterControls from './components/FilterControls/FilterControls';
import './App.css'

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h2>TO-DO List</h2>
        <TaskForm />
        <TaskList />
        <FilterControls />
      </div>
    </TaskProvider>
  );
}

export default App;
