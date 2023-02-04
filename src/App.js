import React from 'react';
import './style.css';
import Todo from './components/Todo';

export default function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <Todo />
      <Todo />
    </div>
  );
}
