import React, { useState } from 'react';

const Dashboard = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <h3>Todo List</h3>
        {todos.length === 0 ? (
          <p>No todos added yet</p>
        ) : (
          <ul>
            {todos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
