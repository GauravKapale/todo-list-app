import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, updateTodo, deleteTodo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleExpand = () => setIsExpanded(!isExpanded);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    if (newText.trim()) {
      updateTodo(todo.id, newText, newDescription);
      setIsEditing(false);
    }
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="todo-item-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="todo-checkbox"
        />
        {isEditing ? (
          <input
            type="text"
            placeholder="Update task"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="update-input"
          />
        ) : (
          <span className="todo-text">{todo.text}</span>
        )}
        <button onClick={handleExpand} className="expand-button">
          <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>
        {isExpanded && (
          <div className="expandable-content">
            <p>{todo.description}</p>
          </div>
        )}
        {isEditing ? (
          <div className="edit-actions">
            <input
              type="text"
              placeholder="Update description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="update-input"
            />
            <button onClick={handleUpdateClick} className="update-button">
              <i className="fas fa-check"></i>
            </button>
            <button onClick={() => setIsEditing(false)} className="cancel-button">
              <i className="fas fa-times"></i>
            </button>
          </div>
        ) : (
          <div className="action-buttons">
            <button onClick={handleEditClick} className="update-button">
              <i className="fas fa-edit"></i>
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
