export default function taskReducer(tasks, action) {
    switch (action.type) {
      // Add a new task
      case 'ADD':
        return [
          ...tasks,
          { 
            id: Date.now(),
            value: action.payload, // payload : text
            isCompleted: false
          }
        ]

      // Complete / or not a task
      case 'TOGGLE':
        return tasks.map(task => 
          task.id === action.payload ? { // payload : id
            ...task, 
            isCompleted : !(task.isCompleted) 
          } : task
        )

      // Delete a task
      case 'REMOVE':
        return tasks.filter(task => task.id !== action.payload) // payload : id

      // Edit / Modify a task
      case 'EDIT':
        return tasks.map(task => 
          task.id === action.payload.id ? { // payload : { id : id, newValue : text }
            ...task, 
            value : action.payload.newValue 
          } : task
        )

      // Clear all completed tasks
      case 'CLEAR_COMPLETED':
        return tasks.filter(task => !task.isCompleted)

      default:
        console.error(`Unknown action type: ${action.type}`);
    }
  }