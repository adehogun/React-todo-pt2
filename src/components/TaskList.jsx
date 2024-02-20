import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import { TaskItem } from "./TaskItem";

function TaskList ({tasks, toggledCompletion, deleteTask}) {
    
    return (
        <ul>
            {tasks.map(task => (
                <TaskItem
                key={task.id}
                task={tasks}
                toggledCompletion={toggledCompletion}
                deleteTask={deleteTask}
                />   
          ) ) }
        </ul>
    );
}


export default TaskList;
