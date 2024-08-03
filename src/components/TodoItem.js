import React, { useState } from 'react';
import '../App.css';

const TodoItem = ({ todo, toggleTodo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo(todo.id, newText, newDescription);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="todo-checkbox"
        />
        {isEditing ? (
          <div className="todo-edit-form">
            <input
              type="text"
              className="update-input"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <input
              type="text"
              className="update-input"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
        ) : (
          <>
            <span className="todo-text">{todo.text}</span>
            <span className="todo-description">{todo.description}</span>
          </>
        )}
      </div>
      <div className="todo-item-buttons">
        {isEditing ? (
          <>
            <button className="update-button" onClick={handleUpdate}>
              <i className="fas fa-check"></i>
            </button>
            <button className="cancel-button" onClick={() => setIsEditing(false)}>
              <i className="fas fa-times"></i>
            </button>
          </>
        ) : (
          <>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
              <i className="fas fa-trash"></i>
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
