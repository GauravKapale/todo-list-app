import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleAddClick = () => {
    if (text.trim()) {
      addTodo(text, description);
      setText('');
      setDescription('');
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        placeholder="Enter task title"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="task-input"
      />
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="task-input"
      />
      <button onClick={handleAddClick} className="add-button">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
