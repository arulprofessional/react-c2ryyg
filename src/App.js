import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <div className="card">
        <h2>Title</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
