
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTaskCompletion, onDeleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleTaskCompletion={onToggleTaskCompletion} 
          onDeleteTask={onDeleteTask} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
