import { useTasks } from "../../providers/taskProvider"

const FilterControls = () => {
  const { filteredTasks, setFilter } = useTasks()
  
  return (
    <div className="filter-controls">
      <span className="">{`${filteredTasks.length} tasks left`}</span>

      <div className="filters">
        <button
          className="btn btn-filter"
          onClick={() => setFilter('ALL')}
        >All</button>

        <button
          className="btn btn-filter"
          onClick={() => setFilter('ACTIVE')}
        >Active</button>
        
        <button
          className="btn btn-filter"
          onClick={() => setFilter('COMPLETED')}
        >Completed</button>
      </div>

      {/* <button 
        className="btn"
        onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}
      >Clear completed</button> */}
    </div>
  )
}

export default FilterControls