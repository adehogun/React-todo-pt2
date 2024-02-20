import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import AddTaskForm  from './components/AddTaskForm';
import TaskList from './components/TaskList';
import './App.css'

function App() {
  const [tasks, setTasks] = useState(0)

  const addTask =(newTask)=>{
    setTasks([...tasks, newTask]);
  };

  const toggledCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, completed: !task.completed} : task
      ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter( task => task.id !==taskId));
  };


  return (
    <>
      <div className='App'>
        <h1> Taskify</h1>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        <AddTaskForm onAddTask={addTask} />
        <TaskList
         tasks={tasks}
         toggledCompletion={toggledCompletion} 
         onDelete={deleteTask}
       />
      </div>
    </>
  );
}

export default App
