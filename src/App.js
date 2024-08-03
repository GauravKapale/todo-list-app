import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import SearchBar from './components/SearchBar';
import tasks from './data/tasks.json'; 
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(tasks);
  const [filteredTodos, setFilteredTodos] = useState(tasks);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, description) => {
    const newTodo = {
      id: Date.now(),
      text,
      description,
      completed: false,
      updatedAt: new Date().toISOString()
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed, updatedAt: new Date().toISOString() }
        : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const updateTodo = (id, text, description) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, text, description, updatedAt: new Date().toISOString() }
        : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredTodos(todos);
    } else {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = todos.filter(todo =>
        todo.text.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredTodos(filtered);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <SearchBar handleSearch={handleSearch} />
      <TodoInput addTodo={addTodo} />
      <ul>
        {filteredTodos.length > 0 ? (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <li>No tasks available</li>
        )}
      </ul>
    </div>
  );
};

export default App;
