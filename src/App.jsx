import TaskProvider from './providers/taskProvider';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import FilterControls from './components/FilterControls/FilterControls';
import iconMoon from '/assets/images/icon-moon.svg'
import './App.css'

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <div className="d-flex align-items-center justify-content-beetwen mb-3">
          <h2 className='w-100 text-left'>TODO</h2>
          <button className="btn-theme">
            <img src={iconMoon} alt="Icon dark mode" className="" />
          </button>
        </div>
        <TaskForm />
        <TaskList />
        <FilterControls />
      </div>
    </TaskProvider>
  );
}

export default App;
