import React from 'react';
import TaskItem from './task_item';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleTaskCompletion={toggleTaskCompletion} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
}

export default TaskList;