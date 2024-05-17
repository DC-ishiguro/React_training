
import React, { useState } from 'react';
// import './App.css';
import TaskInput from './task/task_input';
import TaskList from './task/task_list';
import TaskFilter from './task/task_filter';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TaskInput addTask={addTask} />
      <TaskFilter setFilter={setFilter} />
      <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
}

export default Todo;
