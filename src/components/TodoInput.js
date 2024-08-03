import React, { useState } from 'react';
import '../App.css';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text, description);
      setText('');
      setDescription('');
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        className="task-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add-button" onClick={handleSubmit}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
