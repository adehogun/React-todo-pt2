// TaskItem.js
import React from 'react';

function TaskItem({ task, onToggleTaskCompletion, onDeleteTask }) {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggleTaskCompletion(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
