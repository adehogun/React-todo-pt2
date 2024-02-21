// App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import TaskItem from './components/TaskItem';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to mark a task as completed
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, completed: !task.completed} : task
    ));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <>
      <h1>TaskMaster</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggleTaskCompletion={toggleTaskCompletion} 
        onDeleteTask={deleteTask}/>
    
     </> 

  );
}

export default App;
