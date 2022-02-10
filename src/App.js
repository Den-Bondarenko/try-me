import React from 'react';
import TodoList from './todo/todoList';

function App() {

  const todos = [
    {index: 1, completed: false, title: 'Go to GYM'},
    {index: 2, completed: false, title: 'Read book'},
    {index: 3, completed: false, title: 'Create todo app'}
  ];

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
