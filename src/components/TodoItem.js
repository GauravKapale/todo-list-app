// src/components/TodoItem.js
import React, { useState } from 'react';
import '../App.css';

const TodoItem = ({ todo, toggleTodo, updateTodo, deleteTodo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, newText, newDescription);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {editMode ? (
          <>
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
            <button className="update-button" onClick={handleUpdate}>
              <i className="fas fa-check"></i>
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              <i className="fas fa-times"></i>
            </button>
          </>
        ) : (
          <>
            <span className="todo-text">{todo.text}</span>
            <button className="expand-button" onClick={handleExpand}>
              <i className="fas fa-chevron-down"></i>
            </button>
            <button className="edit-button" onClick={handleEdit}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
              <i className="fas fa-trash"></i>
            </button>
          </>
        )}
      </div>
      {isExpanded && (
        <div className="expandable-content">
          <p><strong>Description:</strong> {todo.description}</p>
          <p><strong>Last Updated:</strong> {new Date(todo.updatedAt).toLocaleString()}</p>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
